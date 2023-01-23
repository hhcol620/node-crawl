/**
 * 请求延时执行
 * 传入请求函数，需要传入请求函数的参数数组，延时时间
 */
export const requestDelay = (
  fn: (...params: any[]) => Promise<any>,
  params: any[],
  wait: number = 300
): Promise<any> => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      fn(...params)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          throw err
        })
    }, wait)
  }).catch(() => {})
}
