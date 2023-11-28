(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ko--run-dev-node-md"],{

/***/ "F/qw":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/run-dev-node.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"로보노믹스 Dev 노드 실행 방법\",\n  \"contributors\": [\"LoSk-p\"],\n  \"tools\": [\"Robonomics 2.4.0 https://github.com/airalab/robonomics\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ko/run-dev-node.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "GV/S":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"524ceff2-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/run-dev-node.md?vue&type=template&id=66b4bee7 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_c('strong', [_vm._v(\"로보노믹스에서 애플리케이션을 테스트하려면 개발 모드에서 실행해야 할 수도 있습니다. 이 문서에서는 단계별로\\n로보노믹스의 로컬 테스트 인스턴스를 얻는 방법에 대한 지침을 제공합니다.\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"노드-이진-일-가져오기\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%EB%85%B8%EB%93%9C-%EC%9D%B4%EC%A7%84-%EC%9D%BC-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"노드 이진 일 가져오기\")]), _c('ol', [_c('li', [_c('p', [_vm._v(\"먼저 이진 파일이 필요합니다. 최신 \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/airalab/robonomics/releases\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"릴리스\")]), _vm._v(\"에서 아카이브를 다운로드하세요.\")])]), _c('li', [_c('p', [_vm._v(\"아카이브 폴더로 이동하여 이진 파일을 압축 해제하고 권한을 변경하세요.\")])])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"tar xf robonomics-2.4.0-x86_64-unknown-linux-gnu.tar.gz\\nchmod +x robonomics\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"실행\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%EC%8B%A4%ED%96%89\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"실행\")]), _c('p', [_vm._v(\"다음 명령으로 노드를 실행하세요:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"./robonomics --dev\")])]), _c('p', [_vm._v(\"다음 출력이 표시됩니다:\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=robonomics!../images/dev-node/robonomics.png */ \"d/83\"),\n      \"alt\": \"robonomics\"\n    }\n  })], 1), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"From Scratch\"\n    }\n  }, [_c('p', [_vm._v(\"  기존 블록을 삭제하려면 \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"/tmp/substrate******/chains/dev/db/full\")]), _vm._v(\"에서 RocksDB를 제거할 수 있습니다.\\n  로그에서 표시된 해당 식별자로 \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"******\")]), _vm._v(\"를 대체하세요.\")]), _c('p', [_vm._v(\"  매번 처음부터 노드를 시작하려면 \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"--tmp\")]), _vm._v(\" 플래그를 사용하세요.\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"연결\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%EC%97%B0%EA%B2%B0\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"연결\")]), _c('p', [_vm._v(\"이제 \"), _c('a', {\n    attrs: {\n      \"href\": \"https://polkadot.js.org/apps/#/explorer\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Polkadot Portal\")]), _vm._v(\"을 통해 로컬 노드에 연결할 수 있습니다.\")]), _c('p', [_vm._v(\"왼쪽 상단 모서리에서 네트워크를 \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Local Node\")]), _vm._v(\"로 변경하고 \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Switch\")]), _vm._v(\"를 누르세요.\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=switch!../images/dev-node/portal.png */ \"jYCK\"),\n      \"alt\": \"switch\"\n    }\n  })], 1), _c('p', [_vm._v(\"로보노믹스의 로컬 인스턴스에 오신 것을 환영합니다!\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=local_node!../images/dev-node/dev-portal.png */ \"utua\"),\n      \"alt\": \"local_node\"\n    }\n  })], 1)], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/ko/run-dev-node.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22524ceff2-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "N5QX":
/*!*********************************!*\
  !*** ./docs/ko/run-dev-node.md ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _run_dev_node_md_vue_type_template_id_66b4bee7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./run-dev-node.md?vue&type=template&id=66b4bee7 */ \"lvXA\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _run_dev_node_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./run-dev-node.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"UlO7\");\n/* harmony import */ var _run_dev_node_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./run-dev-node.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"lkdD\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _run_dev_node_md_vue_type_template_id_66b4bee7__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _run_dev_node_md_vue_type_template_id_66b4bee7__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _run_dev_node_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_run_dev_node_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _run_dev_node_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_run_dev_node_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ko/run-dev-node.md?");

/***/ }),

/***/ "UlO7":
/*!*************************************************************************************!*\
  !*** ./docs/ko/run-dev-node.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_run_dev_node_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./run-dev-node.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"ZG7C\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_run_dev_node_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ko/run-dev-node.md?");

/***/ }),

/***/ "ZG7C":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/run-dev-node.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ko/run-dev-node.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "lkdD":
/*!******************************************************************************************!*\
  !*** ./docs/ko/run-dev-node.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_run_dev_node_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./run-dev-node.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"F/qw\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_run_dev_node_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ko/run-dev-node.md?");

/***/ }),

/***/ "lvXA":
/*!***************************************************************!*\
  !*** ./docs/ko/run-dev-node.md?vue&type=template&id=66b4bee7 ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_run_dev_node_md_vue_type_template_id_66b4bee7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"524ceff2-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./run-dev-node.md?vue&type=template&id=66b4bee7 */ \"GV/S\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_run_dev_node_md_vue_type_template_id_66b4bee7__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_run_dev_node_md_vue_type_template_id_66b4bee7__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ko/run-dev-node.md?");

/***/ })

}]);