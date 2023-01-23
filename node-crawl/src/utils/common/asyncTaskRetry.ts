import chalk from 'chalk'

/**
 * 异步任务重试
 */

export const asyncTaskRetry = (
  asyncHandle: () => Promise<any>,
  expectCallback: (res: any) => boolean,
  wait: number,
  count: number,
  relayCount: number = 0
): Promise<any> => {
  if (count > relayCount) {
    relayCount++
    relayCount > 1 &&
      console.log(chalk.green(`正在重试异步任务第${relayCount}次....`))
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        clearTimeout(timer)
        resolve('')
      }, wait)
    }).then(() => {
      return asyncHandle().then((res) => {
        if (expectCallback(res)) {
          return res
        } else {
          return asyncTaskRetry(
            asyncHandle,
            expectCallback,
            wait,
            count,
            relayCount
          ).catch((err) => {
            throw new Error(err)
          })
        }
      })
    })
  } else {
    return Promise.reject(new Error('异步任务重试次数剩余0，任务失败'))
  }
}
