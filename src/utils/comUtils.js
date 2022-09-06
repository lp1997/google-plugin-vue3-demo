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

export function getCurrentTabId (key) { // 获取当前页面id
  return new Promise((resolve, reject) => {
    window.chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      resolve(tabs.length ? tabs[0].windowId : null)
    })
  })
}

export function getPageInfo (key) { // 获取当前页面信息
  return new Promise((resolve) => {
    window.chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
      resolve(tabs)
    })
  })
}
