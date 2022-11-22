(() => {
var exports = {};
exports.id = 5467;
exports.ids = [5467];
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

/***/ 4742:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "favourites_container__cYiPV",
	"item": "favourites_item__dcpiO",
	"delete": "favourites_delete__LnFol",
	"content": "favourites_content__aeb6H",
	"header": "favourites_header__WHsok",
	"rating": "favourites_rating__bKSaB",
	"image": "favourites_image__CpTTF",
	"name": "favourites_name__6BO0T",
	"price": "favourites_price__F2Dkh"
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

/***/ 8716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FavouritesPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout/layout.jsx + 27 modules
var layout = __webpack_require__(2767);
// EXTERNAL MODULE: ./components/profile/sidebar.jsx + 2 modules
var sidebar = __webpack_require__(7305);
// EXTERNAL MODULE: ./components/ui/container.jsx
var container = __webpack_require__(6063);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/icons/star-icon.js
var star_icon = __webpack_require__(3427);
// EXTERNAL MODULE: ./components/icons/heart-icon.js
var heart_icon = __webpack_require__(6914);
// EXTERNAL MODULE: ./components/icons/times-icon.js
var times_icon = __webpack_require__(7042);
// EXTERNAL MODULE: ./helpers/formatPrice.js
var formatPrice = __webpack_require__(4621);
// EXTERNAL MODULE: ./styles/components/favourites.module.scss
var favourites_module = __webpack_require__(4742);
var favourites_module_default = /*#__PURE__*/__webpack_require__.n(favourites_module);
// EXTERNAL MODULE: ./app/services/apiSlice.js
var apiSlice = __webpack_require__(6558);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./components/ui/spinner.jsx
var spinner = __webpack_require__(2154);
;// CONCATENATED MODULE: ./components/profile/favourites/favourite-item.jsx










// import addToWishList from 'pages/api/add_to_wish_list';
function FavouriteItem({ id , name , img , price , types  }) {
    const [addToWishList, { isLoading  }] = (0,apiSlice/* useAddToWishListMutation */.VW)();
    const productInWishList = (0,external_react_redux_.useSelector)((state)=>(0,apiSlice/* isProductInWishList */.q0)(state, id));
    const handleAddToWishList = async ()=>{
        try {
            await addToWishList(id);
        } catch (error) {
            console.log(error);
        }
    };
    const entres = types;
    const calculate = Object.entries(entres[0][0].package);
    let pack;
    if (calculate[0][0] !== "Pack" && calculate[0][0] !== "One") {
        pack = `قیمت هر ${calculate[0][0]} گرم `;
    } else if (calculate[0][0] === "Pack") {
        pack = `قیمت هر بسته  `;
    } else if (calculate[0][0] === "One") {
        pack = `قیمت هر دانه  `;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (favourites_module_default()).item,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (favourites_module_default())["delete"],
                children: /*#__PURE__*/ jsx_runtime_.jsx(times_icon/* default */.Z, {
                    variant: 3
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (favourites_module_default()).content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (favourites_module_default()).header,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: (favourites_module_default()).rating,
                                children: [
                                    "5/4 ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(star_icon/* default */.Z, {})
                                ]
                            }),
                            isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(spinner/* default */.Z, {
                                className: (favourites_module_default()).heart_icon
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(heart_icon/* default */.Z, {
                                active: true,
                                handleClick: handleAddToWishList,
                                className: (favourites_module_default()).heart_icon
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (favourites_module_default()).image,
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
                        className: (favourites_module_default()).name,
                        children: name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (favourites_module_default()).price,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: entres[0][0].package["1000"] ? "قیمت هر کیلو" : pack
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    entres[0][0].package["1000"] ? (0,formatPrice/* default */.Z)(entres[0][0].package["1000"]) : (0,formatPrice/* default */.Z)(calculate[0][1]),
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
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/profile/favourites/favourites.jsx







function Favourites() {
    const data = (0,external_react_redux_.useSelector)(apiSlice/* selectWishListItems */.dZ);
    // console.log(data)
    return /*#__PURE__*/ jsx_runtime_.jsx(container/* default */.Z, {
        title: "علاقه مندی ها",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (favourites_module_default()).container,
            children: data?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(FavouriteItem, {
                    id: item.product_info._id,
                    name: item.product_info.title,
                    types: item.product_info.types,
                    img: `/storage/${item.product_info.code}/${item.product_info.photos.length > 0 && item.product_info.photos[0]}`,
                    price: (0,formatPrice/* default */.Z)(item.product_info.types[0]?.[0]?.package[250])
                }, item.product_info._id))
        })
    });
};

// EXTERNAL MODULE: ./styles/components/profile.module.scss
var profile_module = __webpack_require__(6591);
var profile_module_default = /*#__PURE__*/__webpack_require__.n(profile_module);
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(4802);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(2500);
;// CONCATENATED MODULE: ./pages/profile/favourites.js







function FavouritesPage() {
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
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Favourites, {})
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
        // console.log(data,'data')
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
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,739,2767,7305,746,7042], () => (__webpack_exec__(8716)));
module.exports = __webpack_exports__;

})();