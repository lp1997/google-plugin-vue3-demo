/**
 * 发送消息
 */
const sendInfoEvent = () => {
  // 将消息发送给background/background.js中转给插件页面
  // window.chrome.runtime.sendMessage()
}
/**
  * 监听传递的消息
  */
const dataListener = () => {
  window.chrome.extension.onMessage.addListener(function (request:any) {
    console.log('监听到的返回', request)
  })
}
const init = () => {
  sendInfoEvent()// 发送消息
  dataListener()// 监听传递的消息
}
init()
