(() => {
var exports = {};
exports.id = 7590;
exports.ids = [7590];
exports.modules = {

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

/***/ 5117:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "orders-mobile_container__Xi15l",
	"item": "orders-mobile_item__QX1uG",
	"master": "orders-mobile_master__4JQUR",
	"block": "orders-mobile_block__KW5Tg",
	"success": "orders-mobile_success___g4_H",
	"failed": "orders-mobile_failed__VI7sP",
	"actions": "orders-mobile_actions__ubNU3"
};


/***/ }),

/***/ 516:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "orders_container___XDzq",
	"header": "orders_header___dffW",
	"body": "orders_body__i0X_p",
	"master": "orders_master__uGecs",
	"actions": "orders_actions__XtcD3",
	"icon": "orders_icon__DGnvC",
	"detail": "orders_detail__hnTC1",
	"recepient": "orders_recepient__1ngpc",
	"recepient_title": "orders_recepient_title__FDw7U",
	"recepient_content": "orders_recepient_content__D_6Vk",
	"delivery": "orders_delivery__pN9WK",
	"products": "orders_products__a80MG",
	"products_title": "orders_products_title__IsDmJ",
	"products_content": "orders_products_content__S_ZOg",
	"product": "orders_product__bpR2D",
	"product_header": "orders_product_header__Qbmmz",
	"product_rating": "orders_product_rating__nXp_d",
	"product_image": "orders_product_image___1HOc",
	"product_name": "orders_product_name__gRk9b",
	"product_price": "orders_product_price__ItVij",
	"order_tracking": "orders_order_tracking__rq_Tj",
	"step": "orders_step__RwnJW",
	"ative_step": "orders_ative_step__pFWPa",
	"step_image": "orders_step_image__JvNrs",
	"order_tracking_line": "orders_order_tracking_line__J8obW"
};


/***/ }),

/***/ 3427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StarIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function StarIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        width: "14.987",
        height: "14.362",
        viewBox: "0 0 14.987 14.362",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M14.948,5.919a.8.8,0,0,0-.686-.548L9.937,4.978l-1.71-4a.8.8,0,0,0-1.465,0l-1.71,4L.724,5.371A.8.8,0,0,0,.272,6.765l3.27,2.868L2.578,13.88a.8.8,0,0,0,1.185.861l3.731-2.23,3.73,2.23a.8.8,0,0,0,1.185-.861l-.964-4.247,3.27-2.867a.8.8,0,0,0,.234-.847Zm0,0",
            transform: "translate(0 -0.491)",
            fill: "#fee932"
        })
    });
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

/***/ 7146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ calender)
/* harmony export */ });
const calender = (date)=>{
    const numberDate = Date.parse(date);
    return new Date(numberDate * 1 - 226900 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
};


/***/ }),

/***/ 8764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ OrdersPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout/layout.jsx + 27 modules
var layout = __webpack_require__(2767);
// EXTERNAL MODULE: ./components/profile/sidebar.jsx + 2 modules
var sidebar = __webpack_require__(7305);
// EXTERNAL MODULE: ./app/services/apiSlice.js
var apiSlice = __webpack_require__(6558);
// EXTERNAL MODULE: ./components/ui/container.jsx
var container = __webpack_require__(6063);
// EXTERNAL MODULE: ./styles/components/orders.module.scss
var orders_module = __webpack_require__(516);
var orders_module_default = /*#__PURE__*/__webpack_require__.n(orders_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/icons/arrow-green-icon.js

function ArrowGreenIcon({ className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "11.634",
        height: "11.634",
        viewBox: "0 0 11.634 11.634",
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            id: "Combined_Shape_Copy",
            "data-name": "Combined Shape Copy",
            d: "M.594,7.927A.6.6,0,0,1,0,7.332V.595a.594.594,0,1,1,1.189,0V6.738H7.331a.594.594,0,1,1,0,1.189Z",
            transform: "translate(11.422 5.818) rotate(135)",
            fill: "#00bf6f",
            stroke: "#00bf6f",
            strokeMiterlimit: "10",
            strokeWidth: "0.3"
        })
    });
};

// EXTERNAL MODULE: ./components/ui/button.jsx + 2 modules
var ui_button = __webpack_require__(1404);
// EXTERNAL MODULE: ./helpers/formatPrice.js
var formatPrice = __webpack_require__(4621);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/icons/star-icon.js
var star_icon = __webpack_require__(3427);
;// CONCATENATED MODULE: ./components/icons/heart-red-icon.js

