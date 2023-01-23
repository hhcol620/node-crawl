import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import 'reflect-metadata'
import chalk from 'chalk'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import fs from 'fs'
import path from 'path'
import moment from 'moment'
import createDatabaseConnection from './database/connection'
import routes from './routes'

dotenv.config()

const initializeExpress = (): void => {
  const app: Express = express()

  // cors
  app.use(cors())
  // set various HTTP headers
  app.use(
    helmet.contentSecurityPolicy({
      useDefaults: true,
      directives: {
        'img-src': ["'self'", 'https: data:']
      }
    })
  )
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  app.use(bodyParser.json())
  app.use(express.static('static'))

  app.get(/^\/web\/.*/, function (req: Request, res: Response) {
    const url = req.url
    const fileName = url.replace(/(.*\/)*([^.]+.*)/gi, '$2')
    if (url.match(/.js/) !== null) {
      res.header('Content-Type', 'application/javascript; charset=utf-8')
      res.sendFile(path.resolve(__dirname, `./static/web/assets/${fileName}`))
    } else if (url.match(/.css/) !== null) {
      res.header('Content-Type', 'text/css; charset=utf-8')
      res.sendFile(path.resolve(__dirname, `./static/web/assets/${fileName}`))
    } else if (url.match(/.favicon.ico/) !== null) {
      // favicon.ico
      res.sendFile(path.resolve(__dirname, './static/web/favicon.ico'))
    } else {
      res.header('Content-Type', 'text/html; charset=utf-8')
      res.sendFile(path.resolve(__dirname, './static/web/index.html'))
    }
  })

  // output log
  // try {
  //   const errorLogStream = fs.createWriteStream(
  //     path.join(
  //       __dirname,
  //       `./logs/errorLogs/${moment().format('YYYYMMDD')}.log`
  //     ),
  //     { flags: 'a' }
  //   )
  //   const allLogStream = fs.createWriteStream(
  //     path.join(__dirname, `./logs/allLogs/${moment().format('YYYYMMDD')}.log`),
  //     { flags: 'a' }
  //   )
  //   app.use(morgan('combined', { stream: allLogStream }))
  //   app.use(
  //     morgan('combined', {
  //       skip: function (req, res) {
  //         return res.statusCode < 400
  //       },
  //       stream: errorLogStream
  //     })
  //   )
  // } catch (error) {
  //   throw new Error(error as string)
  // }

  // use routes
  app.use(routes)

  const port = process.env.PORT
  app.listen(port, () => {
    console.log(
      chalk.green(`⚡️[server]: Server is running at http://localhost:${port}`)
    )
  })
}

const establishDatabaseConnection = async (): Promise<void> => {
  try {
    await createDatabaseConnection()
    console.log('连接sql成功...')
  } catch (err) {
    throw new Error(err as string)
  }
}

const initializeApp = async (): Promise<void> => {
  // TODO: 连接数据库
  try {
    await establishDatabaseConnection()
  } catch (err) {
    throw new Error(err as string)
  }
  initializeExpress()
}

// initializeApp().catch((err) => {
//   throw new Error(err as string)
// })
