exports.id = 1991;
exports.ids = [1991];
exports.modules = {

/***/ 3210:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "accordion_container__3SmEo",
	"question_icon": "accordion_question_icon___jRvC",
	"title": "accordion_title___lbpN",
	"arrow": "accordion_arrow__kkC0q",
	"arrow_close": "accordion_arrow_close__FaleR",
	"content": "accordion_content__LYLNc",
	"content_shown": "accordion_content_shown__mQIEL"
};


/***/ }),

/***/ 864:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "faq_container__LZ_8b",
	"header": "faq_header__qkN0y",
	"icon": "faq_icon__A_u7Z",
	"content": "faq_content__mpBq4"
};


/***/ }),

/***/ 1991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Faq)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/icons/question-icon.js

function QuestionIcon({ className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "21.506",
        height: "33.225",
        viewBox: "0 0 21.506 33.225",
        className: className,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            transform: "translate(-1652.598 -3637.379)",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M71.1,9.448V9.359C71.1,3.566,66.512,0,59.961,0a15.834,15.834,0,0,0-9.189,2.715,3.14,3.14,0,0,0-.5,4.413l.747.986a3.319,3.319,0,0,0,4.346.66,8.414,8.414,0,0,1,4.017-1.153c2.139,0,3.343.936,3.343,2.451v.044c0,1.917-1.827,4.656-7,5.1l-.178.2a14.265,14.265,0,0,0,.276,3.239l.206,1.368a3.47,3.47,0,0,0,3.151,3.037c1.489,0,2.816-.639,2.963-1.426s.268-1.427.268-1.427A10.874,10.874,0,0,0,71.1,9.448Z",
                    transform: "translate(1603 3637.379)",
                    fill: "#17b0f1"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M95.5,217.1a3.071,3.071,0,0,0-3.071,3.071V221.6a3.071,3.071,0,0,0,3.071,3.071h2.637a3.071,3.071,0,0,0,3.071-3.071v-1.434a3.072,3.072,0,0,0-3.071-3.071Z",
                    transform: "translate(1565.23 3445.932)",
                    fill: "#17b0f1"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/icons/arrow-top-icon.js

function ArrowTopIcon({ className , handleClick  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "18.915",
        height: "10.958",
        viewBox: "0 0 18.915 10.958",
        className: className,
        onClick: handleClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            id: "Group_17589",
            "data-name": "Group 17589",
            transform: "translate(2.121 1.5)",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                id: "Path_19009",
                "data-name": "Path 19009",
                d: "M0,7.337,7.335,0l7.337,7.337",
                transform: "translate(0 0)",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "3"
            })
        })
    });
};

// EXTERNAL MODULE: ./styles/components/accordion.module.scss
var accordion_module = __webpack_require__(3210);
var accordion_module_default = /*#__PURE__*/__webpack_require__.n(accordion_module);
;// CONCATENATED MODULE: ./components/accordion/accordion.jsx





function Accordion() {
    const { 0: contentShown , 1: setContentShown  } = (0,external_react_.useState)(false);
    const handleClick = ()=>setContentShown((prevState)=>!prevState);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (accordion_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(QuestionIcon, {
                className: (accordion_module_default()).question_icon
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (accordion_module_default()).title,
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    onClick: handleClick,
                    children: "تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در دهه شصت می باشد؟"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ArrowTopIcon, {
                className: `${(accordion_module_default()).arrow} ${contentShown ? (accordion_module_default()).arrow_close : ""}`,
                handleClick: handleClick
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(accordion_module_default()).content} ${contentShown ? (accordion_module_default()).content_shown : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف .بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده."
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/icons/arrow-left-dark-1-icon.js
var arrow_left_dark_1_icon = __webpack_require__(7563);
// EXTERNAL MODULE: ./styles/components/faq.module.scss
var faq_module = __webpack_require__(864);
var faq_module_default = /*#__PURE__*/__webpack_require__.n(faq_module);
;// CONCATENATED MODULE: ./components/home/faq/faq.jsx





function Faq() {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "section",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (faq_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (faq_module_default()).header,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "سوالات متداول شما"
                        }),
                        router.pathname === "/" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            onClick: ()=>router.push("/faq"),
                            children: [
                                "مشاهده بیشتر",
                                /*#__PURE__*/ jsx_runtime_.jsx(arrow_left_dark_1_icon/* default */.Z, {
                                    className: (faq_module_default()).icon
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (faq_module_default()).content,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Accordion, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Accordion, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Accordion, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Accordion, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Accordion, {})
                    ]
                })
            ]
        })
    });
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


/***/ })

};
;