function HeartRedIcon() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "23.017",
        height: "20.397",
        viewBox: "0 0 23.017 20.397",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            id: "Path_16072",
            "data-name": "Path 16072",
            d: "M307.394,410.248a.651.651,0,0,1-.391-.132c-.2-.152-4.933-3.748-7.218-5.767l-.172-.152a19.345,19.345,0,0,1-1.594-1.53c-2.35-2.629-3.155-7.363-.359-10.428a7.251,7.251,0,0,1,5.238-2.388,6.736,6.736,0,0,1,4.495,1.7,6.734,6.734,0,0,1,4.495-1.7,7.244,7.244,0,0,1,5.238,2.388c2.8,3.064,1.991,7.8-.358,10.428a19.229,19.229,0,0,1-1.589,1.525l-.175.155c-2.443,2.158-5.023,4.129-7.224,5.772A.651.651,0,0,1,307.394,410.248Z",
            transform: "translate(-295.885 -389.851)",
            fill: "#e2474b"
        })
    });
};

;// CONCATENATED MODULE: ./components/profile/orders/order-product.jsx






function OrderProduct({ id , name , img , price  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (orders_module_default()).product,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (orders_module_default()).product_header,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: (orders_module_default()).product_rating,
                        children: [
                            "5/4 ",
                            /*#__PURE__*/ jsx_runtime_.jsx(star_icon/* default */.Z, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeartRedIcon, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (orders_module_default()).product_image,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: img,
                    alt: name,
                    width: 110,
                    height: 110,
                    placeholder: "blur",
                    blurDataURL: img
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: (orders_module_default()).product_name,
                children: name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (orders_module_default()).product_price,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "قیمت هر کیلو"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            (0,formatPrice/* default */.Z)(price),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                children: "تومان"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/profile/orders/order-tracking.jsx



function OrderTracking() {
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.order_tracking,
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: styles.step,
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.step_image,
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: "/img/order-tracking-step-1.png",
                            alt: "Order Tracking Step 1",
                            width: 400,
                            height: 400
                        })
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: styles.ative_step,
                        children: "تایید سفارش"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: styles.order_tracking_line
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: styles.step,
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.step_image,
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: "/img/order-tracking-step-2-light.png",
                            alt: "Order Tracking Step 2",
                            width: 400,
                            height: 400
                        })
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        children: "آماده سازی سفارش"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: styles.order_tracking_line
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: styles.step,
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.step_image,
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: "/img/order-tracking-step-3-light.png",
                            alt: "Order Tracking Step 3",
                            width: 400,
                            height: 400
                        })
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        children: "تحویل به مامور ارسال"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: styles.order_tracking_line
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: styles.step,
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.step_image,
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: "/img/order-tracking-step-4-light.png",
                            alt: "Order Tracking Step 4",
                            width: 400,
                            height: 400
                        })
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        children: "تحویل مرسوله به مشتری"
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/profile/orders/order-detail.jsx





function OrderDetail({ address , products , final_price  }) {
    // console.log(products[0].type)
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (orders_module_default()).detail,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (orders_module_default()).recepient,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: (orders_module_default()).recepient_title,
                        children: "اطلاعات"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (orders_module_default()).recepient_content,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "آدرس تحویل:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: address
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "مبلغ سفارش:"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            (0,formatPrice/* default */.Z)(final_price),
                                            " تومان"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (orders_module_default()).products,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: (orders_module_default()).products_title,
                        children: "محصولات خریداری شده"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (orders_module_default()).products_content,
                        children: products.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(OrderProduct, {
                                name: item.type.name,
                                img: "/img/product-02.jpg",
                                price: item.type.price
                            }, item.id))
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./data/calender.js
var calender = __webpack_require__(7146);
;// CONCATENATED MODULE: ./components/profile/orders/order-item.jsx









