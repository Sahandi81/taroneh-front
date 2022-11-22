(() => {
var exports = {};
exports.id = 7345;
exports.ids = [7345];
exports.modules = {

/***/ 4784:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "products_container__z9ptc",
	"title": "products_title__ztTDf",
	"title_content": "products_title_content__HU94H",
	"tab_bar": "products_tab_bar__uAyCw",
	"tab": "products_tab__xyKHJ",
	"icon": "products_icon__mU8Gc",
	"active_tab": "products_active_tab__2cTAS",
	"result": "products_result__jO42l"
};


/***/ }),

/***/ 7563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ArrowLeftDark1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ArrowLeftDark1({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "6.43",
        height: "10.861",
        viewBox: "0 0 6.43 10.861",
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M14008.8,8890.688l4.015,4.017,4.019-4.017",
            transform: "translate(8895.703 -14007.389) rotate(90)",
            fill: "none",
            stroke: "#013044",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2"
        })
    });
};


/***/ }),

/***/ 4181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Products),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2767);
/* harmony import */ var _styles_components_products_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4784);
/* harmony import */ var _styles_components_products_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_components_products_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_icons_back_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4391);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_product_product_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5883);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_serviceCall__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8874);
/* harmony import */ var _components_home_category_category__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5786);


// import Search from '@/components/search/search';




// import BarsIcon from "@/components/icons/bars-icon";
// import PercentIcon from "@/components/icons/percent-icon";
// import ThumbsIcon from "@/components/icons/thumbs-icon";
// import NewWordIcon from "@/components/icons/new-word-icon";
// import CheapIcon from "@/components/icons/cheap-icon";





// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
function Products({ products , title , length , pg  }) {
    const { 0: activeTab , 1: setActiveTab  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1);
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1);
    const { 0: perPage , 1: setPerPage  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(5);
    const { 0: lastPage , 1: setLastPage  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1);
    // console.log(pg)
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const path = window.location.search;
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (query.s_category) {
            setPage(pg ? Number(pg) : 1);
            setLastPage(length ? Math.ceil(length / 8) : 1);
        }
    }, []);
    // console.log(length, query)
    // console.log(path.includes('page')?
    // path.replace(`page=${page}`, `page=${page + 1}`):path + '&page=' + (page + 1))
    const handleClickPrev = ()=>{
        setPage((prevState)=>{
            if (prevState > 1) return prevState - 1;
        });
        const query = path.includes("page") ? path.replace(`page=${page}`, `page=${page - 1}`) : `${path}&page=${page - 1}`;
        // console.log()
        window.location.replace(window.location.pathname + query);
    };
    const handleClickNext = ()=>{
        setPage((prevState)=>{
            if (prevState < lastPage) return prevState + 1;
        });
        const query = path.includes("page") ? path.replace(`page=${page}`, `page=${Number(page) + 1}`) : `${path}&page=${Number(page) + 1}`;
        // console.log()
        window.location.replace(window.location.pathname + query);
    };
    // console.log(products,  query.category)
    const handleClickTab = (tabNumber, queryTab)=>{
        setActiveTab(tabNumber);
        if (query.type || query.type === "") {
            next_router__WEBPACK_IMPORTED_MODULE_6___default().push("products?type=" + queryTab);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        hasHeader: true,
        hasFooter: true,
        title: title,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "section",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_components_products_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_components_products_module_scss__WEBPACK_IMPORTED_MODULE_9___default().title),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_components_products_module_scss__WEBPACK_IMPORTED_MODULE_9___default().title_content),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_back_icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: title
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_components_products_module_scss__WEBPACK_IMPORTED_MODULE_9___default().result),
                            children: !query.category ? products.length > 0 ? products.map((product, index)=>{
                                if (query.type && query.type === "special-sale") {
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_product_box__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        id: product.product_info._id,
                                        name: product.product_info.title,
                                        img: product.product_info.photos.length ? `/storage/${product.product_info.code}/${product.product_info.photos[0]}` : "/storage/0/logo.png",
                                        price: product.product_info.amount,
                                        types: null,
                                        percent: "0"
                                    }, index);
                                } else {
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_product_box__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        id: product._id,
                                        name: product.title,
                                        img: product.photos.length ? `/storage/${product.code}/${product.photos[0]}` : "/storage/0/logo.png",
                                        price: product.amount,
                                        types: product.types,
                                        percent: "0"
                                    }, index);
                                }
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                style: {
                                    color: "gray",
                                    fontSize: "1rem"
                                },
                                children: "موردی یافت نشد"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_category_category__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                categories: products
                            })
                        })
                    ]
                }),
                length !== "none" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        justifyContent: "flex-end"
                    },
                    className: "flex mr-auto w-fit mt-5 h-11 rounded border",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: handleClickPrev,
                            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("w-11 flex justify-center items-center border-l bg-white", {
                                ["text-gray-700"]: page !== 1,
                                ["text-gray-300"]: page === 1,
                                ["hover:bg-gray-100"]: page !== 1,
                                ["active:bg-transparent"]: page !== 1
                            }),
                            disabled: page <= 1,
                            children: "قبلی"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: handleClickNext,
                            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("w-11 flex justify-center items-center bg-white", {
                                ["text-gray-700"]: page !== lastPage,
                                ["text-gray-300"]: page === lastPage,
                                ["hover:bg-gray-100"]: page !== lastPage,
                                ["active:bg-transparent"]: page !== lastPage
                            }),
                            disabled: page === lastPage,
                            children: "بعدی"
                        })
                    ]
                }) : null
            ]
        })
    });
};
async function getServerSideProps({ query  }) {
    const { type , category , s_category , page  } = query;
    let products = [];
    let title = "بازارچه خشکبار طارونه";
    let length = "none";
    if (type) {
        switch(type){
            case "special-sale":
                {
                    const res = await (0,_helpers_serviceCall__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)("api/special_sales");
                    products = res.list.data;
                    title = `فروش ویژه | بازارچه خشکبار طارونه`;
                    break;
                }
            case "new-products":
                {
                    const res1 = await (0,_helpers_serviceCall__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)("api/shop");
                    products = res1.data;
                    title = `جدیدترین محصولات | بازارچه خشکبار طارونه`;
                    break;
                }
        }
    }
    if (category) {
        const res2 = await (0,_helpers_serviceCall__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(`api/categories?q=${category}`);
        products = res2.details.sub_category;
        console.log(res2);
        title = `${res2.details.name} | بازارچه خشکبار طارونه`;
    }
    if (s_category) {
        const res3 = await (0,_helpers_serviceCall__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(`api/shop?s_category=${s_category}&page=${page ? page : 1}&per_page=8`);
        products = res3.data;
        // title = `${res.category.name} | بازارچه خشکبار طارونه`;
        length = res3.total;
    }
    return {
        props: {
            products,
            title,
            length,
            pg: page ? page : null
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,739,2767,746,3686,5786], () => (__webpack_exec__(4181)));
module.exports = __webpack_exports__;

})();