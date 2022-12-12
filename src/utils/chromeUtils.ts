declare namespace ReturnType {
  type id = number
}
// 信息存储
export const localSet = (key:string, val:string) => {
  window.chrome.storage.sync.set({ [key]: val })
}
export const localGet = (key:string[]) => {
  return new Promise((resolve) => {
    window.chrome.storage.sync.get(key, (res:string) => {
      resolve(res)
    })
  })
}
export const localRemove = (key:string) => {
  return window.chrome.storage.sync.remove(key)
}

export const getCurrentTabId = ():Promise<ReturnType.id> => { // 获取当前页面id
  return new Promise((resolve) => {
    window.chrome.tabs.query({ active: true, currentWindow: true }, (tabs:[{id:number}]) => {
      resolve(tabs[0].id)
    })
  })
}

export const getPageInfo = () => { // 获取当前页面信息
  return new Promise((resolve) => {
    window.chrome.tabs.query({ active: true, currentWindow: true }, (tabs:[{id:number}]) => {
      resolve(tabs)
    })
  })
}

export const sendData2Main = (tabId:number, data:any, cb?:Function) => { // 发送消息到main
  window.chrome.tabs.sendMessage(tabId, data, (res:any) => {
    cb && cb(res)
  })
}

export const receiveData = (cb?:Function) => { // 非popup接收信息
  window.chrome.runtime.onMessage.addListener((req:any, sender:any, sendRes:any) => {
    cb && cb(req, sender, sendRes)
  })
}

export const sendData = (data:any, cb?:Function) => { // 发送信息给background
  window.chrome.runtime.sendMessage(data, (res:any) => { // 接收返回的消息
    cb && cb(res)
  })
}

export const receiveConnetData = (cb?:Function) => { // 接口信息获取
  window.chrome.runtime.onConnect.addListener((port:any) => {
    port.onMessage.addListener(cb)

    port.onDisconnect.addListener((port:any) => {
      port.onMessage.removeListener(cb)
    })
  })
}

export const getBackgroundData = (data:any) => { // popup获取background数据
  return window.chrome.extension.getBackgroundPage()[data]
}

export const openNewPage = (url:string) => { // 页面打开新窗口链接
  window.chrome.tabs.create({ url: url })
}

export const listenPageCreated = (cb?:Function) => { // 监听窗口新建
  window.chrome.tabs.onCreated.addListener((res:string) => {
    cb && cb(res)
  })
}

export const listenPageActivated = (cb?:Function) => { // 监听窗口切换
  window.chrome.tabs.onActivated.addListener((res:string) => {
    cb && cb(res)
  })
}
