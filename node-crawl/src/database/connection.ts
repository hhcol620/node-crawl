/**
 * @file-desc: 连接数据库
 * @author: huanghe
 */

import { OrmDataSource } from './orm-data-source'
const createDatabaseConnection = async (): Promise<void> => {
  try {
    await OrmDataSource.initialize()
  } catch (err) {
    throw new Error(err as string)
  }
}

export default createDatabaseConnection
