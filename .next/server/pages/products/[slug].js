(() => {
var exports = {};
exports.id = 7905;
exports.ids = [7905];
exports.modules = {

/***/ 2256:
/***/ ((module) => {

// Exports
module.exports = {
	"body": "product-add-to-cart-modal_body__HCi9p",
	"img": "product-add-to-cart-modal_img__wqRjD",
	"content": "product-add-to-cart-modal_content__jkNvC",
	"price": "product-add-to-cart-modal_price___k0SA",
	"weight": "product-add-to-cart-modal_weight__uPhcz",
	"weight_icon": "product-add-to-cart-modal_weight_icon__oHTaq",
	"actions": "product-add-to-cart-modal_actions__yO5wF"
};


/***/ }),

/***/ 4693:
/***/ ((module) => {

// Exports
module.exports = {
	"product_amount": "product-amount_product_amount__8r2ap"
};


/***/ }),

/***/ 7448:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "product-gallery_container__sj0vh",
	"item": "product-gallery_item__wV7u1",
	"list": "product-gallery_list__vlQpL"
};


/***/ }),

/***/ 8150:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "product-info_container___2u30",
	"title": "product-info_title__XV2fJ",
	"rating_box": "product-info_rating_box__3h_PL",
	"rating": "product-info_rating__FvMPT",
	"active": "product-info_active__f2Uqp",
	"detail": "product-info_detail__WaQxm",
	"attributes": "product-info_attributes__0LYdY",
	"code_level": "product-info_code_level__hFq_X",
	"amount": "product-info_amount__pOwt8",
	"price": "product-info_price__DOYtz",
	"beforeOff": "product-info_beforeOff__jOFtf",
	"attributes_list": "product-info_attributes_list__mVIf_",
	"action": "product-info_action__wWrDf",
	"description": "product-info_description__wT7ZF",
	"tags": "product-info_tags__Fo3RS",
	"product_package": "product-info_product_package__agicd"
};


/***/ }),

/***/ 697:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "product-modal_container__Df5po",
	"item": "product-modal_item__hOBuy",
	"current": "product-modal_current__y8ruu",
	"current_active": "product-modal_current_active__3Zwv0",
	"list": "product-modal_list__lnkSm",
	"actions": "product-modal_actions__XdXCn",
	"icon": "product-modal_icon__BiV9P"
};


/***/ }),

/***/ 6093:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "product-other-info_container__QdVYP",
	"title": "product-other-info_title__42Qtu",
	"description": "product-other-info_description__RUvak"
};


/***/ }),

/***/ 8114:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "product-relate-list_container__u9s4s"
};


/***/ }),

/***/ 149:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "product-relate_container__7XhT1",
	"header": "product-relate_header__3PsV9",
	"rating": "product-relate_rating__Guqet",
	"icon": "product-relate_icon__va6ix",
	"title": "product-relate_title__ZVf6D",
	"content": "product-relate_content__z4XJ_"
};


/***/ }),

/***/ 1628:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "product_container__zuINW"
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

/***/ 8874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2500);

