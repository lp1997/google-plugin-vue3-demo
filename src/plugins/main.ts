window.chrome.runtime.sendMessage(
  {
    info: 'info'
  }, (res:string) => {
    console.log('收到的信息：', res)
  }
)
