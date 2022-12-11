interface Bus {
  list: any
}
class Bus {
  constructor () {
    this.list = {} // 收集订阅
  }

  // 订阅
  $on (name:string, fn:Function) {
    this.list[name] = this.list[name] || []
    this.list[name].push(fn)
  }

  // 发布
  $emit (name:string, data: any) {
    if (this.list[name]) {
      this.list[name].forEach((fn:Function) => { fn(data) })
    }
  }

  // 取消订阅
  $off (name:string) {
    if (this.list[name]) {
      delete this.list[name]
    }
  }
}
export default new Bus()
