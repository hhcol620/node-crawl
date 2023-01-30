const { io } = require('socket.io-client');
const ws = io(
  'wss://webcast3-ws-web-lf.douyin.com/webcast/im/push/v2/?app_name=douyin_web&version_code=180800&webcast_sdk_version=1.3.0&update_version_code=1.3.0&compress=gzip&internal_ext=internal_src:dim|wss_push_room_id:7194327983673445157|wss_push_did:7193980101242570244|dim_log_id:2023013015031282D107B2869B8803FE9B|fetch_time:1675062192857|seq:1|wss_info:0-1675062192857-0-0|wrds_kvs:WebcastRoomRankMessage-1675062114523827902_WebcastRoomStatsMessage-1675062192478337251&cursor=h-1_t-1675062192857_r-1_d-1_u-1&host=https://live.douyin.com&aid=6383&live_id=1&did_rule=3&debug=false&endpoint=live_pc&support_wrds=1&im_path=/webcast/im/fetch/&user_unique_id=7193980101242570244&device_platform=web&cookie_enabled=true&screen_width=1920&screen_height=1200&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Mozilla&browser_version=5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_15_7)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/109.0.0.0%20Safari/537.36&browser_online=true&tz_name=Asia/Shanghai&identity=audience&room_id=7194327983673445157&heartbeatDuration=0&signature=W41DbLdvOUPw8QrP'
);

// ws.emit('message', 5, '6', { 7: Uint8Array.from([8]) });

ws.on('connection', (socket) => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

// receive a message from the server
ws.on('message', (...args) => {
  console.log(args);
});
