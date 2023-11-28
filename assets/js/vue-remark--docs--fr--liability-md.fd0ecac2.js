(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--fr--liability-md"],{

/***/ "0Ou2":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"524ceff2-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/fr/liability.md?vue&type=template&id=08437cc8 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_c('strong', [_vm._v(\"Pour transformer les robots en agents économiques, il faut un outil de contrat pour cela. Découvrez Responsabilité - Robonomics pallet qui met en œuvre des contrats entre les comptes parachain!\")])]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\",\n      \"title\": \"Dev Node\"\n    }\n  }, [_c('p', [_vm._v(\"  Veuillez noter que ce tutoriel est présenté sur une instance locale de Robonomics Node. Configurez la vôtre avec \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/run-dev-node\"\n    }\n  }, [_vm._v(\"ces instructions\")]), _vm._v(\".\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"aperçu-de-la-théorie\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#aper%C3%A7u-de-la-th%C3%A9orie\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Aperçu de la théorie\")]), _c('p', [_vm._v(\"Sur Ethereum, il y avait une structure assez compliquée d'interaction de responsabilité. Vous pouvez vous familiariser avec celle-ci \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/robonomics-how-it-works\"\n    }\n  }, [_vm._v(\"ici\")]), _vm._v(\". De nos jours, les choses sont un peu plus faciles avec Kusama!\")]), _c('h3', {\n    attrs: {\n      \"id\": \"négociations\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#n%C3%A9gociations\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Négociations\")]), _c('p', [_vm._v(\"Pour signer un contrat, les deux parties doivent d’abord négocier. Cela peut être effectué de plusieurs manières, notamment \"), _c('a', {\n    attrs: {\n      \"href\": \"https://blog.ipfs.tech/25-pubsub/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"IPFS PubSub\")]), _vm._v(\" ou Robonomics PubSub. Un exemple de code Python utilisant Robonomics PubSub est\\nprésenté \"), _c('a', {\n    attrs: {\n      \"href\": \"https://multi-agent-io.github.io/robonomics-interface/usage.html#pubsub\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"ici\")]), _vm._v(\".\")]), _c('p', [_vm._v(\"L'offre et la demande sont des messages contenant deux caractéristiques principales d'un contrat: \"), _c('strong', [_vm._v(\"description du travail\")]), _vm._v(\" et \"), _c('strong', [_vm._v(\"prix\")]), _vm._v(\". Le format du message doit être conçu par l'utilisateur pour chaque application spécifique. Il n'est pas si important dans le processus de négociation de suivre une règle de format strict. Le flux possible est présenté dans l'image ci-dessous.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/negotiations.jpg\"\n    }\n  }), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\",\n      \"title\": \"PubSub\"\n    }\n  }, [_c('p', [_vm._v(\"  Notez que PubSub est un protocole ouvert, donc aucune donnée sensible ne doit être transférée. Pour cela, vous devez utiliser d'autres protocoles.\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"signatures\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#signatures\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Signatures\")]), _c('p', [_vm._v(\"Une fois les négociations terminées avec succès, chaque partie doit signer son soi-disant accord appelé signature. C'est un\\nmessage contenant la description du poste et le prix \"), _c('strong', [_vm._v(\"dans un format spécifique\")]), _vm._v(\" signé avec une clé privée du compte. Il y a un\\n\"), _c('a', {\n    attrs: {\n      \"href\": \"https://multi-agent-io.github.io/robonomics-interface/modules.html#robonomicsinterface.Liability.sign_liability\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Outil Python\")]), _vm._v(\" pour cela également.\")]), _c('ul', [_c('li', [_vm._v(\"La description du travail est appelée \"), _c('strong', [_vm._v(\"technics\")]), _vm._v(\". Il s'agit d'une chaîne de 32 octets de longueur similaire à un lancement qui peut être un CID IPFS encodé.\")]), _c('li', [_vm._v(\"Le prix est appelé \"), _c('strong', [_vm._v(\"économie\")]), _vm._v(\". Il s'agit d'un décimal XRT - Weiner. 1 Weiner = 10**-9 XRT.\")])]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"32 bytes\"\n    }\n  }, [_c('p', [_vm._v(\"  On peut obtenir un \"), _c('a', {\n    attrs: {\n      \"href\": \"https://ipfs.tech/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"CID IPFS\")]), _vm._v(\" formaté de manière appropriée avec la \"), _c('a', {\n    attrs: {\n      \"href\": \"https://multi-agent-io.github.io/robonomics-interface/modules.html#robonomicsinterface.utils.ipfs_qm_hash_to_32_bytes\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"bibliothèque Python\")]), _vm._v(\".\\n  Lors de l'utilisation de la fonction \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"sign_liability\")]), _vm._v(\", il n'est pas nécessaire de transformer le hachage, cela se fera automatiquement.\")])]), _c('p', [_vm._v(\"En suivant l'exemple du café:\")]), _c('ol', [_c('li', [_vm._v(\"La tâche est un JSON\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-json\"\n    }\n  }, [_vm._v(\"{\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"\\\"task\\\"\")]), _vm._v(\": \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"make_espresso\\\"\")]), _vm._v(\", \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"\\\"description\\\"\")]), _vm._v(\": \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"Make one cup of espresso\\\"\")]), _vm._v(\"}\")])]), _c('ol', {\n    attrs: {\n      \"start\": \"2\"\n    }\n  }, [_c('li', [_vm._v(\"Son CID IPFS est \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"QmP17mWKtQtq2Gq6qZAggPRrho3sVjQGBpXZ8KZiQ57FDi\")])]), _c('li', [_vm._v(\"Donc les \"), _c('strong', [_vm._v(\"techniques\")]), _vm._v(\" (CID transformé) sont \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"0x09daaa8055722a6894951b1273e807f8a46628efeec46805f0228ace230bd5a9\")])]), _c('li', [_c('strong', [_vm._v(\"L'économie\")]), _vm._v(\" est \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"1,5 XRT\")]), _vm._v(\".\")])]), _c('p', [_vm._v(\"Une fois signé, il est temps de créer une responsabilité! Cela peut être fait par l'une des parties (soit le promettant, soit le promettant) ou par un compte tiers d'un fournisseur.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"créer-une-responsabilité\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#cr%C3%A9er-une-responsabilit%C3%A9\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Créer une responsabilité\")]), _c('h3', {\n    attrs: {\n      \"id\": \"préparatifs\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#pr%C3%A9paratifs\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Préparatifs\")]), _c('p', [_vm._v(\"Comme cela a été mentionné précédemment, au moins deux parties sont impliquées dans le processus. Pour cet exemple, utilisons trois parties et créons un fournisseur séparé pour cela. Supposons que les négociations aient déjà eu lieu d'une manière ou d'une autre.\")]), _c('h3', {\n    attrs: {\n      \"id\": \"1-créez-trois-comptes-et-ajoutez-des-fonds-à-ceux-ci\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#1-cr%C3%A9ez-trois-comptes-et-ajoutez-des-fonds-%C3%A0-ceux-ci\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"1. Créez trois comptes et ajoutez des fonds à ceux-ci\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/balances.jpg\"\n    }\n  }), _c('p', [_vm._v(\"Ici, nous avons fourni au fournisseur 100 XRT pour signer les extrinsèques de responsabilité, le promettant a reçu 2 XRT pour payer le travail.\\nLe promettant n'a reçu aucun fonds (à l'exception d'un dépôt existentiel d'au moins 1 mXRT).\")]), _c('h3', {\n    attrs: {\n      \"id\": \"1-accédez-à-developer---extrinsics\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#1-acc%C3%A9dez-%C3%A0-developer---extrinsics\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"1. Accédez à Developer -> Extrinsics\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/extrinsics.jpg\"\n    }\n  }), _c('h3', {\n    attrs: {\n      \"id\": \"2-choisissez-la-liability---create-la-dans-la-liste-déroulante-des-extrinsèques-possibles\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#2-choisissez-la-liability---create-la-dans-la-liste-d%C3%A9roulante-des-extrins%C3%A8ques-possibles\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"2. Choisissez la liability -> create-la dans la liste déroulante des extrinsèques possibles\")]), _c('p', [_vm._v(\"Choisissez également le compte avec lequel vous souhaitez soumettre l'extrinsèque. Remplissez tous les paramètres.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/create.jpg\"\n    }\n  }), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"Signatures\"\n    }\n  }, [_c('p', [_vm._v(\"  Étant donné que le fournisseur est utilisé ici, il n'est pas nécessaire de connaître les graines des participants. Seules leurs signatures sont nécessaires.\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"3-soumettez-la-transaction\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#3-soumettez-la-transaction\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"3. Soumettez la transaction\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/submit.jpg\"\n    }\n  }), _c('h3', {\n    attrs: {\n      \"id\": \"4-examinez-votre-responsabilité-dans-les-événements\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#4-examinez-votre-responsabilit%C3%A9-dans-les-%C3%A9v%C3%A9nements\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"4. Examinez votre responsabilité dans les événements\")]), _c('p', [_vm._v(\"Pour cela, accédez à \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Network -> Explorer\")]), _vm._v(\" et trouvez une liste d'événements à droite. Cliquez sur une icône de triangle pour l'agrandir.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/new-liability.jpg\"\n    }\n  }), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"Hash\"\n    }\n  }, [_c('p', [_vm._v(\"  Le hachage peut être transformé en un CID IPFS avec le même \"), _c('a', {\n    attrs: {\n      \"href\": \"https://multi-agent-io.github.io/robonomics-interface/modules.html#robonomicsinterface.utils.ipfs_32_bytes_to_qm_hash\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"outil Python\")]), _vm._v(\".\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"5-exploration-du-stockage\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#5-exploration-du-stockage\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"5. Exploration du stockage\")]), _c('p', [_vm._v(\"Vous pouvez également explorer certaines caractéristiques des responsabilités dans le module de stockage \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"liability\")]), _vm._v(\".\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/storage-liability.jpg\"\n    }\n  }), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"Next Index\"\n    }\n  }, [_c('p', [_vm._v(\"  La fonction de stockage \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Next Index\")]), _vm._v(\" montre le dernier index de responsabilité +1, donc même si c'est \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"1\")]), _vm._v(\", la responsabilité \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"0\")]), _vm._v(\" est explorée.\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"rapports\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#rapports\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Rapports\")]), _c('p', [_vm._v(\"Imaginez qu'un café a été préparé et que la machine à café doit le signaler d'une manière ou d'une autre. C'est là que les rapports de responsabilité entrent en jeu. En tant que preuve de travail, le compte ajoute un autre CID IPFS en tant que contenu du rapport lors de la finalisation de la responsabilité existante. Cela nécessite à nouveau une signature du promettant.\")]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"Report signature\"\n    }\n  }, [_c('p', [_vm._v(\"  Le message signé contient l'indice de responsabilité existant et l'identifiant IPFS du rapport encodé en représentation de 32 octets. Une fois de plus, l'outil Python peut aider à signer le rapport.\")])]), _c('p', [_vm._v(\"En restant avec l'exemple de la machine à café:\")]), _c('ol', [_c('li', [_vm._v(\"Le rapport est un JSON\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-json\"\n    }\n  }, [_vm._v(\"{\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"\\\"report\\\"\")]), _vm._v(\": \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"Coffee made! Time to execute - 80 seconds.\\\"\")]), _vm._v(\"}\")])]), _c('ol', {\n    attrs: {\n      \"start\": \"2\"\n    }\n  }, [_c('li', [_vm._v(\"Son identifiant IPFS est \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"QmeXCrBuv6cw825JJfSWqNVv28AyjJZW9KReN9wcLQjfCm\")])]), _c('li', [_vm._v(\"Ainsi, la \"), _c('strong', [_vm._v(\"charge utile\")]), _vm._v(\" (CID transformé) est \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"0xf06f2394f55537a5f37d63fd72bfbef50e9f60ea9e0e34224e455afae27a97a2\")])]), _c('li', [_c('strong', [_vm._v(\"L'indice\")]), _vm._v(\" est \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"0\")]), _vm._v(\", c'est l'indice de responsabilité existant.\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"1-accédez-aux-extrinsics-liability---finalizereport\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#1-acc%C3%A9dez-aux-extrinsics-liability---finalizereport\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"1. Accédez aux extrinsics, liability -> finalize(report)\")]), _c('p', [_vm._v(\"Fill in the parameters and submit extrinsic. Again, this may be done by a 3rd-party account. \")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/report.jpg\"\n    }\n  }), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\",\n      \"title\": \"Existential deposit\"\n    }\n  }, [_c('p', [_vm._v(\"  Faites attention à ce que le compte prometteur ne soit pas \\\"mort\\\" - il doit avoir un dépôt existentiel d'au moins 1 mXRT.\")])]), _c('p', [_vm._v(\"Signez et soumettez le rapport. Une fois terminé, vous pouvez l'explorer dans les événements.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/new-report.jpg\"\n    }\n  }), _c('h3', {\n    attrs: {\n      \"id\": \"2-explorer-les-rapports\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#2-explorer-les-rapports\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"2. Explorer les rapports\")]), _c('p', [_vm._v(\"Vous pouvez également observer le rapport dans le stockage. Allez à \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Developer -> Storage\")]), _vm._v(\" et choisissez \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"liability\")]), _vm._v(\" dans la liste déroulante.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/storage-report.jpg\"\n    }\n  }), _c('h3', {\n    attrs: {\n      \"id\": \"3-vérifier-les-soldes\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#3-v%C3%A9rifier-les-soldes\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"3. Vérifier les soldes\")]), _c('p', [_vm._v(\"Sur l'image, il est montré que le prometteur a maintenant reçu le \\\"salaire\\\". La relation économique s'est produite!\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/balances-2.jpg\"\n    }\n  }), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"Verifying\"\n    }\n  }, [_c('p', [_vm._v(\"  Pour l'instant, il n'y a aucun moyen de vérifier si le travail est terminé, donc dès que le prometteur fait un rapport, les jetons sont transférés sur son compte. \\n  La fonction de vérification sera ajoutée à l'avenir.\")])])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/fr/liability.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22524ceff2-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "8nZN":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/fr/liability.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Responsabilité\",\n  \"contributors\": [\"PaTara43\"],\n  \"tools\": [\"Robonomics 2.3.0 https://github.com/airalab/robonomics\", \"robonomics_interface 1.3.5 https://github.com/Multi-Agent-io/robonomics-interface\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/fr/liability.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

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

/***/ "VvAw":
/*!************************************************************!*\
  !*** ./docs/fr/liability.md?vue&type=template&id=08437cc8 ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_liability_md_vue_type_template_id_08437cc8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"524ceff2-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./liability.md?vue&type=template&id=08437cc8 */ \"0Ou2\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_liability_md_vue_type_template_id_08437cc8__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_liability_md_vue_type_template_id_08437cc8__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/fr/liability.md?");

/***/ }),

/***/ "aK02":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/fr/liability.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/fr/liability.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "iPfp":
/*!**********************************************************************************!*\
  !*** ./docs/fr/liability.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_liability_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./liability.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"aK02\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_liability_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/fr/liability.md?");

/***/ }),

/***/ "izau":
/*!******************************!*\
  !*** ./docs/fr/liability.md ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _liability_md_vue_type_template_id_08437cc8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./liability.md?vue&type=template&id=08437cc8 */ \"VvAw\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _liability_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./liability.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"iPfp\");\n/* harmony import */ var _liability_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liability.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"mBak\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _liability_md_vue_type_template_id_08437cc8__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _liability_md_vue_type_template_id_08437cc8__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _liability_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_liability_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _liability_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_liability_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/fr/liability.md?");

/***/ }),

/***/ "mBak":
/*!***************************************************************************************!*\
  !*** ./docs/fr/liability.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_liability_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./liability.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"8nZN\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_liability_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/fr/liability.md?");

/***/ })

}]);