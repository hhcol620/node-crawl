import jwt from 'jsonwebtoken'
import { JwtTokenPayloadType } from 'src/types/createJwtToken'

export default function createJwtToken(payload: JwtTokenPayloadType): string {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRATION
  })
}
