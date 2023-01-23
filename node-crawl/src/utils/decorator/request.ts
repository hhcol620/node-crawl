import { ConstructorType } from '../../types/commonType'
import { Router, Request, Response, NextFunction, IRoute } from 'express'

const PATH_METADETA = 'path'
const METHOD_METADETA = 'method'
const CALLBACKS_METADETA = 'callbacks'

export const Controller = (path: string): ClassDecorator => {
  return (target: Function) => {
    Reflect.defineMetadata(PATH_METADETA, path, target)
  }
}

function createdReqMethod(method: string) {
  return (path: string): MethodDecorator => {
    return (target: any, key: string | symbol, descriptor: any) => {
      Reflect.defineMetadata(PATH_METADETA, path, target, key)
      Reflect.defineMetadata(METHOD_METADETA, method, target, key)
    }
  }
}

type ReqMethodType = 'post' | 'get' | 'put' | 'delete'
interface ConstructorReturnType {
  [name: string]: any
}
export const Post = createdReqMethod('post')
export const Get = createdReqMethod('get')
export const Put = createdReqMethod('put')
export const Delete = createdReqMethod('delete')

export function Use(methods: Function[]) {
  return (target: any, key: string | symbol, descriptor: any) => {
    Reflect.defineMetadata(CALLBACKS_METADETA, methods, target, key)
  }
}

/**
 * 实现将类转为route + controller
 */

export const classToRouter = (
  ConstructorFn: ConstructorType<ConstructorReturnType>
): Router => {
  const router: Router = Router()
  const basePath: string = Reflect.getMetadata(PATH_METADETA, ConstructorFn)
  const ins = new ConstructorFn()
  const insPrototype = Object.getPrototypeOf(ins)
  // console.log('ins====', Reflect.ownKeys(insPrototype))

  Array.from(Reflect.ownKeys(insPrototype)).forEach((v) => {
    if (typeof v === 'string' && v !== 'constructor') {
      const fn = (req: Request, res: Response, next: NextFunction): void => {
        const result = (ins[v] as Function).apply(ins, [req, res])
        if (result instanceof Promise) {
          result
            .then((val) => {
              // 这里表示数据处理成功，可以返回数据了
            })
            .catch((err) => {
              next(err)
            })
        } else {
          // 同步任务处理成功
        }
      }
      const vpath: string = Reflect.getMetadata(PATH_METADETA, ins, v)
      const vmethod: string = Reflect.getMetadata(METHOD_METADETA, ins, v)
      const vcallbacks = Reflect.getMetadata(CALLBACKS_METADETA, ins, v)
      // console.log('vmethod', router[vmethod as ReqMethodType])
      // console.log('basePath + vpath', basePath + vpath)
      // console.log('vcallbacks', vcallbacks)
      if (vcallbacks !== undefined && vcallbacks.length > 0) {
        router[vmethod as ReqMethodType](basePath + vpath, vcallbacks, fn)
      } else {
        router[vmethod as ReqMethodType](basePath + vpath, fn)
      }
    }
  })

  return router
}
