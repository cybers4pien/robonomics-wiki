(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ar--backup-services-md"],{

/***/ "4K2f":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"524ceff2-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ar/backup-services.md?vue&type=template&id=cd7d26f2 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_c('strong', [_vm._v(\"في هذه المقالة، ستتعلم كيفية إنشاء نسخ احتياطية لتكوين Home Assistant الخاص بك واستعادته عند الحاجة. لإنشاء النسخ الاحتياطية، يتم استدعاء خدمة تقوم بإنشاء أرشيف آمن يحتوي على ملفات التكوين. تقوم الخدمة أيضًا بإضافة تكوين Mosquitto brocker و Zigbee2MQTT إلى النسخة الاحتياطية إذا كانت موجودة. ثم تقوم هذه الخدمة بإضافة الأرشيف إلى IPFS وتخزين معرف النتيجة في Robonomics Digital Twin.\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"إنشاء-نسخة-احتياطية-لتكوين-home-assistant\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%D8%A5%D9%86%D8%B4%D8%A7%D8%A1-%D9%86%D8%B3%D8%AE%D8%A9-%D8%A7%D8%AD%D8%AA%D9%8A%D8%A7%D8%B7%D9%8A%D8%A9-%D9%84%D8%AA%D9%83%D9%88%D9%8A%D9%86-home-assistant\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"إنشاء نسخة احتياطية لتكوين Home Assistant\")]), _c('p', [_vm._v(\"يتيح لك إنشاء نسخة احتياطية استعادة تكوين Home Assistant الخاص بك بسهولة في حالة حدوث خطأ.\")]), _c('robo-wiki-video', {\n    attrs: {\n      \"autoplay\": \"\",\n      \"loop\": \"\",\n      \"controls\": \"\",\n      \"videos\": [{\n        src: 'https://cloudflare-ipfs.com/ipfs/QmZN5LfWR4XwAiZ3jEcw7xbCnT81NsF5XE3XFaNhMm5ba1',\n        type: 'mp4'\n      }]\n    }\n  }), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\",\n      \"title\": \"WARNING\"\n    }\n  }, [_c('p', [_vm._v(\"لكي تتمكن من إجراء نسخ احتياطية واستعادة التكوين الخاص بك، من الضروري استخدام \"), _c('strong', [_vm._v(\"بوابة IPFS مخصصة\")]), _vm._v(\" مثل Pinata. بدون ذلك، ستتم تخزين نسخة الاحتياطية الخاصة بك فقط على عقدة IPFS المحلية الخاصة بك، مما قد يمنعك من استعادة تكوين Home Assistant الخاص بك في حالة فشل العقدة المحلية.\")])]), _c('ol', [_c('li', [_c('p', [_vm._v(\"في واجهة الويب لـ Home Assistant، انتقل إلى \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"أدوات المطور\")]), _vm._v(\" -> \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"الخدمات\")]), _vm._v(\". ابحث عن \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Robonomics: حفظ النسخة الاحتياطية في Robonomics\")]), _vm._v(\" واضغط على \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"استدعاء الخدمة\")]), _vm._v(\".\")])]), _c('li', [_c('p', [_vm._v(\"انتظر حتى تظهر إشعار \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"تم تحديث النسخة الاحتياطية في Robonomics\")]), _vm._v(\" في \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"الإشعارات\")]), _vm._v(\".\")])])]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\",\n      \"title\": \"WARNING\"\n    }\n  }, [_c('p', [_vm._v(\"لا تحاول إنشاء نسخة احتياطية أو استعادة التكوين فور تحميل Home Assistant و Robonomics Integration. يرجى \"), _c('strong', [_vm._v(\"الانتظار لمدة تقريبية 5 دقائق\")]), _vm._v(\" لإتمام الإعداد الأولي.\")])]), _c('p', [_vm._v(\"وسيطات الخدمة:\")]), _c('ul', [_c('li', [_c('strong', [_vm._v(\"نسخة احتياطية كاملة\")]), _vm._v(\" (الافتراضي: خاطئ) - إضافة قاعدة البيانات إلى النسخة الاحتياطية، بحيث يتم تخزين تاريخ حالات الكيان أيضًا.\")]), _c('li', [_c('strong', [_vm._v(\"مسار ملف كلمة مرور mosquitto\")]), _vm._v(\" (الافتراضي: \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"/etc/mosquitto\")]), _vm._v(\") - إذا كنت تستخدم طرق تثبيت Home Assistant Core أو Docker وليس لديك مسار افتراضي لـ Mosquitto brocker، يجب عليك تغيير هذا المعلم. \"), _c('em', [_vm._v(\"لا يلزم ذلك لـ Home Assistant OS أو Superviser\")]), _vm._v(\".\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"استعادة-تكوين-home-assistant-من-النسخة-الاحتياطية\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%D8%A7%D8%B3%D8%AA%D8%B9%D8%A7%D8%AF%D8%A9-%D8%AA%D9%83%D9%88%D9%8A%D9%86-home-assistant-%D9%85%D9%86-%D8%A7%D9%84%D9%86%D8%B3%D8%AE%D8%A9-%D8%A7%D9%84%D8%A7%D8%AD%D8%AA%D9%8A%D8%A7%D8%B7%D9%8A%D8%A9\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"استعادة تكوين Home Assistant من النسخة الاحتياطية\")]), _c('p', [_vm._v(\"لكي تتمكن من استعادة التكوين الخاص بك، ستحتاج إلى Home Assistant و Robonomics Integration مثبتين. \")]), _c('robo-wiki-video', {\n    attrs: {\n      \"autoplay\": \"\",\n      \"loop\": \"\",\n      \"controls\": \"\",\n      \"videos\": [{\n        src: 'https://cloudflare-ipfs.com/ipfs/QmNcJpHWWuZzwNCQryTw5kcki49oNTjEb8xvnfffSYfRVa',\n        type: 'mp4'\n      }]\n    }\n  }), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\",\n      \"title\": \"WARNING\"\n    }\n  }, [_c('p', [_vm._v(\"لضمان استعادة التكوين الناجحة في طرق تثبيت Home Assistant Core و Docker، تحتاج إلى أداء خطوات الإعداد الإضافية كما هو موضح في نهاية الصفحة.\")])]), _c('ol', [_c('li', [_c('p', [_vm._v(\"قم بتثبيت Home Assistant مع Robonomics Integration (إذا لم يتم تثبيته بعد)، باتباع الخطوات الواردة في المقالة الخاصة بـ \"), _c('a', {\n    attrs: {\n      \"href\": \"https://wiki.robonomics.network/docs/robonomics-smart-home-overview/#start-%D9%87%D9%86%D8%A7-your-smart-home\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"طريقة التثبيت المطلوبة\")]), _vm._v(\".\")])]), _c('li', [_c('p', [_c('a', {\n    attrs: {\n      \"href\": \"https://wiki.robonomics.network/docs/robonomics-hass-integration\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"قم بإعداد Robonomics Integration\")]), _vm._v(\" باستخدام \"), _c('strong', [_vm._v(\"نفس البذور\")]), _vm._v(\" التي استخدمتها في تكوين Robonomics السابق. إذا انتهت اشتراكك، \"), _c('a', {\n    attrs: {\n      \"href\": \"https://wiki.robonomics.network/docs/sub-activate\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"أعد تنشيطه\")]), _vm._v(\".\")])]), _c('li', [_c('p', [_vm._v(\"في واجهة الويب لـ Home Assistant، انتقل إلى \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"أدوات المطور\")]), _vm._v(\" -> \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"الخدمات\")]), _vm._v(\". ابحث عن \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Robonomics: استعادة من النسخة الاحتياطية في Robonomics\")]), _vm._v(\" واضغط على \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"استدعاء الخدمة\")]), _vm._v(\". انتقل إلى صفحة \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"نظرة عامة\")]), _vm._v(\" للتحقق من حالة النسخة الاحتياطية الخاصة بك.\")])]), _c('li', [_c('p', [_vm._v(\"بعد الاستعادة، سيتم إعادة تشغيل Home Assistant تلقائيًا. إذا لم يتم إعادة تشغيل Home Assistant لأي سبب، يمكنك التحقق من حالة الاستعادة عن طريق مراقبة حالة الكيان \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"robonomics.backup\")]), _vm._v(\". إذا كانت الحالة هي \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"تمت الاستعادة\")]), _vm._v(\"، فسيتعين عليك إعادة تشغيل Home Assistant يدويًا عن طريق الانتقال إلى \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"الإعدادات\")]), _vm._v(\" > \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"النظام\")]), _vm._v(\" والنقر على زر \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"إعادة التشغيل\")]), _vm._v(\" الموجود في الزاوية العلوية اليمنى.\")])]), _c('li', [_c('p', [_vm._v(\"إذا كان النسخة الاحتياطية الخاصة بك تتضمن تكوين Zigbee2MQTT أو Mosquitto، فيجب عليك إعادة تشغيل هذه الخدمات لتمكين التكوين الجديد. يمكنك القيام بذلك يدويًا عن طريق إعادة تشغيل الخدمات بشكل فردي، أو يمكنك ببساطة إعادة تشغيل جهاز Home Assistant لضمان إعادة تشغيل جميع الخدمات.\")])])]), _c('p', [_vm._v(\"وسيطات الخدمة:\")]), _c('ul', [_c('li', [_c('strong', [_vm._v(\"مسار ملف كلمة مرور mosquitto\")]), _vm._v(\" (الافتراضي: \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"/etc/mosquitto\")]), _vm._v(\") - إذا كنت تستخدم طرق تثبيت Home Assistant Core أو Docker وليس لديك مسار افتراضي لـ Mosquitto brocker، يجب عليك تغيير هذا المعلم. \"), _c('em', [_vm._v(\"لا يلزم ذلك لـ Home Assistant OS أو Superviser\")]), _vm._v(\".\")]), _c('li', [_c('strong', [_vm._v(\"مسار تكوين Zigbee2MQTT\")]), _vm._v(\" (الافتراضي: \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"/opt/zigbee2mqtt\")]), _vm._v(\") - إذا كنت تستخدم طرق تثبيت Home Assistant Core أو Docker وليس لديك مسار افتراضي لـ Zigbee2MQTT، يجب عليك تغيير هذا المعلم. \"), _c('em', [_vm._v(\"لا يلزم ذلك لـ Home Assistant OS أو Superviser\")]), _vm._v(\".\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"استعادة-تكوين-mosquitto-و-zigbee2mqtt-لطريقة-تثبيت-home-assistant-core\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%D8%A7%D8%B3%D8%AA%D8%B9%D8%A7%D8%AF%D8%A9-%D8%AA%D9%83%D9%88%D9%8A%D9%86-mosquitto-%D9%88-zigbee2mqtt-%D9%84%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%AA%D8%AB%D8%A8%D9%8A%D8%AA-home-assistant-core\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"استعادة تكوين Mosquitto و Zigbee2MQTT لطريقة تثبيت Home Assistant Core\")]), _c('p', [_vm._v(\"إذا كانت النسخة الاحتياطية تتضمن تكوين Mosquitto أو Zigbee2MQTT، خلال عملية الاستعادة، سيتم وضعهما في المسار الافتراضي أو في المسار المحدد في المعلمات. ومع ذلك، إذا قمت بتثبيت تكامل Robonomics في Home Assistant Core الموجود \"), _c('em', [_vm._v(\"(ليس من صورة Robonomics المثبتة مسبقًا)\")]), _vm._v(\"، فقد لا يكون لدى المستخدم \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"homeassistant\")]), _vm._v(\" صلاحية الوصول إلى هذا المسار.\")]), _c('p', [_vm._v(\"لذا لاستعادة تكوين Mosquitto و Zigbee2MQTT، يجب منح أذونات القراءة اللازمة للمستخدم \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"homeassistant\")]), _vm._v(\":\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"sudo chmod a+w /opt/zigbee2mqtt /etc/mosquitto\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"نسخ-احتياطي-لتكوين-mosquitto-و-zigbee2mqtt-لطريقة-تثبيت-home-assistant-بواسطة-docker\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%D9%86%D8%B3%D8%AE-%D8%A7%D8%AD%D8%AA%D9%8A%D8%A7%D8%B7%D9%8A-%D9%84%D8%AA%D9%83%D9%88%D9%8A%D9%86-mosquitto-%D9%88-zigbee2mqtt-%D9%84%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%AA%D8%AB%D8%A8%D9%8A%D8%AA-home-assistant-%D8%A8%D9%88%D8%A7%D8%B3%D8%B7%D8%A9-docker\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"نسخ احتياطي لتكوين Mosquitto و Zigbee2MQTT لطريقة تثبيت Home Assistant بواسطة Docker\")]), _c('p', [_vm._v(\"لنقل نسخ احتياطية لتكوينات Mosquitto و Zigbee2MQTT من حاوية Docker ، تحتاج إلى إنشاء أحجام لتكويناتهما المعنية. يمكن تحقيق ذلك عن طريق تشغيل حاوية Home Assistant الخاصة بك بوسائط إضافية:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"docker run -d \\\\\\n  --name homeassistant \\\\\\n  --privileged \\\\\\n  --restart=unless-stopped \\\\\\n  -e TZ=MY_TIME_ZONE \\\\\\n  -v /PATH_TO_YOUR_CONFIG:/config \\\\\\n  -v /etc/mosquitto:/etc/mosquitto \\\\\\n  -v /etc/mosquitto:/opt/zigbee2mqtt \\\\\\n  --network=host \\\\\\n  ghcr.io/home-assistant/home-assistant:stable\")])]), _c('p', [_vm._v(\"أو إجراء تغييرات في ملف \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"compose.yaml\")]), _vm._v(\" الخاص بك:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-yaml\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"version:\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"'3'\")]), _vm._v(\"\\n\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"services:\")]), _vm._v(\"\\n  \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"homeassistant:\")]), _vm._v(\"\\n    \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"container_name:\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"homeassistant\")]), _vm._v(\"\\n    \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"image:\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"ghcr.io/home-assistant/home-assistant:stable\\\"\")]), _vm._v(\"\\n    \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"volumes:\")]), _vm._v(\"\\n      \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-bullet\"\n    }\n  }, [_vm._v(\"-\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"/PATH_TO_YOUR_CONFIG:/config\")]), _vm._v(\"\\n      \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-bullet\"\n    }\n  }, [_vm._v(\"-\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"/etc/localtime:/etc/localtime:ro\")]), _vm._v(\"\\n      \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-bullet\"\n    }\n  }, [_vm._v(\"-\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"/etc/mosquitto:/etc/mosquitto\")]), _vm._v(\"\\n      \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-bullet\"\n    }\n  }, [_vm._v(\"-\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"/etc/mosquitto:/opt/zigbee2mqtt\")]), _vm._v(\"\\n    \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"restart:\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"unless-stopped\")]), _vm._v(\"\\n    \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"privileged:\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-literal\"\n    }\n  }, [_vm._v(\"true\")]), _vm._v(\"\\n    \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"network_mode:\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"host\")])])]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"Note\"\n    }\n  }, [_c('p', [_vm._v(\"يرجى ملاحظة أن المسارات الافتراضية لتكوينات Mosquitto و Zigbee2MQTT هي \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"/etc/mosquitto\")]), _vm._v(\" و \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"/opt/zigbee2mqtt\")]), _vm._v(\" على التوالي. ومع ذلك ، قد تختلف هذه المسارات اعتمادًا على إعدادك المحدد.\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"أزرار-النسخ-الاحتياطي\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%D8%A3%D8%B2%D8%B1%D8%A7%D8%B1-%D8%A7%D9%84%D9%86%D8%B3%D8%AE-%D8%A7%D9%84%D8%A7%D8%AD%D8%AA%D9%8A%D8%A7%D8%B7%D9%8A\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"أزرار النسخ الاحتياطي\")]), _c('p', [_vm._v(\"بالإضافة إلى استخدام الخدمات للعمل مع النسخ الاحتياطية ، يمكنك تبسيط العملية باستخدام أزرار \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"button.create_backup\")]), _vm._v(\" و \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"button.restore_from_backup\")]), _vm._v(\" من تكامل Robonomics. تُطلق هذه الأزرار الخدمات المعنية بالمعلمات الافتراضية (تنشئ زر النسخ الاحتياطي نسخة احتياطية بدون تاريخ).\")]), _c('robo-wiki-video', {\n    attrs: {\n      \"autoplay\": \"\",\n      \"loop\": \"\",\n      \"controls\": \"\",\n      \"videos\": [{\n        src: 'https://cloudflare-ipfs.com/ipfs/Qmc1fexYaJMsK6ch6JhjL6aqnAwqYNAzo5nEwYgDpnp4gj',\n        type: 'mp4'\n      }]\n    }\n  }), _c('p', [_vm._v(\"لإضافة أزرار إلى لوحة التحكم الخاصة بك ، اتبع هذه الخطوات:\")]), _c('ol', [_c('li', [_vm._v(\"انقر على النقاط الثلاث في الزاوية اليمنى العلوية من لوحة التحكم.\")]), _c('li', [_vm._v(\"حدد \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"تحرير لوحة التحكم\")]), _vm._v(\".\")]), _c('li', [_vm._v(\"انقر على زر \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"إضافة بطاقة\")]), _vm._v(\" في الزاوية اليمنى السفلية.\")]), _c('li', [_vm._v(\"اختر بطاقة \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"الكيانات\")]), _vm._v(\".\")]), _c('li', [_vm._v(\"في حقل \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"الكيانات\")]), _vm._v(\" ، ابحث عن كيانات button.create_backup و button.restore_from_backup.\")]), _c('li', [_vm._v(\"اضغط على \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"حفظ\")]), _vm._v(\" لإضافة الكيانات إلى البطاقة.\")]), _c('li', [_vm._v(\"انتهِ من التحرير بالنقر على زر \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"تم\")]), _vm._v(\" في الزاوية اليمنى العلوية.\")])])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/ar/backup-services.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22524ceff2-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "6i9n":
/*!*********************************************************************************************!*\
  !*** ./docs/ar/backup-services.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_backup_services_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./backup-services.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"KHC7\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_backup_services_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ar/backup-services.md?");

/***/ }),

