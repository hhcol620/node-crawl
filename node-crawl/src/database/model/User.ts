import { Entity, Column, Generated, PrimaryColumn } from 'typeorm'
import bcrypt from 'bcrypt'

@Entity()
export class User {
  @Generated('uuid')
  @PrimaryColumn()
  userId: string

  @Column({
    default: ''
  })
  nikeName: string

  @Column({
    unique: true
  })
  email: string

  @Column()
  password: string

  @Column({
    default: ''
  })
  address: string

  @Column({
    default: null
  })
  phone: number

  bcryptPassword(password: string): Promise<string> {
    return new Promise((resolve) => {
      bcrypt.genSalt(
        parseInt(process.env.BCRYPT_SALT as string),
        (err, salt) => {
          if (err instanceof Error) return
          bcrypt.hash(password, salt, (err, hash) => {
            if (err instanceof Error) return
            this.password = hash
            resolve(hash)
          })
        }
      )
    })
  }

  validatePassword(password: string): Promise<Boolean> {
    return bcrypt.compare(password, this.password)
  }
}

export interface UserType {
  userId?: string
  nikeName?: string
  email?: string
  password?: string
  address?: number
  phone?: string
}
