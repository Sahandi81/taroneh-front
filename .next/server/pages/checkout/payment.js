(() => {
var exports = {};
exports.id = 8475;
exports.ids = [8475];
exports.modules = {

/***/ 484:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "order-products_list__lNd_M",
	"item": "order-products_item___xg98",
	"weight": "order-products_weight__cLUyx",
	"price": "order-products_price__qi1ij"
};


/***/ }),

/***/ 5196:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "payment_container__bxYUc",
	"payment": "payment_payment__3b2qJ",
	"body": "payment_body__sQGfB",
	"content": "payment_content__VICTk",
	"box": "payment_box___0mz2",
	"title": "payment_title__yu0SC",
	"split_line": "payment_split_line__11NV_",
	"discount": "payment_discount__xeLTV",
	"discount_gift_cart": "payment_discount_gift_cart__PEbco",
	"input": "payment_input__2tjfp",
	"peyment_type": "payment_peyment_type__zkWXO",
	"zarinpal": "payment_zarinpal__cjNvj",
	"link": "payment_link__vrtOs"
};


/***/ }),

/***/ 7279:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "receipt_container__tru3z",
	"title": "receipt_title__Ev_57",
	"header": "receipt_header__TC0DZ",
	"table": "receipt_table__jGZgQ",
	"address": "receipt_address__PCvgE",
	"deliver_time": "receipt_deliver_time__bBLHY",
	"footer": "receipt_footer__QikPf",
	"button_icon": "receipt_button_icon__FnmHU"
};


/***/ }),

/***/ 1793:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "spinner_container__L6MLd",
	"rotate360": "spinner_rotate360__kFbhl",
	"moveInBottom": "spinner_moveInBottom__G0_y_",
	"moveInLeft": "spinner_moveInLeft__2mjMy",
	"moveInRight": "spinner_moveInRight__exNWr",
	"animateBasket": "spinner_animateBasket__8s6da"
};


/***/ }),

/***/ 2154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_spinner_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1793);
/* harmony import */ var _styles_components_spinner_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_spinner_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



function Spinner({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_styles_components_spinner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container), [
            className
        ])
    });
};


/***/ }),

/***/ 7846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PaymentPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout/layout.jsx + 27 modules
var layout = __webpack_require__(2767);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/checkout/progress-bar.jsx + 1 modules
var progress_bar = __webpack_require__(9598);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./features/cart/cartSlice.js + 1 modules
var cartSlice = __webpack_require__(6098);
// EXTERNAL MODULE: ./styles/components/order-products.module.scss
var order_products_module = __webpack_require__(484);
var order_products_module_default = /*#__PURE__*/__webpack_require__.n(order_products_module);
// EXTERNAL MODULE: ./helpers/imageLoader.js
var imageLoader = __webpack_require__(909);
;// CONCATENATED MODULE: ./components/checkout/order-products.jsx




function OrderProducts({ title , code , img , weight , price  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (order_products_module_default()).item,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (order_products_module_default()).image,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    loader: imageLoader/* default */.Z,
                    src: `/storage/${code}/${img}`,
                    alt: "product",
                    width: 64,
                    height: 64
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (order_products_module_default()).weight,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: weight
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "گرم"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (order_products_module_default()).price,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: price
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "تومان"
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/checkout/order-products-list.jsx



function OrderProductsList({ data  }) {
    // console.log(data)
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (order_products_module_default()).list,
        children: data.map((el)=>/*#__PURE__*/ jsx_runtime_.jsx(OrderProducts, {
                ...el
            }))
    });
};

// EXTERNAL MODULE: ./helpers/formatPrice.js
var formatPrice = __webpack_require__(4621);
;// CONCATENATED MODULE: ./components/icons/warning-icon.js

