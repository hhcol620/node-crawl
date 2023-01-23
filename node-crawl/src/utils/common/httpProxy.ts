import { Agent } from 'http'
import tunnel from 'tunnel'

// ipidea
// const httpsAgent = tunnel.httpsOverHttp({
//   proxy: {
//     host: 'as.ipidea.io',
//     port: 2333,
//     proxyAuth: 'hhcol_98-zone-custom-region-hk:hh981109'
//   }
// })

// https://http.py.cn/api/api_child/
const httpsAgent = tunnel.httpsOverHttp({
  proxy: {
    host: '140.249.73.234',
    port: 15025,
    proxyAuth: '452834:452834'
  }
})

export interface HttpProxyType {
  proxy: false
  httpsAgent: Agent
}

const HttpProxyConfig: HttpProxyType = {
  proxy: false,
  httpsAgent
}
export default HttpProxyConfig
