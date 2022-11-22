(() => {
var exports = {};
exports.id = 5768;
exports.ids = [5768];
exports.modules = {

/***/ 5463:
/***/ ((module) => {

// Exports
module.exports = {
	"label": "radio-button_label__hZ5Wj",
	"radio": "radio-button_radio__j_euA"
};


/***/ }),

/***/ 8908:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "shipping_container__YPXCI",
	"shipping": "shipping_shipping__I_FAI",
	"body": "shipping_body__fL348",
	"content": "shipping_content__J9WsU",
	"box": "shipping_box__gRgDb",
	"title": "shipping_title__VnYGr",
	"userInfo": "shipping_userInfo__sHFC6",
	"address": "shipping_address__JinVf",
	"days": "shipping_days__LxV8Q",
	"title_active": "shipping_title_active__6nmcd",
	"clock": "shipping_clock__UlbMX",
	"note": "shipping_note__o7ZwB",
	"textarea": "shipping_textarea__sfGw_"
};


/***/ }),

/***/ 1493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ShippingPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout/layout.jsx + 27 modules
var layout = __webpack_require__(2767);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./features/auth/authSlice.js
var authSlice = __webpack_require__(3066);
// EXTERNAL MODULE: ./features/cart/cartSlice.js + 1 modules
var cartSlice = __webpack_require__(6098);
// EXTERNAL MODULE: ./components/checkout/progress-bar.jsx + 1 modules
var progress_bar = __webpack_require__(9598);
// EXTERNAL MODULE: ./components/checkout/basket.jsx
var basket = __webpack_require__(6797);
// EXTERNAL MODULE: ./styles/components/radio-button.module.scss
var radio_button_module = __webpack_require__(5463);
var radio_button_module_default = /*#__PURE__*/__webpack_require__.n(radio_button_module);
;// CONCATENATED MODULE: ./components/ui/radio-button.jsx


