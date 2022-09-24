// 信息存储
export function localSet (key, val) {
  window.chrome.storage.sync.set({ [key]: val })
}
export function localGet (key) {
  return new Promise((resolve) => {
    window.chrome.storage.sync.get(key, res => {
      resolve(res)
    })
  })
}
export function localRemove (key) {
  return window.chrome.storage.sync.remove(key)
}

export function getPageInfo (key) { // 获取当前页面信息
  return new Promise((resolve) => {
    window.chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
      resolve(tabs)
    })
  })
}
