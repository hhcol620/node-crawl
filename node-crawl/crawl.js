const net = require('net')
const socket = net.connect('wss://webcast3-ws-web-lf.douyin.com/webcast/im/push/v2/?app_name=douyin_web&version_code=180800&webcast_sdk_version=1.3.0&update_version_code=1.3.0&compress=gzip&internal_ext=internal_src:dim|wss_push_room_id:7191854288799320889|wss_push_did:7190289576300496399|dim_log_id:20230123232550B1567A7AA2CC51D9C7F7|fetch_time:1674487550392|seq:1|wss_info:0-1674487550392-0-0|wrds_kvs:WebcastRoomStatsMessage-1674487548735982553_WebcastRoomRankMessage-1674487440768894235&cursor=r-1_d-1_u-1_h-1_t-1674487550392&host=https://live.douyin.com&aid=6383&live_id=1&did_rule=3&debug=false&endpoint=live_pc&support_wrds=1&im_path=/webcast/im/fetch/&user_unique_id=7190289576300496399&device_platform=web&cookie_enabled=true&screen_width=3840&screen_height=2160&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Mozilla&browser_version=5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_15_7)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/109.0.0.0%20Safari/537.36&browser_online=false&tz_name=Asia/Shanghai&identity=audience&room_id=7191854288799320889&heartbeatDuration=0&signature=WMZyLhh2JFuIpBVP')

socket.on('data', (data) => {
  console.log(data.toString())
})
socket.on('close', () => {
  console.log('-> disconnected by server')
})
