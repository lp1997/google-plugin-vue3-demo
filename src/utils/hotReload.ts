// 加载文件

const filesInDirectory = (dir:any) =>
  new Promise(resolve =>
    dir.createReader().readEntries((entries:any) => {
      Promise.all(
        entries
          .filter((e:any) => e.name[0] !== '.')
          .map((e:any) =>
            e.isDirectory ? filesInDirectory(e) : new Promise(resolve => e.file(resolve))
          )
      )
        .then(files => [].concat(...files))
        .then(resolve)
    })
  )

// 遍历插件目录，读取文件信息，组合文件名称和修改时间成数据
const timestampForFilesInDirectory = (dir:any) =>
  filesInDirectory(dir).then((files:any) =>
    files.map((f:any) => f.name + f.lastModifiedDate).join()
  )

// 刷新当前活动页
const reload = () => {
  window.chrome.tabs.query({
    active: true,
    currentWindow: true
  },
  (tabs:any) => {
    // NB: see https://github.com/xpl/crx-hotreload/issues/5
    if (tabs[0]) {
      window.chrome.tabs.reload(tabs[0].id)
    }
    // 强制刷新页面
    window.chrome.runtime.reload()
  }
  )
}

// 观察文件改动
const watchChanges = (dir:any, lastTimestamp?:Date) => {
  timestampForFilesInDirectory(dir).then(timestamp => {
    // 文件没有改动则循环监听watchChanges方法
    if (!lastTimestamp || lastTimestamp === timestamp) {
      setTimeout(() => watchChanges(dir, timestamp), 1000) // retry after 1s
    } else {
      // 强制刷新页面
      reload()
    }
  })
}

const hotReload = () => {
  window.chrome.management.getSelf((self:any) => {
    if (self.installType === 'development') {
      // 获取插件目录，监听文件变化
      window.chrome.runtime.getPackageDirectoryEntry((dir:any) => watchChanges(dir))
    }
  })
}

export default hotReload
