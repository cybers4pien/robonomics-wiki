(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--sls-gateway-md"],{

/***/ "/qfh":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Robonomics SLS Gateway\",\n  \"contributors\": [\"LoSk-p\", \"Fingerling42\", \"nakata5321\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/sls-gateway.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "9w2v":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/sls-gateway.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "IX8X":
/*!**************************************************************************************!*\
  !*** ./docs/sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--16-0!../node_modules/vue-loader/lib??ref--17-0!../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"/qfh\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/sls-gateway.md?");

/***/ }),

/***/ "UQSp":
/*!****************************************************************!*\
  !*** ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @vue/component\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VueRemarkRoot',\n  render(h) {\n    return h('div', null, this.$slots.default);\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js?");

/***/ }),

/***/ "aWCD":
/*!*****************************!*\
  !*** ./docs/sls-gateway.md ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sls_gateway_md_vue_type_template_id_079aeb62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sls-gateway.md?vue&type=template&id=079aeb62& */ \"myac\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"i39i\");\n/* harmony import */ var _sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"IX8X\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _sls_gateway_md_vue_type_template_id_079aeb62___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _sls_gateway_md_vue_type_template_id_079aeb62___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/sls-gateway.md?");

/***/ }),

/***/ "i39i":
/*!*********************************************************************************!*\
  !*** ./docs/sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--15-0!../node_modules/vue-loader/lib??ref--17-0!../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"9w2v\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/sls-gateway.md?");

/***/ }),

/***/ "myac":
/*!************************************************************!*\
  !*** ./docs/sls-gateway.md?vue&type=template&id=079aeb62& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_d818ecc8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_template_id_079aeb62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"d818ecc8-vue-loader-template\"}!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/babel-loader/lib??ref--1-1!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??ref--17-0!../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sls-gateway.md?vue&type=template&id=079aeb62& */ \"pnB8\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_d818ecc8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_template_id_079aeb62___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_d818ecc8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_template_id_079aeb62___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/sls-gateway.md?");

/***/ }),

