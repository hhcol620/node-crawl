const WebSocket = require('ws');

const JE = require('./JE.js');
const Msg = require('./msg');
const proto = require('./52_pb.js');

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

const ws = new WebSocket(
  'wss://webcast3-ws-web-lq.douyin.com/webcast/im/push/v2/?app_name=douyin_web&version_code=180800&webcast_sdk_version=1.3.0&update_version_code=1.3.0&compress=gzip&internal_ext=internal_src:dim|wss_push_room_id:7197235992685185851|wss_push_did:7140459943756301854|dim_log_id:202212281349305A73D850664DB518C21B|fetch_time:1672206570185|seq:1|wss_info:0-1672206570185-0-0|wrds_kvs:WebcastRoomStatsMessage-1672206566915058992_InputPanelComponentSyncData-1672187049066887013_WebcastRoomRankMessage-1672206560973484605&cursor=t-1672206570185_r-1_d-1_u-1_h-1&host=https://live.douyin.com&aid=6383&live_id=1&im_path=/webcast/im/fetch/&device_platform=web&room_id=7197235992685185851',
  {
    followRedirects: true,
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
      cookie:
        'ttwid=1%7Cbq03FXyza-pBSww3ge-jAUz0x6FRTugqf35Z3UqbB6c%7C1675739771%7Cabf62839a71ca83d4008cf747daa785d8133866c772e3c34822ce95fb3c78e67'
    }
  }
);

ws.on('error', function (err) {
  console.log(err);
});

ws.on('open', function open() {
  console.log('connected');
});

ws.on('close', function close() {
  console.log('disconnected');
});

ws.on('message', function message(data) {
  const i = proto.pushproto_PushFrame.deserializeBinary(data),
    o = proto.webcast_im_Response.deserializeBinary(
      (function (e) {
        for (const t of Object.values(e.getHeadersList())) {
          if ('compress_type' === t.getKey() && 'gzip' === t.getValue())
            return !0;
        }
        return !1;
      })(i)
        ? JE()()(i.getPayload())
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
});
