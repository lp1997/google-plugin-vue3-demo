import hotReload from '@/utils/hotReload'
hotReload()

console.log('hello world background')

window.chrome.runtime.onMessage.addListener(async (req:any, sender:any, sendRes:any) => {
  sendRes('发送的信息')
})