/***/ "pnB8":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"d818ecc8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/sls-gateway.md?vue&type=template&id=079aeb62& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_c('strong', [_vm._v(\"In this article you will set up Robonomics SLS Gateway. You will install the required software for the gateway, configure it and connect it to Home Assistant.\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"firmware\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#firmware\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Firmware\")]), _c('p', [_vm._v(\"First you need to install microcontroller firmware of the gateway. Prepare the gateway by setting switches \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"1\")]), _vm._v(\" and \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"3\")]), _vm._v(\" at the bottom part of SLS Gateway to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"ON\")]), _vm._v(\", others must be \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"OFF\")]), _vm._v(\".\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/sls-gateway-13.gif\"\n    }\n  }), _c('p', [_vm._v(\"Connect gateway to your Raspberry Pi via USB type-C port on the gateway.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/sls-rpi.gif\"\n    }\n  }), _c('p', [_vm._v(\"Clone the repository with firmware to your Raspberry Pi:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-shell\"\n    }\n  }, [_vm._v(\"git clone https://github.com/airalab/robonomics-hass-utils.git\")])]), _c('p', [_vm._v(\"Go to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"robonomics-hass-utils/esp_firmware/linux\")]), _vm._v(\". To flash the SLS gateway you need to run \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Clear\")]), _vm._v(\" and \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Flash_16mb\")]), _vm._v(\" scripts.\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-shell\"\n    }\n  }, [_vm._v(\"cd robonomics-hass-utils/esp_firmware/linux\\nsudo chmod +x Clear.sh\\nsudo chmod +x Flash_16mb.sh\\n./Clear.sh\\n./Flash_16mb.sh\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"troubleshooting\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#troubleshooting\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Troubleshooting\")]), _c('p', [_vm._v(\"If you are experiencing problems updating the gateway firmware, you need to take additional steps:\")]), _c('ol', [_c('li', [_vm._v(\"Make sure you have the pySerial module installed:\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-shell\"\n    }\n  }, [_vm._v(\"pip install pyserial\")])]), _c('ol', {\n    attrs: {\n      \"start\": \"2\"\n    }\n  }, [_c('li', [_vm._v(\"Give your user access rights to the USB port:\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-shell\"\n    }\n  }, [_vm._v(\"sudo usermod -a -G dialout $USER\")])]), _c('ol', {\n    attrs: {\n      \"start\": \"3\"\n    }\n  }, [_c('li', [_vm._v(\"In some cases, it is necessary to change the bandwidth setting in the script to update the firmware. Open the \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Flash_16mb.sh\")]), _vm._v(\" script with the \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"nano\")]), _vm._v(\" editor and change the baud parameter from \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"921600\")]), _vm._v(\" to a smaller value (for example, \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"115200\")]), _vm._v(\").\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"configuration\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#configuration\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Configuration\")]), _c('ol', [_c('li', [_vm._v(\"Set the switches on the back of the gateway to the proper position. Switches \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"5\")]), _vm._v(\" (RX Zigbee to ESP) and \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"6\")]), _vm._v(\" (TX Zigbee to ESP) must be in the \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"ON\")]), _vm._v(\" position, the others must be \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"OFF\")]), _vm._v(\". \")])]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/sls-gateway-56.gif\"\n    }\n  }), _c('ol', {\n    attrs: {\n      \"start\": \"2\"\n    }\n  }, [_c('li', [_vm._v(\"Connect the type-C power cable. The indicator light in the center should turn green.\")])]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/sls-gateway-connect.gif\"\n    }\n  }), _c('ol', {\n    attrs: {\n      \"start\": \"3\"\n    }\n  }, [_c('li', [_vm._v(\"On the first startup, the gateway will start sharing Wi-Fi with the SSID \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"zgw****\")]), _vm._v(\". Connect to this network. Keep in mind that the signal may be quite weak, so it is better to keep the SLS gateway closer to your computer. \")])]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/sls-gateway-wifi.gif\"\n    }\n  }), _c('ol', {\n    attrs: {\n      \"start\": \"4\"\n    }\n  }, [_c('li', [_c('p', [_vm._v(\"If the connection is successful, the web interface will open (or you can find it on 192.168.1.1 address). \")])]), _c('li', [_c('p', [_vm._v(\"You will see \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Wi-Fi Settings\")]), _vm._v(\" page. Select your Wi-Fi and enter the password. Press \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Apply\")]), _vm._v(\" button. The gateway will restart and connect to your Wi-Fi network. \")])])]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/wi-fi-connect.jpg\"\n    }\n  }), _c('ol', {\n    attrs: {\n      \"start\": \"6\"\n    }\n  }, [_c('li', [_c('p', [_vm._v(\"Find the local IP of the SLS gateway to access the web interface. To find it you can use \"), _c('a', {\n    attrs: {\n      \"href\": \"https://www.fing.com/products\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Fing mobile app\")]), _vm._v(\" or \"), _c('a', {\n    attrs: {\n      \"href\": \"https://vitux.com/find-devices-connected-to-your-network-with-nmap/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"nmap CLI tool\")]), _vm._v(\". The gateway name should look like this: \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"zgw****\")]), _vm._v(\". Open the web interface of the gateway by pasting the gateway IP into a browser.\")])]), _c('li', [_c('p', [_vm._v(\"Go to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Setting\")]), _vm._v(\" -> \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Hardware\")]), _vm._v(\" and make sure that the settings look like on the image. Correct the settings if necessary and click \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Save\")]), _vm._v(\" button:\")])])]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/sls-hardware.jpg\"\n    }\n  }), _c('p', [_vm._v(\"The table with required values:\")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v(\"Field\")]), _c('th', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"Value\")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v(\"Zigbee module\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"TI\")])]), _c('tr', [_c('td', [_vm._v(\"Zigbee UART RX\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"22\")])]), _c('tr', [_c('td', [_vm._v(\"Zigbee UART TX\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"23\")])]), _c('tr', [_c('td', [_vm._v(\"Zigbee RST Pin\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"18\")])]), _c('tr', [_c('td', [_vm._v(\"Zigbee BSL Pin\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"19\")])]), _c('tr', [_c('td', [_vm._v(\"Button Mode\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"33 (pullUP - true)\")])]), _c('tr', [_c('td', [_vm._v(\"Number addressable leds\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"0\")])]), _c('tr', [_c('td', [_vm._v(\"Led Red (or addr)\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"21\")])]), _c('tr', [_c('td', [_vm._v(\"Led Green\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"5\")])]), _c('tr', [_c('td', [_vm._v(\"Led Blue\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"27\")])]), _c('tr', [_c('td', [_vm._v(\"I2C SDA\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"255\")])]), _c('tr', [_c('td', [_vm._v(\"I2C SCL\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"255\")])])])]), _c('ol', {\n    attrs: {\n      \"start\": \"8\"\n    }\n  }, [_c('li', [_c('p', [_vm._v(\"Make sure that the gateway works properly in the Zigbee info window. DeviceState should be \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"OK\")]), _vm._v(\".\")])]), _c('li', [_c('p', [_vm._v(\"Then reboot the gateway. Choose \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Actions\")]), _vm._v(\" -> \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Reboot system\")]), _vm._v(\" at the right top corner.\")])]), _c('li', [_c('p', [_vm._v(\"Configure automatically adding devices to Home Assistant. Go to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Zigbee\")]), _vm._v(\" -> \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Config\")]), _vm._v(\" then choose \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Home Assistant MQTT Discovery\")]), _vm._v(\" and \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Clear States\")]), _vm._v(\". Save changes and again \"), _c('strong', [_vm._v(\"reboot\")]), _vm._v(\" SLS gateway.\")])])]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\"\n    }\n  }, [_c('p', [_vm._v(\"If you already have an active SLS gateway in your home, and you are now configuring another one, then they will conflict with each other. To solve this problem you need to change the channel on the new device. To do this, go to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Zigbee\")]), _vm._v(\" -> \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Config\")]), _vm._v(\" and change the channel to another one (e.g. channel 15).\")])]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/sls-hass.jpg\"\n    }\n  }), _c('ol', {\n    attrs: {\n      \"start\": \"11\"\n    }\n  }, [_c('li', [_vm._v(\"Connect your devices by going to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Zigbee\")]), _vm._v(\" -> \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Join\")]), _vm._v(\". Put your sensors in pairing mode, the most common way to switch a device to connect mode is to hold its power button or switch them on/off for 5 times. Press the \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Enable Join\")]), _vm._v(\" button to start searching Zigbee devices. You will see active sensors.\")])]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/switch-device.gif\"\n    }\n  }), _c('h2', {\n    attrs: {\n      \"id\": \"pairing-sls-to-mqtt\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#pairing-sls-to-mqtt\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Pairing SLS to MQTT\")]), _c('p', [_vm._v(\"After connecting all sensors to the SLS Gateway, you need to connect SLS Gateway to Home Assistant. Open SLS Gateway web interface and go to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Settings/Link\")]), _vm._v(\" -> \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"MQTT Setup\")]), _vm._v(\":\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/sls-mqtt-menu.jpg\"\n    }\n  }), _c('p', [_vm._v(\"Add your broker address (address of the Raspberry Pi with Home Assistant in local network, you can find it with \"), _c('a', {\n    attrs: {\n      \"href\": \"https://www.fing.com/products\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Fing mobile app\")]), _vm._v(\" or \"), _c('a', {\n    attrs: {\n      \"href\": \"https://vitux.com/find-devices-connected-to-your-network-with-nmap/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"nmap CLI tool\")]), _vm._v(\"), port (default is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"1883\")]), _vm._v(\") your broker username and password (which you have created earlier) and the topic name (you can choose any). Also, the Raspberry Pi IP address must be static.\")]), _c('p', [_vm._v(\"Click on \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Enable\")]), _vm._v(\" and \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Retain states\")]), _vm._v(\".\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/sls-mqtt1.jpg\"\n    }\n  }), _c('p', [_vm._v(\"Save changes. Now devices will be automatically shown in Home Assistant.\")]), _c('p', [_vm._v(\"Now you can go to the \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/sub-activate\"\n    }\n  }, [_c('strong', [_vm._v(\"IoT Subscription\")])]), _vm._v(\" section and start activating the Robonomics subscription.\")])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/sls-gateway.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22d818ecc8-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);