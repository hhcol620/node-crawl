import { Response } from 'express'

export default function response(
  res: Response,
  data: any = null,
  code: number = 200,
  message: string = 'success'
): Response {
  return res.status(code).json({ code, message, data })
}
