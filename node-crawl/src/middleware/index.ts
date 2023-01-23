import { Request, Response, NextFunction } from 'express'
import Utils from 'src/utils'
import { JwtTokenPayloadType } from 'src/types/createJwtToken'
import { OrmDataSource } from 'src/database/orm-data-source'
import { User } from 'src/database/model/User'

const UserReposity = OrmDataSource.getRepository(User)
/**
 * @file-desc: 中间件
 * @author: huanghe
 */

const validateReqHeaderToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email } = Utils.getUserInfoByToken(
      (req.get('Authorization') as string).split(' ')[1]
    )
    if (email !== null) {
      const user = await UserReposity.findOneBy({
        email
      })
      if (user !== null) {
        // 验证成功
        return next()
      }
      return validateReqHeaderTokenFail(req, res)
    }
    return validateReqHeaderTokenFail(req, res)
  } catch (error) {
    return validateReqHeaderTokenFail(req, res)
  }
}

const validateReqHeaderTokenFail = (req: Request, res: Response): void => {
  Utils.response(res, null, 404, '用户身份验证失败')
}

export { validateReqHeaderToken }
