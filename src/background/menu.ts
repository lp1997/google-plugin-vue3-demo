
// 添加右键菜单功能
window.chrome.contextMenus.create({
  title: 'tool',
  id: '1', // 菜单项ID
  onclick: function () {
    alert('点击了')
  } // 单击时触发的方法
  // parentId: 1, // 右键菜单项的父菜单项ID。指定父菜单项将会使此菜单项成为父菜单项的子菜单
  // type: 'normal', // 类型，可选：["normal", "checkbox", "radio", "separator"]，默认 normal
  // title: '菜单的名字', // 显示的文字，除非为“separator”类型否则此参数必需，如果类型为“selection”，可以使用%s显示选定的文本
  // contexts: ['page'], // 上下文环境，可选：["all", "page", "frame", "selection", "link", "editable", "image", "video", "audio"]，默认page
  // parentId: 1, // 右键菜单项的父菜单项ID。指定父菜单项将会使此菜单项成为父菜单项的子菜单
  // documentUrlPatterns: [''] // 只在某些页面显示此右键菜单
})
