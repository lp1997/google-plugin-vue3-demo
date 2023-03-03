/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/devtools/devtools.ts":
/*!**********************************!*\
  !*** ./src/devtools/devtools.ts ***!
  \**********************************/
/***/ (function() {

eval("\n\nconst CD = window.chrome.devtools; // const log = (...params:any) => CD.inspectedWindow.eval(`console.log(...${JSON.stringify(params)})`)\n// 与background消息通信-长连接\n\nCD.network.onRequestFinished.addListener(function (request) {\n  // request 包含请求响应数据，如：url,响应内容等\n  // request.request.url 接口 的url\n  // request.getContent 接口返回的内容\n  // log(request)\n  if (request._resourceType === 'xhr') {\n    // setTimeout(() => {\n    request.getContent(function (content) {\n      const resData = JSON.parse(content);\n      const url = request.request.url; // log(request.request.url, resData)\n      // 监听background消息\n\n      const port = window.chrome.runtime.connect({\n        name: 'devtools'\n      });\n      port.onMessage.addListener(() => {}); // 往background发送消息\n\n      port.postMessage({\n        name: 'web请求',\n        tabId: CD.inspectedWindow.tabId,\n        data: {\n          url: url,\n          data: resData\n        } // 定义要返回的数据 如：request.request.url\n\n      });\n    }); // }, 2000)\n  }\n});\n\n//# sourceURL=webpack://google-plugin-vue3-demo/./src/devtools/devtools.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/devtools/devtools.ts"]();
/******/ 	
/******/ })()
;