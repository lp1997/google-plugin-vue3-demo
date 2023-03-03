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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/popup/components/App.vue?vue&type=script&lang=ts&setup=true":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/popup/components/App.vue?vue&type=script&lang=ts&setup=true ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _popup_router_routers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popup/router/routers */ \"./src/popup/router/routers.ts\");\n/* harmony import */ var _utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/chromeUtils */ \"./src/utils/chromeUtils.ts\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\n  __name: 'App',\n\n  setup(__props, {\n    expose\n  }) {\n    expose();\n    const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const selList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);\n    const filterTableData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);\n    const tabIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('/');\n\n    const tabChange = name => {\n      router.push(name);\n    };\n\n    (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.localGet)(['selTypeList']).then(res => {\n      if (res.selTypeList) {\n        selList.value = JSON.parse(res.selTypeList);\n      }\n\n      changeUserType(selList.value);\n    });\n\n    const changeUserType = val => {\n      selList.value = val;\n      filterTableData.value = [];\n      setTimeout(() => {\n        filterTableData.value = [...[_popup_router_routers__WEBPACK_IMPORTED_MODULE_1__.routerMain[0]], ..._popup_router_routers__WEBPACK_IMPORTED_MODULE_1__.routerMain.filter(data => selList.value.includes(data.title)).sort((a, b) => {\n          return selList.value.indexOf(a.title) - selList.value.indexOf(b.title);\n        }), ...[_popup_router_routers__WEBPACK_IMPORTED_MODULE_1__.routerMain[1]]];\n      }, 0);\n    };\n\n    window.Bus.$on('updateTab', val => {\n      changeUserType(val);\n    });\n    const __returned__ = {\n      router,\n      selList,\n      filterTableData,\n      tabIndex,\n      tabChange,\n      changeUserType\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n\n}));\n\n//# sourceURL=webpack://google-plugin-vue3-demo/./src/popup/components/App.vue?./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use%5B1%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/popup/components/App.vue?vue&type=template&id=b37565b8&ts=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/popup/components/App.vue?vue&type=template&id=b37565b8&ts=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"google-plugin-main\"\n};\nconst _hoisted_2 = {\n  class: \"tabs\"\n};\nconst _hoisted_3 = {\n  class: \"page-com\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_el_tab_pane = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"el-tab-pane\");\n\n  const _component_el_tabs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"el-tabs\");\n\n  const _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-view\");\n\n  const _component_el_scrollbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"el-scrollbar\");\n\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_tabs, {\n    stretch: true,\n    type: \"border-card\",\n    modelValue: $setup.tabIndex,\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $setup.tabIndex = $event),\n    onTabChange: $setup.tabChange\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.filterTableData, (item, e) => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_el_tab_pane, {\n        name: item.path,\n        key: e,\n        label: item.title\n      }, null, 8\n      /* PROPS */\n      , [\"name\", \"label\"]);\n    }), 128\n    /* KEYED_FRAGMENT */\n    ))]),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , [\"modelValue\"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_scrollbar, {\n    \"max-height\": \"550px\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)])]),\n    _: 1\n    /* STABLE */\n\n  })]);\n}\n\n//# sourceURL=webpack://google-plugin-vue3-demo/./src/popup/components/App.vue?./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use%5B1%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B4%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/popup/main.ts":
/*!***************************!*\
  !*** ./src/popup/main.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _components_App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App.vue */ \"./src/popup/components/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/popup/router/index.ts\");\n/* harmony import */ var element_plus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! element-plus */ \"./node_modules/element-plus/es/defaults.mjs\");\n/* harmony import */ var element_plus_dist_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! element-plus/dist/index.css */ \"./node_modules/element-plus/dist/index.css\");\n/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs/locale/zh-cn */ \"./node_modules/dayjs/locale/zh-cn.js\");\n/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var element_plus_lib_locale_lang_zh_cn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! element-plus/lib/locale/lang/zh-cn */ \"./node_modules/element-plus/lib/locale/lang/zh-cn.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/utils */ \"./src/utils/utils.ts\");\n\n\n\n\n\n // 中文\n\n // 中文\n\n\nwindow.Bus = _utils_utils__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_components_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).use(_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).use(element_plus__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n  locale: element_plus_lib_locale_lang_zh_cn__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n}).mount('#app');\n\n//# sourceURL=webpack://google-plugin-vue3-demo/./src/popup/main.ts?");

/***/ }),

/***/ "./src/popup/router/index.ts":
/*!***********************************!*\
  !*** ./src/popup/router/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _routers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routers */ \"./src/popup/router/routers.ts\");\n\n\nconst routes = [..._routers__WEBPACK_IMPORTED_MODULE_0__.routerMain, {\n  path: '/*',\n  redirect: '/'\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.createWebHashHistory)(),\n  routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack://google-plugin-vue3-demo/./src/popup/router/index.ts?");

