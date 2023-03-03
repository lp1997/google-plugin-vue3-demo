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

/***/ "./src/plugins/main.ts":
/*!*****************************!*\
  !*** ./src/plugins/main.ts ***!
  \*****************************/
/***/ (function() {

eval("\n/**\r\n * 发送消息\r\n */\n\nconst sendInfoEvent = () => {// 将消息发送给background/background.js中转给插件页面\n  // window.chrome.runtime.sendMessage()\n};\n/**\r\n  * 监听传递的消息\r\n  */\n\n\nconst dataListener = () => {\n  window.chrome.extension.onMessage.addListener(function (request) {\n    console.log('监听到的返回', request);\n  });\n};\n\nconst init = () => {\n  sendInfoEvent(); // 发送消息\n\n  dataListener(); // 监听传递的消息\n};\n\ninit();\n\n//# sourceURL=webpack://google-plugin-vue3-demo/./src/plugins/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/plugins/main.ts"]();
/******/ 	
/******/ })()
;