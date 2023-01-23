export type ConstructorType<T> = new (...args: any[]) => T

export interface ReqHeadersType {
  Cookie: string
  Host: string
  'Content-Type': string
  Referer: string
  Accept: string
  Pragma: string
  Connection: string
  'Request-Source': string
  'User-Agent': string
  'Accept-Encoding': string
  'Accept-Language': string
  'Cache-Control': string
  'sec-ch-ua': string
  'sec-ch-ua-mobile': string
  'sec-ch-ua-platform': string
  'Sec-Fetch-Dest': string
  'Sec-Fetch-Mode': string
  'Sec-Fetch-Site': string
  [name: string]: string
}
