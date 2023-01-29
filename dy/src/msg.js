export default class msg {
  constructor(e) {
    this.messageIdsForDistinct = new Set();
    this.messageNotUseCache = new Map();
    this.eventsMap = new Map();
    this.performanceEvents = new Map();
    this.messageModules = e.modules;
  }
  onPerformanceEvent(e, t) {
    var a;
    const o =
      null !== (a = this.performanceEvents.get(e)) && void 0 !== a ? a : [];
    o.push(t);
    this.performanceEvents.set(e, o);
  }
  offPerformanceEvent(e, t) {
    var a;
    const o =
      null !== (a = this.performanceEvents.get(e)) && void 0 !== a ? a : [];
    o &&
      this.performanceEvents.set(
        e,
        o.filter((e) => !!t && e !== t)
      );
  }
  emitPerformanceEvent(e, t) {
    var a;
    this.info('performance events', () => e);
    const o =
      null !== (a = this.performanceEvents.get(e)) && void 0 !== a ? a : [];
    (null == o ? void 0 : o.length) && o.forEach((e) => e(t));
  }
  on(e, t) {
    var a;
    const o = null !== (a = this.eventsMap.get(e)) && void 0 !== a ? a : [];
    o.push(t);
    this.eventsMap.set(e, o);
    this.runCacheEvents(e, t);
  }
  off(e, t) {
    const a = this.eventsMap.get(e);
    a &&
      this.eventsMap.set(
        e,
        a.filter((e) => !!t && e !== t)
      );
  }
  stop() {
    this.messageIdsForDistinct = new Set();
    this.messageNotUseCache = new Map();
  }
  runCacheEvents(e, t) {
    for (const [a, o] of this.messageNotUseCache.entries()) {
      const r = this.messageModules[e];

      if (o && r && this.isCorrectEventName(e, a)) {
        o.forEach((e) => {
          const a = e.getPayload_asU8();
          const o = r.deserializeBinary(a);
          t(o, e, a);
        });
        this.messageNotUseCache.delete(a);
      }
    }
  }
  isCorrectEventName(e, t) {
    return `Webcast${e}` === t || t === e;
  }
  runAllEvents(e, t) {
    // var a;
    for (const [o, i] of this.eventsMap.entries()) {
      // console.log('run-----', o);

      const a = this.messageModules[o];
      if (i && a && this.isCorrectEventName(o, e)) {
        const r = t.getPayload_asU8(),
          s = a.deserializeBinary(r);
        console.log(s);
        return void i.forEach((e) => {
          e(s, t, r);
        });
      }
    }
    // const r =
    //   null !== (a = this.messageNotUseCache.get(e)) && void 0 !== a ? a : [];
    // if (r.length > o.ej && r.shift()) {
    //   r.push(t);
    //   this.messageNotUseCache.set(e, r);
    // }
  }
  emit(e) {
    const t = e.getMessagesList();
    t.length &&
      t.forEach((e) => {
        const t = e.getMethod(),
          a = 'RoomMessage' === t ? t : e.getMsgId();
        if (!this.messageIdsForDistinct.has(a)) {
          this.messageIdsForDistinct.add(a);
          this.runAllEvents(t, e);
        }
      });
  }
}
