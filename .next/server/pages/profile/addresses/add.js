(() => {
var exports = {};
exports.id = 838;
exports.ids = [838];
exports.modules = {

/***/ 2840:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "add-address-mobile_container__QeUbZ",
	"form": "add-address-mobile_form__qOYX_",
	"address": "add-address-mobile_address__y74fu"
};


/***/ }),

/***/ 7122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AddressesPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout/layout.jsx + 27 modules
var layout = __webpack_require__(2767);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./components/profile/personal-info/form-input.jsx + 1 modules
var form_input = __webpack_require__(5859);
// EXTERNAL MODULE: ./components/ui/button.jsx + 2 modules
var ui_button = __webpack_require__(1404);
// EXTERNAL MODULE: ./styles/components/add-address-mobile.module.scss
var add_address_mobile_module = __webpack_require__(2840);
var add_address_mobile_module_default = /*#__PURE__*/__webpack_require__.n(add_address_mobile_module);
;// CONCATENATED MODULE: ./components/profile/addresses/add-address-mobile.jsx






function AddAddressMobile() {
    const { 0: city , 1: setCity  } = (0,external_react_.useState)({
        value: "",
        error: ""
    });
    const { 0: addressTitle , 1: setAddressTitle  } = (0,external_react_.useState)({
        value: "",
        error: ""
    });
    const { 0: phone , 1: setPhone  } = (0,external_react_.useState)({
        value: "",
        error: ""
    });
    const { 0: address , 1: setAddress  } = (0,external_react_.useState)({
        value: "",
        error: ""
    });
    const MapWithNoSSR = dynamic_default()(null, {
        loadableGenerated: {
            modules: [
                "..\\components\\profile\\addresses\\add-address-mobile.jsx -> " + "@/components/ui/map"
            ]
        },
        ssr: false
    });
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        switch(name){
            case "city":
                setCity({
                    error: "",
                    value
                });
                break;
            case "addressTitle":
                setAddressTitle({
                    error: "",
                    value
                });
                break;
            case "phone":
                const re = /^[0-9\b]+$/;
                if (value === "" || re.test(value)) {
                    setPhone({
                        error: "",
                        value
                    });
                }
                break;
            case "address":
                setAddress({
                    error: "",
                    value
                });
                break;
            default:
                break;
        }
    };
    const handleClick = (e)=>{
        e.preventDefault();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (add_address_mobile_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (add_address_mobile_module_default()).mapContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx(MapWithNoSSR, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (add_address_mobile_module_default()).form,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(form_input/* default */.Z, {
                        id: "addressTitle",
                        name: "addressTitle",
                        type: "text",
                        value: addressTitle.value,
                        handleChange: handleChange,
                        error: addressTitle.error,
                        label: "عنوان آدرس"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(form_input/* default */.Z, {
                        id: "city",
                        name: "city",
                        type: "text",
                        value: city.value,
                        handleChange: handleChange,
                        error: city.error,
                        label: "شهر"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(form_input/* default */.Z, {
                        id: "phone",
                        name: "phone",
                        type: "text",
                        value: phone.value,
                        handleChange: handleChange,
                        error: phone.error,
                        label: "تلفن ثابت | موبایل"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (add_address_mobile_module_default()).address,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "address",
                                children: "آدرس کامل"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                id: "address",
                                name: "address",
                                onChange: handleChange,
                                value: address.value,
                                cols: 13,
                                rows: 7,
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                        type: "submit",
                        variant: "primary",
                        handleClick: handleClick,
                        rounded: true,
                        children: "ثبت آدرس"
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(4802);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(2500);
;// CONCATENATED MODULE: ./pages/profile/addresses/add.js





function AddressesPage() {
    return /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        hasHeader: true,
        hasDescription: true,
        hasKeywords: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(AddAddressMobile, {})
    });
};
async function getServerSideProps(context) {
    const { req  } = context;
    if (req.headers.cookie) {
        const { token  } = external_cookie_default().parse(req.headers.cookie);
        const backendRes = await fetch(`${config/* API_URL */.T}/api/user_details`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        const data = await backendRes.json();
        if (backendRes.ok) {
            return {
                props: {
                    data
                }
            };
        }
    }
    return {
        redirect: {
            destination: "/login",
            permanent: false
        }
    };
}


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4335:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 4802:
/***/ ((module) => {

"use strict";
module.exports = require("cookie");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,5152,739,2767,5859], () => (__webpack_exec__(7122)));
module.exports = __webpack_exports__;

})();