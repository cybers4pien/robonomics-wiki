(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--pt--sls-gateway-md"],{

/***/ "3dz3":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"524ceff2-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/pt/sls-gateway.md?vue&type=template&id=8f9f2940 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_c('strong', [_vm._v(\"Neste artigo, você configurará o Robonomics SLS Gateway. Você instalará o software necessário para o gateway, o configurará e o conectará ao Home Assistant.\")])]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/sls_gateway.png\"\n    }\n  }), _c('h2', {\n    attrs: {\n      \"id\": \"firmware\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#firmware\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Firmware\")]), _c('p', [_vm._v(\"Primeiro, você precisa instalar o firmware do microcontrolador do gateway. Prepare o gateway configurando as chaves \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"1\")]), _vm._v(\" e \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"3\")]), _vm._v(\" na parte inferior do SLS Gateway para \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"ON\")]), _vm._v(\", as outras devem estar \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"OFF\")]), _vm._v(\".\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/sls-gateway-13.gif\"\n    }\n  }), _c('p', [_vm._v(\"Conecte o gateway ao seu Raspberry Pi através da porta USB tipo-C no gateway.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/sls-rpi.gif\"\n    }\n  }), _c('p', [_vm._v(\"Clone o repositório com o firmware para o seu Raspberry Pi:\")]), _c('code-helper', {\n    attrs: {\n      \"additionalLine\": \"rasppi_username@rasppi_hostname\"\n    }\n  }, [_c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-shell\"\n    }\n  }, [_vm._v(\"git clone https://github.com/airalab/robonomics-hass-utils.git\")])])]), _c('p', [_vm._v(\"Vá para \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"robonomics-hass-utils/esp_firmware/linux\")]), _vm._v(\". Para atualizar o gateway SLS, você precisa executar os scripts \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Clear\")]), _vm._v(\" e \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Flash_16mb\")]), _vm._v(\".\")]), _c('code-helper', {\n    attrs: {\n      \"additionalLine\": \"rasppi_username@rasppi_hostname\"\n    }\n  }, [_c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-shell\"\n    }\n  }, [_vm._v(\"cd robonomics-hass-utils/esp_firmware/linux\\nsudo chmod +x Clear.sh\\nsudo chmod +x Flash_16mb.sh\\n./Clear.sh\\n./Flash_16mb.sh\")])])]), _c('h3', {\n    attrs: {\n      \"id\": \"solucionando-problemas\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#solucionando-problemas\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Solucionando Problemas\")]), _c('p', [_vm._v(\"Se você estiver enfrentando problemas ao atualizar o firmware do gateway, você precisa seguir etapas adicionais:\")]), _c('ol', [_c('li', [_vm._v(\"Certifique-se de ter o módulo pySerial instalado:\")])]), _c('code-helper', {\n    attrs: {\n      \"additionalLine\": \"rasppi_username@rasppi_hostname\"\n    }\n  }, [_c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-shell\"\n    }\n  }, [_vm._v(\"pip install pyserial\")])])]), _c('ol', {\n    attrs: {\n      \"start\": \"2\"\n    }\n  }, [_c('li', [_vm._v(\"Dê ao seu usuário direitos de acesso à porta USB e reinicie o computador:\")])]), _c('code-helper', {\n    attrs: {\n      \"additionalLine\": \"rasppi_username@rasppi_hostname\"\n    }\n  }, [_c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-shell\"\n    }\n  }, [_vm._v(\"sudo usermod -a -G dialout $USER\\nsudo reboot\")])])]), _c('ol', {\n    attrs: {\n      \"start\": \"3\"\n    }\n  }, [_c('li', [_vm._v(\"Em alguns casos, é necessário alterar a configuração de largura de banda no script para atualizar o firmware. Abra o script \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Flash_16mb.sh\")]), _vm._v(\" com o editor \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"nano\")]), _vm._v(\" e altere o parâmetro de velocidade de transmissão de \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"921600\")]), _vm._v(\" para um valor menor (por exemplo, \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"115200\")]), _vm._v(\").\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"configuração\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#configura%C3%A7%C3%A3o\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Configuração\")]), _c('ol', [_c('li', [_vm._v(\"Desconecte o SLS Gateway do computador. Configure as chaves na parte de trás do gateway para a posição correta. As chaves \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"5\")]), _vm._v(\" (RX Zigbee para ESP) e \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"6\")]), _vm._v(\" (TX Zigbee para ESP) devem estar na posição \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"ON\")]), _vm._v(\", as outras devem estar \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"OFF\")]), _vm._v(\". \")])]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/sls-gateway-56.gif\"\n    }\n  }), _c('ol', {\n    attrs: {\n      \"start\": \"2\"\n    }\n  }, [_c('li', [_vm._v(\"Conecte o cabo de alimentação tipo-C. A luz indicadora no centro deve ficar verde.\")])]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/sls-gateway-connect.gif\"\n    }\n  }), _c('ol', {\n    attrs: {\n      \"start\": \"3\"\n    }\n  }, [_c('li', [_vm._v(\"Na primeira inicialização, o gateway começará a compartilhar Wi-Fi com o SSID \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"zgw****\")]), _vm._v(\". Conecte-se a esta rede. Tenha em mente que o sinal pode ser fraco, então é melhor manter o gateway SLS mais próximo do seu computador. \")])]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/sls-gateway-wifi.gif\"\n    }\n  }), _c('ol', {\n    attrs: {\n      \"start\": \"4\"\n    }\n  }, [_c('li', [_c('p', [_vm._v(\"Se a conexão for bem-sucedida, a interface web será aberta (ou você pode encontrá-la no endereço 192.168.1.1). \")])]), _c('li', [_c('p', [_vm._v(\"Você verá a página \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Wi-Fi Settings\")]), _vm._v(\". Selecione sua rede Wi-Fi e insira a senha. Pressione o botão \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Apply\")]), _vm._v(\". O gateway reiniciará e se conectará à sua rede Wi-Fi. \")])])]), _c('robo-wiki-video', {\n    attrs: {\n      \"autoplay\": \"\",\n      \"loop\": \"\",\n      \"controls\": \"\",\n      \"videos\": [{\n        src: 'https://cloudflare-ipfs.com/ipfs/QmSht6roENzrV6oqsQ1a5gp6GVCz54EDZdPAP8XVh9SCwH',\n        type: 'mp4'\n      }]\n    }\n  }), _c('ol', {\n    attrs: {\n      \"start\": \"6\"\n    }\n  }, [_c('li', [_c('p', [_vm._v(\"Encontre o IP local do gateway SLS para acessar a interface web. Para encontrá-lo, você pode usar o \"), _c('a', {\n    attrs: {\n      \"href\": \"https://www.fing.com/products\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"aplicativo móvel Fing\")]), _vm._v(\" ou a \"), _c('a', {\n    attrs: {\n      \"href\": \"https://vitux.com/find-devices-connected-to-your-network-with-nmap/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"ferramenta de linha de comando nmap\")]), _vm._v(\". O nome do gateway deve ser parecido com este: \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"zgw****\")]), _vm._v(\". Abra a interface web do gateway colando o IP do gateway em um navegador.\")])]), _c('li', [_c('p', [_vm._v(\"Vá para \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Setting\")]), _vm._v(\" -> \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Hardware\")]), _vm._v(\" e verifique se as configurações estão iguais à imagem. Corrija as configurações, se necessário, e clique no botão \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Save\")]), _vm._v(\":\")])])]), _c('robo-wiki-video', {\n    attrs: {\n      \"autoplay\": \"\",\n      \"loop\": \"\",\n      \"controls\": \"\",\n      \"videos\": [{\n        src: 'https://cloudflare-ipfs.com/ipfs/QmeSksMxU9xkvvK7f81WDAYULiMFokK7P7KDVYEjv2MHjn',\n        type: 'mp4'\n      }]\n    }\n  }), _c('p', [_vm._v(\"A tabela com os valores necessários:\")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v(\"Field\")]), _c('th', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"Value\")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v(\"Zigbee module\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"TI\")])]), _c('tr', [_c('td', [_vm._v(\"Zigbee UART RX\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"22\")])]), _c('tr', [_c('td', [_vm._v(\"Zigbee UART TX\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"23\")])]), _c('tr', [_c('td', [_vm._v(\"Zigbee RST Pin\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"18\")])]), _c('tr', [_c('td', [_vm._v(\"Zigbee BSL Pin\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"19\")])]), _c('tr', [_c('td', [_vm._v(\"Service Button Pin\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"33 (pullUP - true)\")])]), _c('tr', [_c('td', [_vm._v(\"Number addressable leds\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"0\")])]), _c('tr', [_c('td', [_vm._v(\"Led Red (or addr)\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"21\")])]), _c('tr', [_c('td', [_vm._v(\"Led Green\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"5\")])]), _c('tr', [_c('td', [_vm._v(\"Led Blue\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"27\")])]), _c('tr', [_c('td', [_vm._v(\"I2C SDA\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"255\")])]), _c('tr', [_c('td', [_vm._v(\"I2C SCL\")]), _c('td', {\n    attrs: {\n      \"align\": \"left\"\n    }\n  }, [_vm._v(\"255\")])])])]), _c('ol', {\n    attrs: {\n      \"start\": \"8\"\n    }\n  }, [_c('li', [_c('p', [_vm._v(\"Em seguida, reinicie o gateway. Escolha \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Actions\")]), _vm._v(\" -> \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Reboot system\")]), _vm._v(\" no canto superior direito.\")])]), _c('li', [_c('p', [_vm._v(\"Verifique se o gateway está funcionando corretamente na janela de informações do Zigbee. O DeviceState deve ser \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"OK\")]), _vm._v(\".\")])]), _c('li', [_c('p', [_vm._v(\"Configure a adição automática de dispositivos ao Home Assistant. Vá para  \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Zigbee\")]), _vm._v(\" -> \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Config\")]), _vm._v(\" e escolha \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Home Assistant MQTT Discovery\")]), _vm._v(\" e \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Clear States\")]), _vm._v(\". Salve as alterações e \"), _c('strong', [_vm._v(\"reinicie\")]), _vm._v(\" o gateway SLS.\")])])]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\"\n    }\n  }, [_c('p', [_vm._v(\"Se você já tiver um gateway SLS ativo em sua casa e estiver configurando outro, eles entrarão em conflito. Para resolver esse problema, você precisa alterar o canal no novo dispositivo. Para fazer isso, vá para \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Zigbee\")]), _vm._v(\" -> \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Config\")]), _vm._v(\" e altere o canal para outro (por exemplo, canal 15).\")])]), _c('robo-wiki-video', {\n    attrs: {\n      \"autoplay\": \"\",\n      \"loop\": \"\",\n      \"controls\": \"\",\n      \"videos\": [{\n        src: 'https://cloudflare-ipfs.com/ipfs/QmVZMB1xQeB6ZLfSR6aUrN6cRSF296s8CMJt7E2jBJ5MjZ',\n        type: 'mp4'\n      }]\n    }\n  }), _c('h2', {\n    attrs: {\n      \"id\": \"emparelhando-o-sls-com-o-mqtt\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#emparelhando-o-sls-com-o-mqtt\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Emparelhando o SLS com o MQTT\")]), _c('p', [_vm._v(\"Após configurar o SLS Gateway, você precisa conectar o SLS Gateway ao Home Assistant. Abra a interface web do SLS Gateway e vá para \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Settings/Link\")]), _vm._v(\" -> \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"MQTT Setup\")]), _vm._v(\":\")]), _c('p', [_vm._v(\"Adicione o endereço do seu broker (endereço do Raspberry Pi com o Home Assistant na rede local, você pode encontrá-lo com o \"), _c('a', {\n    attrs: {\n      \"href\": \"https://www.fing.com/products\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"aplicativo móvel Fing\")]), _vm._v(\" ou a \"), _c('a', {\n    attrs: {\n      \"href\": \"https://vitux.com/find-devices-connected-to-your-network-with-nmap/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"ferramenta de linha de comando nmap\")]), _vm._v(\"), porta (padrão é \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"1883\")]), _vm._v(\"), nome de usuário e senha do seu broker (que você criou anteriormente) e o nome do tópico (você pode escolher qualquer um). Além disso, o endereço IP do Raspberry Pi deve ser estático. Clique em \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Enable\")]), _vm._v(\" e \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Retain states\")]), _vm._v(\".\")]), _c('robo-wiki-video', {\n    attrs: {\n      \"autoplay\": \"\",\n      \"loop\": \"\",\n      \"controls\": \"\",\n      \"videos\": [{\n        src: 'https://cloudflare-ipfs.com/ipfs/QmdNKDqwwy87VQEDDVsX5kpaDQm9wKKPEJUNJnhnjx6e5y',\n        type: 'mp4'\n      }]\n    }\n  }), _c('p', [_vm._v(\"Salve as alterações. Agora, os dispositivos serão mostrados automaticamente no Home Assistant.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"conectar-dispositivos\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#conectar-dispositivos\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Conectar Dispositivos\")]), _c('p', [_vm._v(\"Conecte seus dispositivos indo para \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Zigbee\")]), _vm._v(\" -> \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Join\")]), _vm._v(\". Coloque seus sensores no modo de emparelhamento, a maneira mais comum de alternar um dispositivo para o modo de conexão é segurar seu botão de energia ou ligá-los/desligá-los 5 vezes. Pressione o botão \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Enable Join\")]), _vm._v(\" para iniciar a busca por dispositivos Zigbee. Você verá sensores ativos.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/switch-device.gif\"\n    }\n  }), _c('robo-wiki-video', {\n    attrs: {\n      \"autoplay\": \"\",\n      \"loop\": \"\",\n      \"controls\": \"\",\n      \"videos\": [{\n        src: 'https://cloudflare-ipfs.com/ipfs/Qmdq3PBNY88QbYYqakwSLG2vn3mVUom3w3wsSWfTd1pzJA',\n        type: 'mp4'\n      }]\n    }\n  }), _c('p', [_vm._v(\"Agora você pode ir para a seção \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/sub-activate\"\n    }\n  }, [_c('strong', [_vm._v(\"Assinatura IoT\")])]), _vm._v(\" e começar a ativar a assinatura Robonomics.\")])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/pt/sls-gateway.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22524ceff2-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "5k3a":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/pt/sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/pt/sls-gateway.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "8Mpe":
/*!********************************!*\
  !*** ./docs/pt/sls-gateway.md ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sls_gateway_md_vue_type_template_id_8f9f2940__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sls-gateway.md?vue&type=template&id=8f9f2940 */ \"Ly3X\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"cBMf\");\n/* harmony import */ var _sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"NDuA\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _sls_gateway_md_vue_type_template_id_8f9f2940__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _sls_gateway_md_vue_type_template_id_8f9f2940__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/pt/sls-gateway.md?");

/***/ }),

/***/ "L8iD":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/pt/sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Robonomics SLS Gateway\",\n  \"contributors\": [\"LoSk-p\", \"Fingerling42\", \"nakata5321\"],\n  \"tools\": [\"SLS Firmware 2022.08.13 https://github.com/airalab/robonomics-hass-utils\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/pt/sls-gateway.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "Ly3X":
/*!**************************************************************!*\
  !*** ./docs/pt/sls-gateway.md?vue&type=template&id=8f9f2940 ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_template_id_8f9f2940__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"524ceff2-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sls-gateway.md?vue&type=template&id=8f9f2940 */ \"3dz3\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_template_id_8f9f2940__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_template_id_8f9f2940__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/pt/sls-gateway.md?");

/***/ }),

/***/ "NDuA":
/*!*****************************************************************************************!*\
  !*** ./docs/pt/sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"L8iD\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/pt/sls-gateway.md?");

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

/***/ "cBMf":
/*!************************************************************************************!*\
  !*** ./docs/pt/sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"5k3a\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/pt/sls-gateway.md?");

/***/ })

}]);