/***/ }),

/***/ "./src/popup/router/routers.ts":
/*!*************************************!*\
  !*** ./src/popup/router/routers.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routerMain\": function() { return /* binding */ routerMain; }\n/* harmony export */ });\nconst routerMain = [{\n  path: '/',\n  name: 'PageMain',\n  title: '首页',\n  isCom: true,\n  component: __webpack_require__.e(/*! import() | PageMain */ \"PageMain\").then(__webpack_require__.bind(__webpack_require__, /*! @/popup/components/pages/PageMain.vue */ \"./src/popup/components/pages/PageMain.vue\"))\n}, {\n  path: '/PageSetting',\n  name: 'PageSetting',\n  title: '配置页',\n  isCom: true,\n  component: __webpack_require__.e(/*! import() | PageSetting */ \"PageSetting\").then(__webpack_require__.bind(__webpack_require__, /*! @/popup/components/pages/PageSetting.vue */ \"./src/popup/components/pages/PageSetting.vue\"))\n}, {\n  path: '/PageHello',\n  name: 'PageHello',\n  title: 'hello页',\n  component: __webpack_require__.e(/*! import() | PageHello */ \"PageHello\").then(__webpack_require__.bind(__webpack_require__, /*! @/popup/components/pages/PageHello.vue */ \"./src/popup/components/pages/PageHello.vue\"))\n}];\n\n//# sourceURL=webpack://google-plugin-vue3-demo/./src/popup/router/routers.ts?");

/***/ }),

/***/ "./src/utils/chromeUtils.ts":
/*!**********************************!*\
  !*** ./src/utils/chromeUtils.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBackgroundData\": function() { return /* binding */ getBackgroundData; },\n/* harmony export */   \"getCurrentTabId\": function() { return /* binding */ getCurrentTabId; },\n/* harmony export */   \"getPageInfo\": function() { return /* binding */ getPageInfo; },\n/* harmony export */   \"listenPageActivated\": function() { return /* binding */ listenPageActivated; },\n/* harmony export */   \"listenPageCreated\": function() { return /* binding */ listenPageCreated; },\n/* harmony export */   \"localGet\": function() { return /* binding */ localGet; },\n/* harmony export */   \"localRemove\": function() { return /* binding */ localRemove; },\n/* harmony export */   \"localSet\": function() { return /* binding */ localSet; },\n/* harmony export */   \"openNewPage\": function() { return /* binding */ openNewPage; },\n/* harmony export */   \"receiveConnetData\": function() { return /* binding */ receiveConnetData; },\n/* harmony export */   \"receiveData\": function() { return /* binding */ receiveData; },\n/* harmony export */   \"sendData\": function() { return /* binding */ sendData; },\n/* harmony export */   \"sendData2Main\": function() { return /* binding */ sendData2Main; }\n/* harmony export */ });\n// 信息存储\nconst localSet = (key, val) => {\n  window.chrome.storage.sync.set({\n    [key]: val\n  });\n};\nconst localGet = key => {\n  return new Promise(resolve => {\n    window.chrome.storage.sync.get(key, res => {\n      resolve(res);\n    });\n  });\n};\nconst localRemove = key => {\n  return window.chrome.storage.sync.remove(key);\n};\nconst getCurrentTabId = () => {\n  return new Promise(resolve => {\n    window.chrome.tabs.query({\n      active: true,\n      currentWindow: true\n    }, tabs => {\n      resolve(tabs[0].id);\n    });\n  });\n};\nconst getPageInfo = () => {\n  return new Promise(resolve => {\n    window.chrome.tabs.query({\n      active: true,\n      currentWindow: true\n    }, tabs => {\n      resolve(tabs);\n    });\n  });\n};\nconst sendData2Main = (tabId, data, cb) => {\n  window.chrome.tabs.sendMessage(tabId, data, res => {\n    cb && cb(res);\n  });\n};\nconst receiveData = cb => {\n  window.chrome.runtime.onMessage.addListener((req, sender, sendRes) => {\n    cb && cb(req, sender, sendRes);\n  });\n};\nconst sendData = (data, cb) => {\n  window.chrome.runtime.sendMessage(data, res => {\n    cb && cb(res);\n  });\n};\nconst receiveConnetData = cb => {\n  window.chrome.runtime.onConnect.addListener(port => {\n    port.onMessage.addListener(cb);\n    port.onDisconnect.addListener(port => {\n      port.onMessage.removeListener(cb);\n    });\n  });\n};\nconst getBackgroundData = data => {\n  return window.chrome.extension.getBackgroundPage()[data];\n};\nconst openNewPage = url => {\n  window.chrome.tabs.create({\n    url: url\n  });\n};\nconst listenPageCreated = cb => {\n  window.chrome.tabs.onCreated.addListener(res => {\n    cb && cb(res);\n  });\n};\nconst listenPageActivated = cb => {\n  window.chrome.tabs.onActivated.addListener(res => {\n    cb && cb(res);\n  });\n};\n\n//# sourceURL=webpack://google-plugin-vue3-demo/./src/utils/chromeUtils.ts?");

