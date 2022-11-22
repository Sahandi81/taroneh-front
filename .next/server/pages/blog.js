"use strict";
(() => {
var exports = {};
exports.id = 9195;
exports.ids = [9195];
exports.modules = {

/***/ 8874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 7258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Blog),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout/layout.jsx + 27 modules
var layout = __webpack_require__(2767);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./styles/components/blog.module.scss
var blog_module = __webpack_require__(5160);
var blog_module_default = /*#__PURE__*/__webpack_require__.n(blog_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./helpers/imageLoader.js
var imageLoader = __webpack_require__(909);
;// CONCATENATED MODULE: ./components/blog/header.jsx





function Header({ data  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (blog_module_default()).header,
        children: data.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/blog/${item._id}`,
                passHref: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: item && item.photo?.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                loader: imageLoader/* default */.Z,
                                src: `/storage/blog/${item.photo[0]}`,
                                alt: item.title,
                                width: 700,
                                height: 550,
                                layout: "responsive",
                                objectFit: "cover"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: item.title
                        })
                    ]
                })
            }, item._id))
    });
};

;// CONCATENATED MODULE: ./components/icons/paper-icon.js

function PaperIcon({ className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20.311",
        height: "23.281",
        viewBox: "0 0 20.311 23.281",
        className: className,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            id: "Group_118",
            "data-name": "Group 118",
            transform: "translate(-624.52 -490.908)",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    id: "Path_78",
                    "data-name": "Path 78",
                    d: "M640.543,490.908H628.807a4.292,4.292,0,0,0-4.287,4.287V509.9a4.292,4.292,0,0,0,4.287,4.287h7.4a6.008,6.008,0,0,0,4.5-2.028l2.615-2.957a6,6,0,0,0,1.506-3.978V495.2A4.292,4.292,0,0,0,640.543,490.908Zm-11.736,21.853a2.863,2.863,0,0,1-2.859-2.859V495.2a2.863,2.863,0,0,1,2.859-2.859h11.736A2.862,2.862,0,0,1,643.4,495.2v10.03a4.631,4.631,0,0,1-.053.666.71.71,0,0,0-.219-.038h-4.044A2.1,2.1,0,0,0,637,507.9l-.1,4.807a4.527,4.527,0,0,1-.687.059Zm10.831-1.546a4.564,4.564,0,0,1-1.3,1.014l.092-4.3a.662.662,0,0,1,.658-.644h3.825a4.568,4.568,0,0,1-.658.975Z",
                    transform: "translate(0 0)",
                    fill: "#212832"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    id: "Path_79",
                    "data-name": "Path 79",
                    d: "M635.742,506.973h8.848a.714.714,0,0,0,0-1.428h-8.848a.714.714,0,0,0,0,1.428Z",
                    transform: "translate(-5.505 -7.669)",
                    fill: "#212832"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    id: "Path_80",
                    "data-name": "Path 80",
                    d: "M635.742,513.5h8.848a.714.714,0,0,0,0-1.428h-8.848a.714.714,0,0,0,0,1.428Z",
                    transform: "translate(-5.505 -11.09)",
                    fill: "#212832"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    id: "Path_81",
                    "data-name": "Path 81",
                    d: "M639.48,518.6h-3.738a.714.714,0,0,0,0,1.428h3.738a.714.714,0,0,0,0-1.428Z",
                    transform: "translate(-5.505 -14.511)",
                    fill: "#212832"
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./components/blog/sidebar-item.jsx
var sidebar_item = __webpack_require__(2150);
;// CONCATENATED MODULE: ./components/blog/sidebar.jsx




function Sidebar({ data  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (blog_module_default()).sidebar,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(PaperIcon, {
                        className: (blog_module_default()).paper
                    }),
                    "پربازدید ترین مطالب"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: data.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(sidebar_item/* default */.Z, {
                        post: item
                    }, item._id))
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/icons/search-icon.js
var search_icon = __webpack_require__(1447);
;// CONCATENATED MODULE: ./components/blog/search.jsx



function Search() {
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.search,
        children: [
            /*#__PURE__*/ _jsx("input", {
                type: "text",
                placeholder: "بگرد تا به نتیجت برسی"
            }),
            /*#__PURE__*/ _jsx(SearchIcon, {
                className: styles.search_icon
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/icons/clock-icon.js
var clock_icon = __webpack_require__(3151);
// EXTERNAL MODULE: ./data/calender.js
var calender = __webpack_require__(7146);
;// CONCATENATED MODULE: ./components/blog/main.jsx






// import jMoment from "jalali-moment";


function Main({ data  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (blog_module_default()).main,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    "آخرین عنوان ها",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (blog_module_default()).main_items,
                children: data.data.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/blog/${item._id}`,
                        passHref: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (blog_module_default()).main_item_image,
                                    children: item.photo?.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        loader: imageLoader/* default */.Z,
                                        src: `/storage/${item.photo[0]}`,
                                        alt: item.title,
                                        width: 515,
                                        height: 342,
                                        layout: "responsive"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(clock_icon/* default */.Z, {
                                                    className: (blog_module_default()).clock
                                                }),
                                                (0,calender/* calender */.J)(item.created_at)
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }, item._id))
            })
        ]
    });
};

// EXTERNAL MODULE: ./helpers/serviceCall.js
var serviceCall = __webpack_require__(8874);
;// CONCATENATED MODULE: ./pages/blog/index.js







function Blog({ posts  }) {
    // console.log(posts)
    return /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        title: "بلاگ | بازارچه خشکبار طارونه",
        hasHeader: true,
        hasDescription: true,
        hasKeywords: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: (blog_module_default()).section,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (blog_module_default()).container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                        data: posts.data?.slice(0, 4)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (blog_module_default()).body,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {
                                data: posts.data
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Main, {
                                data: posts
                            })
                        ]
                    })
                ]
            })
        })
    });
};
// This gets called on every request
async function getServerSideProps() {
    // Fetch data from external API
    // console.log(params)
    const res = await (0,serviceCall/* default */.Z)("api/blog");
    return {
        props: {
            posts: res
        }
    };
}


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4335:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,739,2767,2150], () => (__webpack_exec__(7258)));
module.exports = __webpack_exports__;

})();