const CD = window.chrome.devtools
// const log = (...params:any) => CD.inspectedWindow.eval(`console.log(...${JSON.stringify(params)})`)
// 与background消息通信-长连接
CD.network.onRequestFinished.addListener(
  function (request:any) {
    // request 包含请求响应数据，如：url,响应内容等
    // request.request.url 接口 的url
    // request.getContent 接口返回的内容
    // log(request)
    if (request._resourceType === 'xhr') {
      // setTimeout(() => {
      request.getContent(function (content:string) {
        const resData = JSON.parse(content)
        const url = request.request.url
        // log(request.request.url, resData)
        // 监听background消息
        const port = window.chrome.runtime.connect({ name: 'devtools' })
        port.onMessage.addListener(() => {
        })
        // 往background发送消息
        port.postMessage({
          name: 'web请求',
          tabId: CD.inspectedWindow.tabId,
          data: {
            url: url,
            data: resData
          } // 定义要返回的数据 如：request.request.url
        })
      })
      // }, 2000)
    }
  }
)
