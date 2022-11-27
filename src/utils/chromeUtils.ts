declare namespace ReturnType {
  type id = number
}
// 信息存储
export function localSet (key:string, val:string) {
  window.chrome.storage.sync.set({ [key]: val })
}
export function localGet (key:string[]) {
  return new Promise((resolve) => {
    window.chrome.storage.sync.get(key, (res:string) => {
      resolve(res)
    })
  })
}
export function localRemove (key:string) {
  return window.chrome.storage.sync.remove(key)
}

export function getCurrentTabId ():Promise<ReturnType.id> { // 获取当前页面id
  return new Promise((resolve) => {
    window.chrome.tabs.query({ active: true, currentWindow: true }, function (tabs:[{id:number}]) {
      resolve(tabs[0].id)
    })
  })
}

export function getPageInfo () { // 获取当前页面信息
  return new Promise((resolve) => {
    window.chrome.tabs.query({ active: true, currentWindow: true }, (tabs:[{id:number}]) => {
      resolve(tabs)
    })
  })
}

export function sendData2Main (tabId:number, data:any, cb?:Function) { // popup/background发送消息到main,并处理返回的信息(main发送消息，先发给background，background再转发给popup)
  window.chrome.tabs.sendMessage(tabId, data, function (res:any) {
    cb && cb(res)
  })
}

export function receiveData (cb?:Function) { // 非popup接收信息
  window.chrome.extension.onMessage.addListener((req:any, sender:any, sendRes:any) => {
    cb && cb(req, sender, sendRes)
  })
}

export function sendData (data:any, cb?:Function) { // 非popup发送信息
  window.chrome.runtime.sendMessage(data, (res:any) => { // 接收返回的消息
    cb && cb(res)
  })
}

export function receiveConnetData (cb?:Function) { // 接口信息获取
  window.chrome.runtime.onConnect.addListener(function (port:any) {
    port.onMessage.addListener(cb)

    port.onDisconnect.addListener(function (port:any) {
      port.onMessage.removeListener(cb)
    })
  })
}

export function getBackgroundData (data:any) { // popup获取background数据
  return window.chrome.extension.getBackgroundPage()[data]
}

export function openNewPage (url:string) { // 页面打开新窗口链接
  window.chrome.tabs.create({ url: url })
}

export function listenPageCreated (cb?:Function) { // 监听窗口新建
  window.chrome.tabs.onCreated.addListener(function (res:string) {
    cb && cb(res)
  })
}

export function listenPageActivated (cb?:Function) { // 监听窗口切换
  window.chrome.tabs.onActivated.addListener(function (res:string) {
    cb && cb(res)
  })
}
