(() => {
var exports = {};
exports.id = 6645;
exports.ids = [6645];
exports.modules = {

/***/ 7661:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "address-item-mobile_container__vOcWk",
	"header": "address-item-mobile_header__d0Nm1",
	"address": "address-item-mobile_address__tm2sb",
	"footer": "address-item-mobile_footer__YpIIG"
};


/***/ }),

/***/ 9585:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "address-mobile_container__0xPqA"
};


/***/ }),

/***/ 4775:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "addresses_container__fdNzX",
	"header": "addresses_header__NrGaz",
	"body": "addresses_body__FknXT",
	"item": "addresses_item__dB39G"
};


/***/ }),

/***/ 673:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "container_container__Z68vW",
	"header": "container_header__9jcdS",
	"title": "container_title__hPO_8",
	"content": "container_content__zXhet"
};


/***/ }),

/***/ 6063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_container_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(673);
/* harmony import */ var _styles_components_container_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_container_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function Container({ title , ButtonHeader , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_components_container_module_scss__WEBPACK_IMPORTED_MODULE_1___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_components_container_module_scss__WEBPACK_IMPORTED_MODULE_1___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_styles_components_container_module_scss__WEBPACK_IMPORTED_MODULE_1___default().title),
                        children: title
                    }),
                    ButtonHeader
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_components_container_module_scss__WEBPACK_IMPORTED_MODULE_1___default().content),
                children: children
            })
        ]
    });
};


/***/ }),

/***/ 7666:
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
// EXTERNAL MODULE: ./components/profile/sidebar.jsx + 2 modules
var sidebar = __webpack_require__(7305);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/ui/container.jsx
var container = __webpack_require__(6063);
// EXTERNAL MODULE: ./components/ui/button.jsx + 2 modules
var ui_button = __webpack_require__(1404);
// EXTERNAL MODULE: ./components/ui/modal.jsx + 1 modules
var modal = __webpack_require__(3660);
// EXTERNAL MODULE: ./styles/components/addresses.module.scss
var addresses_module = __webpack_require__(4775);
var addresses_module_default = /*#__PURE__*/__webpack_require__.n(addresses_module);
;// CONCATENATED MODULE: ./components/profile/addresses/address-item.jsx



function AddressItem({ address , handleClick  }) {
    // const handleClick = (e) => {};
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (addresses_module_default()).item,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                children: address
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                    color: "blue",
                    handleClick: handleClick,
                    rounded: true,
                    children: "حذف"
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/profile/addresses/add-address.jsx
var add_address = __webpack_require__(3150);
;// CONCATENATED MODULE: ./helpers/useWindowDimensions.js

function getWindowDimensions() {
    const { innerWidth: width , innerHeight: height  } = window;
    return {
        width,
        height
    };
}
function useWindowDimensions() {
    const { 0: windowDimensions , 1: setWindowDimensions  } = (0,external_react_.useState)(getWindowDimensions());
    (0,external_react_.useEffect)(()=>{
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    return windowDimensions;
};

// EXTERNAL MODULE: ./app/services/apiSlice.js
var apiSlice = __webpack_require__(6558);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./features/auth/authSlice.js
var authSlice = __webpack_require__(3066);
;// CONCATENATED MODULE: ./components/profile/addresses/addresses.jsx













function Addresses({ items  }) {
    const { 0: showAddAddress , 1: setShowAddAddress  } = (0,external_react_.useState)(false);
    const { height , width  } = useWindowDimensions();
    const [deleteAddress] = (0,apiSlice/* useDeleteAddressMutation */.ct)();
    const [compeletProfile] = (0,apiSlice/* useCompleteProfileMutation */.eP)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const user = (0,external_react_redux_.useSelector)(authSlice/* selectUser */.dy);
    const { data: userDetails , isLoading  } = (0,apiSlice/* useGetUserDetailsQuery */.co)();
    // console.log(userDetails,'ajhdyusagyu')
    const router = (0,router_.useRouter)();
    // console.log(user)
    const handleClick = ()=>setShowAddAddress(true);
    const handleClose = ()=>setShowAddAddress(false);
    const handleClickMobile = ()=>router.push("/profile/addresses/add");
    // if(userDetails?.user){
    // 	dispatch(setCredentials(userDetails.user))
    // }
    const deleteAddressHandller = (id)=>{
        const filter = user.address?.filter((el)=>el._id !== id);
        // console.log(filter, user.address.length)
        deleteAddress(id).unwrap().then((res)=>{
            // ;
            dispatch((0,authSlice/* setCredentials */.Dj)({
                ...user,
                address: filter
            }));
        });
    };
    // console.log(userDetails);
    const ButtonHeader = width >= 910 ? /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
        variant: "primary",
        handleClick: handleClick,
        rounded: true,
        children: "ثبت آدرس جدید"
    }) : /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
        variant: "primary",
        handleClick: handleClickMobile,
        rounded: true,
        children: "افزودن آدرس"
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* default */.Z, {
        title: "مدیریت آدرس ها",
        ButtonHeader: ButtonHeader,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (addresses_module_default()).container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (addresses_module_default()).header,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "آدرس"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "عملیات"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (addresses_module_default()).body,
                        children: !isLoading && user.address.length > 0 && user?.address?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(AddressItem, {
                                handleClick: ()=>deleteAddressHandller(item._id),
                                address: item?.address
                            }, item._id))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(modal/* default */.Z, {
                onClose: handleClose,
                show: showAddAddress,
                title: "ثبت آدرس جدید",
                children: /*#__PURE__*/ jsx_runtime_.jsx(add_address/* default */.Z, {
                    handleModal: handleClose
                })
            })
        ]
    });
};
Addresses.defaultProps = {
    items: [
        {
            id: "address-01",
            title: "منزل",
            city: "تهران",
            details: "خیابان شهید بهشتی، خیابان پاکستان جنب پمپ بنزین",
            phone: "09121234567"
        },
        {
            id: "address-02",
            title: "محل کار",
            city: "تهران",
            details: "سعادت آباد، خیابان سرو غربی،پلاک ۳۴، واحد ۴۱",
            phone: "09121234567"
        },
        {
            id: "address-03",
            title: "مغازه",
            city: "تهران",
            details: "ملادر، خیابان بهاره شرقی، بن بست بیست و یکم",
            phone: "09121234567"
        }, 
    ]
};

