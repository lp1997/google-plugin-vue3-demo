window.chrome.runtime.sendMessage(
  {
    info: 'info'
  }, res => {
    console.log('收到的信息：', res)
  }
)
