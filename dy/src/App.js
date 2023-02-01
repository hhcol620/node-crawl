/* eslint-disable */

import './App.css';
import JE from './JE.js';
import Msg from './msg';

JE();
const proto = window.proto;
const msg = new Msg({ modules: proto });

//
Object.keys(proto).forEach((item) => {
  msg.on(item, function (e) {
    var t,
      r,
      o = e.toObject(),
      i = {
        method:
          null == o || null === (t = o.common) || void 0 === t
            ? void 0
            : t.method,
        msgId:
          null == o || null === (r = o.common) || void 0 === r
            ? void 0
            : r.msgId,
        payload: o
      };

    console.log(i);
  });
});

function App() {
  var ws = new WebSocket(
    'wss://webcast3-ws-web-lq.douyin.com/webcast/im/push/v2/?app_name=douyin_web&version_code=180800&webcast_sdk_version=1.3.0&update_version_code=1.3.0&compress=gzip&internal_ext=internal_src:dim|wss_push_room_id:7194980672442878781|wss_push_did:7193980101242570244|dim_log_id:2023020110130134838B6D07D59E88E4A4|fetch_time:1675217581552|seq:1|wss_info:0-1675217581552-0-0|wrds_kvs:WebcastRoomRankMessage-1675217480945553546_WebcastRoomStatsMessage-1675217576914392854&cursor=t-1675217581552_r-1_d-1_u-1_h-1&host=https://live.douyin.com&aid=6383&live_id=1&did_rule=3&debug=false&endpoint=live_pc&support_wrds=1&im_path=/webcast/im/fetch/&user_unique_id=7193980101242570244&device_platform=web&cookie_enabled=true&screen_width=1920&screen_height=1200&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Mozilla&browser_version=5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_15_7)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/109.0.0.0%20Safari/537.36&browser_online=true&tz_name=Asia/Shanghai&identity=audience&room_id=7194980672442878781&heartbeatDuration=0&signature=Wgr7sRNEkxAjEPvC'
  );
  ws.binaryType = 'arraybuffer';

  ws.onopen = function (evt) {};

  ws.onmessage = function (evt) {
    // console.log('Received Message: ', evt, evt.data);

    const i = proto.pushproto_PushFrame.deserializeBinary(evt.data),
      o = proto.webcast_im_Response.deserializeBinary(
        (function (e) {
          for (const t of Object.values(e.getHeadersList())) {
            if ('compress_type' === t.getKey() && 'gzip' === t.getValue())
              return !0;
          }
          return !1;
        })(i)
          ? window.n.ec()(i.getPayload())
          : i.getPayload_asU8()
      );
    if (o.getNeedack()) {
      let e = o.getInternalext(),
        t = o.getCursor();
      (i.getHeadersList() || []).forEach((i) => {
        'im-internal_ext' === (null == i ? void 0 : i.getKey()) &&
          (e = null == i ? void 0 : i.getValue()),
          'im-cursor' === (null == i ? void 0 : i.getKey()) &&
            (t = null == i ? void 0 : i.getValue());
      });

      this.internalExt = e;
      this.cursor = t;
      const a = new proto.pushproto_PushFrame();
      a.setPayloadtype('ack');
      a.setPayload(
        (function (e) {
          const t = [];
          for (const i of e) {
            const e = i.charCodeAt(0);
            e < 128
              ? t.push(e)
              : e < 2048
              ? (t.push(192 + (e >> 6)), t.push(128 + (63 & e)))
              : e < 65536 &&
                (t.push(224 + (e >> 12)),
                t.push(128 + ((e >> 6) & 63)),
                t.push(128 + (63 & e)));
          }
          return Uint8Array.from(t);
        })(e)
      );
      a.setLogid(i.getLogid());
      ws.send(a.serializeBinary());
    }
    if ('msg' === i.getPayloadtype()) {
      msg.emit(o);
    }
    // return t(new Error('close by payloadtype'));
  };

  ws.onclose = function (evt) {
    console.log('Connection closed.');
  };
  return '';
}

export default App;
