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

/***/ "./src/background/menu.ts":
/*!********************************!*\
  !*** ./src/background/menu.ts ***!
  \********************************/
/***/ (function() {

eval(" // 添加右键菜单功能\n\nwindow.chrome.contextMenus.create({\n  title: 'tool',\n  id: '1',\n  onclick: function () {\n    alert('点击了');\n  } // 单击时触发的方法\n  // parentId: 1, // 右键菜单项的父菜单项ID。指定父菜单项将会使此菜单项成为父菜单项的子菜单\n  // type: 'normal', // 类型，可选：[\"normal\", \"checkbox\", \"radio\", \"separator\"]，默认 normal\n  // title: '菜单的名字', // 显示的文字，除非为“separator”类型否则此参数必需，如果类型为“selection”，可以使用%s显示选定的文本\n  // contexts: ['page'], // 上下文环境，可选：[\"all\", \"page\", \"frame\", \"selection\", \"link\", \"editable\", \"image\", \"video\", \"audio\"]，默认page\n  // parentId: 1, // 右键菜单项的父菜单项ID。指定父菜单项将会使此菜单项成为父菜单项的子菜单\n  // documentUrlPatterns: [''] // 只在某些页面显示此右键菜单\n\n});\n\n//# sourceURL=webpack://google-plugin-vue3-demo/./src/background/menu.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/background/menu.ts"]();
/******/ 	
/******/ })()
;