// EXTERNAL MODULE: ./styles/components/address-item-mobile.module.scss
var address_item_mobile_module = __webpack_require__(7661);
var address_item_mobile_module_default = /*#__PURE__*/__webpack_require__.n(address_item_mobile_module);
;// CONCATENATED MODULE: ./components/profile/addresses/address-item-mobile.jsx



function AddressItemMobile({ title , address , phone  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (address_item_mobile_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (address_item_mobile_module_default()).header,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "عنوان آدرس"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                        variant: "blue-outline",
                        rounded: true,
                        children: "ویرایش"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (address_item_mobile_module_default()).address,
                children: address
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (address_item_mobile_module_default()).footer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "شماره تلفن"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: phone
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./styles/components/address-mobile.module.scss
var address_mobile_module = __webpack_require__(9585);
var address_mobile_module_default = /*#__PURE__*/__webpack_require__.n(address_mobile_module);
;// CONCATENATED MODULE: ./components/profile/addresses/address-mobile.jsx





function AddressMobile({ items  }) {
    const user = (0,external_react_redux_.useSelector)(authSlice/* selectUser */.dy);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (address_mobile_module_default()).container,
        children: typeof user?.address === Array && user?.address.map(({ id , title , address , phone  })=>/*#__PURE__*/ jsx_runtime_.jsx(AddressItemMobile, {
                title: title,
                address: address,
                phone: phone
            }, id))
    });
};
AddressMobile.defaultProps = {
    items: [
        {
            id: "adr-01",
            title: "محل کار",
            address: "استان تهران، شهر تهران، کاووسیه ، خیابان گاندی جنوبی ، خیابان بیست و یکم ، پلاک 28 ، طبقه نهم",
            phone: "09381234567"
        },
        {
            id: "adr-02",
            title: "منزل",
            address: "استان تهران، شهر تهران، کاووسیه ، خیابان گاندی جنوبی ، خیابان بیست و یکم ، پلاک 28 ، طبقه نهم",
            phone: "09381234567"
        }
    ]
};

// EXTERNAL MODULE: ./styles/components/profile.module.scss
var profile_module = __webpack_require__(6591);
var profile_module_default = /*#__PURE__*/__webpack_require__.n(profile_module);
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(4802);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(2500);
;// CONCATENATED MODULE: ./pages/profile/addresses/index.js








function AddressesPage() {
    return /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        hasHeader: true,
        hasDescription: true,
        hasKeywords: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: (profile_module_default()).section,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (profile_module_default()).container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(sidebar/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                        className: (profile_module_default()).main,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Addresses, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(AddressMobile, {})
                        ]
                    })
                ]
            })
        })
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,5152,739,2767,7305,5859,3150], () => (__webpack_exec__(7666)));
module.exports = __webpack_exports__;

})();