/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Bus {\n  constructor() {\n    this.list = {}; // 收集订阅\n  } // 订阅\n\n\n  $on(name, fn) {\n    this.list[name] = this.list[name] || [];\n    this.list[name].push(fn);\n  } // 发布\n\n\n  $emit(name, data) {\n    if (this.list[name]) {\n      this.list[name].forEach(fn => {\n        fn(data);\n      });\n    }\n  } // 取消订阅\n\n\n  $off(name) {\n    if (this.list[name]) {\n      delete this.list[name];\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Bus());\n\n//# sourceURL=webpack://google-plugin-vue3-demo/./src/utils/utils.ts?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-37.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-37.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-37.use[2]!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-37.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/popup/components/App.vue?vue&type=style&index=0&id=b37565b8&lang=stylus":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-37.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-37.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-37.use[2]!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-37.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/popup/components/App.vue?vue&type=style&index=0&id=b37565b8&lang=stylus ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://google-plugin-vue3-demo/./src/popup/components/App.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-37.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-37.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-37.use%5B2%5D!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-37.use%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/popup/components/App.vue":
/*!**************************************!*\
  !*** ./src/popup/components/App.vue ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_b37565b8_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=b37565b8&ts=true */ \"./src/popup/components/App.vue?vue&type=template&id=b37565b8&ts=true\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts&setup=true */ \"./src/popup/components/App.vue?vue&type=script&lang=ts&setup=true\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_b37565b8_lang_stylus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=b37565b8&lang=stylus */ \"./src/popup/components/App.vue?vue&type=style&index=0&id=b37565b8&lang=stylus\");\n/* harmony import */ var E_learnDemos_Tests_1_getV3Demo_v3_google_plugin_demo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,E_learnDemos_Tests_1_getV3Demo_v3_google_plugin_demo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_b37565b8_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/popup/components/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://google-plugin-vue3-demo/./src/popup/components/App.vue?");

/***/ }),

/***/ "./src/popup/components/App.vue?vue&type=script&lang=ts&setup=true":
/*!*************************************************************************!*\
  !*** ./src/popup/components/App.vue?vue&type=script&lang=ts&setup=true ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&lang=ts&setup=true */ \"./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/popup/components/App.vue?vue&type=script&lang=ts&setup=true\");\n \n\n//# sourceURL=webpack://google-plugin-vue3-demo/./src/popup/components/App.vue?");

/***/ }),

/***/ "./src/popup/components/App.vue?vue&type=template&id=b37565b8&ts=true":
/*!****************************************************************************!*\
  !*** ./src/popup/components/App.vue?vue&type=template&id=b37565b8&ts=true ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_b37565b8_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_b37565b8_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=b37565b8&ts=true */ \"./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/popup/components/App.vue?vue&type=template&id=b37565b8&ts=true\");\n\n\n//# sourceURL=webpack://google-plugin-vue3-demo/./src/popup/components/App.vue?");

/***/ }),

/***/ "./src/popup/components/App.vue?vue&type=style&index=0&id=b37565b8&lang=stylus":
/*!*************************************************************************************!*\
  !*** ./src/popup/components/App.vue?vue&type=style&index=0&id=b37565b8&lang=stylus ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_37_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_37_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_37_use_2_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_37_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_b37565b8_lang_stylus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-37.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-37.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-37.use[2]!../../../node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-37.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=style&index=0&id=b37565b8&lang=stylus */ \"./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-37.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-37.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-37.use[2]!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-37.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/popup/components/App.vue?vue&type=style&index=0&id=b37565b8&lang=stylus\");\n\n\n//# sourceURL=webpack://google-plugin-vue3-demo/./src/popup/components/App.vue?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "css/" + chunkId + ".css";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "google-plugin-vue3-demo:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		var createStylesheet = function(chunkId, fullhref, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = function(chunkId, promises) {
/******/ 			var cssChunks = {"PageSetting":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(function() {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, function(e) {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgoogle_plugin_vue3_demo"] = self["webpackChunkgoogle_plugin_vue3_demo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./src/popup/main.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;