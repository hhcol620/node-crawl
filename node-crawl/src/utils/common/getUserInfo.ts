import { JwtTokenPayloadType } from 'src/types/createJwtToken'
import jwt from 'jsonwebtoken'

function getUserInfoByToken(token: string): JwtTokenPayloadType {
  return jwt.verify(
    token,
    process.env.JWT_SECRET as string
  ) as JwtTokenPayloadType
}

export default getUserInfoByToken
