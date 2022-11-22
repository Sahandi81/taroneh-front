exports.id = 2150;
exports.ids = [2150];
exports.modules = {

/***/ 5160:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "blog_section__lv5kV",
	"targetText": "blog_targetText__k5b1W",
	"header": "blog_header__ux_8f",
	"body": "blog_body__uIHU2",
	"sidebar": "blog_sidebar__rZ5Gy",
	"paper": "blog_paper__sFhY2",
	"sidebar_item": "blog_sidebar_item__2OSEg",
	"clock": "blog_clock__5ONr5",
	"sidebar_image": "blog_sidebar_image__zSXFd",
	"search": "blog_search__Q5Iik",
	"search_icon": "blog_search_icon__q4Hca",
	"main": "blog_main__K40D_",
	"main_items": "blog_main_items__OqZzp",
	"main_item_image": "blog_main_item_image___xrZ_"
};


/***/ }),

/***/ 2150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SidebarItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_clock_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3151);
/* harmony import */ var _styles_components_blog_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5160);
/* harmony import */ var _styles_components_blog_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_blog_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2500);
/* harmony import */ var _data_calender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7146);





// import jMoment from "jalali-moment";
function SidebarItem({ post  }) {
    // const dom = new DOMParser();
    // const parseDom = dom.parseFromString(post.body, 'text/html');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_components_blog_module_scss__WEBPACK_IMPORTED_MODULE_2___default().sidebar_item),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_components_blog_module_scss__WEBPACK_IMPORTED_MODULE_2___default().sidebar_image),
                children: post.photo?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: `${_config_index__WEBPACK_IMPORTED_MODULE_3__/* .API_URL */ .T}/storage/${post.photo[0]}`,
                    alt: "sidebar item"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: post.title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_clock_icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                className: (_styles_components_blog_module_scss__WEBPACK_IMPORTED_MODULE_2___default().clock)
                            }),
                            (0,_data_calender__WEBPACK_IMPORTED_MODULE_4__/* .calender */ .J)(post.created_at)
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_components_blog_module_scss__WEBPACK_IMPORTED_MODULE_2___default().targetText),
                        style: {
                            color: "#111"
                        },
                        dangerouslySetInnerHTML: {
                            __html: post.body
                        }
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 3151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ClockIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ClockIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14.452",
        height: "14.452",
        viewBox: "0 0 14.452 14.452",
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
            id: "Vector_Smart_Object1",
            "data-name": "Vector Smart Object1",
            transform: "translate(-841.504 -71.336)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                id: "Group_15",
                "data-name": "Group 15",
                transform: "translate(841.504 71.336)",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        id: "Clock_1",
                        "data-name": "Clock 1",
                        d: "M7.226.9A6.323,6.323,0,1,1,.9,7.226,6.33,6.33,0,0,1,7.226.9m0-.9a7.226,7.226,0,1,0,7.226,7.226A7.226,7.226,0,0,0,7.226,0Z",
                        fill: "#cccccb"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        id: "Clock_2",
                        "data-name": "Clock 2",
                        d: "M4.1,5.529l-2.29-2.29V.9A.9.9,0,0,0,0,.9V3.987L2.819,6.806A.9.9,0,1,0,4.1,5.529Z",
                        transform: "translate(5.912 3.613)",
                        fill: "#ff8b00",
                        stroke: "#fff",
                        strokeWidth: "0.5"
                    })
                ]
            })
        })
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


/***/ })

};
;