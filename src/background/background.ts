import { getCurrentTabId, receiveData, sendData2Main, receiveConnetData } from '@/utils/chromeUtils'
import hotReload from '@/utils/hotReload'

const receiveDataInfo = () => { // 接收数据
  let hasGetRequest = false
  receiveData(async (request:any, sender:any, callback:Function) => { // 直接设置全局属性,插件页面可以直接获取
    callback(request.loadTime)
    const tabId = await getCurrentTabId()
    if (!hasGetRequest) { // 请求监听只需要一次
      hasGetRequest = true
      // 监听请求返回
      const extensionListener = async function (message:{name:string, data:any}) {
        // const extensionListener = async function (message:{name:string, data:any}, sender:any, sendResponse:any) {
        if (message.name === 'web请求') { // 筛选表格数据的请求接口
          // 在背景页面发送消息，需要当前 tabID
          sendData2Main(tabId, message.data, function () {
          })
        }
      }
      receiveConnetData(extensionListener)
    }
  })
}

const init = () => {
  hotReload()
  receiveDataInfo()
}
init()
