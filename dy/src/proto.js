/* eslint-disable */

import jsbp from 'google-protobuf';

export default (t = {}) => {
  var o = jsbp,
    a = o,
    r = function () {
      return this
        ? this
        : 'undefined' != typeof window
        ? window
        : void 0 !== r
        ? r
        : 'undefined' != typeof self
        ? self
        : Function('return this')();
    }.call(null);
  a.exportSymbol('proto.pushproto.PushFrame', null, r),
    a.exportSymbol('proto.pushproto.PushHeader', null, r),
    (proto.pushproto.PushHeader = function (e) {
      o.Message.initialize(this, e, 0, -1, null, null);
    }),
    a.inherits(proto.pushproto.PushHeader, o.Message),
    a.DEBUG &&
      !COMPILED &&
      (proto.pushproto.PushHeader.displayName = 'proto.pushproto.PushHeader'),
    (proto.pushproto.PushFrame = function (e) {
      o.Message.initialize(
        this,
        e,
        0,
        -1,
        proto.pushproto.PushFrame.repeatedFields_,
        null
      );
    }),
    a.inherits(proto.pushproto.PushFrame, o.Message),
    a.DEBUG &&
      !COMPILED &&
      (proto.pushproto.PushFrame.displayName = 'proto.pushproto.PushFrame'),
    o.Message.GENERATE_TO_OBJECT &&
      ((proto.pushproto.PushHeader.prototype.toObject = function (e) {
        return proto.pushproto.PushHeader.toObject(e, this);
      }),
      (proto.pushproto.PushHeader.toObject = function (e, t) {
        var i = {
          key: o.Message.getFieldWithDefault(t, 1, ''),
          value: o.Message.getFieldWithDefault(t, 2, '')
        };
        return e && (i.$jspbMessageInstance = t), i;
      })),
    (proto.pushproto.PushHeader.deserializeBinary = function (e) {
      var t = new o.BinaryReader(e),
        i = new proto.pushproto.PushHeader();
      console.log(t, i);
      return proto.pushproto.PushHeader.deserializeBinaryFromReader(i, t);
    }),
    (proto.pushproto.PushHeader.deserializeBinaryFromReader = function (e, t) {
      for (; t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var i = t.readString();
            e.setKey(i);
            break;
          case 2:
            i = t.readString();
            e.setValue(i);
            break;
          default:
            t.skipField();
        }
      }
      return e;
    }),
    (proto.pushproto.PushHeader.prototype.serializeBinary = function () {
      var e = new o.BinaryWriter();
      return (
        proto.pushproto.PushHeader.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
      );
    }),
    (proto.pushproto.PushHeader.serializeBinaryToWriter = function (e, t) {
      var i = void 0;
      (i = e.getKey()).length > 0 && t.writeString(1, i),
        (i = e.getValue()).length > 0 && t.writeString(2, i);
    }),
    (proto.pushproto.PushHeader.prototype.getKey = function () {
      return o.Message.getFieldWithDefault(this, 1, '');
    }),
    (proto.pushproto.PushHeader.prototype.setKey = function (e) {
      return o.Message.setProto3StringField(this, 1, e);
    }),
    (proto.pushproto.PushHeader.prototype.getValue = function () {
      return o.Message.getFieldWithDefault(this, 2, '');
    }),
    (proto.pushproto.PushHeader.prototype.setValue = function (e) {
      return o.Message.setProto3StringField(this, 2, e);
    }),
    (proto.pushproto.PushFrame.repeatedFields_ = [5]),
    o.Message.GENERATE_TO_OBJECT &&
      ((proto.pushproto.PushFrame.prototype.toObject = function (e) {
        return proto.pushproto.PushFrame.toObject(e, this);
      }),
      (proto.pushproto.PushFrame.toObject = function (e, t) {
        var i = {
          seqid: o.Message.getFieldWithDefault(t, 1, '0'),
          logid: o.Message.getFieldWithDefault(t, 2, '0'),
          service: o.Message.getFieldWithDefault(t, 3, '0'),
          method: o.Message.getFieldWithDefault(t, 4, '0'),
          headersList: o.Message.toObjectList(
            t.getHeadersList(),
            proto.pushproto.PushHeader.toObject,
            e
          ),
          payloadEncoding: o.Message.getFieldWithDefault(t, 6, ''),
          payloadType: o.Message.getFieldWithDefault(t, 7, ''),
          payload: t.getPayload_asB64()
        };
        return e && (i.$jspbMessageInstance = t), i;
      })),
    (proto.pushproto.PushFrame.deserializeBinary = function (e) {
      var t = new o.BinaryReader(e),
        i = new proto.pushproto.PushFrame();
      // console.log(proto.pushproto.PushFrame.deserializeBinaryFromReader(i, t));
      return proto.pushproto.PushFrame.deserializeBinaryFromReader(i, t);
    }),
    (proto.pushproto.PushFrame.deserializeBinaryFromReader = function (e, t) {
      for (; t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var i = t.readUint64String();
            e.setSeqid(i);
            break;
          case 2:
            i = t.readUint64String();
            e.setLogid(i);
            break;
          case 3:
            i = t.readUint64String();
            e.setService(i);
            break;
          case 4:
            i = t.readUint64String();
            e.setMethod(i);
            break;
          case 5:
            i = new proto.pushproto.PushHeader();
            t.readMessage(
              i,
              proto.pushproto.PushHeader.deserializeBinaryFromReader
            ),
              e.addHeaders(i);
            break;
          case 6:
            i = t.readString();
            e.setPayloadEncoding(i);
            break;
          case 7:
            i = t.readString();
            e.setPayloadType(i);
            break;
          case 8:
            i = t.readBytes();
            e.setPayload(i);
            break;
          default:
            t.skipField();
        }
      }
      return e;
    }),
    (proto.pushproto.PushFrame.prototype.serializeBinary = function () {
      var e = new o.BinaryWriter();
      return (
        proto.pushproto.PushFrame.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
      );
    }),
    (proto.pushproto.PushFrame.serializeBinaryToWriter = function (e, t) {
      var i = void 0;
      (i = e.getSeqid()),
        0 !== parseInt(i, 10) && t.writeUint64String(1, i),
        (i = e.getLogid()),
        0 !== parseInt(i, 10) && t.writeUint64String(2, i),
        (i = e.getService()),
        0 !== parseInt(i, 10) && t.writeUint64String(3, i),
        (i = e.getMethod()),
        0 !== parseInt(i, 10) && t.writeUint64String(4, i),
        (i = e.getHeadersList()).length > 0 &&
          t.writeRepeatedMessage(
            5,
            i,
            proto.pushproto.PushHeader.serializeBinaryToWriter
          ),
        (i = e.getPayloadEncoding()).length > 0 && t.writeString(6, i),
        (i = e.getPayloadType()).length > 0 && t.writeString(7, i),
        (i = e.getPayload_asU8()).length > 0 && t.writeBytes(8, i);
    }),
    (proto.pushproto.PushFrame.prototype.getSeqid = function () {
      return o.Message.getFieldWithDefault(this, 1, '0');
    }),
    (proto.pushproto.PushFrame.prototype.setSeqid = function (e) {
      return o.Message.setProto3StringIntField(this, 1, e);
    }),
    (proto.pushproto.PushFrame.prototype.getLogid = function () {
      return o.Message.getFieldWithDefault(this, 2, '0');
    }),
    (proto.pushproto.PushFrame.prototype.setLogid = function (e) {
      return o.Message.setProto3StringIntField(this, 2, e);
    }),
    (proto.pushproto.PushFrame.prototype.getService = function () {
      return o.Message.getFieldWithDefault(this, 3, '0');
    }),
    (proto.pushproto.PushFrame.prototype.setService = function (e) {
      return o.Message.setProto3StringIntField(this, 3, e);
    }),
    (proto.pushproto.PushFrame.prototype.getMethod = function () {
      return o.Message.getFieldWithDefault(this, 4, '0');
    }),
    (proto.pushproto.PushFrame.prototype.setMethod = function (e) {
      return o.Message.setProto3StringIntField(this, 4, e);
    }),
    (proto.pushproto.PushFrame.prototype.getHeadersList = function () {
      return o.Message.getRepeatedWrapperField(
        this,
        proto.pushproto.PushHeader,
        5
      );
    }),
    (proto.pushproto.PushFrame.prototype.setHeadersList = function (e) {
      return o.Message.setRepeatedWrapperField(this, 5, e);
    }),
    (proto.pushproto.PushFrame.prototype.addHeaders = function (e, t) {
      return o.Message.addToRepeatedWrapperField(
        this,
        5,
        e,
        proto.pushproto.PushHeader,
        t
      );
    }),
    (proto.pushproto.PushFrame.prototype.clearHeadersList = function () {
      return this.setHeadersList([]);
    }),
    (proto.pushproto.PushFrame.prototype.getPayloadEncoding = function () {
      return o.Message.getFieldWithDefault(this, 6, '');
    }),
    (proto.pushproto.PushFrame.prototype.setPayloadEncoding = function (e) {
      return o.Message.setProto3StringField(this, 6, e);
    }),
    (proto.pushproto.PushFrame.prototype.getPayloadType = function () {
      return o.Message.getFieldWithDefault(this, 7, '');
    }),
    (proto.pushproto.PushFrame.prototype.setPayloadType = function (e) {
      return o.Message.setProto3StringField(this, 7, e);
    }),
    (proto.pushproto.PushFrame.prototype.getPayload = function () {
      return o.Message.getFieldWithDefault(this, 8, '');
    }),
    (proto.pushproto.PushFrame.prototype.getPayload_asB64 = function () {
      return o.Message.bytesAsB64(this.getPayload());
    }),
    (proto.pushproto.PushFrame.prototype.getPayload_asU8 = function () {
      return o.Message.bytesAsU8(this.getPayload());
    }),
    (proto.pushproto.PushFrame.prototype.setPayload = function (e) {
      return o.Message.setProto3BytesField(this, 8, e);
    }),
    a.object.extend(t, proto.pushproto);

  a.exportSymbol('proto.webcast.im.Message', null, r),
    a.exportSymbol('proto.webcast.im.Response', null, r),
    (proto.webcast.im.Response = function (e) {
      o.Message.initialize(
        this,
        e,
        0,
        -1,
        proto.webcast.im.Response.repeatedFields_,
        null
      );
    }),
    a.inherits(proto.webcast.im.Response, o.Message),
    a.DEBUG &&
      !COMPILED &&
      (proto.webcast.im.Response.displayName = 'proto.webcast.im.Response'),
    (proto.webcast.im.Message = function (e) {
      o.Message.initialize(this, e, 0, -1, null, null);
    }),
    a.inherits(proto.webcast.im.Message, o.Message),
    a.DEBUG &&
      !COMPILED &&
      (proto.webcast.im.Message.displayName = 'proto.webcast.im.Message'),
    (proto.webcast.im.Response.repeatedFields_ = [1]),
    o.Message.GENERATE_TO_OBJECT &&
      ((proto.webcast.im.Response.prototype.toObject = function (e) {
        return proto.webcast.im.Response.toObject(e, this);
      }),
      (proto.webcast.im.Response.toObject = function (e, t) {
        var i,
          a = {
            messagesList: o.Message.toObjectList(
              t.getMessagesList(),
              proto.webcast.im.Message.toObject,
              e
            ),
            cursor: o.Message.getFieldWithDefault(t, 2, ''),
            fetchInterval: o.Message.getFieldWithDefault(t, 3, '0'),
            now: o.Message.getFieldWithDefault(t, 4, '0'),
            internalExt: o.Message.getFieldWithDefault(t, 5, ''),
            fetchType: o.Message.getFieldWithDefault(t, 6, 0),
            routeParamsMap: (i = t.getRouteParamsMap())
              ? i.toObject(e, void 0)
              : [],
            heartbeatDuration: o.Message.getFieldWithDefault(t, 8, '0'),
            needAck: o.Message.getBooleanFieldWithDefault(t, 9, !1),
            pushServer: o.Message.getFieldWithDefault(t, 10, ''),
            liveCursor: o.Message.getFieldWithDefault(t, 11, ''),
            historyNoMore: o.Message.getBooleanFieldWithDefault(t, 12, !1)
          };
        return e && (a.$jspbMessageInstance = t), a;
      })),
    (proto.webcast.im.Response.deserializeBinary = function (e) {
      var t = new o.BinaryReader(e),
        i = new proto.webcast.im.Response();
      return proto.webcast.im.Response.deserializeBinaryFromReader(i, t);
    }),
    (proto.webcast.im.Response.deserializeBinaryFromReader = function (e, t) {
      for (; t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var i = new proto.webcast.im.Message();
            t.readMessage(
              i,
              proto.webcast.im.Message.deserializeBinaryFromReader
            ),
              e.addMessages(i);
            break;
          case 2:
            i = t.readString();
            e.setCursor(i);
            break;
          case 3:
            i = t.readInt64String();
            e.setFetchInterval(i);
            break;
          case 4:
            i = t.readInt64String();
            e.setNow(i);
            break;
          case 5:
            i = t.readString();
            e.setInternalExt(i);
            break;
          case 6:
            i = t.readInt32();
            e.setFetchType(i);
            break;
          case 7:
            i = e.getRouteParamsMap();
            t.readMessage(i, function (e, t) {
              o.Map.deserializeBinary(
                e,
                t,
                o.BinaryReader.prototype.readString,
                o.BinaryReader.prototype.readString,
                null,
                '',
                ''
              );
            });
            break;
          case 8:
            i = t.readInt64String();
            e.setHeartbeatDuration(i);
            break;
          case 9:
            i = t.readBool();
            e.setNeedAck(i);
            break;
          case 10:
            i = t.readString();
            e.setPushServer(i);
            break;
          case 11:
            i = t.readString();
            e.setLiveCursor(i);
            break;
          case 12:
            i = t.readBool();
            e.setHistoryNoMore(i);
            break;
          default:
            t.skipField();
        }
      }
      return e;
    }),
    (proto.webcast.im.Response.prototype.serializeBinary = function () {
      var e = new o.BinaryWriter();
      return (
        proto.webcast.im.Response.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
      );
    }),
    (proto.webcast.im.Response.serializeBinaryToWriter = function (e, t) {
      var i = void 0;
      (i = e.getMessagesList()).length > 0 &&
        t.writeRepeatedMessage(
          1,
          i,
          proto.webcast.im.Message.serializeBinaryToWriter
        ),
        (i = e.getCursor()).length > 0 && t.writeString(2, i),
        (i = e.getFetchInterval()),
        0 !== parseInt(i, 10) && t.writeInt64String(3, i),
        (i = e.getNow()),
        0 !== parseInt(i, 10) && t.writeInt64String(4, i),
        (i = e.getInternalExt()).length > 0 && t.writeString(5, i),
        0 !== (i = e.getFetchType()) && t.writeInt32(6, i),
        (i = e.getRouteParamsMap(!0)) &&
          i.getLength() > 0 &&
          i.serializeBinary(
            7,
            t,
            o.BinaryWriter.prototype.writeString,
            o.BinaryWriter.prototype.writeString
          ),
        (i = e.getHeartbeatDuration()),
        0 !== parseInt(i, 10) && t.writeInt64String(8, i),
        (i = e.getNeedAck()) && t.writeBool(9, i),
        (i = e.getPushServer()).length > 0 && t.writeString(10, i),
        (i = e.getLiveCursor()).length > 0 && t.writeString(11, i),
        (i = e.getHistoryNoMore()) && t.writeBool(12, i);
    }),
    (proto.webcast.im.Response.prototype.getMessagesList = function () {
      return o.Message.getRepeatedWrapperField(
        this,
        proto.webcast.im.Message,
        1
      );
    }),
    (proto.webcast.im.Response.prototype.setMessagesList = function (e) {
      return o.Message.setRepeatedWrapperField(this, 1, e);
    }),
    (proto.webcast.im.Response.prototype.addMessages = function (e, t) {
      return o.Message.addToRepeatedWrapperField(
        this,
        1,
        e,
        proto.webcast.im.Message,
        t
      );
    }),
    (proto.webcast.im.Response.prototype.clearMessagesList = function () {
      return this.setMessagesList([]);
    }),
    (proto.webcast.im.Response.prototype.getCursor = function () {
      return o.Message.getFieldWithDefault(this, 2, '');
    }),
    (proto.webcast.im.Response.prototype.setCursor = function (e) {
      return o.Message.setProto3StringField(this, 2, e);
    }),
    (proto.webcast.im.Response.prototype.getFetchInterval = function () {
      return o.Message.getFieldWithDefault(this, 3, '0');
    }),
    (proto.webcast.im.Response.prototype.setFetchInterval = function (e) {
      return o.Message.setProto3StringIntField(this, 3, e);
    }),
    (proto.webcast.im.Response.prototype.getNow = function () {
      return o.Message.getFieldWithDefault(this, 4, '0');
    }),
    (proto.webcast.im.Response.prototype.setNow = function (e) {
      return o.Message.setProto3StringIntField(this, 4, e);
    }),
    (proto.webcast.im.Response.prototype.getInternalExt = function () {
      return o.Message.getFieldWithDefault(this, 5, '');
    }),
    (proto.webcast.im.Response.prototype.setInternalExt = function (e) {
      return o.Message.setProto3StringField(this, 5, e);
    }),
    (proto.webcast.im.Response.prototype.getFetchType = function () {
      return o.Message.getFieldWithDefault(this, 6, 0);
    }),
    (proto.webcast.im.Response.prototype.setFetchType = function (e) {
      return o.Message.setProto3IntField(this, 6, e);
    }),
    (proto.webcast.im.Response.prototype.getRouteParamsMap = function (e) {
      return o.Message.getMapField(this, 7, e, null);
    }),
    (proto.webcast.im.Response.prototype.clearRouteParamsMap = function () {
      return this.getRouteParamsMap().clear(), this;
    }),
    (proto.webcast.im.Response.prototype.getHeartbeatDuration = function () {
      return o.Message.getFieldWithDefault(this, 8, '0');
    }),
    (proto.webcast.im.Response.prototype.setHeartbeatDuration = function (e) {
      return o.Message.setProto3StringIntField(this, 8, e);
    }),
    (proto.webcast.im.Response.prototype.getNeedAck = function () {
      return o.Message.getBooleanFieldWithDefault(this, 9, !1);
    }),
    (proto.webcast.im.Response.prototype.setNeedAck = function (e) {
      return o.Message.setProto3BooleanField(this, 9, e);
    }),
    (proto.webcast.im.Response.prototype.getPushServer = function () {
      return o.Message.getFieldWithDefault(this, 10, '');
    }),
    (proto.webcast.im.Response.prototype.setPushServer = function (e) {
      return o.Message.setProto3StringField(this, 10, e);
    }),
    (proto.webcast.im.Response.prototype.getLiveCursor = function () {
      return o.Message.getFieldWithDefault(this, 11, '');
    }),
    (proto.webcast.im.Response.prototype.setLiveCursor = function (e) {
      return o.Message.setProto3StringField(this, 11, e);
    }),
    (proto.webcast.im.Response.prototype.getHistoryNoMore = function () {
      return o.Message.getBooleanFieldWithDefault(this, 12, !1);
    }),
    (proto.webcast.im.Response.prototype.setHistoryNoMore = function (e) {
      return o.Message.setProto3BooleanField(this, 12, e);
    }),
    o.Message.GENERATE_TO_OBJECT &&
      ((proto.webcast.im.Message.prototype.toObject = function (e) {
        return proto.webcast.im.Message.toObject(e, this);
      }),
      (proto.webcast.im.Message.toObject = function (e, t) {
        var i,
          a = {
            method: o.Message.getFieldWithDefault(t, 1, ''),
            payload: t.getPayload_asB64(),
            msgId: o.Message.getFieldWithDefault(t, 3, '0'),
            msgType: o.Message.getFieldWithDefault(t, 4, 0),
            offset: o.Message.getFieldWithDefault(t, 5, '0'),
            needWrdsStore: o.Message.getBooleanFieldWithDefault(t, 6, !1),
            wrdsVersion: o.Message.getFieldWithDefault(t, 7, '0'),
            wrdsSubKey: o.Message.getFieldWithDefault(t, 8, ''),
            messageExtraMap: (i = t.getMessageExtraMap())
              ? i.toObject(e, void 0)
              : []
          };
        return e && (a.$jspbMessageInstance = t), a;
      })),
    (proto.webcast.im.Message.deserializeBinary = function (e) {
      var t = new o.BinaryReader(e),
        i = new proto.webcast.im.Message();
      return proto.webcast.im.Message.deserializeBinaryFromReader(i, t);
    }),
    (proto.webcast.im.Message.deserializeBinaryFromReader = function (e, t) {
      for (; t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var i = t.readString();
            e.setMethod(i);
            break;
          case 2:
            i = t.readBytes();
            e.setPayload(i);
            break;
          case 3:
            i = t.readInt64String();
            e.setMsgId(i);
            break;
          case 4:
            i = t.readInt32();
            e.setMsgType(i);
            break;
          case 5:
            i = t.readInt64String();
            e.setOffset(i);
            break;
          case 6:
            i = t.readBool();
            e.setNeedWrdsStore(i);
            break;
          case 7:
            i = t.readInt64String();
            e.setWrdsVersion(i);
            break;
          case 8:
            i = t.readString();
            e.setWrdsSubKey(i);
            break;
          case 9:
            i = e.getMessageExtraMap();
            t.readMessage(i, function (e, t) {
              o.Map.deserializeBinary(
                e,
                t,
                o.BinaryReader.prototype.readString,
                o.BinaryReader.prototype.readString,
                null,
                '',
                ''
              );
            });
            break;
          default:
            t.skipField();
        }
      }
      return e;
    }),
    (proto.webcast.im.Message.prototype.serializeBinary = function () {
      var e = new o.BinaryWriter();
      return (
        proto.webcast.im.Message.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
      );
    }),
    (proto.webcast.im.Message.serializeBinaryToWriter = function (e, t) {
      var i = void 0;
      (i = e.getMethod()).length > 0 && t.writeString(1, i),
        (i = e.getPayload_asU8()).length > 0 && t.writeBytes(2, i),
        (i = e.getMsgId()),
        0 !== parseInt(i, 10) && t.writeInt64String(3, i),
        0 !== (i = e.getMsgType()) && t.writeInt32(4, i),
        (i = e.getOffset()),
        0 !== parseInt(i, 10) && t.writeInt64String(5, i),
        (i = e.getNeedWrdsStore()) && t.writeBool(6, i),
        (i = e.getWrdsVersion()),
        0 !== parseInt(i, 10) && t.writeInt64String(7, i),
        (i = e.getWrdsSubKey()).length > 0 && t.writeString(8, i),
        (i = e.getMessageExtraMap(!0)) &&
          i.getLength() > 0 &&
          i.serializeBinary(
            9,
            t,
            o.BinaryWriter.prototype.writeString,
            o.BinaryWriter.prototype.writeString
          );
    }),
    (proto.webcast.im.Message.prototype.getMethod = function () {
      return o.Message.getFieldWithDefault(this, 1, '');
    }),
    (proto.webcast.im.Message.prototype.setMethod = function (e) {
      return o.Message.setProto3StringField(this, 1, e);
    }),
    (proto.webcast.im.Message.prototype.getPayload = function () {
      return o.Message.getFieldWithDefault(this, 2, '');
    }),
    (proto.webcast.im.Message.prototype.getPayload_asB64 = function () {
      return o.Message.bytesAsB64(this.getPayload());
    }),
    (proto.webcast.im.Message.prototype.getPayload_asU8 = function () {
      return o.Message.bytesAsU8(this.getPayload());
    }),
    (proto.webcast.im.Message.prototype.setPayload = function (e) {
      return o.Message.setProto3BytesField(this, 2, e);
    }),
    (proto.webcast.im.Message.prototype.getMsgId = function () {
      return o.Message.getFieldWithDefault(this, 3, '0');
    }),
    (proto.webcast.im.Message.prototype.setMsgId = function (e) {
      return o.Message.setProto3StringIntField(this, 3, e);
    }),
    (proto.webcast.im.Message.prototype.getMsgType = function () {
      return o.Message.getFieldWithDefault(this, 4, 0);
    }),
    (proto.webcast.im.Message.prototype.setMsgType = function (e) {
      return o.Message.setProto3IntField(this, 4, e);
    }),
    (proto.webcast.im.Message.prototype.getOffset = function () {
      return o.Message.getFieldWithDefault(this, 5, '0');
    }),
    (proto.webcast.im.Message.prototype.setOffset = function (e) {
      return o.Message.setProto3StringIntField(this, 5, e);
    }),
    (proto.webcast.im.Message.prototype.getNeedWrdsStore = function () {
      return o.Message.getBooleanFieldWithDefault(this, 6, !1);
    }),
    (proto.webcast.im.Message.prototype.setNeedWrdsStore = function (e) {
      return o.Message.setProto3BooleanField(this, 6, e);
    }),
    (proto.webcast.im.Message.prototype.getWrdsVersion = function () {
      return o.Message.getFieldWithDefault(this, 7, '0');
    }),
    (proto.webcast.im.Message.prototype.setWrdsVersion = function (e) {
      return o.Message.setProto3StringIntField(this, 7, e);
    }),
    (proto.webcast.im.Message.prototype.getWrdsSubKey = function () {
      return o.Message.getFieldWithDefault(this, 8, '');
    }),
    (proto.webcast.im.Message.prototype.setWrdsSubKey = function (e) {
      return o.Message.setProto3StringField(this, 8, e);
    }),
    (proto.webcast.im.Message.prototype.getMessageExtraMap = function (e) {
      return o.Message.getMapField(this, 9, e, null);
    }),
    (proto.webcast.im.Message.prototype.clearMessageExtraMap = function () {
      return this.getMessageExtraMap().clear(), this;
    }),
    a.object.extend(t, proto.webcast.im);

  var r = jsbp,
    s = r;
  var i = function () {
    return this
      ? this
      : 'undefined' != typeof window
      ? window
      : void 0 !== i
      ? i
      : 'undefined' != typeof self
      ? self
      : Function('return this')();
  }.call(null);
  s.exportSymbol('proto.webcast.im.CouponActivityInfoMessage', null, i),
    s.exportSymbol('proto.webcast.im.CouponMetaInfoMessage', null, i),
    s.exportSymbol('proto.webcast.im.LiveEcomMessage', null, i),
    s.exportSymbol('proto.webcast.im.LiveEcomMessage.CouponType', null, i),
    s.exportSymbol('proto.webcast.im.LiveEcomMessage.MsgType', null, i),
    (proto.webcast.im.CouponActivityInfoMessage = function (e) {
      r.Message.initialize(this, e, 0, -1, null, null);
    }),
    s.inherits(proto.webcast.im.CouponActivityInfoMessage, r.Message),
    s.DEBUG &&
      !COMPILED &&
      (proto.webcast.im.CouponActivityInfoMessage.displayName =
        'proto.webcast.im.CouponActivityInfoMessage'),
    (proto.webcast.im.CouponMetaInfoMessage = function (e) {
      r.Message.initialize(
        this,
        e,
        0,
        -1,
        proto.webcast.im.CouponMetaInfoMessage.repeatedFields_,
        null
      );
    }),
    s.inherits(proto.webcast.im.CouponMetaInfoMessage, r.Message),
    s.DEBUG &&
      !COMPILED &&
      (proto.webcast.im.CouponMetaInfoMessage.displayName =
        'proto.webcast.im.CouponMetaInfoMessage'),
    (proto.webcast.im.LiveEcomMessage = function (e) {
      r.Message.initialize(this, e, 0, -1, null, null);
    }),
    s.inherits(proto.webcast.im.LiveEcomMessage, r.Message),
    s.DEBUG &&
      !COMPILED &&
      (proto.webcast.im.LiveEcomMessage.displayName =
        'proto.webcast.im.LiveEcomMessage'),
    r.Message.GENERATE_TO_OBJECT &&
      ((proto.webcast.im.CouponActivityInfoMessage.prototype.toObject =
        function (e) {
          return proto.webcast.im.CouponActivityInfoMessage.toObject(e, this);
        }),
      (proto.webcast.im.CouponActivityInfoMessage.toObject = function (e, t) {
        var o = {
          activityType: r.Message.getFieldWithDefault(t, 1, '0'),
          beforeText: r.Message.getFieldWithDefault(t, 2, ''),
          beforeButton: r.Message.getFieldWithDefault(t, 3, ''),
          afterText: r.Message.getFieldWithDefault(t, 4, ''),
          afterButton: r.Message.getFieldWithDefault(t, 5, '')
        };
        return e && (o.$jspbMessageInstance = t), o;
      })),
    (proto.webcast.im.CouponActivityInfoMessage.deserializeBinary = function (
      e
    ) {
      var t = new r.BinaryReader(e),
        o = new proto.webcast.im.CouponActivityInfoMessage();
      return proto.webcast.im.CouponActivityInfoMessage.deserializeBinaryFromReader(
        o,
        t
      );
    }),
    (proto.webcast.im.CouponActivityInfoMessage.deserializeBinaryFromReader =
      function (e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
          switch (t.getFieldNumber()) {
            case 1:
              var o = t.readInt64String();
              e.setActivityType(o);
              break;
            case 2:
              o = t.readString();
              e.setBeforeText(o);
              break;
            case 3:
              o = t.readString();
              e.setBeforeButton(o);
              break;
            case 4:
              o = t.readString();
              e.setAfterText(o);
              break;
            case 5:
              o = t.readString();
              e.setAfterButton(o);
              break;
            default:
              t.skipField();
          }
        }
        return e;
      }),
    (proto.webcast.im.CouponActivityInfoMessage.prototype.serializeBinary =
      function () {
        var e = new r.BinaryWriter();
        return (
          proto.webcast.im.CouponActivityInfoMessage.serializeBinaryToWriter(
            this,
            e
          ),
          e.getResultBuffer()
        );
      }),
    (proto.webcast.im.CouponActivityInfoMessage.serializeBinaryToWriter =
      function (e, t) {
        var o = void 0;
        (o = e.getActivityType()),
          0 !== parseInt(o, 10) && t.writeInt64String(1, o),
          (o = e.getBeforeText()).length > 0 && t.writeString(2, o),
          (o = e.getBeforeButton()).length > 0 && t.writeString(3, o),
          (o = e.getAfterText()).length > 0 && t.writeString(4, o),
          (o = e.getAfterButton()).length > 0 && t.writeString(5, o);
      }),
    (proto.webcast.im.CouponActivityInfoMessage.prototype.getActivityType =
      function () {
        return r.Message.getFieldWithDefault(this, 1, '0');
      }),
    (proto.webcast.im.CouponActivityInfoMessage.prototype.setActivityType =
      function (e) {
        return r.Message.setProto3StringIntField(this, 1, e);
      }),
    (proto.webcast.im.CouponActivityInfoMessage.prototype.getBeforeText =
      function () {
        return r.Message.getFieldWithDefault(this, 2, '');
      }),
    (proto.webcast.im.CouponActivityInfoMessage.prototype.setBeforeText =
      function (e) {
        return r.Message.setProto3StringField(this, 2, e);
      }),
    (proto.webcast.im.CouponActivityInfoMessage.prototype.getBeforeButton =
      function () {
        return r.Message.getFieldWithDefault(this, 3, '');
      }),
    (proto.webcast.im.CouponActivityInfoMessage.prototype.setBeforeButton =
      function (e) {
        return r.Message.setProto3StringField(this, 3, e);
      }),
    (proto.webcast.im.CouponActivityInfoMessage.prototype.getAfterText =
      function () {
        return r.Message.getFieldWithDefault(this, 4, '');
      }),
    (proto.webcast.im.CouponActivityInfoMessage.prototype.setAfterText =
      function (e) {
        return r.Message.setProto3StringField(this, 4, e);
      }),
    (proto.webcast.im.CouponActivityInfoMessage.prototype.getAfterButton =
      function () {
        return r.Message.getFieldWithDefault(this, 5, '');
      }),
    (proto.webcast.im.CouponActivityInfoMessage.prototype.setAfterButton =
      function (e) {
        return r.Message.setProto3StringField(this, 5, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.repeatedFields_ = [40]),
    r.Message.GENERATE_TO_OBJECT &&
      ((proto.webcast.im.CouponMetaInfoMessage.prototype.toObject = function (
        e
      ) {
        return proto.webcast.im.CouponMetaInfoMessage.toObject(e, this);
      }),
      (proto.webcast.im.CouponMetaInfoMessage.toObject = function (e, t) {
        var o,
          s = {
            couponMetaId: r.Message.getFieldWithDefault(t, 1, ''),
            startTime: r.Message.getFieldWithDefault(t, 2, ''),
            expireTime: r.Message.getFieldWithDefault(t, 3, ''),
            periodType: r.Message.getFieldWithDefault(t, 4, '0'),
            validPeriod: r.Message.getFieldWithDefault(t, 5, '0'),
            startApplyTime: r.Message.getFieldWithDefault(t, 6, ''),
            endApplyTime: r.Message.getFieldWithDefault(t, 7, ''),
            couponName: r.Message.getFieldWithDefault(t, 8, ''),
            url: r.Message.getFieldWithDefault(t, 9, ''),
            threshold: r.Message.getFieldWithDefault(t, 10, '0'),
            credit: r.Message.getFieldWithDefault(t, 11, '0'),
            maxApplyTimes: r.Message.getFieldWithDefault(t, 12, '0'),
            type: r.Message.getFieldWithDefault(t, 13, '0'),
            typeDetail: r.Message.getFieldWithDefault(t, 14, ''),
            discount: r.Message.getFloatingPointFieldWithDefault(t, 15, 0),
            shopId: r.Message.getFieldWithDefault(t, 16, ''),
            payType: r.Message.getFieldWithDefault(t, 17, '0'),
            maxDiscountLimit: r.Message.getFieldWithDefault(t, 18, '0'),
            shopName: r.Message.getFieldWithDefault(t, 19, ''),
            typeString: r.Message.getFieldWithDefault(t, 20, ''),
            whatCoupon: r.Message.getFieldWithDefault(t, 21, ''),
            couponString: r.Message.getFieldWithDefault(t, 22, ''),
            channelId: r.Message.getFieldWithDefault(t, 23, '0'),
            leftAmount: r.Message.getFieldWithDefault(t, 24, '0'),
            hasApplied: r.Message.getFieldWithDefault(t, 25, '0'),
            status: r.Message.getFieldWithDefault(t, 26, '0'),
            shopLogo: r.Message.getFieldWithDefault(t, 27, ''),
            isShow: r.Message.getFieldWithDefault(t, 28, '0'),
            totalAmount: r.Message.getFieldWithDefault(t, 29, '0'),
            liveCouponStatus: r.Message.getFieldWithDefault(t, 30, 0),
            couponSource: r.Message.getFieldWithDefault(t, 31, 0),
            userApplyTimes: r.Message.getFieldWithDefault(t, 32, '0'),
            canContinueApply: r.Message.getBooleanFieldWithDefault(t, 33, !1),
            couponStatus: r.Message.getBooleanFieldWithDefault(t, 34, !1),
            couponReset: r.Message.getBooleanFieldWithDefault(t, 35, !1),
            startTimeTimestamp: r.Message.getFieldWithDefault(t, 36, '0'),
            expireTimeTimestamp: r.Message.getFieldWithDefault(t, 37, '0'),
            avatar: r.Message.getFieldWithDefault(t, 38, ''),
            kolUid: r.Message.getFieldWithDefault(t, 39, '0'),
            productIdsList:
              null == (o = r.Message.getRepeatedField(t, 40)) ? void 0 : o,
            platformSubType: r.Message.getFieldWithDefault(t, 41, '0'),
            hasAvailableGoods: r.Message.getBooleanFieldWithDefault(t, 42, !1),
            typeTitle: r.Message.getFieldWithDefault(t, 43, ''),
            kolUserTag: r.Message.getFieldWithDefault(t, 45, '0'),
            typeIcon: r.Message.getFieldWithDefault(t, 46, ''),
            typeIconWidth: r.Message.getFieldWithDefault(t, 47, '0'),
            typeIconHeight: r.Message.getFieldWithDefault(t, 48, '0'),
            couponCategory: r.Message.getFieldWithDefault(t, 49, '')
          };
        return e && (s.$jspbMessageInstance = t), s;
      })),
    (proto.webcast.im.CouponMetaInfoMessage.deserializeBinary = function (e) {
      var t = new r.BinaryReader(e),
        o = new proto.webcast.im.CouponMetaInfoMessage();
      return proto.webcast.im.CouponMetaInfoMessage.deserializeBinaryFromReader(
        o,
        t
      );
    }),
    (proto.webcast.im.CouponMetaInfoMessage.deserializeBinaryFromReader =
      function (e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
          switch (t.getFieldNumber()) {
            case 1:
              var o = t.readString();
              e.setCouponMetaId(o);
              break;
            case 2:
              o = t.readString();
              e.setStartTime(o);
              break;
            case 3:
              o = t.readString();
              e.setExpireTime(o);
              break;
            case 4:
              o = t.readInt64String();
              e.setPeriodType(o);
              break;
            case 5:
              o = t.readInt64String();
              e.setValidPeriod(o);
              break;
            case 6:
              o = t.readString();
              e.setStartApplyTime(o);
              break;
            case 7:
              o = t.readString();
              e.setEndApplyTime(o);
              break;
            case 8:
              o = t.readString();
              e.setCouponName(o);
              break;
            case 9:
              o = t.readString();
              e.setUrl(o);
              break;
            case 10:
              o = t.readInt64String();
              e.setThreshold(o);
              break;
            case 11:
              o = t.readInt64String();
              e.setCredit(o);
              break;
            case 12:
              o = t.readInt64String();
              e.setMaxApplyTimes(o);
              break;
            case 13:
              o = t.readInt64String();
              e.setType(o);
              break;
            case 14:
              o = t.readString();
              e.setTypeDetail(o);
              break;
            case 15:
              o = t.readDouble();
              e.setDiscount(o);
              break;
            case 16:
              o = t.readString();
              e.setShopId(o);
              break;
            case 17:
              o = t.readInt64String();
              e.setPayType(o);
              break;
            case 18:
              o = t.readInt64String();
              e.setMaxDiscountLimit(o);
              break;
            case 19:
              o = t.readString();
              e.setShopName(o);
              break;
            case 20:
              o = t.readString();
              e.setTypeString(o);
              break;
            case 21:
              o = t.readString();
              e.setWhatCoupon(o);
              break;
            case 22:
              o = t.readString();
              e.setCouponString(o);
              break;
            case 23:
              o = t.readInt64String();
              e.setChannelId(o);
              break;
            case 24:
              o = t.readInt64String();
              e.setLeftAmount(o);
              break;
            case 25:
              o = t.readInt64String();
              e.setHasApplied(o);
              break;
            case 26:
              o = t.readInt64String();
              e.setStatus(o);
              break;
            case 27:
              o = t.readString();
              e.setShopLogo(o);
              break;
            case 28:
              o = t.readInt64String();
              e.setIsShow(o);
              break;
            case 29:
              o = t.readInt64String();
              e.setTotalAmount(o);
              break;
            case 30:
              o = t.readInt32();
              e.setLiveCouponStatus(o);
              break;
            case 31:
              o = t.readInt32();
              e.setCouponSource(o);
              break;
            case 32:
              o = t.readInt64String();
              e.setUserApplyTimes(o);
              break;
            case 33:
              o = t.readBool();
              e.setCanContinueApply(o);
              break;
            case 34:
              o = t.readBool();
              e.setCouponStatus(o);
              break;
            case 35:
              o = t.readBool();
              e.setCouponReset(o);
              break;
            case 36:
              o = t.readInt64String();
              e.setStartTimeTimestamp(o);
              break;
            case 37:
              o = t.readInt64String();
              e.setExpireTimeTimestamp(o);
              break;
            case 38:
              o = t.readString();
              e.setAvatar(o);
              break;
            case 39:
              o = t.readInt64String();
              e.setKolUid(o);
              break;
            case 40:
              for (
                var r = t.isDelimited()
                    ? t.readPackedInt64String()
                    : [t.readInt64String()],
                  s = 0;
                s < r.length;
                s++
              )
                e.addProductIds(r[s]);
              break;
            case 41:
              o = t.readInt64String();
              e.setPlatformSubType(o);
              break;
            case 42:
              o = t.readBool();
              e.setHasAvailableGoods(o);
              break;
            case 43:
              o = t.readString();
              e.setTypeTitle(o);
              break;
            case 45:
              o = t.readInt64String();
              e.setKolUserTag(o);
              break;
            case 46:
              o = t.readString();
              e.setTypeIcon(o);
              break;
            case 47:
              o = t.readInt64String();
              e.setTypeIconWidth(o);
              break;
            case 48:
              o = t.readInt64String();
              e.setTypeIconHeight(o);
              break;
            case 49:
              o = t.readString();
              e.setCouponCategory(o);
              break;
            default:
              t.skipField();
          }
        }
        return e;
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.serializeBinary =
      function () {
        var e = new r.BinaryWriter();
        return (
          proto.webcast.im.CouponMetaInfoMessage.serializeBinaryToWriter(
            this,
            e
          ),
          e.getResultBuffer()
        );
      }),
    (proto.webcast.im.CouponMetaInfoMessage.serializeBinaryToWriter = function (
      e,
      t
    ) {
      var o = void 0;
      (o = e.getCouponMetaId()).length > 0 && t.writeString(1, o),
        (o = e.getStartTime()).length > 0 && t.writeString(2, o),
        (o = e.getExpireTime()).length > 0 && t.writeString(3, o),
        (o = e.getPeriodType()),
        0 !== parseInt(o, 10) && t.writeInt64String(4, o),
        (o = e.getValidPeriod()),
        0 !== parseInt(o, 10) && t.writeInt64String(5, o),
        (o = e.getStartApplyTime()).length > 0 && t.writeString(6, o),
        (o = e.getEndApplyTime()).length > 0 && t.writeString(7, o),
        (o = e.getCouponName()).length > 0 && t.writeString(8, o),
        (o = e.getUrl()).length > 0 && t.writeString(9, o),
        (o = e.getThreshold()),
        0 !== parseInt(o, 10) && t.writeInt64String(10, o),
        (o = e.getCredit()),
        0 !== parseInt(o, 10) && t.writeInt64String(11, o),
        (o = e.getMaxApplyTimes()),
        0 !== parseInt(o, 10) && t.writeInt64String(12, o),
        (o = e.getType()),
        0 !== parseInt(o, 10) && t.writeInt64String(13, o),
        (o = e.getTypeDetail()).length > 0 && t.writeString(14, o),
        0 !== (o = e.getDiscount()) && t.writeDouble(15, o),
        (o = e.getShopId()).length > 0 && t.writeString(16, o),
        (o = e.getPayType()),
        0 !== parseInt(o, 10) && t.writeInt64String(17, o),
        (o = e.getMaxDiscountLimit()),
        0 !== parseInt(o, 10) && t.writeInt64String(18, o),
        (o = e.getShopName()).length > 0 && t.writeString(19, o),
        (o = e.getTypeString()).length > 0 && t.writeString(20, o),
        (o = e.getWhatCoupon()).length > 0 && t.writeString(21, o),
        (o = e.getCouponString()).length > 0 && t.writeString(22, o),
        (o = e.getChannelId()),
        0 !== parseInt(o, 10) && t.writeInt64String(23, o),
        (o = e.getLeftAmount()),
        0 !== parseInt(o, 10) && t.writeInt64String(24, o),
        (o = e.getHasApplied()),
        0 !== parseInt(o, 10) && t.writeInt64String(25, o),
        (o = e.getStatus()),
        0 !== parseInt(o, 10) && t.writeInt64String(26, o),
        (o = e.getShopLogo()).length > 0 && t.writeString(27, o),
        (o = e.getIsShow()),
        0 !== parseInt(o, 10) && t.writeInt64String(28, o),
        (o = e.getTotalAmount()),
        0 !== parseInt(o, 10) && t.writeInt64String(29, o),
        0 !== (o = e.getLiveCouponStatus()) && t.writeInt32(30, o),
        0 !== (o = e.getCouponSource()) && t.writeInt32(31, o),
        (o = e.getUserApplyTimes()),
        0 !== parseInt(o, 10) && t.writeInt64String(32, o),
        (o = e.getCanContinueApply()) && t.writeBool(33, o),
        (o = e.getCouponStatus()) && t.writeBool(34, o),
        (o = e.getCouponReset()) && t.writeBool(35, o),
        (o = e.getStartTimeTimestamp()),
        0 !== parseInt(o, 10) && t.writeInt64String(36, o),
        (o = e.getExpireTimeTimestamp()),
        0 !== parseInt(o, 10) && t.writeInt64String(37, o),
        (o = e.getAvatar()).length > 0 && t.writeString(38, o),
        (o = e.getKolUid()),
        0 !== parseInt(o, 10) && t.writeInt64String(39, o),
        (o = e.getProductIdsList()).length > 0 &&
          t.writePackedInt64String(40, o),
        (o = e.getPlatformSubType()),
        0 !== parseInt(o, 10) && t.writeInt64String(41, o),
        (o = e.getHasAvailableGoods()) && t.writeBool(42, o),
        (o = e.getTypeTitle()).length > 0 && t.writeString(43, o),
        (o = e.getKolUserTag()),
        0 !== parseInt(o, 10) && t.writeInt64String(45, o),
        (o = e.getTypeIcon()).length > 0 && t.writeString(46, o),
        (o = e.getTypeIconWidth()),
        0 !== parseInt(o, 10) && t.writeInt64String(47, o),
        (o = e.getTypeIconHeight()),
        0 !== parseInt(o, 10) && t.writeInt64String(48, o),
        (o = e.getCouponCategory()).length > 0 && t.writeString(49, o);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getCouponMetaId =
      function () {
        return r.Message.getFieldWithDefault(this, 1, '');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setCouponMetaId =
      function (e) {
        return r.Message.setProto3StringField(this, 1, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getStartTime =
      function () {
        return r.Message.getFieldWithDefault(this, 2, '');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setStartTime = function (
      e
    ) {
      return r.Message.setProto3StringField(this, 2, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getExpireTime =
      function () {
        return r.Message.getFieldWithDefault(this, 3, '');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setExpireTime = function (
      e
    ) {
      return r.Message.setProto3StringField(this, 3, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getPeriodType =
      function () {
        return r.Message.getFieldWithDefault(this, 4, '0');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setPeriodType = function (
      e
    ) {
      return r.Message.setProto3StringIntField(this, 4, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getValidPeriod =
      function () {
        return r.Message.getFieldWithDefault(this, 5, '0');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setValidPeriod =
      function (e) {
        return r.Message.setProto3StringIntField(this, 5, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getStartApplyTime =
      function () {
        return r.Message.getFieldWithDefault(this, 6, '');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setStartApplyTime =
      function (e) {
        return r.Message.setProto3StringField(this, 6, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getEndApplyTime =
      function () {
        return r.Message.getFieldWithDefault(this, 7, '');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setEndApplyTime =
      function (e) {
        return r.Message.setProto3StringField(this, 7, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getCouponName =
      function () {
        return r.Message.getFieldWithDefault(this, 8, '');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setCouponName = function (
      e
    ) {
      return r.Message.setProto3StringField(this, 8, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getUrl = function () {
      return r.Message.getFieldWithDefault(this, 9, '');
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setUrl = function (e) {
      return r.Message.setProto3StringField(this, 9, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getThreshold =
      function () {
        return r.Message.getFieldWithDefault(this, 10, '0');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setThreshold = function (
      e
    ) {
      return r.Message.setProto3StringIntField(this, 10, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getCredit = function () {
      return r.Message.getFieldWithDefault(this, 11, '0');
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setCredit = function (e) {
      return r.Message.setProto3StringIntField(this, 11, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getMaxApplyTimes =
      function () {
        return r.Message.getFieldWithDefault(this, 12, '0');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setMaxApplyTimes =
      function (e) {
        return r.Message.setProto3StringIntField(this, 12, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getType = function () {
      return r.Message.getFieldWithDefault(this, 13, '0');
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setType = function (e) {
      return r.Message.setProto3StringIntField(this, 13, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getTypeDetail =
      function () {
        return r.Message.getFieldWithDefault(this, 14, '');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setTypeDetail = function (
      e
    ) {
      return r.Message.setProto3StringField(this, 14, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getDiscount =
      function () {
        return r.Message.getFloatingPointFieldWithDefault(this, 15, 0);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setDiscount = function (
      e
    ) {
      return r.Message.setProto3FloatField(this, 15, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getShopId = function () {
      return r.Message.getFieldWithDefault(this, 16, '');
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setShopId = function (e) {
      return r.Message.setProto3StringField(this, 16, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getPayType = function () {
      return r.Message.getFieldWithDefault(this, 17, '0');
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setPayType = function (
      e
    ) {
      return r.Message.setProto3StringIntField(this, 17, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getMaxDiscountLimit =
      function () {
        return r.Message.getFieldWithDefault(this, 18, '0');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setMaxDiscountLimit =
      function (e) {
        return r.Message.setProto3StringIntField(this, 18, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getShopName =
      function () {
        return r.Message.getFieldWithDefault(this, 19, '');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setShopName = function (
      e
    ) {
      return r.Message.setProto3StringField(this, 19, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getTypeString =
      function () {
        return r.Message.getFieldWithDefault(this, 20, '');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setTypeString = function (
      e
    ) {
      return r.Message.setProto3StringField(this, 20, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getWhatCoupon =
      function () {
        return r.Message.getFieldWithDefault(this, 21, '');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setWhatCoupon = function (
      e
    ) {
      return r.Message.setProto3StringField(this, 21, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getCouponString =
      function () {
        return r.Message.getFieldWithDefault(this, 22, '');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setCouponString =
      function (e) {
        return r.Message.setProto3StringField(this, 22, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getChannelId =
      function () {
        return r.Message.getFieldWithDefault(this, 23, '0');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setChannelId = function (
      e
    ) {
      return r.Message.setProto3StringIntField(this, 23, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getLeftAmount =
      function () {
        return r.Message.getFieldWithDefault(this, 24, '0');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setLeftAmount = function (
      e
    ) {
      return r.Message.setProto3StringIntField(this, 24, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getHasApplied =
      function () {
        return r.Message.getFieldWithDefault(this, 25, '0');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setHasApplied = function (
      e
    ) {
      return r.Message.setProto3StringIntField(this, 25, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getStatus = function () {
      return r.Message.getFieldWithDefault(this, 26, '0');
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setStatus = function (e) {
      return r.Message.setProto3StringIntField(this, 26, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getShopLogo =
      function () {
        return r.Message.getFieldWithDefault(this, 27, '');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setShopLogo = function (
      e
    ) {
      return r.Message.setProto3StringField(this, 27, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getIsShow = function () {
      return r.Message.getFieldWithDefault(this, 28, '0');
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setIsShow = function (e) {
      return r.Message.setProto3StringIntField(this, 28, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getTotalAmount =
      function () {
        return r.Message.getFieldWithDefault(this, 29, '0');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setTotalAmount =
      function (e) {
        return r.Message.setProto3StringIntField(this, 29, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getLiveCouponStatus =
      function () {
        return r.Message.getFieldWithDefault(this, 30, 0);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setLiveCouponStatus =
      function (e) {
        return r.Message.setProto3IntField(this, 30, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getCouponSource =
      function () {
        return r.Message.getFieldWithDefault(this, 31, 0);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setCouponSource =
      function (e) {
        return r.Message.setProto3IntField(this, 31, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getUserApplyTimes =
      function () {
        return r.Message.getFieldWithDefault(this, 32, '0');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setUserApplyTimes =
      function (e) {
        return r.Message.setProto3StringIntField(this, 32, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getCanContinueApply =
      function () {
        return r.Message.getBooleanFieldWithDefault(this, 33, !1);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setCanContinueApply =
      function (e) {
        return r.Message.setProto3BooleanField(this, 33, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getCouponStatus =
      function () {
        return r.Message.getBooleanFieldWithDefault(this, 34, !1);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setCouponStatus =
      function (e) {
        return r.Message.setProto3BooleanField(this, 34, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getCouponReset =
      function () {
        return r.Message.getBooleanFieldWithDefault(this, 35, !1);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setCouponReset =
      function (e) {
        return r.Message.setProto3BooleanField(this, 35, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getStartTimeTimestamp =
      function () {
        return r.Message.getFieldWithDefault(this, 36, '0');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setStartTimeTimestamp =
      function (e) {
        return r.Message.setProto3StringIntField(this, 36, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getExpireTimeTimestamp =
      function () {
        return r.Message.getFieldWithDefault(this, 37, '0');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setExpireTimeTimestamp =
      function (e) {
        return r.Message.setProto3StringIntField(this, 37, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getAvatar = function () {
      return r.Message.getFieldWithDefault(this, 38, '');
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setAvatar = function (e) {
      return r.Message.setProto3StringField(this, 38, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getKolUid = function () {
      return r.Message.getFieldWithDefault(this, 39, '0');
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setKolUid = function (e) {
      return r.Message.setProto3StringIntField(this, 39, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getProductIdsList =
      function () {
        return r.Message.getRepeatedField(this, 40);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setProductIdsList =
      function (e) {
        return r.Message.setField(this, 40, e || []);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.addProductIds = function (
      e,
      t
    ) {
      return r.Message.addToRepeatedField(this, 40, e, t);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.clearProductIdsList =
      function () {
        return this.setProductIdsList([]);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getPlatformSubType =
      function () {
        return r.Message.getFieldWithDefault(this, 41, '0');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setPlatformSubType =
      function (e) {
        return r.Message.setProto3StringIntField(this, 41, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getHasAvailableGoods =
      function () {
        return r.Message.getBooleanFieldWithDefault(this, 42, !1);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setHasAvailableGoods =
      function (e) {
        return r.Message.setProto3BooleanField(this, 42, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getTypeTitle =
      function () {
        return r.Message.getFieldWithDefault(this, 43, '');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setTypeTitle = function (
      e
    ) {
      return r.Message.setProto3StringField(this, 43, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getKolUserTag =
      function () {
        return r.Message.getFieldWithDefault(this, 45, '0');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setKolUserTag = function (
      e
    ) {
      return r.Message.setProto3StringIntField(this, 45, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getTypeIcon =
      function () {
        return r.Message.getFieldWithDefault(this, 46, '');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setTypeIcon = function (
      e
    ) {
      return r.Message.setProto3StringField(this, 46, e);
    }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getTypeIconWidth =
      function () {
        return r.Message.getFieldWithDefault(this, 47, '0');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setTypeIconWidth =
      function (e) {
        return r.Message.setProto3StringIntField(this, 47, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getTypeIconHeight =
      function () {
        return r.Message.getFieldWithDefault(this, 48, '0');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setTypeIconHeight =
      function (e) {
        return r.Message.setProto3StringIntField(this, 48, e);
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.getCouponCategory =
      function () {
        return r.Message.getFieldWithDefault(this, 49, '');
      }),
    (proto.webcast.im.CouponMetaInfoMessage.prototype.setCouponCategory =
      function (e) {
        return r.Message.setProto3StringField(this, 49, e);
      }),
    r.Message.GENERATE_TO_OBJECT &&
      ((proto.webcast.im.LiveEcomMessage.prototype.toObject = function (e) {
        return proto.webcast.im.LiveEcomMessage.toObject(e, this);
      }),
      (proto.webcast.im.LiveEcomMessage.toObject = function (e, t) {
        var o,
          s = {
            common: (o = t.getCommon()) && a.Common.toObject(e, o),
            msgType: r.Message.getFieldWithDefault(t, 2, 0),
            nickName: r.Message.getFieldWithDefault(t, 3, ''),
            purchaseCnt: r.Message.getFieldWithDefault(t, 4, '0'),
            text: r.Message.getFieldWithDefault(t, 5, ''),
            icon: r.Message.getFieldWithDefault(t, 6, ''),
            metaId: r.Message.getFieldWithDefault(t, 7, '0'),
            serverTime: r.Message.getFieldWithDefault(t, 8, '0'),
            countdown: r.Message.getFieldWithDefault(t, 9, '0'),
            activityJsonStr: r.Message.getFieldWithDefault(t, 10, ''),
            couponType: r.Message.getFieldWithDefault(t, 11, 0),
            activityInfo:
              (o = t.getActivityInfo()) &&
              proto.webcast.im.CouponActivityInfoMessage.toObject(e, o),
            couponMeta:
              (o = t.getCouponMeta()) &&
              proto.webcast.im.CouponMetaInfoMessage.toObject(e, o),
            metaIdStr: r.Message.getFieldWithDefault(t, 14, '')
          };
        return e && (s.$jspbMessageInstance = t), s;
      })),
    (proto.webcast.im.LiveEcomMessage.deserializeBinary = function (e) {
      var t = new r.BinaryReader(e),
        o = new proto.webcast.im.LiveEcomMessage();
      return proto.webcast.im.LiveEcomMessage.deserializeBinaryFromReader(o, t);
    }),
    (proto.webcast.im.LiveEcomMessage.deserializeBinaryFromReader = function (
      e,
      t
    ) {
      for (; t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var o = new a.Common();
            t.readMessage(o, a.Common.deserializeBinaryFromReader),
              e.setCommon(o);
            break;
          case 2:
            o = t.readEnum();
            e.setMsgType(o);
            break;
          case 3:
            o = t.readString();
            e.setNickName(o);
            break;
          case 4:
            o = t.readInt64String();
            e.setPurchaseCnt(o);
            break;
          case 5:
            o = t.readString();
            e.setText(o);
            break;
          case 6:
            o = t.readString();
            e.setIcon(o);
            break;
          case 7:
            o = t.readInt64String();
            e.setMetaId(o);
            break;
          case 8:
            o = t.readInt64String();
            e.setServerTime(o);
            break;
          case 9:
            o = t.readInt64String();
            e.setCountdown(o);
            break;
          case 10:
            o = t.readString();
            e.setActivityJsonStr(o);
            break;
          case 11:
            o = t.readEnum();
            e.setCouponType(o);
            break;
          case 12:
            o = new proto.webcast.im.CouponActivityInfoMessage();
            t.readMessage(
              o,
              proto.webcast.im.CouponActivityInfoMessage
                .deserializeBinaryFromReader
            ),
              e.setActivityInfo(o);
            break;
          case 13:
            o = new proto.webcast.im.CouponMetaInfoMessage();
            t.readMessage(
              o,
              proto.webcast.im.CouponMetaInfoMessage.deserializeBinaryFromReader
            ),
              e.setCouponMeta(o);
            break;
          case 14:
            o = t.readString();
            e.setMetaIdStr(o);
            break;
          default:
            t.skipField();
        }
      }
      return e;
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.serializeBinary = function () {
      var e = new r.BinaryWriter();
      return (
        proto.webcast.im.LiveEcomMessage.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
      );
    }),
    (proto.webcast.im.LiveEcomMessage.serializeBinaryToWriter = function (
      e,
      t
    ) {
      var o = void 0;
      null != (o = e.getCommon()) &&
        t.writeMessage(1, o, a.Common.serializeBinaryToWriter),
        0 !== (o = e.getMsgType()) && t.writeEnum(2, o),
        (o = e.getNickName()).length > 0 && t.writeString(3, o),
        (o = e.getPurchaseCnt()),
        0 !== parseInt(o, 10) && t.writeInt64String(4, o),
        (o = e.getText()).length > 0 && t.writeString(5, o),
        (o = e.getIcon()).length > 0 && t.writeString(6, o),
        (o = e.getMetaId()),
        0 !== parseInt(o, 10) && t.writeInt64String(7, o),
        (o = e.getServerTime()),
        0 !== parseInt(o, 10) && t.writeInt64String(8, o),
        (o = e.getCountdown()),
        0 !== parseInt(o, 10) && t.writeInt64String(9, o),
        (o = e.getActivityJsonStr()).length > 0 && t.writeString(10, o),
        0 !== (o = e.getCouponType()) && t.writeEnum(11, o),
        null != (o = e.getActivityInfo()) &&
          t.writeMessage(
            12,
            o,
            proto.webcast.im.CouponActivityInfoMessage.serializeBinaryToWriter
          ),
        null != (o = e.getCouponMeta()) &&
          t.writeMessage(
            13,
            o,
            proto.webcast.im.CouponMetaInfoMessage.serializeBinaryToWriter
          ),
        (o = e.getMetaIdStr()).length > 0 && t.writeString(14, o);
    }),
    (proto.webcast.im.LiveEcomMessage.MsgType = {
      BARRAGE_BUY: 0,
      COUPON_START: 1,
      COUPON_END: 2,
      COUPON_ZERO_AMOUNT: 3
    }),
    (proto.webcast.im.LiveEcomMessage.CouponType = {
      COUPON: 0,
      COUPON_COMBO: 1
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.getCommon = function () {
      return r.Message.getWrapperField(this, a.Common, 1);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.setCommon = function (e) {
      return r.Message.setWrapperField(this, 1, e);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.clearCommon = function () {
      return this.setCommon(void 0);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.hasCommon = function () {
      return null != r.Message.getField(this, 1);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.getMsgType = function () {
      return r.Message.getFieldWithDefault(this, 2, 0);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.setMsgType = function (e) {
      return r.Message.setProto3EnumField(this, 2, e);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.getNickName = function () {
      return r.Message.getFieldWithDefault(this, 3, '');
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.setNickName = function (e) {
      return r.Message.setProto3StringField(this, 3, e);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.getPurchaseCnt = function () {
      return r.Message.getFieldWithDefault(this, 4, '0');
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.setPurchaseCnt = function (e) {
      return r.Message.setProto3StringIntField(this, 4, e);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.getText = function () {
      return r.Message.getFieldWithDefault(this, 5, '');
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.setText = function (e) {
      return r.Message.setProto3StringField(this, 5, e);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.getIcon = function () {
      return r.Message.getFieldWithDefault(this, 6, '');
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.setIcon = function (e) {
      return r.Message.setProto3StringField(this, 6, e);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.getMetaId = function () {
      return r.Message.getFieldWithDefault(this, 7, '0');
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.setMetaId = function (e) {
      return r.Message.setProto3StringIntField(this, 7, e);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.getServerTime = function () {
      return r.Message.getFieldWithDefault(this, 8, '0');
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.setServerTime = function (e) {
      return r.Message.setProto3StringIntField(this, 8, e);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.getCountdown = function () {
      return r.Message.getFieldWithDefault(this, 9, '0');
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.setCountdown = function (e) {
      return r.Message.setProto3StringIntField(this, 9, e);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.getActivityJsonStr =
      function () {
        return r.Message.getFieldWithDefault(this, 10, '');
      }),
    (proto.webcast.im.LiveEcomMessage.prototype.setActivityJsonStr = function (
      e
    ) {
      return r.Message.setProto3StringField(this, 10, e);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.getCouponType = function () {
      return r.Message.getFieldWithDefault(this, 11, 0);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.setCouponType = function (e) {
      return r.Message.setProto3EnumField(this, 11, e);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.getActivityInfo = function () {
      return r.Message.getWrapperField(
        this,
        proto.webcast.im.CouponActivityInfoMessage,
        12
      );
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.setActivityInfo = function (e) {
      return r.Message.setWrapperField(this, 12, e);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.clearActivityInfo =
      function () {
        return this.setActivityInfo(void 0);
      }),
    (proto.webcast.im.LiveEcomMessage.prototype.hasActivityInfo = function () {
      return null != r.Message.getField(this, 12);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.getCouponMeta = function () {
      return r.Message.getWrapperField(
        this,
        proto.webcast.im.CouponMetaInfoMessage,
        13
      );
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.setCouponMeta = function (e) {
      return r.Message.setWrapperField(this, 13, e);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.clearCouponMeta = function () {
      return this.setCouponMeta(void 0);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.hasCouponMeta = function () {
      return null != r.Message.getField(this, 13);
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.getMetaIdStr = function () {
      return r.Message.getFieldWithDefault(this, 14, '');
    }),
    (proto.webcast.im.LiveEcomMessage.prototype.setMetaIdStr = function (e) {
      return r.Message.setProto3StringField(this, 14, e);
    });

  var a = o;
  s.object.extend(proto, a);
  var n = {};
  s.object.extend(proto, n);
  var g = {};
  s.object.extend(proto, g);
  var p = {};
  s.object.extend(proto, p),
    s.exportSymbol('proto.webcast.im.MemberMessage', null, i),
    s.exportSymbol('proto.webcast.im.MemberMessage.EffectConfig', null, i),
    s.exportSymbol('proto.webcast.im.MemberMessage', null, i),
    s.exportSymbol('proto.webcast.im.MemberMessage.EffectConfig', null, i),
    (proto.webcast.im.MemberMessage = function (e) {
      r.Message.initialize(this, e, 0, -1, null, null);
    }),
    s.inherits(proto.webcast.im.MemberMessage, r.Message),
    s.DEBUG &&
      !COMPILED &&
      (proto.webcast.im.MemberMessage.displayName =
        'proto.webcast.im.MemberMessage'),
    (proto.webcast.im.MemberMessage.EffectConfig = function (e) {
      r.Message.initialize(
        this,
        e,
        0,
        -1,
        proto.webcast.im.MemberMessage.EffectConfig.repeatedFields_,
        null
      );
    }),
    s.inherits(proto.webcast.im.MemberMessage.EffectConfig, r.Message),
    s.DEBUG &&
      !COMPILED &&
      (proto.webcast.im.MemberMessage.EffectConfig.displayName =
        'proto.webcast.im.MemberMessage.EffectConfig'),
    r.Message.GENERATE_TO_OBJECT &&
      ((proto.webcast.im.MemberMessage.prototype.toObject = function (e) {
        return proto.webcast.im.MemberMessage.toObject(e, this);
      }),
      (proto.webcast.im.MemberMessage.toObject = function (e, t) {
        var o,
          s = {
            common: (o = t.getCommon()) && p.Common.toObject(e, o),
            user: (o = t.getUser()) && a.User.toObject(e, o),
            memberCount: r.Message.getFieldWithDefault(t, 3, '0'),
            operator: (o = t.getOperator()) && a.User.toObject(e, o),
            isSetToAdmin: r.Message.getBooleanFieldWithDefault(t, 5, !1),
            isTopUser: r.Message.getBooleanFieldWithDefault(t, 6, !1),
            rankScore: r.Message.getFieldWithDefault(t, 7, '0'),
            topUserNo: r.Message.getFieldWithDefault(t, 8, '0'),
            enterType: r.Message.getFieldWithDefault(t, 9, '0'),
            action: r.Message.getFieldWithDefault(t, 10, '0'),
            actionDescription: r.Message.getFieldWithDefault(t, 11, ''),
            userId: r.Message.getFieldWithDefault(t, 12, '0'),
            effectConfig:
              (o = t.getEffectConfig()) &&
              proto.webcast.im.MemberMessage.EffectConfig.toObject(e, o),
            popStr: r.Message.getFieldWithDefault(t, 14, ''),
            enterEffectConfig:
              (o = t.getEnterEffectConfig()) &&
              proto.webcast.im.MemberMessage.EffectConfig.toObject(e, o),
            backgroundImage:
              (o = t.getBackgroundImage()) && n.Image.toObject(e, o),
            backgroundImageV2:
              (o = t.getBackgroundImageV2()) && n.Image.toObject(e, o),
            anchorDisplayText:
              (o = t.getAnchorDisplayText()) && g.Text.toObject(e, o),
            publicAreaCommon:
              (o = t.getPublicAreaCommon()) &&
              p.PublicAreaCommon.toObject(e, o),
            userEnterTipType: r.Message.getFieldWithDefault(t, 20, '0'),
            anchorEnterTipType: r.Message.getFieldWithDefault(t, 21, '0'),
            buriedPointMap: (o = t.getBuriedPointMap())
              ? o.toObject(e, void 0)
              : []
          };
        return e && (s.$jspbMessageInstance = t), s;
      })),
    (proto.webcast.im.MemberMessage.deserializeBinary = function (e) {
      var t = new r.BinaryReader(e),
        o = new proto.webcast.im.MemberMessage();
      return proto.webcast.im.MemberMessage.deserializeBinaryFromReader(o, t);
    }),
    (proto.webcast.im.MemberMessage.deserializeBinaryFromReader = function (
      e,
      t
    ) {
      for (; t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var o = new p.Common();
            t.readMessage(o, p.Common.deserializeBinaryFromReader),
              e.setCommon(o);
            break;
          case 2:
            o = new a.User();
            t.readMessage(o, a.User.deserializeBinaryFromReader), e.setUser(o);
            break;
          case 3:
            o = t.readInt64String();
            e.setMemberCount(o);
            break;
          case 4:
            o = new a.User();
            t.readMessage(o, a.User.deserializeBinaryFromReader),
              e.setOperator(o);
            break;
          case 5:
            o = t.readBool();
            e.setIsSetToAdmin(o);
            break;
          case 6:
            o = t.readBool();
            e.setIsTopUser(o);
            break;
          case 7:
            o = t.readInt64String();
            e.setRankScore(o);
            break;
          case 8:
            o = t.readInt64String();
            e.setTopUserNo(o);
            break;
          case 9:
            o = t.readInt64String();
            e.setEnterType(o);
            break;
          case 10:
            o = t.readInt64String();
            e.setAction(o);
            break;
          case 11:
            o = t.readString();
            e.setActionDescription(o);
            break;
          case 12:
            o = t.readInt64String();
            e.setUserId(o);
            break;
          case 13:
            o = new proto.webcast.im.MemberMessage.EffectConfig();
            t.readMessage(
              o,
              proto.webcast.im.MemberMessage.EffectConfig
                .deserializeBinaryFromReader
            ),
              e.setEffectConfig(o);
            break;
          case 14:
            o = t.readString();
            e.setPopStr(o);
            break;
          case 15:
            o = new proto.webcast.im.MemberMessage.EffectConfig();
            t.readMessage(
              o,
              proto.webcast.im.MemberMessage.EffectConfig
                .deserializeBinaryFromReader
            ),
              e.setEnterEffectConfig(o);
            break;
          case 16:
            o = new n.Image();
            t.readMessage(o, n.Image.deserializeBinaryFromReader),
              e.setBackgroundImage(o);
            break;
          case 17:
            o = new n.Image();
            t.readMessage(o, n.Image.deserializeBinaryFromReader),
              e.setBackgroundImageV2(o);
            break;
          case 18:
            o = new g.Text();
            t.readMessage(o, g.Text.deserializeBinaryFromReader),
              e.setAnchorDisplayText(o);
            break;
          case 19:
            o = new p.PublicAreaCommon();
            t.readMessage(o, p.PublicAreaCommon.deserializeBinaryFromReader),
              e.setPublicAreaCommon(o);
            break;
          case 20:
            o = t.readInt64String();
            e.setUserEnterTipType(o);
            break;
          case 21:
            o = t.readInt64String();
            e.setAnchorEnterTipType(o);
            break;
          case 22:
            o = e.getBuriedPointMap();
            t.readMessage(o, function (e, t) {
              r.Map.deserializeBinary(
                e,
                t,
                r.BinaryReader.prototype.readString,
                r.BinaryReader.prototype.readString,
                null,
                '',
                ''
              );
            });
            break;
          default:
            t.skipField();
        }
      }
      return e;
    }),
    (proto.webcast.im.MemberMessage.prototype.serializeBinary = function () {
      var e = new r.BinaryWriter();
      return (
        proto.webcast.im.MemberMessage.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
      );
    }),
    (proto.webcast.im.MemberMessage.serializeBinaryToWriter = function (e, t) {
      var o = void 0;
      null != (o = e.getCommon()) &&
        t.writeMessage(1, o, p.Common.serializeBinaryToWriter),
        null != (o = e.getUser()) &&
          t.writeMessage(2, o, a.User.serializeBinaryToWriter),
        (o = e.getMemberCount()),
        0 !== parseInt(o, 10) && t.writeInt64String(3, o),
        null != (o = e.getOperator()) &&
          t.writeMessage(4, o, a.User.serializeBinaryToWriter),
        (o = e.getIsSetToAdmin()) && t.writeBool(5, o),
        (o = e.getIsTopUser()) && t.writeBool(6, o),
        (o = e.getRankScore()),
        0 !== parseInt(o, 10) && t.writeInt64String(7, o),
        (o = e.getTopUserNo()),
        0 !== parseInt(o, 10) && t.writeInt64String(8, o),
        (o = e.getEnterType()),
        0 !== parseInt(o, 10) && t.writeInt64String(9, o),
        (o = e.getAction()),
        0 !== parseInt(o, 10) && t.writeInt64String(10, o),
        (o = e.getActionDescription()).length > 0 && t.writeString(11, o),
        (o = e.getUserId()),
        0 !== parseInt(o, 10) && t.writeInt64String(12, o),
        null != (o = e.getEffectConfig()) &&
          t.writeMessage(
            13,
            o,
            proto.webcast.im.MemberMessage.EffectConfig.serializeBinaryToWriter
          ),
        (o = e.getPopStr()).length > 0 && t.writeString(14, o),
        null != (o = e.getEnterEffectConfig()) &&
          t.writeMessage(
            15,
            o,
            proto.webcast.im.MemberMessage.EffectConfig.serializeBinaryToWriter
          ),
        null != (o = e.getBackgroundImage()) &&
          t.writeMessage(16, o, n.Image.serializeBinaryToWriter),
        null != (o = e.getBackgroundImageV2()) &&
          t.writeMessage(17, o, n.Image.serializeBinaryToWriter),
        null != (o = e.getAnchorDisplayText()) &&
          t.writeMessage(18, o, g.Text.serializeBinaryToWriter),
        null != (o = e.getPublicAreaCommon()) &&
          t.writeMessage(19, o, p.PublicAreaCommon.serializeBinaryToWriter),
        (o = e.getUserEnterTipType()),
        0 !== parseInt(o, 10) && t.writeInt64String(20, o),
        (o = e.getAnchorEnterTipType()),
        0 !== parseInt(o, 10) && t.writeInt64String(21, o),
        (o = e.getBuriedPointMap(!0)) &&
          o.getLength() > 0 &&
          o.serializeBinary(
            22,
            t,
            r.BinaryWriter.prototype.writeString,
            r.BinaryWriter.prototype.writeString
          );
    }),
    (proto.webcast.im.MemberMessage.EffectConfig.repeatedFields_ = [9, 13]),
    r.Message.GENERATE_TO_OBJECT &&
      ((proto.webcast.im.MemberMessage.EffectConfig.prototype.toObject =
        function (e) {
          return proto.webcast.im.MemberMessage.EffectConfig.toObject(e, this);
        }),
      (proto.webcast.im.MemberMessage.EffectConfig.toObject = function (e, t) {
        var o,
          s = {
            type: r.Message.getFieldWithDefault(t, 1, '0'),
            icon: (o = t.getIcon()) && n.Image.toObject(e, o),
            avatarPos: r.Message.getFieldWithDefault(t, 3, '0'),
            text: (o = t.getText()) && g.Text.toObject(e, o),
            textIcon: (o = t.getTextIcon()) && n.Image.toObject(e, o),
            stayTime: r.Message.getFieldWithDefault(t, 6, 0),
            animAssetId: r.Message.getFieldWithDefault(t, 7, '0'),
            badge: (o = t.getBadge()) && n.Image.toObject(e, o),
            flexSettingArrayList:
              null == (o = r.Message.getRepeatedField(t, 9)) ? void 0 : o,
            textIconOverlay:
              (o = t.getTextIconOverlay()) && n.Image.toObject(e, o),
            animatedBadge: (o = t.getAnimatedBadge()) && n.Image.toObject(e, o),
            hasSweepLight: r.Message.getBooleanFieldWithDefault(t, 12, !1),
            textFlexSettingArrayList:
              null == (o = r.Message.getRepeatedField(t, 13)) ? void 0 : o,
            centerAnimAssetId: r.Message.getFieldWithDefault(t, 14, '0'),
            dynamicImage: (o = t.getDynamicImage()) && n.Image.toObject(e, o),
            extraMap: (o = t.getExtraMap()) ? o.toObject(e, void 0) : [],
            mp4AnimAssetId: r.Message.getFieldWithDefault(t, 17, '0'),
            priority: r.Message.getFieldWithDefault(t, 18, '0'),
            maxWaitTime: r.Message.getFieldWithDefault(t, 19, '0'),
            dressId: r.Message.getFieldWithDefault(t, 20, ''),
            alignment: r.Message.getFieldWithDefault(t, 21, '0'),
            alignmentOffset: r.Message.getFieldWithDefault(t, 22, '0'),
            effectScene: r.Message.getFieldWithDefault(t, 23, ''),
            pieceValuesMap: (o = t.getPieceValuesMap())
              ? o.toObject(e, proto.webcast.data.TextPiece.toObject)
              : []
          };
        return e && (s.$jspbMessageInstance = t), s;
      })),
    (proto.webcast.im.MemberMessage.EffectConfig.deserializeBinary = function (
      e
    ) {
      var t = new r.BinaryReader(e),
        o = new proto.webcast.im.MemberMessage.EffectConfig();
      return proto.webcast.im.MemberMessage.EffectConfig.deserializeBinaryFromReader(
        o,
        t
      );
    }),
    (proto.webcast.im.MemberMessage.EffectConfig.deserializeBinaryFromReader =
      function (e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
          switch (t.getFieldNumber()) {
            case 1:
              var o = t.readInt64String();
              e.setType(o);
              break;
            case 2:
              o = new n.Image();
              t.readMessage(o, n.Image.deserializeBinaryFromReader),
                e.setIcon(o);
              break;
            case 3:
              o = t.readInt64String();
              e.setAvatarPos(o);
              break;
            case 4:
              o = new g.Text();
              t.readMessage(o, g.Text.deserializeBinaryFromReader),
                e.setText(o);
              break;
            case 5:
              o = new n.Image();
              t.readMessage(o, n.Image.deserializeBinaryFromReader),
                e.setTextIcon(o);
              break;
            case 6:
              o = t.readInt32();
              e.setStayTime(o);
              break;
            case 7:
              o = t.readInt64String();
              e.setAnimAssetId(o);
              break;
            case 8:
              o = new n.Image();
              t.readMessage(o, n.Image.deserializeBinaryFromReader),
                e.setBadge(o);
              break;
            case 9:
              for (
                var s = t.isDelimited()
                    ? t.readPackedInt64String()
                    : [t.readInt64String()],
                  i = 0;
                i < s.length;
                i++
              )
                e.addFlexSettingArray(s[i]);
              break;
            case 10:
              o = new n.Image();
              t.readMessage(o, n.Image.deserializeBinaryFromReader),
                e.setTextIconOverlay(o);
              break;
            case 11:
              o = new n.Image();
              t.readMessage(o, n.Image.deserializeBinaryFromReader),
                e.setAnimatedBadge(o);
              break;
            case 12:
              o = t.readBool();
              e.setHasSweepLight(o);
              break;
            case 13:
              for (
                s = t.isDelimited()
                  ? t.readPackedInt64String()
                  : [t.readInt64String()],
                  i = 0;
                i < s.length;
                i++
              )
                e.addTextFlexSettingArray(s[i]);
              break;
            case 14:
              o = t.readInt64String();
              e.setCenterAnimAssetId(o);
              break;
            case 15:
              o = new n.Image();
              t.readMessage(o, n.Image.deserializeBinaryFromReader),
                e.setDynamicImage(o);
              break;
            case 16:
              o = e.getExtraMap();
              t.readMessage(o, function (e, t) {
                r.Map.deserializeBinary(
                  e,
                  t,
                  r.BinaryReader.prototype.readString,
                  r.BinaryReader.prototype.readString,
                  null,
                  '',
                  ''
                );
              });
              break;
            case 17:
              o = t.readInt64String();
              e.setMp4AnimAssetId(o);
              break;
            case 18:
              o = t.readInt64String();
              e.setPriority(o);
              break;
            case 19:
              o = t.readInt64String();
              e.setMaxWaitTime(o);
              break;
            case 20:
              o = t.readString();
              e.setDressId(o);
              break;
            case 21:
              o = t.readInt64String();
              e.setAlignment(o);
              break;
            case 22:
              o = t.readInt64String();
              e.setAlignmentOffset(o);
              break;
            case 23:
              o = t.readString();
              e.setEffectScene(o);
              break;
            case 24:
              o = e.getPieceValuesMap();
              t.readMessage(o, function (e, t) {
                r.Map.deserializeBinary(
                  e,
                  t,
                  r.BinaryReader.prototype.readString,
                  r.BinaryReader.prototype.readMessage,
                  proto.webcast.data.TextPiece.deserializeBinaryFromReader,
                  '',
                  new proto.webcast.data.TextPiece()
                );
              });
              break;
            default:
              t.skipField();
          }
        }
        return e;
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.serializeBinary =
      function () {
        var e = new r.BinaryWriter();
        return (
          proto.webcast.im.MemberMessage.EffectConfig.serializeBinaryToWriter(
            this,
            e
          ),
          e.getResultBuffer()
        );
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.serializeBinaryToWriter =
      function (e, t) {
        var o = void 0;
        (o = e.getType()),
          0 !== parseInt(o, 10) && t.writeInt64String(1, o),
          null != (o = e.getIcon()) &&
            t.writeMessage(2, o, n.Image.serializeBinaryToWriter),
          (o = e.getAvatarPos()),
          0 !== parseInt(o, 10) && t.writeInt64String(3, o),
          null != (o = e.getText()) &&
            t.writeMessage(4, o, g.Text.serializeBinaryToWriter),
          null != (o = e.getTextIcon()) &&
            t.writeMessage(5, o, n.Image.serializeBinaryToWriter),
          0 !== (o = e.getStayTime()) && t.writeInt32(6, o),
          (o = e.getAnimAssetId()),
          0 !== parseInt(o, 10) && t.writeInt64String(7, o),
          null != (o = e.getBadge()) &&
            t.writeMessage(8, o, n.Image.serializeBinaryToWriter),
          (o = e.getFlexSettingArrayList()).length > 0 &&
            t.writePackedInt64String(9, o),
          null != (o = e.getTextIconOverlay()) &&
            t.writeMessage(10, o, n.Image.serializeBinaryToWriter),
          null != (o = e.getAnimatedBadge()) &&
            t.writeMessage(11, o, n.Image.serializeBinaryToWriter),
          (o = e.getHasSweepLight()) && t.writeBool(12, o),
          (o = e.getTextFlexSettingArrayList()).length > 0 &&
            t.writePackedInt64String(13, o),
          (o = e.getCenterAnimAssetId()),
          0 !== parseInt(o, 10) && t.writeInt64String(14, o),
          null != (o = e.getDynamicImage()) &&
            t.writeMessage(15, o, n.Image.serializeBinaryToWriter),
          (o = e.getExtraMap(!0)) &&
            o.getLength() > 0 &&
            o.serializeBinary(
              16,
              t,
              r.BinaryWriter.prototype.writeString,
              r.BinaryWriter.prototype.writeString
            ),
          (o = e.getMp4AnimAssetId()),
          0 !== parseInt(o, 10) && t.writeInt64String(17, o),
          (o = e.getPriority()),
          0 !== parseInt(o, 10) && t.writeInt64String(18, o),
          (o = e.getMaxWaitTime()),
          0 !== parseInt(o, 10) && t.writeInt64String(19, o),
          (o = e.getDressId()).length > 0 && t.writeString(20, o),
          (o = e.getAlignment()),
          0 !== parseInt(o, 10) && t.writeInt64String(21, o),
          (o = e.getAlignmentOffset()),
          0 !== parseInt(o, 10) && t.writeInt64String(22, o),
          (o = e.getEffectScene()).length > 0 && t.writeString(23, o),
          (o = e.getPieceValuesMap(!0)) &&
            o.getLength() > 0 &&
            o.serializeBinary(
              24,
              t,
              r.BinaryWriter.prototype.writeString,
              r.BinaryWriter.prototype.writeMessage,
              proto.webcast.data.TextPiece.serializeBinaryToWriter
            );
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getType =
      function () {
        return r.Message.getFieldWithDefault(this, 1, '0');
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setType = function (
      e
    ) {
      return r.Message.setProto3StringIntField(this, 1, e);
    }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getIcon =
      function () {
        return r.Message.getWrapperField(this, n.Image, 2);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setIcon = function (
      e
    ) {
      return r.Message.setWrapperField(this, 2, e);
    }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.clearIcon =
      function () {
        return this.setIcon(void 0);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.hasIcon =
      function () {
        return null != r.Message.getField(this, 2);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getAvatarPos =
      function () {
        return r.Message.getFieldWithDefault(this, 3, '0');
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setAvatarPos =
      function (e) {
        return r.Message.setProto3StringIntField(this, 3, e);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getText =
      function () {
        return r.Message.getWrapperField(this, g.Text, 4);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setText = function (
      e
    ) {
      return r.Message.setWrapperField(this, 4, e);
    }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.clearText =
      function () {
        return this.setText(void 0);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.hasText =
      function () {
        return null != r.Message.getField(this, 4);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getTextIcon =
      function () {
        return r.Message.getWrapperField(this, n.Image, 5);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setTextIcon =
      function (e) {
        return r.Message.setWrapperField(this, 5, e);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.clearTextIcon =
      function () {
        return this.setTextIcon(void 0);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.hasTextIcon =
      function () {
        return null != r.Message.getField(this, 5);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getStayTime =
      function () {
        return r.Message.getFieldWithDefault(this, 6, 0);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setStayTime =
      function (e) {
        return r.Message.setProto3IntField(this, 6, e);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getAnimAssetId =
      function () {
        return r.Message.getFieldWithDefault(this, 7, '0');
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setAnimAssetId =
      function (e) {
        return r.Message.setProto3StringIntField(this, 7, e);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getBadge =
      function () {
        return r.Message.getWrapperField(this, n.Image, 8);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setBadge = function (
      e
    ) {
      return r.Message.setWrapperField(this, 8, e);
    }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.clearBadge =
      function () {
        return this.setBadge(void 0);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.hasBadge =
      function () {
        return null != r.Message.getField(this, 8);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getFlexSettingArrayList =
      function () {
        return r.Message.getRepeatedField(this, 9);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setFlexSettingArrayList =
      function (e) {
        return r.Message.setField(this, 9, e || []);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.addFlexSettingArray =
      function (e, t) {
        return r.Message.addToRepeatedField(this, 9, e, t);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.clearFlexSettingArrayList =
      function () {
        return this.setFlexSettingArrayList([]);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getTextIconOverlay =
      function () {
        return r.Message.getWrapperField(this, n.Image, 10);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setTextIconOverlay =
      function (e) {
        return r.Message.setWrapperField(this, 10, e);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.clearTextIconOverlay =
      function () {
        return this.setTextIconOverlay(void 0);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.hasTextIconOverlay =
      function () {
        return null != r.Message.getField(this, 10);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getAnimatedBadge =
      function () {
        return r.Message.getWrapperField(this, n.Image, 11);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setAnimatedBadge =
      function (e) {
        return r.Message.setWrapperField(this, 11, e);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.clearAnimatedBadge =
      function () {
        return this.setAnimatedBadge(void 0);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.hasAnimatedBadge =
      function () {
        return null != r.Message.getField(this, 11);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getHasSweepLight =
      function () {
        return r.Message.getBooleanFieldWithDefault(this, 12, !1);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setHasSweepLight =
      function (e) {
        return r.Message.setProto3BooleanField(this, 12, e);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getTextFlexSettingArrayList =
      function () {
        return r.Message.getRepeatedField(this, 13);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setTextFlexSettingArrayList =
      function (e) {
        return r.Message.setField(this, 13, e || []);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.addTextFlexSettingArray =
      function (e, t) {
        return r.Message.addToRepeatedField(this, 13, e, t);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.clearTextFlexSettingArrayList =
      function () {
        return this.setTextFlexSettingArrayList([]);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getCenterAnimAssetId =
      function () {
        return r.Message.getFieldWithDefault(this, 14, '0');
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setCenterAnimAssetId =
      function (e) {
        return r.Message.setProto3StringIntField(this, 14, e);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getDynamicImage =
      function () {
        return r.Message.getWrapperField(this, n.Image, 15);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setDynamicImage =
      function (e) {
        return r.Message.setWrapperField(this, 15, e);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.clearDynamicImage =
      function () {
        return this.setDynamicImage(void 0);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.hasDynamicImage =
      function () {
        return null != r.Message.getField(this, 15);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getExtraMap =
      function (e) {
        return r.Message.getMapField(this, 16, e, null);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.clearExtraMap =
      function () {
        return this.getExtraMap().clear(), this;
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getMp4AnimAssetId =
      function () {
        return r.Message.getFieldWithDefault(this, 17, '0');
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setMp4AnimAssetId =
      function (e) {
        return r.Message.setProto3StringIntField(this, 17, e);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getPriority =
      function () {
        return r.Message.getFieldWithDefault(this, 18, '0');
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setPriority =
      function (e) {
        return r.Message.setProto3StringIntField(this, 18, e);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getMaxWaitTime =
      function () {
        return r.Message.getFieldWithDefault(this, 19, '0');
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setMaxWaitTime =
      function (e) {
        return r.Message.setProto3StringIntField(this, 19, e);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getDressId =
      function () {
        return r.Message.getFieldWithDefault(this, 20, '');
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setDressId =
      function (e) {
        return r.Message.setProto3StringField(this, 20, e);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getAlignment =
      function () {
        return r.Message.getFieldWithDefault(this, 21, '0');
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setAlignment =
      function (e) {
        return r.Message.setProto3StringIntField(this, 21, e);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getAlignmentOffset =
      function () {
        return r.Message.getFieldWithDefault(this, 22, '0');
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setAlignmentOffset =
      function (e) {
        return r.Message.setProto3StringIntField(this, 22, e);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getEffectScene =
      function () {
        return r.Message.getFieldWithDefault(this, 23, '');
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.setEffectScene =
      function (e) {
        return r.Message.setProto3StringField(this, 23, e);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.getPieceValuesMap =
      function (e) {
        return r.Message.getMapField(this, 24, e, proto.webcast.data.TextPiece);
      }),
    (proto.webcast.im.MemberMessage.EffectConfig.prototype.clearPieceValuesMap =
      function () {
        return this.getPieceValuesMap().clear(), this;
      }),
    (proto.webcast.im.MemberMessage.prototype.getCommon = function () {
      return r.Message.getWrapperField(this, p.Common, 1);
    }),
    (proto.webcast.im.MemberMessage.prototype.setCommon = function (e) {
      return r.Message.setWrapperField(this, 1, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.clearCommon = function () {
      return this.setCommon(void 0);
    }),
    (proto.webcast.im.MemberMessage.prototype.hasCommon = function () {
      return null != r.Message.getField(this, 1);
    }),
    (proto.webcast.im.MemberMessage.prototype.getUser = function () {
      return r.Message.getWrapperField(this, a.User, 2);
    }),
    (proto.webcast.im.MemberMessage.prototype.setUser = function (e) {
      return r.Message.setWrapperField(this, 2, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.clearUser = function () {
      return this.setUser(void 0);
    }),
    (proto.webcast.im.MemberMessage.prototype.hasUser = function () {
      return null != r.Message.getField(this, 2);
    }),
    (proto.webcast.im.MemberMessage.prototype.getMemberCount = function () {
      return r.Message.getFieldWithDefault(this, 3, '0');
    }),
    (proto.webcast.im.MemberMessage.prototype.setMemberCount = function (e) {
      return r.Message.setProto3StringIntField(this, 3, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.getOperator = function () {
      return r.Message.getWrapperField(this, a.User, 4);
    }),
    (proto.webcast.im.MemberMessage.prototype.setOperator = function (e) {
      return r.Message.setWrapperField(this, 4, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.clearOperator = function () {
      return this.setOperator(void 0);
    }),
    (proto.webcast.im.MemberMessage.prototype.hasOperator = function () {
      return null != r.Message.getField(this, 4);
    }),
    (proto.webcast.im.MemberMessage.prototype.getIsSetToAdmin = function () {
      return r.Message.getBooleanFieldWithDefault(this, 5, !1);
    }),
    (proto.webcast.im.MemberMessage.prototype.setIsSetToAdmin = function (e) {
      return r.Message.setProto3BooleanField(this, 5, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.getIsTopUser = function () {
      return r.Message.getBooleanFieldWithDefault(this, 6, !1);
    }),
    (proto.webcast.im.MemberMessage.prototype.setIsTopUser = function (e) {
      return r.Message.setProto3BooleanField(this, 6, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.getRankScore = function () {
      return r.Message.getFieldWithDefault(this, 7, '0');
    }),
    (proto.webcast.im.MemberMessage.prototype.setRankScore = function (e) {
      return r.Message.setProto3StringIntField(this, 7, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.getTopUserNo = function () {
      return r.Message.getFieldWithDefault(this, 8, '0');
    }),
    (proto.webcast.im.MemberMessage.prototype.setTopUserNo = function (e) {
      return r.Message.setProto3StringIntField(this, 8, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.getEnterType = function () {
      return r.Message.getFieldWithDefault(this, 9, '0');
    }),
    (proto.webcast.im.MemberMessage.prototype.setEnterType = function (e) {
      return r.Message.setProto3StringIntField(this, 9, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.getAction = function () {
      return r.Message.getFieldWithDefault(this, 10, '0');
    }),
    (proto.webcast.im.MemberMessage.prototype.setAction = function (e) {
      return r.Message.setProto3StringIntField(this, 10, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.getActionDescription =
      function () {
        return r.Message.getFieldWithDefault(this, 11, '');
      }),
    (proto.webcast.im.MemberMessage.prototype.setActionDescription = function (
      e
    ) {
      return r.Message.setProto3StringField(this, 11, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.getUserId = function () {
      return r.Message.getFieldWithDefault(this, 12, '0');
    }),
    (proto.webcast.im.MemberMessage.prototype.setUserId = function (e) {
      return r.Message.setProto3StringIntField(this, 12, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.getEffectConfig = function () {
      return r.Message.getWrapperField(
        this,
        proto.webcast.im.MemberMessage.EffectConfig,
        13
      );
    }),
    (proto.webcast.im.MemberMessage.prototype.setEffectConfig = function (e) {
      return r.Message.setWrapperField(this, 13, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.clearEffectConfig = function () {
      return this.setEffectConfig(void 0);
    }),
    (proto.webcast.im.MemberMessage.prototype.hasEffectConfig = function () {
      return null != r.Message.getField(this, 13);
    }),
    (proto.webcast.im.MemberMessage.prototype.getPopStr = function () {
      return r.Message.getFieldWithDefault(this, 14, '');
    }),
    (proto.webcast.im.MemberMessage.prototype.setPopStr = function (e) {
      return r.Message.setProto3StringField(this, 14, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.getEnterEffectConfig =
      function () {
        return r.Message.getWrapperField(
          this,
          proto.webcast.im.MemberMessage.EffectConfig,
          15
        );
      }),
    (proto.webcast.im.MemberMessage.prototype.setEnterEffectConfig = function (
      e
    ) {
      return r.Message.setWrapperField(this, 15, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.clearEnterEffectConfig =
      function () {
        return this.setEnterEffectConfig(void 0);
      }),
    (proto.webcast.im.MemberMessage.prototype.hasEnterEffectConfig =
      function () {
        return null != r.Message.getField(this, 15);
      }),
    (proto.webcast.im.MemberMessage.prototype.getBackgroundImage = function () {
      return r.Message.getWrapperField(this, n.Image, 16);
    }),
    (proto.webcast.im.MemberMessage.prototype.setBackgroundImage = function (
      e
    ) {
      return r.Message.setWrapperField(this, 16, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.clearBackgroundImage =
      function () {
        return this.setBackgroundImage(void 0);
      }),
    (proto.webcast.im.MemberMessage.prototype.hasBackgroundImage = function () {
      return null != r.Message.getField(this, 16);
    }),
    (proto.webcast.im.MemberMessage.prototype.getBackgroundImageV2 =
      function () {
        return r.Message.getWrapperField(this, n.Image, 17);
      }),
    (proto.webcast.im.MemberMessage.prototype.setBackgroundImageV2 = function (
      e
    ) {
      return r.Message.setWrapperField(this, 17, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.clearBackgroundImageV2 =
      function () {
        return this.setBackgroundImageV2(void 0);
      }),
    (proto.webcast.im.MemberMessage.prototype.hasBackgroundImageV2 =
      function () {
        return null != r.Message.getField(this, 17);
      }),
    (proto.webcast.im.MemberMessage.prototype.getAnchorDisplayText =
      function () {
        return r.Message.getWrapperField(this, g.Text, 18);
      }),
    (proto.webcast.im.MemberMessage.prototype.setAnchorDisplayText = function (
      e
    ) {
      return r.Message.setWrapperField(this, 18, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.clearAnchorDisplayText =
      function () {
        return this.setAnchorDisplayText(void 0);
      }),
    (proto.webcast.im.MemberMessage.prototype.hasAnchorDisplayText =
      function () {
        return null != r.Message.getField(this, 18);
      }),
    (proto.webcast.im.MemberMessage.prototype.getPublicAreaCommon =
      function () {
        return r.Message.getWrapperField(this, p.PublicAreaCommon, 19);
      }),
    (proto.webcast.im.MemberMessage.prototype.setPublicAreaCommon = function (
      e
    ) {
      return r.Message.setWrapperField(this, 19, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.clearPublicAreaCommon =
      function () {
        return this.setPublicAreaCommon(void 0);
      }),
    (proto.webcast.im.MemberMessage.prototype.hasPublicAreaCommon =
      function () {
        return null != r.Message.getField(this, 19);
      }),
    (proto.webcast.im.MemberMessage.prototype.getUserEnterTipType =
      function () {
        return r.Message.getFieldWithDefault(this, 20, '0');
      }),
    (proto.webcast.im.MemberMessage.prototype.setUserEnterTipType = function (
      e
    ) {
      return r.Message.setProto3StringIntField(this, 20, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.getAnchorEnterTipType =
      function () {
        return r.Message.getFieldWithDefault(this, 21, '0');
      }),
    (proto.webcast.im.MemberMessage.prototype.setAnchorEnterTipType = function (
      e
    ) {
      return r.Message.setProto3StringIntField(this, 21, e);
    }),
    (proto.webcast.im.MemberMessage.prototype.getBuriedPointMap = function (e) {
      return r.Message.getMapField(this, 22, e, null);
    }),
    (proto.webcast.im.MemberMessage.prototype.clearBuriedPointMap =
      function () {
        return this.getBuriedPointMap().clear(), this;
      });

  s.object.extend(t, proto.webcast.im);
};