async function ServiceCaller(url, options = {}) {
    return new Promise((resolve, reject)=>{
        fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__/* .API_URL */ .T}/${url}`, {
            ...options,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                ...options.headers || {}
            }
        }).then((response)=>response.json()).then((response)=>{
            resolve(response);
        }).catch((error)=>{
            reject(error);
        });
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceCaller);


/***/ }),

/***/ 1427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProductDetailPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout/layout.jsx + 27 modules
var layout = __webpack_require__(2767);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./helpers/imageLoader.js
var imageLoader = __webpack_require__(909);
;// CONCATENATED MODULE: ./components/product/product-gallery-item.jsx



function ProductGalleryItem({ img , handleClick  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        onClick: handleClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: img,
                alt: "product",
                width: 70,
                height: 70,
                loader: imageLoader/* default */.Z
            })
        })
    });
};

// EXTERNAL MODULE: ./styles/components/product-gallery.module.scss
var product_gallery_module = __webpack_require__(7448);
var product_gallery_module_default = /*#__PURE__*/__webpack_require__.n(product_gallery_module);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(2500);
;// CONCATENATED MODULE: ./components/product/product-gallery.jsx






function ProductGallery({ img , images , handleClickItem , product_code  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (product_gallery_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (product_gallery_module_default()).item,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    loader: imageLoader/* default */.Z,
                    src: `/storage/${product_code}/${img}`,
                    alt: "product",
                    width: 392,
                    height: 392,
                    placeholder: "blur",
                    blurDataURL: `${config/* API_URL */.T}/storage/${product_code}/${img}`
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (product_gallery_module_default()).items,
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: (product_gallery_module_default()).list,
                    children: images.map((img, index)=>/*#__PURE__*/ jsx_runtime_.jsx(ProductGalleryItem, {
                            img: `/storage/${product_code}/${img}`,
                            handleClick: handleClickItem
                        }, index))
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./helpers/formatPrice.js
var formatPrice = __webpack_require__(4621);
// EXTERNAL MODULE: ./styles/components/product-amount.module.scss
var product_amount_module = __webpack_require__(4693);
var product_amount_module_default = /*#__PURE__*/__webpack_require__.n(product_amount_module);
;// CONCATENATED MODULE: ./components/product/product-amount.jsx


function ProductAmount({ label , Weigh , checked , handleChange  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (product_amount_module_default()).product_amount,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "radio",
                name: "amount",
                id: `amount-${label}`,
                value: label,
                checked: checked === Weigh ? true : false,
                onChange: handleChange
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: `amount-${label}`,
                children: label
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/icons/star-outline-icon.js

function StarOutlineIcon({ className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            id: "Star",
            transform: "translate(2.5 3)",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                id: "Star-2",
                "data-name": "Star",
                d: "M10.214.441,12.53,5.1a.8.8,0,0,0,.6.437l5.185.749a.8.8,0,0,1,.528.306.77.77,0,0,1-.085,1.032L15,11.258a.762.762,0,0,0-.226.7l.9,5.128a.787.787,0,0,1-.652.892.868.868,0,0,1-.516-.08L9.888,15.478a.776.776,0,0,0-.742,0L4.494,17.912a.812.812,0,0,1-1.077-.33.8.8,0,0,1-.081-.5l.9-5.128a.788.788,0,0,0-.226-.7L.232,7.621a.786.786,0,0,1,0-1.112l0,0a.909.909,0,0,1,.452-.222L5.87,5.534a.812.812,0,0,0,.6-.438L8.784.441a.787.787,0,0,1,.458-.4.8.8,0,0,1,.61.044A.82.82,0,0,1,10.214.441Z",
                transform: "translate(0 0)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "10",
                strokeWidth: "1.5"
            })
        })
    });
};

// EXTERNAL MODULE: ./components/ui/button.jsx + 2 modules
var ui_button = __webpack_require__(1404);
;// CONCATENATED MODULE: ./components/ui/tag.jsx


function Tag({ text  }) {
    return /*#__PURE__*/ _jsx("div", {
        className: styles.container,
        children: text
    });
};

// EXTERNAL MODULE: ./styles/components/product-info.module.scss
var product_info_module = __webpack_require__(8150);
var product_info_module_default = /*#__PURE__*/__webpack_require__.n(product_info_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/product/product-info.jsx









function ProductInfo({ item , quantity , price , oldPrice , Weigh , handleSelectWeight , handleClickPlus , handleClickMinus , handleClickAddToCart , handleSelectPackage , selected_package , DiscoutionCalculation  }) {
    // debugger;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (product_info_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (product_info_module_default()).title,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: item.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (product_info_module_default()).rating_box,
                        children: [
                            1,
                            2,
                            3,
                            4,
                            5
                        ].map((i)=>/*#__PURE__*/ jsx_runtime_.jsx(StarOutlineIcon, {
                                className: external_classnames_default()((product_info_module_default()).rating, [
                                    item.stars && i <= item.stars ? (product_info_module_default()).active : null, 
                                ])
                            }, i))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (product_info_module_default()).detail,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (product_info_module_default()).attributes,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (product_info_module_default()).code_level,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        children: "کد محصول: \xa0"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: item.code
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        children: "درجه محصول: \xa0"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            "درجه ",
                                                            item.quality
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (product_info_module_default()).amount,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                children: "بسته:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.5rem"
                                                },
                                                children: item.types[0].map((itm, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (product_info_module_default()).product_package,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "radio",
                                                                name: "package",
                                                                id: `package-${itm.name}`,
                                                                value: itm.name,
                                                                defaultValue: selected_package,
                                                                onChange: handleSelectPackage
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                style: {
                                                                    padding: "1rem ",
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                htmlFor: `package-${itm.name}`,
                                                                children: itm.name
                                                            })
                                                        ]
                                                    }, index))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (product_info_module_default()).amount,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                children: "مقدار به گرم:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                style: {
                                                    margin: "0 1rem 0 0",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    flexFlow: "row wrap"
                                                },
                                                children: Object.keys(selected_package.package).filter((k)=>k !== "inventory").map((prop)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ProductAmount, {
                                                            label: prop,
                                                            handleChange: handleSelectWeight,
                                                            checked: prop,
                                                            Weigh: Weigh
                                                        }, prop)
                                                    }))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (product_info_module_default()).amount,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                children: "تعداد"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                                        variant: "plus",
                                                        handleClick: handleClickPlus
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: quantity
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                                        variant: "minus",
                                                        handleClick: handleClickMinus
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (product_info_module_default()).price,
                                        children: [
                                            oldPrice !== price && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: (product_info_module_default()).beforeOff,
                                                children: [
                                                    (0,formatPrice/* default */.Z)(oldPrice),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "تومان"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    item.amount > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                children: "قیمت:"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("del", {
                                                                children: [
                                                                    (0,formatPrice/* default */.Z)(price),
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "تومان"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            (0,formatPrice/* default */.Z)(DiscoutionCalculation(price)),
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "تومان"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (product_info_module_default()).action,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                            variant: "addToCart",
                                            handleClick: handleClickAddToCart,
                                            children: "افزودن به سبد خرید"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "خواص:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: (product_info_module_default()).attributes_list,
                                        children: item.attributes.map((attr, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: attr
                                            }, index))
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (product_info_module_default()).description,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                children: "درباره محصول: "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: item.Description
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./styles/components/product-other-info.module.scss
var product_other_info_module = __webpack_require__(6093);
var product_other_info_module_default = /*#__PURE__*/__webpack_require__.n(product_other_info_module);
;// CONCATENATED MODULE: ./components/product/product-other-info.jsx


function ProductOtherInfo() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (product_other_info_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
            className: (product_other_info_module_default()).title,
            children: [
                "مقایسه با دیگر اجزای خانواده ",
                /*#__PURE__*/ jsx_runtime_.jsx("span", {})
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/icons/arrow-modal.js

function ArrowModal({ className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "17.069",
        height: "28.898",
        viewBox: "0 0 17.069 28.898",
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            id: "Path_738",
            "data-name": "Path 738",
            d: "M28.437,1.427,27.49.473a1.584,1.584,0,0,0-2.236,0l-10.8,10.8L3.645.461a1.585,1.585,0,0,0-2.236,0l-.947.947a1.582,1.582,0,0,0,0,2.235L13.334,16.562a1.616,1.616,0,0,0,1.121.507h0a1.615,1.615,0,0,0,1.117-.507L28.437,3.679A1.6,1.6,0,0,0,28.9,2.55,1.581,1.581,0,0,0,28.437,1.427Z",
            fill: "#717171",
            transform: "translate(17.069) rotate(90)"
        })
    });
};

// EXTERNAL MODULE: ./styles/components/product-modal.module.scss
var product_modal_module = __webpack_require__(697);
var product_modal_module_default = /*#__PURE__*/__webpack_require__.n(product_modal_module);
;// CONCATENATED MODULE: ./components/product/product-modal.jsx









function ProductModal({ images , product_code  }) {
    const { 0: activeId , 1: setActiveId  } = (0,external_react_.useState)(0);
    const handleClickNext = (e)=>{
        setActiveId((prevId)=>{
            return prevId < images.length ? prevId + 1 : 1;
        });
    };
    const handleClickPrev = (e)=>{
        setActiveId((prevId)=>{
            // let currId = Number(prevId.split('-')[1]);
            // currId = currId > 1 ? currId - 1 : 4;
            // return 'img-0' + currId;
            return prevId > images.length ? prevId - 1 : images.length;
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (product_modal_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (product_modal_module_default()).item,
                children: images.map((img, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_classnames_default()({
                            [(product_modal_module_default()).current]: true,
                            [(product_modal_module_default()).current_active]: index === activeId
                        }),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: `/storage/${product_code}/${img}`,
                            loader: imageLoader/* default */.Z,
                            alt: "product",
                            width: 500,
                            height: 500
                        })
                    }, index))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (product_modal_module_default()).items,
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: (product_modal_module_default()).list,
                    children: images.map((img, index)=>/*#__PURE__*/ jsx_runtime_.jsx(ProductGalleryItem, {
                            img: `/storage/${product_code}/${img}`,
                            handleClick: ()=>setActiveId(index)
                        }, index))
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (product_modal_module_default()).actions,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                        variant: "modal",
                        handleClick: handleClickNext,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowModal, {
                            className: (product_modal_module_default()).icon
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                        variant: "modal",
                        handleClick: handleClickPrev,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowModal, {})
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/icons/star-icon.js
var star_icon = __webpack_require__(3427);
// EXTERNAL MODULE: ./styles/components/product-relate.module.scss
var product_relate_module = __webpack_require__(149);
var product_relate_module_default = /*#__PURE__*/__webpack_require__.n(product_relate_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/product/product-relate.jsx







function ProductRelate({ id , title , photos , stars , code , short_explanation ,  }) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: ()=>router.push(`/products/${id}`),
        className: (product_relate_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (product_relate_module_default()).header,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (product_relate_module_default()).rating,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "5 / ",
                                            stars
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(star_icon/* default */.Z, {
                                        className: (product_relate_module_default()).icon
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/products/${id}`,
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: (product_relate_module_default()).title,
                                    children: title
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (product_relate_module_default()).img,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/products/${id}`,
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                loader: imageLoader/* default */.Z,
                                src: `/storage/${photos.length ? `${code}/${photos[0]}` : "logo.png"}`,
                                alt: title,
                                width: 128,
                                height: 128,
                                placeholder: "blur",
                                blurDataURL: `/storage/${photos.length ? `${code}/${photos[0]}` : "logo.png"}`
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (product_relate_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: "توضیحات کوتاه:"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            short_explanation,
                            " "
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./styles/components/product-relate-list.module.scss
var product_relate_list_module = __webpack_require__(8114);
var product_relate_list_module_default = /*#__PURE__*/__webpack_require__.n(product_relate_list_module);
;// CONCATENATED MODULE: ./components/product/product-relate-list.jsx



function ProductRelateList({ alikeProduct , items  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (product_relate_list_module_default()).container,
        children: items.slice(0, 4).map(({ _id , ...otherProps })=>alikeProduct !== _id ? /*#__PURE__*/ jsx_runtime_.jsx(ProductRelate, {
                ...otherProps,
                id: _id
            }, _id) : null)
    });
};

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./features/cart/cartSlice.js + 1 modules
var cartSlice = __webpack_require__(6098);
// EXTERNAL MODULE: ./features/auth/authSlice.js
var authSlice = __webpack_require__(3066);
;// CONCATENATED MODULE: ./components/icons/weight-icon.js

function WeightIcon({ className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "30.09",
        height: "31.14",
        viewBox: "0 0 30.09 31.14",
        className: className,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            id: "Group_8149",
            "data-name": "Group 8149",
            transform: "translate(0.752 0.75)",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    id: "Path_16058",
                    "data-name": "Path 16058",
                    d: "M-145.061,140.6H-168.8a2.422,2.422,0,0,1-2.409-2.682l2.057-17.757A2.422,2.422,0,0,1-166.744,118h19.58a2.422,2.422,0,0,1,2.408,2.157l2.1,17.758A2.422,2.422,0,0,1-145.061,140.6Z",
                    transform: "translate(171.224 -110.962)",
                    fill: "#fff",
                    stroke: "#7b7b7b",
                    strokeMiterlimit: "10",
                    strokeWidth: "1.5"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    id: "Path_16059",
                    "data-name": "Path 16059",
                    d: "M-133.01,102.645v-.9a5.807,5.807,0,0,0-5.808-5.807,5.807,5.807,0,0,0-5.807,5.807v.9",
                    transform: "translate(153.11 -95.938)",
                    fill: "#fff",
                    stroke: "#7b7b7b",
                    strokeMiterlimit: "10",
                    strokeWidth: "1.5"
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./styles/components/product-add-to-cart-modal.module.scss
var product_add_to_cart_modal_module = __webpack_require__(2256);
var product_add_to_cart_modal_module_default = /*#__PURE__*/__webpack_require__.n(product_add_to_cart_modal_module);
;// CONCATENATED MODULE: ./components/product/product-add-to-cart-modal.jsx











function ProductAddToCartModal({ id , title , img , price , totalPrice , quantity , weight , handleClickPlus , handleClickMinus , closeModal , code , packageName ,  }) {
    const router = (0,router_.useRouter)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const user = (0,external_react_redux_.useSelector)(authSlice/* selectUser */.dy);
    const handleClickCheckout = ()=>{
        dispatch((0,cartSlice/* addItem */.jX)({
            id,
            title,
            img,
            price,
            quantity,
            weight,
            code,
            packageName: packageName.name
        }));
        if (user) {
            router.push("/checkout/shipping");
        } else {
            router.push("/login");
        }
    };
    const handleClickContinueShopping = ()=>{
        dispatch((0,cartSlice/* addItem */.jX)({
            id,
            title,
            img,
            price,
            quantity,
            weight,
            code,
            packageName: packageName.name
        }));
        closeModal();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (product_add_to_cart_modal_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (product_add_to_cart_modal_module_default()).body,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (product_add_to_cart_modal_module_default()).img,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: `/storage/${code}/${img}`,
                        alt: title,
                        width: 170,
                        height: 170,
                        placeholder: "blur",
                        blurDataURL: `/storage/${code}/${img}`,
                        loader: imageLoader/* default */.Z
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (product_add_to_cart_modal_module_default()).content,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (product_add_to_cart_modal_module_default()).price,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "قیمت"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: (0,formatPrice/* default */.Z)(totalPrice)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "تومان"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (product_add_to_cart_modal_module_default()).weight,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "تعداد"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (product_add_to_cart_modal_module_default()).weight_icon,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: quantity
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(WeightIcon, {})
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                            variant: "plus",
                                            handleClick: handleClickPlus
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                            variant: "minus",
                                            handleClick: handleClickMinus
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (product_add_to_cart_modal_module_default()).actions,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                    variant: "continueShopping",
                                    rounded: true,
                                    handleClick: handleClickContinueShopping,
                                    children: "ادامه خرید"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                    variant: "checkout",
                                    rounded: true,
                                    handleClick: handleClickCheckout,
                                    children: "نهایی کردن خرید"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./components/ui/modal.jsx + 1 modules
var modal = __webpack_require__(3660);
// EXTERNAL MODULE: ./styles/components/product.module.scss
var product_module = __webpack_require__(1628);
var product_module_default = /*#__PURE__*/__webpack_require__.n(product_module);
;// CONCATENATED MODULE: ./components/product/product.jsx










function Product({ product , relatedProducts  }) {
    const { 0: showGalley , 1: setShowGalley  } = (0,external_react_.useState)(false);
    const { 0: showAddToCart , 1: setShowAddToCart  } = (0,external_react_.useState)(false);
    const { 0: quantity , 1: setQuantity  } = (0,external_react_.useState)(1);
    const { 0: weight , 1: setWeight  } = (0,external_react_.useState)(250);
    const { 0: price , 1: setPrice  } = (0,external_react_.useState)(50000);
    const { 0: oldPrice , 1: setOldPrice  } = (0,external_react_.useState)(70000);
    const { 0: selectedPackage , 1: setSelectedPackage  } = (0,external_react_.useState)(product.types[0][0]);
    const handleClickGallery = ()=>setShowGalley(true);
    const handleCloseGallery = ()=>setShowGalley(false);
    const handleClickAddToCart = ()=>setShowAddToCart(true);
    const handleCloseAddToCart = ()=>setShowAddToCart(false);
    (0,external_react_.useEffect)(()=>{
        delete product.types[0][0].package.inventory;
        const value = Object.entries(product.types[0][0].package);
        setQuantity(1);
        setWeight(value[0][0]);
        setPrice(value[0][1]);
        setOldPrice(value[0][1]);
    }, [
        product.types[0][0].package
    ]);
    (0,external_react_.useEffect)(()=>{
        setPrice(Number(quantity * selectedPackage.package[weight]));
        setOldPrice(Number(quantity * selectedPackage.package[weight]));
    }, [
        quantity,
        product.types,
        weight,
        selectedPackage.package
    ]);
    if (!product) return null;
    const handleClickPlus = ()=>{
        setQuantity((prevState)=>prevState + 1);
    };
    const handleClickMinus = ()=>{
        setQuantity((prevState)=>prevState === 1 ? 1 : prevState - 1);
    };
    const DiscoutionCalculation = (amount)=>{
        const percent = Number(product.amount);
        return (Number(amount) * (1 - percent / 100)).toFixed(0);
    };
    const handleSelectWeight = (e)=>{
        const { value  } = e.target;
        setQuantity(1);
        setWeight(value);
        setPrice(selectedPackage.package[value]);
        setOldPrice(selectedPackage.package[value]);
    };
    // console.log(price, oldPrice)
    const handleSelectPackage = (e)=>{
        const { value  } = e.target;
        setSelectedPackage(product.types[0].find((item)=>item.name === value));
    };
    // console.log(product.photos)
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "section",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (product_module_default()).container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ProductGallery, {
                                handleClickItem: handleClickGallery,
                                img: product.photos[0],
                                images: product.photos,
                                product_code: product.code
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ProductInfo, {
                                handleClickAddToCart: handleClickAddToCart,
                                handleClickPlus: handleClickPlus,
                                handleClickMinus: handleClickMinus,
                                handleSelectWeight: handleSelectWeight,
                                handleSelectPackage: handleSelectPackage,
                                DiscoutionCalculation: DiscoutionCalculation,
                                quantity: quantity,
                                price: price,
                                oldPrice: oldPrice,
                                item: product,
                                selected_package: selectedPackage,
                                Weigh: weight
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ProductOtherInfo, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(ProductRelateList, {
                        alikeProduct: product._id,
                        _id: product._id,
                        items: relatedProducts
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(modal/* default */.Z, {
                onClose: handleCloseGallery,
                show: showGalley,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ProductModal, {
                    img: product.photos[0],
                    images: product.photos,
                    product_code: product.code
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(modal/* default */.Z, {
                onClose: handleCloseAddToCart,
                show: showAddToCart,
                title: "افزودن به سبد خرید",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ProductAddToCartModal, {
                    handleClickPlus: handleClickPlus,
                    handleClickMinus: handleClickMinus,
                    closeModal: handleCloseAddToCart,
                    DiscoutionCalculation: DiscoutionCalculation,
                    quantity: quantity,
                    totalPrice: product.amount > 0 ? DiscoutionCalculation(price) : price,
                    price: product.amount > 0 ? DiscoutionCalculation(selectedPackage.package[weight]) : selectedPackage.package[weight],
                    packageName: selectedPackage,
                    weight: weight,
                    img: product.photos[0],
                    id: product._id,
                    ...product
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./helpers/serviceCall.js
var serviceCall = __webpack_require__(8874);
;// CONCATENATED MODULE: ./pages/products/[slug].js





function ProductDetailPage({ product , relatedProducts  }) {
    // console.log(product)
    return /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        hasHeader: true,
        hasFooter: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Product, {
            product: product,
            relatedProducts: relatedProducts
        })
    });
};
async function getServerSideProps({ params: { slug  }  }) {
    const product = await (0,serviceCall/* default */.Z)(`api/shop/single_product?id=${slug}`);
    let relatedProducts = [];
    if (product.sub_category) {
        const res = await (0,serviceCall/* default */.Z)(`api/shop?s_category=${product.sub_category._id}`);
        relatedProducts = res.data;
    // title = `${res.category.name} | بازارچه خشکبار طارونه`;
    }
    return {
        props: {
            product: product,
            relatedProducts
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
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,739,2767], () => (__webpack_exec__(1427)));
module.exports = __webpack_exports__;

})();