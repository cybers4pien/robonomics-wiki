(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--sub-activate-md"],{

/***/ "1LQA":
/*!***************************************************************************************!*\
  !*** ./docs/sub-activate.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sub_activate_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--16-0!../node_modules/vue-loader/lib??ref--17-0!../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sub-activate.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"LS0N\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sub_activate_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/sub-activate.md?");

/***/ }),

/***/ "4kvb":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/sub-activate.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/sub-activate.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "9SLW":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"d818ecc8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/sub-activate.md?vue&type=template&id=5b630922& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_vm._v(\"In this article you will create Robonomics parachain accounts and buy IoT subscription. \")]), _c('p', [_vm._v(\"To control Home Assistant with Robonomics, you need 2 accounts on the Robonomics parachain. For one of the accounts (\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SUB_OWNER\")]), _vm._v(\"), you will buy a Robonomics subscription. Second account (\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SUB_CONTROLLER\")]), _vm._v(\") will control all Home Assistant processes (such as telemetry) and will give access to other users. These accounts will provide security for your Home Assistant. \")]), _c('p', [_vm._v(\"Both accounts must be created with \"), _c('strong', [_vm._v(\"ed25519\")]), _vm._v(\" encryption. \")]), _c('h2', {\n    attrs: {\n      \"id\": \"create-owner-and-controller-accounts\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#create-owner-and-controller-accounts\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Create Owner and Controller Accounts\")]), _c('p', [_vm._v(\"Go to \"), _c('a', {\n    attrs: {\n      \"href\": \"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Robonomics Parachain app\")]), _vm._v(\" on Polkadot / Substrate Portal. \"), _c('strong', [_vm._v(\"Check the top left corner to ensure that you are connected to Robonomics Parachain.\")])]), _c('p', [_vm._v(\"Go to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Accounts\")]), _vm._v(\" -> \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Accounts\")]), _vm._v(\" and press \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Add account\")]), _vm._v(\" button. \")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/add-account.jpg\"\n    }\n  }), _c('p', [_vm._v(\"You should see the following popup menu with account seed:\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/mnemonic.jpg\"\n    }\n  }), _c('p', [_vm._v(\"It has two forms: \"), _c('em', [_vm._v(\"Mnemonic\")]), _vm._v(\" (human-readable) and \"), _c('em', [_vm._v(\"Raw\")]), _vm._v(\" (a sequence of digits and letters). Save the mnemonic seed phrase securely and press \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Next\")]), _vm._v(\".\")]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\"\n    }\n  }, [_c('p', [_vm._v(\"Open \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Advanced creation options\")]), _vm._v(\", change the crypto type of creating account to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Edwards - ed25519\")]), _vm._v(\" and press \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Next\")]), _vm._v(\".\")])]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/edw.jpg\"\n    }\n  }), _c('p', [_vm._v(\"In the next menu, you need to set the account name and password. Give it a name SUB_OWNER for convenience.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/name.jpg\"\n    }\n  }), _c('p', [_vm._v(\"Clicking on the \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Next\")]), _vm._v(\" button will take you to the last window. Click \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Save\")]), _vm._v(\" to finish account creation. It will also generate a backup JSON-files that you should safely store. You can later use this file to recover your account if you remember the password.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/done.jpg\"\n    }\n  }), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\"\n    }\n  }, [_c('p', [_vm._v(\"Repeat these steps for an account with the name \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SUB_CONTROLLER\")]), _vm._v(\".\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"add-accounts-to-polkadotjs\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#add-accounts-to-polkadotjs\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Add Accounts to Polkadot.js\")]), _c('p', [_vm._v(\"For convenience, you should use the \"), _c('a', {\n    attrs: {\n      \"href\": \"https://polkadot.js.org/extension/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Polkadot.js extension\")]), _vm._v(\" and add these newly created accounts to it. For an ed25519 account you can do that only with a backup JSON file. You can use the files saved when you created the accounts.\")]), _c('p', [_vm._v(\"You can get these files again by creating a backup file of the account. Press on three dots on your account, choose \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Create a backup file for this account\")]), _vm._v(\" and type in your password.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"creating-an-account/backup-file.jpg\"\n    }\n  }), _c('p', [_vm._v(\"Open an extension and press \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"+\")]), _vm._v(\" button on the top right, then choose \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Restore account from backup JSON file\")]), _vm._v(\".\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"creating-an-account/extention-add-backup.jpg\"\n    }\n  }), _c('p', [_vm._v(\"In an opened window upload the JSON file, enter the password and press \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Restore\")]), _vm._v(\".\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"creating-an-account/file-backup.jpg\"\n    }\n  }), _c('h2', {\n    attrs: {\n      \"id\": \"activate-robonomics-subscription\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#activate-robonomics-subscription\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Activate Robonomics Subscription\")]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"okay\"\n    }\n  }, [_c('p', [_vm._v(\"For this step, you must have a sufficient amount of XRT tokens (minimum 2-3 XRTs) in your \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SUB_OWNER\")]), _vm._v(\" account.\")])]), _c('p', [_vm._v(\"Go to Robonomics dapp to the \"), _c('a', {\n    attrs: {\n      \"href\": \"https://dapp.robonomics.network/#/subscription\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"subscription page\")]), _vm._v(\" and press connect account on the right sidebar.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/dapp.jpg\"\n    }\n  }), _c('p', [_vm._v(\"In the following popup menu connect Polkadot.js extension. You will see your account address with balance.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/connect.jpg\"\n    }\n  }), _c('p', [_vm._v(\"Before purchasing, check that you chose the \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SUB_OWNER\")]), _vm._v(\" account. Press the address profile icon, you should see the \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SUB_OWNER\")]), _vm._v(\" account under the \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Check owner account\")]), _vm._v(\" field.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/check.jpg\"\n    }\n  }), _c('p', [_vm._v(\"Finally, press the \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SUBMIT\")]), _vm._v(\" button and enter the password for your account. After that wait until the activation process is completed. You will see the state of your subscription after a while.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/subscription.jpg\"\n    }\n  }), _c('h2', {\n    attrs: {\n      \"id\": \"add-accounts-to-subscription\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#add-accounts-to-subscription\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Add Accounts to Subscription\")]), _c('p', [_vm._v(\"You need to add a \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SUB_CONTROLLER\")]), _vm._v(\" account to the \"), _c('strong', [_vm._v(\"access list\")]), _vm._v(\". Open extension and click on the icon near the account name. It will copy the account address.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/sub-admin.jpg\"\n    }\n  }), _c('p', [_vm._v(\"Paste this address to the \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Robonomics parachain address\")]), _vm._v(\" field in the \"), _c('strong', [_vm._v(\"Manage access\")]), _vm._v(\" part.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/access.jpg\"\n    }\n  }), _c('p', [_vm._v(\"Give it a name and press the \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"+\")]), _vm._v(\" button. Enter your \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SUB_OWNER\")]), _vm._v(\" password in the popup window and wait until the activation process is completed.\")]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\"\n    }\n  }, [_c('p', [_vm._v(\"Repeat these steps for \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SUB_OWNER\")]), _vm._v(\" account.\")])]), _c('p', [_vm._v(\"After that, go to the article \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/robonomics-hass-integration/\"\n    }\n  }, [_vm._v(\"\\\"Robonomics Integration Setup\\\"\")]), _vm._v(\" article.\")])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/sub-activate.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22d818ecc8-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "FwqZ":
/*!*************************************************************!*\
  !*** ./docs/sub-activate.md?vue&type=template&id=5b630922& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_d818ecc8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sub_activate_md_vue_type_template_id_5b630922___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"d818ecc8-vue-loader-template\"}!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/babel-loader/lib??ref--1-1!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??ref--17-0!../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sub-activate.md?vue&type=template&id=5b630922& */ \"9SLW\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_d818ecc8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sub_activate_md_vue_type_template_id_5b630922___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_d818ecc8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sub_activate_md_vue_type_template_id_5b630922___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/sub-activate.md?");

/***/ }),

/***/ "LS0N":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/sub-activate.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Subscription Activate\",\n  \"contributors\": [\"nakata5321\", \"Fingerling42\"],\n  \"tools\": [\"Robonomics 2.6.0 https://github.com/airalab/robonomics\", \"Dapp Robonomics Network https://github.com/airalab/dapp.robonomics.network\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/sub-activate.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "MK8l":
/*!**********************************************************************************!*\
  !*** ./docs/sub-activate.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sub_activate_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--15-0!../node_modules/vue-loader/lib??ref--17-0!../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sub-activate.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"4kvb\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sub_activate_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/sub-activate.md?");

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

/***/ "tcpO":
/*!******************************!*\
  !*** ./docs/sub-activate.md ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sub_activate_md_vue_type_template_id_5b630922___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-activate.md?vue&type=template&id=5b630922& */ \"FwqZ\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _sub_activate_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sub-activate.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"MK8l\");\n/* harmony import */ var _sub_activate_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sub-activate.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"1LQA\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _sub_activate_md_vue_type_template_id_5b630922___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _sub_activate_md_vue_type_template_id_5b630922___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _sub_activate_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_sub_activate_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _sub_activate_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_sub_activate_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/sub-activate.md?");

/***/ })

}]);