export interface ObjType {
  [name: string]: any
}
export const cookieMap: ObjType = {}

const blackList = ['', 'Path', 'Domain', 'Expires']
/**
 * 将cookieMap处理为cookie字符串
 */
export const cookieMapToStr = (cookieMap: ObjType): string => {
  const keys = Object.keys(cookieMap)
  return keys
    .map((item: string) => `${item}=${cookieMap[item]};`)
    .join(' ')
    .replace(/;+$/, ';')
}

/**
 * 将cookie字符串处理为cookieMap
 */
export const addCookieStrToMap = (cookie: string, cookieMap: ObjType): void => {
  // 先将cookie转为map,再与cookieMap对浅合并
  cookie.split('; ').forEach((item) => {
    const [key, value] = item.split('=')
    if (!blackList.includes(key) && value !== undefined) {
      cookieMap[key] = value
    }
  })
}

export const setCookie = (cookie: string | string[], headers: any): void => {
  // 将已有的cookie 转为map
  addCookieStrToMap(headers.Cookie, cookieMap)
  if (Array.isArray(cookie) && cookie.length > 0) {
    cookie.forEach((item) => {
      addCookieStrToMap(item.replace('HttpOnly', ''), cookieMap)
    })
  } else if (typeof cookie === 'string') {
    addCookieStrToMap(cookie.replace('HttpOnly', ''), cookieMap)
  }

  const cookieStr = cookieMapToStr(cookieMap)
  headers.Cookie = cookieStr
}