function RadioButton({ id , handleChange , ...otherProps }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: (radio_button_module_default()).radio,
                type: "radio",
                id: id,
                onChange: handleChange,
                ...otherProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: (radio_button_module_default()).label,
                htmlFor: id
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/ui/button.jsx + 2 modules
var ui_button = __webpack_require__(1404);
// EXTERNAL MODULE: ./components/icons/arrow-left-white-icon.js
var arrow_left_white_icon = __webpack_require__(6053);
// EXTERNAL MODULE: ./components/ui/notification.jsx
var ui_notification = __webpack_require__(5214);
// EXTERNAL MODULE: ./components/ui/modal.jsx + 1 modules
var modal = __webpack_require__(3660);
// EXTERNAL MODULE: ./components/profile/addresses/add-address.jsx
var add_address = __webpack_require__(3150);
// EXTERNAL MODULE: ./styles/components/shipping.module.scss
var shipping_module = __webpack_require__(8908);
var shipping_module_default = /*#__PURE__*/__webpack_require__.n(shipping_module);
// EXTERNAL MODULE: ./app/services/apiSlice.js
var apiSlice = __webpack_require__(6558);
// EXTERNAL MODULE: ./data/messages.js
var messages = __webpack_require__(3203);
;// CONCATENATED MODULE: ./components/checkout/shipping.jsx

















function Shipping() {
    const { data  } = (0,apiSlice/* useGetUserDetailsQuery */.co)();
    // console.log(data, 'data')
    const { 0: shipping , 1: setShipping  } = (0,external_react_.useState)({
        address: "",
        deliveryTime: "",
        note: ""
    });
    const { 0: theWay , 1: setTheWay  } = (0,external_react_.useState)(0);
    const { 0: notification , 1: setNotification  } = (0,external_react_.useState)({
        show: false,
        status: null,
        message: ""
    });
    (0,external_react_.useEffect)(()=>{
        if (notification.show) {
            const timer = setTimeout(()=>{
                setNotification({
                    show: false,
                    status: null,
                    message: ""
                });
            }, 3000);
            return ()=>clearTimeout(timer);
        }
    }, [
        notification.show
    ]);
    const [buy, { isLoading  }] = (0,apiSlice/* useBuyMutation */.ro)();
    const { 0: showAddAddress , 1: setShowAddAddress  } = (0,external_react_.useState)(false);
    const handleClickAddAddress = ()=>setShowAddAddress(true);
    const handleClose = ()=>setShowAddAddress(false);
    const router = (0,router_.useRouter)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const user = (0,external_react_redux_.useSelector)(authSlice/* selectUser */.dy);
    const userAddress = (0,external_react_redux_.useSelector)(apiSlice/* selectUserAddresses */.bI);
    const cartItems = (0,external_react_redux_.useSelector)(cartSlice/* selectCartItems */.D1);
    const handleClickStep = (routerPath)=>{
        if (routerPath === "/checkout/payment") {
            if (shipping.address.length === 0) {
                setNotification({
                    show: true,
                    status: "error",
                    message: messages/* MSG_SELECT_ADDRESS */.iK
                });
                return;
            }
            if (cartItems && cartItems.length === 0) {
                setNotification({
                    show: true,
                    status: "error",
                    message: messages/* MSG_EMPTY_BASKET */.K7
                });
                return;
            }
        }
        router.push(routerPath);
    };
    const handleClickContinue = (e)=>{
        e.preventDefault();
        // console.log(shipping)
        if (shipping.address.length === 0) {
            setNotification({
                show: true,
                status: "error",
                message: messages/* MSG_SELECT_ADDRESS */.iK
            });
            return;
        }
        if (cartItems && cartItems.length === 0) {
            setNotification({
                show: true,
                status: "error",
                message: messages/* MSG_EMPTY_BASKET */.K7
            });
            return;
        }
        // prepare cart items
        const products = cartItems.map((item)=>{
            return {
                id: item.id,
                type: {
                    name: item.packageName,
                    package: `${item.weight}`,
                    number: item.quantity
                }
            };
        });
        dispatch((0,cartSlice/* setCartDetails */.Vo)({
            address: shipping.address[0]._id,
            delivery_time: shipping.deliveryTime || "زمان تست"
        }));
        buy({
            details: {
                address: shipping.address[0]._id,
                delivery_time: shipping.deliveryTime || "زمان تست"
            },
            products,
            create_factor: false
        }).unwrap().then((data)=>{
            // console.log(data);
            // costPost({cost: theWay, min:theWay}).unwrap().then(res=>{
            // })
            router.push("/checkout/payment");
        }).catch((error)=>{
            console.error(error);
        });
    };
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        // console.log( value, name)
        setShipping((prevShipping)=>({
                ...prevShipping,
                [name]: user.address.filter((el)=>el._id === value)
            }));
    };
    console.log(user);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "section",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (shipping_module_default()).container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (shipping_module_default()).shipping,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(progress_bar/* default */.Z, {
                                step: 1,
                                handleClick: handleClickStep
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (shipping_module_default()).body,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: "انتخاب مکان و زمان"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (shipping_module_default()).content,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (shipping_module_default()).box,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: (shipping_module_default()).title,
                                                        children: "اطلاعات کاربری"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (shipping_module_default()).userInfo,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "نام و نام ‌خانوادگی:"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: `${user?.f_name} ${user?.l_name}`
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "شماره موبایل:"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: user?.phone
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (shipping_module_default()).box,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: (shipping_module_default()).title,
                                                        children: "آدرس انتخاب شده"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (shipping_module_default()).address,
                                                        children: [
                                                            user?.address.length > 0 && user?.address[0]._id ? user?.address?.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(RadioButton, {
                                                                            name: "address",
                                                                            value: item._id,
                                                                            id: `address-${index}`,
                                                                            handleChange: handleChange
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: item.address
                                                                        })
                                                                    ]
                                                                }, item._id)) : null,
                                                            /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                                                color: "blue",
                                                                rounded: true,
                                                                handleClick: handleClickAddAddress,
                                                                children: "+\xa0 ثبت آدرس جدید"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (shipping_module_default()).box,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: (shipping_module_default()).title,
                                                        children: "یادداشت همراه سفارش"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (shipping_module_default()).note,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                            className: (shipping_module_default()).textarea,
                                                            name: "note",
                                                            value: shipping.note,
                                                            id: "note",
                                                            rows: "7",
                                                            onChange: handleChange,
                                                            placeholder: "اگر پیشنهادی درمورد نحوه‌ی ارسال یا سفارش خود دارید، در این قسمت بنویسید"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* default */.Z, {
                                                color: "primary",
                                                rounded: true,
                                                handleClick: handleClickContinue,
                                                isLoading: isLoading,
                                                disabled: isLoading,
                                                children: [
                                                    "ادامه فرآیند خرید ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx(arrow_left_white_icon/* default */.Z, {
                                                        className: (shipping_module_default()).button_icon
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(basket/* default */.Z, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(modal/* default */.Z, {
                onClose: handleClose,
                show: showAddAddress,
                title: "ثبت آدرس جدید",
                children: /*#__PURE__*/ jsx_runtime_.jsx(add_address/* default */.Z, {
                    handleModal: handleClose
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ui_notification/* default */.Z, {
                ...notification
            })
        ]
    });
};

// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(4802);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(2500);
;// CONCATENATED MODULE: ./pages/checkout/shipping.js





function ShippingPage() {
    return /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        hasHeader: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Shipping, {})
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
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await backendRes.json();
        if (backendRes.ok) {
            return {
                props: {}
            };
        }
        return {
            redirect: {
                destination: "/login",
                permanent: false
            }
        };
    }
    return {
        redirect: {
            destination: "/",
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
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,5152,739,2767,6097,5859,6797,3150], () => (__webpack_exec__(1493)));
module.exports = __webpack_exports__;

})();