/***/ "ERF2":
/*!************************************!*\
  !*** ./docs/ar/backup-services.md ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _backup_services_md_vue_type_template_id_cd7d26f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backup-services.md?vue&type=template&id=cd7d26f2 */ \"KRkF\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _backup_services_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backup-services.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"kGBF\");\n/* harmony import */ var _backup_services_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backup-services.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"6i9n\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _backup_services_md_vue_type_template_id_cd7d26f2__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _backup_services_md_vue_type_template_id_cd7d26f2__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _backup_services_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_backup_services_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _backup_services_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_backup_services_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ar/backup-services.md?");

/***/ }),

/***/ "KHC7":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ar/backup-services.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"خدمات النسخ الاحتياطي\",\n  \"contributors\": [\"tubleronchik\", \"LoSk-p\"],\n  \"tools\": [\"Robonomics Home Assistant Integration 1.4.2 https://github.com/airalab/homeassistant-robonomics-integration\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ar/backup-services.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "KRkF":
/*!******************************************************************!*\
  !*** ./docs/ar/backup-services.md?vue&type=template&id=cd7d26f2 ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_backup_services_md_vue_type_template_id_cd7d26f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"524ceff2-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./backup-services.md?vue&type=template&id=cd7d26f2 */ \"4K2f\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_backup_services_md_vue_type_template_id_cd7d26f2__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_backup_services_md_vue_type_template_id_cd7d26f2__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ar/backup-services.md?");

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

/***/ "kGBF":
/*!****************************************************************************************!*\
  !*** ./docs/ar/backup-services.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_backup_services_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./backup-services.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"n6mC\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_backup_services_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ar/backup-services.md?");

/***/ }),

/***/ "n6mC":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ar/backup-services.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ar/backup-services.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);