/**
 * 发送消息
 */
const sendInfoEvent = () => { // 发送信息，发送三次（0s,3s,6s）
  let sendTime = 0
  const sendInfo = () => { // 发送信息
    window.chrome.runtime.sendMessage(// 将消息发送给background/background.js中转给插件页面
      {
        sendTime: sendTime
      }, () => { // 接收返回的消息
      // console.log(123, res)
      }
    )
  }
  const infoTimer = setInterval(() => {
    sendTime++
    sendInfo()
    if (sendTime > 2) {
      clearInterval(infoTimer)
    }
  }, 3000)
  sendInfo()
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