// import JMoment from "jalali-moment";
function OrderItem({ id , code , final_price , created_at , products , address ,  }) {
    const { 0: showDetail , 1: setShowDetail  } = (0,external_react_.useState)(false);
    const handleClickDetails = (e)=>setShowDetail((prevState)=>!prevState);
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        if (router.asPath.slice(16) === id) {
            setShowDetail(true);
        }
    }, []);
    const handleClickReOrder = ()=>{
    // console.log(products);
    // dispatch(
    // 	addItem({
    // 		id,
    // 		title,
    // 		img,
    // 		price,
    // 		quantity,
    // 		weight,
    // 		code,
    // 		packageName: packageName.name,
    // 	})
    // );
    // closeModal();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (orders_module_default()).item,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (orders_module_default()).master,
                id: id,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                        children: [
                            "#",
                            code
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                        children: [
                            (0,formatPrice/* default */.Z)(final_price),
                            " تومان"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: (0,calender/* calender */.J)(created_at)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (orders_module_default()).actions,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                            variant: "primary-outline",
                            handleClick: handleClickDetails,
                            rounded: true,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    "جزئیات سفارش ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(ArrowGreenIcon, {
                                        className: (orders_module_default()).icon
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            showDetail && /*#__PURE__*/ jsx_runtime_.jsx(OrderDetail, {
                products: products,
                address: address,
                final_price: final_price
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/profile/orders/orders.jsx





function Orders({ items  }) {
    const { data , isLoading  } = (0,apiSlice/* useGetShoppingHistoryQuery */.f4)();
    // console.log("SHOPPINGHIS: ", data);
    // console.log(data.data[16])
    return /*#__PURE__*/ jsx_runtime_.jsx(container/* default */.Z, {
        title: "سفارشات",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (orders_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (orders_module_default()).header,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "شماره سفارش"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "مبلغ پرداختی"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "تاریخ ثبت سفارش"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "عملیات"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (orders_module_default()).body,
                    children: !isLoading && data?.data?.map(({ _id , ...otherProps })=>/*#__PURE__*/ jsx_runtime_.jsx(OrderItem, {
                            id: _id,
                            ...otherProps
                        }, _id))
                })
            ]
        })
    });
};
Orders.defaultProps = {
    items: [
        {
            id: "123456",
            number: "123456",
            price: 200000,
            date: "1400/01/25"
        },
        {
            id: "order-02",
            number: "123456",
            price: 300000,
            date: "1400/03/12"
        },
        {
            id: "order-03",
            number: "123456",
            price: 400000,
            date: "1400/04/02"
        },
        {
            id: "order-04",
            number: "123456",
            price: 500000,
            date: "1400/05/09"
        }, 
    ]
};

// EXTERNAL MODULE: ./styles/components/orders-mobile.module.scss
var orders_mobile_module = __webpack_require__(5117);
var orders_mobile_module_default = /*#__PURE__*/__webpack_require__.n(orders_mobile_module);
;// CONCATENATED MODULE: ./components/profile/orders/order-item-mobile.jsx




function order_item_mobile_OrderItem({ id , number , price , date , status  }) {
    const handleClickReorder = ()=>{};
    const handleClickDetails = ()=>{};
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (orders_mobile_module_default()).item,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (orders_mobile_module_default()).master,
            id: id,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (orders_mobile_module_default()).block,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "شماره سفارش"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                            children: [
                                "#",
                                number
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (orders_mobile_module_default()).block,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "مبلغ پرداختی"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                            children: [
                                (0,formatPrice/* default */.Z)(price),
                                " تومان"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (orders_mobile_module_default()).block,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "تاریخ ثبت سفارش"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: date
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (orders_mobile_module_default()).block,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "وضعیت"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            className: (orders_mobile_module_default()).success,
                            children: status
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (orders_mobile_module_default()).actions,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                            variant: "primary",
                            handleClick: handleClickReorder,
                            rounded: true,
                            children: "خرید مجدد"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                            variant: "primary-outline",
                            handleClick: handleClickDetails,
                            rounded: true,
                            children: "جزئیات سفارش"
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/profile/orders/orders-mobile.jsx



function OrdersMobile({ items  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (orders_mobile_module_default()).container,
        children: items.map(({ id , ...otherProps })=>/*#__PURE__*/ jsx_runtime_.jsx(order_item_mobile_OrderItem, {
                ...otherProps
            }, id))
    });
};
OrdersMobile.defaultProps = {
    items: [
        {
            id: "order-001",
            number: "228445485",
            price: "500,000",
            date: "1400/12/01",
            status: "سفارش موفق"
        },
        {
            id: "order-002",
            number: "228445485",
            price: "500,000",
            date: "1400/12/01",
            status: "سفارش موفق"
        },
        {
            id: "order-003",
            number: "228445485",
            price: "500,000",
            date: "1400/12/01",
            status: "سفارش موفق"
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
;// CONCATENATED MODULE: ./pages/profile/orders.js








function OrdersPage() {
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
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: (profile_module_default()).main,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Orders, {})
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
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
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
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,739,2767,7305], () => (__webpack_exec__(8764)));
module.exports = __webpack_exports__;

})();