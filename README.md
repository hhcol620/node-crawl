# node-crawl

1. 数据抓取对象: 视频平台数据采集 (dy, ks, redbook bili
2. 技术栈 node express ajax mysql mongodb 可能使用一些 go

### 逆向思路

1. 通过 web 端查找具有 protobuf 特征的 js, 使用 dy/src/test/script.js 这个脚本将 js 转为 proto
2. 将上面的 proto 转为 js 这个时候可以看到可读的 js
3. debug 一下查找逻辑 使用上面生成的 js
4. 完成逆向

### 抖音的直播弹幕

1. socket 连接
2. 每个直播间连接的 url 里面的参数怎么生成的, 如果通过直播间的连接,可以生成这个 socket 的地址吗

```javascript
var l = i(84465),
  g = i.n(l);
function u(e) {
  const { app_name: t, routeParamsMap: i, pushServer: r, websocket_key: n } = e,
    s = (0, o.__rest)(e, [
      'app_name',
      'routeParamsMap',
      'pushServer',
      'websocket_key'
    ]),
    p = {};
  if (e.routeParamsMap)
    for (const [o, a] of e.routeParamsMap.entries()) p[o] = a;
  const l = Object.assign(
      Object.assign(
        {
          app_name: t,
          version_code: a.ry,
          webcast_sdk_version: a.Jn,
          update_version_code: a.Jn,
          compress: 'gzip'
        },
        p
      ),
      s
    ),
    u = ((e, t) => {
      var i, o, a;
      const r = null != t ? t : [];
      let n = '';
      for (let c = 0; c < r.length; c++) {
        const t = r[c],
          o =
            null !== (i = e[null == t ? void 0 : t.param_name]) && void 0 !== i
              ? i
              : '';
        n += `,${r[c].param_name}=${o}`;
      }
      const s = {
        'X-MS-STUB': g()(n.substring(1))
      };
      let p = {};
      return (
        window.byted_acrawler &&
          (p =
            null ===
              (o =
                null === window || void 0 === window
                  ? void 0
                  : window.byted_acrawler) || void 0 === o
              ? void 0
              : o.frontierSign(s)),
        {
          signature: null !== (a = p['X-Bogus']) && void 0 !== a ? a : ''
        }
      );
    })(l, n);
  return `${r}?${c(Object.assign(Object.assign({}, l), u))}`;
}
```
