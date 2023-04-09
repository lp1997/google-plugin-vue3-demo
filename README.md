# 谷歌V2插件-vue3-Demo

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run watch
```

### Compiles and minifies for production
```
npm run build:prod
```

### Compiles and minifies for local
```
npm run build:local
```

### Lints and fixes files

```
npm run lint
```

### 文件结构

```
src
├─assets -- 资源文件
  ├─icon128.png
  ├─icon16.png
  └─icon48.png
├─background -- 插件背景文件（浏览器运行则一直在运行/通信存在于浏览器方）
  ├─background.ts -- 中间者
  └─menu.ts -- 鼠标右键菜单
├─devtools -- 浏览器调试工具功能
  ├─devtools.html -- 浏览器调试工具页面
  └─devtools.ts -- 浏览器调试工具功能（可以用来监听网络请求）
├─plugins -- 打包的主要文件
  ├─main.ts -- 运行于当前web页面的ts，可用于操控当前页面，相当于在调试工具的控制台操作（通信存在于web页面方）
  └─manifest.json -- 配置文件（必须）
├─popup -- 插件页面（通信存在于插件方）
  ├─index.html
  ├─main.ts
  ├─typeList.ts -- 定义类型
  ├─router -- 路由
    ├─routers.ts -- 路由列表
    └─index.ts -- 路由配置
  └─components
    ├─App.vue
    └─pages
      ├─PageHello.vue
      ├─PageSetting.vue
      └─PageMain.vue
└─utils -- 工具函数
  ├─chromeUtils.ts -- chrome API相关函数
  ├─utils.ts -- vue相关函数
  └─hotReload.ts -- 热打包配置文件，npm run watch依赖

```

### 相关学习文档

- [说明与开发流程](https://note.youdao.com/s/EVzR5TNv)
- [插件/页面间消息传递](https://blog.csdn.net/justdoshare/article/details/121667797)
- [通过devTool劫持获取接口返回数据](https://blog.csdn.net/chantor7/article/details/124588045)
