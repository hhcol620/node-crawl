import nodemailer from 'nodemailer'
/**
 * 使用163邮箱发送邮件
 */

interface sendEmailParamsType {
  to: string
  subject?: string
  cc?: string
  bcc?: string
  text?: string
  html?: string
}

export const sendEmail = async (params: sendEmailParamsType): Promise<void> => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.163.com', // 第三方邮箱的主机地址
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'h13299630387@163.com', // 发送方邮箱的账号
      pass: 'WEWSYSXRAFRKSXBV' // 邮箱授权密码
    }
  })

  // 定义transport对象并发送邮件
  const info = await transporter.sendMail({
    from: '<h13299630387@163.com>', // 发送方邮箱的账号
    to: params.to, // 邮箱接受者的账号
    subject: params.subject ?? '114监控挂号', // Subject line
    cc: params.cc ?? 'h13299630387@163.com',
    bcc: params.bcc,
    text: params.text, // 文本内容
    html: params.html
  })
}
