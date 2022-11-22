exports.id = 3686;
exports.ids = [3686];
exports.modules = {

/***/ 363:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "product-box_container__oOe0K",
	"header": "product-box_header__eK_zy",
	"rating": "product-box_rating__ei5aR",
	"star_icon": "product-box_star_icon__siM4k",
	"heart_icon": "product-box_heart_icon__SxYO_",
	"img": "product-box_img__7Tihz",
	"title": "product-box_title__LaicF",
	"price": "product-box_price__QFSLw",
	"percent": "product-box_percent__iYlWI"
};


/***/ }),

/***/ 4391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BackIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function BackIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "15.635",
        height: "11.031",
        viewBox: "0 0 15.635 11.031",
        className: className,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            id: "Group_9268",
            "data-name": "Group 9268",
            transform: "translate(-371.709 -30.441)",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    id: "Path_16359",
                    "data-name": "Path 16359",
                    d: "M0,4.455,4.453,0,8.91,4.455",
                    transform: "translate(386.594 31.502) rotate(90)",
                    fill: "none",
                    stroke: "#7c7c7c",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    id: "Path_16362",
                    "data-name": "Path 16362",
                    d: "M4949.594-8538.043h-13.135",
                    transform: "translate(-4564 8574)",
                    fill: "none",
                    stroke: "#7c7c7c",
                    strokeLinecap: "round",
                    strokeWidth: "1.5"
                })
            ]
        })
    });
};


/***/ }),

/***/ 5883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_star_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3427);
/* harmony import */ var _icons_heart_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6914);
/* harmony import */ var _styles_components_product_box_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(363);
/* harmony import */ var _styles_components_product_box_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_components_product_box_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _helpers_imageLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(909);
/* harmony import */ var _app_services_apiSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6558);
/* harmony import */ var _ui_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2154);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_formatPrice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4621);












function ProductBox({ id , name , img , price , percent , handleClick , types , stars  }) {
    const [addToWishList, { isLoading  }] = (0,_app_services_apiSlice__WEBPACK_IMPORTED_MODULE_4__/* .useAddToWishListMutation */ .VW)();
    const productInWishList = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>(0,_app_services_apiSlice__WEBPACK_IMPORTED_MODULE_4__/* .isProductInWishList */ .q0)(state, id));
    const handleAddToWishList = async ()=>{
        try {
            await addToWishList(id);
        } catch (error) {
            console.log(error);
        }
    };
    const entres = types;
    // entres[0][0].package.inventory
    let calculate;
    let pack;
    if (types) {
        delete entres[0][0].package.inventory;
        //   console.log(entres[0][0].package)
        calculate = Object.entries(entres[0][0].package);
        if (calculate[0][0] !== "Pack" && calculate[0][0] !== "One") {
            pack = `قیمت هر ${calculate[0][0]} گرم `;
        } else if (calculate[0][0] === "Pack") {
            pack = `قیمت هر بسته  `;
        } else if (calculate[0][0] === "One") {
            pack = `قیمت هر دانه  `;
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_components_product_box_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container),
        onClick: handleClick,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_components_product_box_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_components_product_box_module_scss__WEBPACK_IMPORTED_MODULE_9___default().rating),
                        children: [
                            "5 / ",
                            stars,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_star_icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                className: (_styles_components_product_box_module_scss__WEBPACK_IMPORTED_MODULE_9___default().star_icon)
                            })
                        ]
                    }),
                    isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_spinner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: (_styles_components_product_box_module_scss__WEBPACK_IMPORTED_MODULE_9___default().heart_icon)
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_heart_icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        active: productInWishList,
                        handleClick: handleAddToWishList,
                        className: (_styles_components_product_box_module_scss__WEBPACK_IMPORTED_MODULE_9___default().heart_icon)
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_components_product_box_module_scss__WEBPACK_IMPORTED_MODULE_9___default().img),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            loader: _helpers_imageLoader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                            src: img,
                            alt: name,
                            width: 90,
                            height: 90,
                            placeholder: "blur",
                            blurDataURL: img
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: `/products/${id}`,
                        passHref: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_components_product_box_module_scss__WEBPACK_IMPORTED_MODULE_9___default().content),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: (_styles_components_product_box_module_scss__WEBPACK_IMPORTED_MODULE_9___default().title),
                                    children: name
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_components_product_box_module_scss__WEBPACK_IMPORTED_MODULE_9___default().price),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: entres ? entres[0][0].package["1000"] ? "قیمت هر کیلو" : pack : "قیمت هر کیلو"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                entres ? entres[0][0].package["1000"] ? (0,_helpers_formatPrice__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(entres[0][0].package["1000"]) : (0,_helpers_formatPrice__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(calculate[0][1]) : "600000",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                    children: "تومان"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                percent > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_components_product_box_module_scss__WEBPACK_IMPORTED_MODULE_9___default().percent),
                                    children: [
                                        percent,
                                        " %"
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
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


/***/ })

};
;