function WarningIcon({ className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "23",
        height: "23",
        viewBox: "0 0 23 23",
        className: className,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            id: "Group_9090",
            "data-name": "Group 9090",
            transform: "translate(-1620 -370)",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                    id: "Ellipse_1113",
                    "data-name": "Ellipse 1113",
                    transform: "translate(1620 370)",
                    fill: "#fff",
                    stroke: "#e2474b",
                    strokeWidth: "1",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                            cx: "11.5",
                            cy: "11.5",
                            r: "11.5",
                            stroke: "none"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                            cx: "11.5",
                            cy: "11.5",
                            r: "11",
                            fill: "none"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                    id: "Group_9089",
                    "data-name": "Group 9089",
                    transform: "translate(0.5 -0.5)",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("line", {
                            id: "Line_2645",
                            "data-name": "Line 2645",
                            y2: "8",
                            transform: "translate(1631.5 379.5)",
                            fill: "none",
                            stroke: "#e2474b",
                            strokeLinecap: "round",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("line", {
                            id: "Line_2646",
                            "data-name": "Line 2646",
                            transform: "translate(1631.5 376.5)",
                            fill: "none",
                            stroke: "#e2474b",
                            strokeLinecap: "round",
                            strokeWidth: "2"
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./components/icons/times-2-icon.js
var times_2_icon = __webpack_require__(987);
// EXTERNAL MODULE: ./styles/components/receipt.module.scss
var receipt_module = __webpack_require__(7279);
var receipt_module_default = /*#__PURE__*/__webpack_require__.n(receipt_module);
// EXTERNAL MODULE: ./app/services/apiSlice.js
var apiSlice = __webpack_require__(6558);
;// CONCATENATED MODULE: ./components/checkout/receipt.jsx











const currency = "تومان";
function Receipt() {
    const cartItems = (0,external_react_redux_.useSelector)(cartSlice/* selectCartItems */.D1);
    const totalPrice = (0,external_react_redux_.useSelector)(cartSlice/* selectCartTotalPrice */.yq);
    const discount = (0,external_react_redux_.useSelector)(cartSlice/* getCartDiscount */.hw);
    const cartDetails = (0,external_react_redux_.useSelector)(cartSlice/* selectCartDetails */.my);
    const userAddress = (0,external_react_redux_.useSelector)(apiSlice/* selectUserAddresses */.bI);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (receipt_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "پیش فاکتور"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (receipt_module_default()).title,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(WarningIcon, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "این پیش فاکتور صرفا به منزله بررسی و پرداخت نهایی شما است"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (receipt_module_default()).header,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: (receipt_module_default()).address,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "آدرس و کد پستی محل تحویل:"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: userAddress.find((item)=>item.id === cartDetails.address)?.address
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(OrderProductsList, {
                data: cartItems
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                className: (receipt_module_default()).table,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "عکس محصول"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "کد محصول"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "نام محصولات"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "مقدار (کیلوگرم)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "قیمت محصول"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "تخفیف"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "قیمت کل"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                        children: cartItems.map((item)=>{
                            // console.log(item);
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            loader: imageLoader/* default */.Z,
                                            src: `/storage/${item.code}/${item.img}`,
                                            alt: item.name,
                                            width: 70,
                                            height: 70
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        children: item.code
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        children: item.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        children: item.quantity
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                        children: [
                                            (0,formatPrice/* default */.Z)(item.price),
                                            " ",
                                            currency
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        children: "0"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                        children: [
                                            (0,formatPrice/* default */.Z)(item.price * item.quantity),
                                            " ",
                                            currency
                                        ]
                                    })
                                ]
                            }, item.id);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (receipt_module_default()).footer,
                children: [
                    discount && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(times_2_icon/* default */.Z, {
                                        className: (receipt_module_default()).button_icon
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "حذف تخفیف"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "مبلغ تخفیف ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "0"
                                    }),
                                    " ",
                                    currency,
                                    " \xa0 از فاکتور شما کسر گردید"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "مبلغ قابل پرداخت",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: (0,formatPrice/* default */.Z)(totalPrice)
                            }),
                            currency
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./styles/components/payment.module.scss
var payment_module = __webpack_require__(5196);
var payment_module_default = /*#__PURE__*/__webpack_require__.n(payment_module);
// EXTERNAL MODULE: ./components/ui/spinner.jsx
var spinner = __webpack_require__(2154);
;// CONCATENATED MODULE: ./components/checkout/discount-and-payment-type.jsx







function DiscountAndPaymentType() {
    const { 0: discount , 1: setDiscount  } = (0,external_react_.useState)("");
    const [buy, { isLoading  }] = (0,apiSlice/* useBuyMutation */.ro)();
    const cartItems = (0,external_react_redux_.useSelector)(cartSlice/* selectCartItems */.D1);
    const addDiscount = ()=>{
        buy({
            discount_code: discount,
            create_factor: false,
            products: cartItems.map((item)=>{
                return {
                    id: item.id,
                    type: {
                        name: item.packageName,
                        package: `${item.weight}`,
                        number: item.quantity
                    }
                };
            })
        }).unwrap().then((data)=>{
        // console.log(data);
        }).catch((error)=>{
            console.error(error);
            alert(error.data.errors?.discount_code ? "کد تخفیف وارد شده نامعتبر است" : "خطایی رخ داده است");
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (payment_module_default()).discount,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "تخفیف و نوع پرداخت"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (payment_module_default()).box,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: (payment_module_default()).title,
                        children: "کد تخفیف"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (payment_module_default()).discount_gift_cart,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "discountCode",
                                        children: "کد تخفیف"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (payment_module_default()).input,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                id: "discountCode",
                                                value: discount,
                                                onChange: (e)=>setDiscount(e.target.value)
                                            }),
                                            isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(spinner/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                onClick: addDiscount,
                                                children: "ثبت تخفیف"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (payment_module_default()).box,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: (payment_module_default()).title,
                        children: "پرداخت آنلاین"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (payment_module_default()).peyment_type,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (payment_module_default()).zarinpal,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/zarinpal.png",
                                alt: "Zarinpal"
                            })
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/ui/button.jsx + 2 modules
var ui_button = __webpack_require__(1404);
// EXTERNAL MODULE: ./components/checkout/basket.jsx
var basket = __webpack_require__(6797);
// EXTERNAL MODULE: ./components/icons/arrow-left-white-icon.js
var arrow_left_white_icon = __webpack_require__(6053);
// EXTERNAL MODULE: ./components/ui/notification.jsx
var notification = __webpack_require__(5214);
;// CONCATENATED MODULE: ./components/checkout/payment.jsx

















function Payment() {
    const { 0: checked , 1: setChecked  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const { 0: theWay , 1: setTheWay  } = (0,external_react_.useState)(0);
    const [buy, { isLoading  }] = (0,apiSlice/* useBuyMutation */.ro)();
    const [getGatewayLink] = (0,apiSlice/* useGetGatewayLinkMutation */.IM)();
    const cartDetails = (0,external_react_redux_.useSelector)(cartSlice/* selectCartDetails */.my);
    const cartItems = (0,external_react_redux_.useSelector)(cartSlice/* selectCartItems */.D1);
    const [costPost] = (0,apiSlice/* useCostPostMutation */.Zx)();
    const theWayHandller = (e, name)=>{
        console.log(e);
        if (name === "motor" && e.target.checked) {
            setTheWay(30000);
        } else if (name === "post" && e.target.checked) {
            setTheWay(50000);
        } else {
            setTheWay(0);
        }
    };
    const handleChange = (e)=>{
        setChecked(e.target.checked);
    };
    const handleClickStep = (routerPath)=>{
        router.push(routerPath);
    };
    const { 0: notif , 1: setNotification  } = (0,external_react_.useState)({
        show: false,
        status: null,
        message: ""
    });
    const handleClickPayment = ()=>{
        // console.log(cartDetails,"cartDetails" ,cartItems)
        // console.log(cartDetails, cartItems)
        if (theWay === 0) {
            setNotification({
                show: true,
                status: "error",
                message: "طریقه ارسال را انتخاب نکردید"
            });
            setTimeout(()=>{
                setNotification({
                    show: false,
                    status: null,
                    message: ""
                });
            }, 3000);
            return;
        }
        if (cartItems.length > 0) {
            buy({
                details: cartDetails,
                products: cartItems.map((item)=>{
                    return {
                        id: item.id,
                        type: {
                            name: item.packageName,
                            package: `${item.weight}`,
                            number: item.quantity
                        }
                    };
                }),
                create_factor: true
            }).then((response)=>{
                // costPost({cost: theWay, min:theWay}).unwrap().then(res=>{
                // })
                getGatewayLink({
                    order_id: response.data.data.details._id
                }).unwrap().then((res)=>{
                    router.push(res.data.url);
                }).catch((error)=>{
                    console.error(error);
                // alert(error.data.message || "خطایی رخ داده است");
                });
            }).catch((error)=>{
                console.error(error);
            // alert(error.data.message || "خطایی رخ داده است");
            });
        // TODO: handle error with toast
        } else {
            // alert("");
            setNotification({
                show: true,
                status: "error",
                message: "محصولی انتخاب نکردید"
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "section",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (payment_module_default()).container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (payment_module_default()).payment,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(progress_bar/* default */.Z, {
                                step: 2,
                                handleClick: handleClickStep
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (payment_module_default()).body,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: "پیش فاکتور و پرداخت"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (payment_module_default()).content,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Receipt, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (payment_module_default()).split_line
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (payment_module_default()).content,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(DiscountAndPaymentType, {}),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "checkbox",
                                                        name: "agree",
                                                        id: "agree",
                                                        checked: checked,
                                                        onChange: handleChange
                                                    }),
                                                    " ",
                                                    "همه",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/rules",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: (payment_module_default()).link,
                                                            children: "قوانین"
                                                        })
                                                    }),
                                                    " ",
                                                    "طارونه را می پذیریم."
                                                ]
                                            }),
                                            isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(spinner/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* default */.Z, {
                                                color: "primary",
                                                rounded: true,
                                                handleClick: handleClickPayment,
                                                disabled: !checked,
                                                children: [
                                                    "پرداخت ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx(arrow_left_white_icon/* default */.Z, {
                                                        className: (payment_module_default()).button_icon
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
            /*#__PURE__*/ jsx_runtime_.jsx(notification/* default */.Z, {
                ...notif
            })
        ]
    });
};

// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(4802);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(2500);
;// CONCATENATED MODULE: ./pages/checkout/payment.js





function PaymentPage() {
    return /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        hasHeader: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Payment, {})
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
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,739,2767,6097,6797], () => (__webpack_exec__(7846)));
module.exports = __webpack_exports__;

})();