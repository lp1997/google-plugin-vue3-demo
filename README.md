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
npm run build
```

### Lints and fixes files

```
npm run lint
```

### 文件结构

>src
>├─assets -- `资源文件`
>>├─icon128.png
  ├─icon16.png
  └─icon48.png
>
>├─background -- `插件背景文件（浏览器运行则一直在运行/通信存在于插件方）`
>>├─background.js -- `通用事件`
  └─menu.js -- `鼠标右键菜单`
>
>├─js -- `引用的lib`
>>└─lib
>>>└─jquery-2.1.3.min.js
>
>├─plugins -- `打包的主要文件`
>>├─main.js -- `运行于当前页面的js，可用于操控当前页面的内容，dom等（通信存在于web页面方）`
>> └─manifest.json -- `配置文件（必须）`
>
>├─popup -- `插件页面（通信存在于插件方）`
>>├─index.html
>> ├─main.js
>> └─components
>>>├─App.vue
>> └─pages
>>>>├─PageHello.vue
>> └─PageMain.vue
>
>└─utils -- `工具函数`
>>├─chromeUtils.js -- `chrome API相关函数`
  └─hotReload.js -- `热打包配置文件，npm run watch依赖`

### 相关学习文档

[插件/页面间消息传递](https://blog.csdn.net/justdoshare/article/details/121667797)
[通过devToole劫持获取接口返回数据](https://blog.csdn.net/chantor7/article/details/124588045)
