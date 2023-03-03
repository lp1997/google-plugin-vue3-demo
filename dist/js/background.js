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

/***/ "./src/background/background.ts":
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/chromeUtils */ \"./src/utils/chromeUtils.ts\");\n/* harmony import */ var _utils_hotReload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/hotReload */ \"./src/utils/hotReload.ts\");\n\n\n\nconst receiveDataInfo = () => {\n  let hasGetRequest = false;\n  (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.receiveData)(async (request, sender, callback) => {\n    callback(request.loadTime);\n    const tabId = await (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getCurrentTabId)();\n\n    if (!hasGetRequest) {\n      // 请求监听只需要一次\n      hasGetRequest = true; // 监听请求返回\n\n      const extensionListener = async function (message) {\n        // const extensionListener = async function (message:{name:string, data:any}, sender:any, sendResponse:any) {\n        if (message.name === 'web请求') {\n          // 筛选表格数据的请求接口\n          // 在背景页面发送消息，需要当前 tabID\n          (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.sendData2Main)(tabId, message.data, function () {});\n        }\n      };\n\n      (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.receiveConnetData)(extensionListener);\n    }\n  });\n};\n\nconst init = () => {\n  (0,_utils_hotReload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  receiveDataInfo();\n};\n\ninit();\n\n//# sourceURL=webpack://google-plugin-vue3-demo/./src/background/background.ts?");

/***/ }),

/***/ "./src/utils/chromeUtils.ts":
/*!**********************************!*\
  !*** ./src/utils/chromeUtils.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBackgroundData\": function() { return /* binding */ getBackgroundData; },\n/* harmony export */   \"getCurrentTabId\": function() { return /* binding */ getCurrentTabId; },\n/* harmony export */   \"getPageInfo\": function() { return /* binding */ getPageInfo; },\n/* harmony export */   \"listenPageActivated\": function() { return /* binding */ listenPageActivated; },\n/* harmony export */   \"listenPageCreated\": function() { return /* binding */ listenPageCreated; },\n/* harmony export */   \"localGet\": function() { return /* binding */ localGet; },\n/* harmony export */   \"localRemove\": function() { return /* binding */ localRemove; },\n/* harmony export */   \"localSet\": function() { return /* binding */ localSet; },\n/* harmony export */   \"openNewPage\": function() { return /* binding */ openNewPage; },\n/* harmony export */   \"receiveConnetData\": function() { return /* binding */ receiveConnetData; },\n/* harmony export */   \"receiveData\": function() { return /* binding */ receiveData; },\n/* harmony export */   \"sendData\": function() { return /* binding */ sendData; },\n/* harmony export */   \"sendData2Main\": function() { return /* binding */ sendData2Main; }\n/* harmony export */ });\n// 信息存储\nconst localSet = (key, val) => {\n  window.chrome.storage.sync.set({\n    [key]: val\n  });\n};\nconst localGet = key => {\n  return new Promise(resolve => {\n    window.chrome.storage.sync.get(key, res => {\n      resolve(res);\n    });\n  });\n};\nconst localRemove = key => {\n  return window.chrome.storage.sync.remove(key);\n};\nconst getCurrentTabId = () => {\n  return new Promise(resolve => {\n    window.chrome.tabs.query({\n      active: true,\n      currentWindow: true\n    }, tabs => {\n      resolve(tabs[0].id);\n    });\n  });\n};\nconst getPageInfo = () => {\n  return new Promise(resolve => {\n    window.chrome.tabs.query({\n      active: true,\n      currentWindow: true\n    }, tabs => {\n      resolve(tabs);\n    });\n  });\n};\nconst sendData2Main = (tabId, data, cb) => {\n  window.chrome.tabs.sendMessage(tabId, data, res => {\n    cb && cb(res);\n  });\n};\nconst receiveData = cb => {\n  window.chrome.runtime.onMessage.addListener((req, sender, sendRes) => {\n    cb && cb(req, sender, sendRes);\n  });\n};\nconst sendData = (data, cb) => {\n  window.chrome.runtime.sendMessage(data, res => {\n    cb && cb(res);\n  });\n};\nconst receiveConnetData = cb => {\n  window.chrome.runtime.onConnect.addListener(port => {\n    port.onMessage.addListener(cb);\n    port.onDisconnect.addListener(port => {\n      port.onMessage.removeListener(cb);\n    });\n  });\n};\nconst getBackgroundData = data => {\n  return window.chrome.extension.getBackgroundPage()[data];\n};\nconst openNewPage = url => {\n  window.chrome.tabs.create({\n    url: url\n  });\n};\nconst listenPageCreated = cb => {\n  window.chrome.tabs.onCreated.addListener(res => {\n    cb && cb(res);\n  });\n};\nconst listenPageActivated = cb => {\n  window.chrome.tabs.onActivated.addListener(res => {\n    cb && cb(res);\n  });\n};\n\n//# sourceURL=webpack://google-plugin-vue3-demo/./src/utils/chromeUtils.ts?");

/***/ }),

/***/ "./src/utils/hotReload.ts":
/*!********************************!*\
  !*** ./src/utils/hotReload.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// 加载文件\nconst filesInDirectory = dir => new Promise(resolve => dir.createReader().readEntries(entries => {\n  Promise.all(entries.filter(e => e.name[0] !== '.').map(e => e.isDirectory ? filesInDirectory(e) : new Promise(resolve => e.file(resolve)))).then(files => [].concat(...files)).then(resolve);\n})); // 遍历插件目录，读取文件信息，组合文件名称和修改时间成数据\n\n\nconst timestampForFilesInDirectory = dir => filesInDirectory(dir).then(files => files.map(f => f.name + f.lastModifiedDate).join()); // 刷新当前活动页\n\n\nconst reload = () => {\n  window.chrome.tabs.query({\n    active: true,\n    currentWindow: true\n  }, tabs => {\n    // NB: see https://github.com/xpl/crx-hotreload/issues/5\n    if (tabs[0]) {\n      window.chrome.tabs.reload(tabs[0].id);\n    } // 强制刷新页面\n\n\n    window.chrome.runtime.reload();\n  });\n}; // 观察文件改动\n\n\nconst watchChanges = (dir, lastTimestamp) => {\n  timestampForFilesInDirectory(dir).then(timestamp => {\n    // 文件没有改动则循环监听watchChanges方法\n    if (!lastTimestamp || lastTimestamp === timestamp) {\n      setTimeout(() => watchChanges(dir, timestamp), 1000); // retry after 1s\n    } else {\n      // 强制刷新页面\n      reload();\n    }\n  });\n};\n\nconst hotReload = () => {\n  window.chrome.management.getSelf(self => {\n    if (self.installType === 'development') {\n      // 获取插件目录，监听文件变化\n      window.chrome.runtime.getPackageDirectoryEntry(dir => watchChanges(dir));\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hotReload);\n\n//# sourceURL=webpack://google-plugin-vue3-demo/./src/utils/hotReload.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/background/background.ts");
/******/ 	
/******/ })()
;