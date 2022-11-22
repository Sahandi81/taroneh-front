exports.id = 5786;
exports.ids = [5786];
exports.modules = {

/***/ 4018:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "category_container__axxPf",
	"item": "category_item__5hNfs",
	"action": "category_action__GFYWy",
	"img": "category_img__9V2VP",
	"icon": "category_icon__dMkuq"
};


/***/ }),

/***/ 5786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Category)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/icons/arrow-left-dark-1-icon.js
var arrow_left_dark_1_icon = __webpack_require__(7563);
// EXTERNAL MODULE: ./styles/components/category.module.scss
var category_module = __webpack_require__(4018);
var category_module_default = /*#__PURE__*/__webpack_require__.n(category_module);
// EXTERNAL MODULE: ./helpers/imageLoader.js
var imageLoader = __webpack_require__(909);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/home/category/category-item.jsx







function CategoryItem({ id , name , img  }) {
    // console.log(id)
    const router = (0,router_.useRouter)();
    // console.log(router.query);
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: !router.query.category ? `/products?category=${id}` : `/products?s_category=${id}&page=1&per_page=8`,
        passHref: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: router.query.category && {
                width: "13rem",
                height: "13rem"
            },
            className: (category_module_default()).item,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (category_module_default()).img,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        loader: imageLoader/* default */.Z,
                        src: img,
                        alt: name,
                        width: 171,
                        height: 198,
                        layout: "responsive"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (category_module_default()).action,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (category_module_default()).icon,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(arrow_left_dark_1_icon/* default */.Z, {})
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/home/category/category.data.js
const CATEGORY_DATA = [
    {
        id: "item-01",
        name: "آجیل",
        img: "/img/category-01.jpg"
    },
    {
        id: "item-02",
        name: "خرما",
        img: "/img/category-02.jpg"
    },
    {
        id: "item-03",
        name: "آلو",
        img: "/img/category-03.jpg"
    },
    {
        id: "item-04",
        name: "خشکبار",
        img: "/img/category-04.jpg"
    },
    {
        id: "item-05",
        name: "تخمه",
        img: "/img/category-05.jpg"
    },
    {
        id: "item-06",
        name: "زعفران",
        img: "/img/category-06.jpg"
    },
    {
        id: "item-07",
        name: "میوه خشک",
        img: "/img/category-07.jpg"
    },
    {
        id: "item-08",
        name: "پذیرایی",
        img: "/img/category-08.jpg"
    }, 
];
/* harmony default export */ const category_data = ((/* unused pure expression or super */ null && (CATEGORY_DATA)));

;// CONCATENATED MODULE: ./components/home/category/category.jsx




function Category({ categories  }) {
    console.log(categories);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "section",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (category_module_default()).container,
            style: {
                display: "flex",
                alignContent: "center",
                justifyContent: "space-around",
                flexFlow: "row wrap"
            },
            children: categories.map(({ _id , name , photos  })=>{
                const img = photos?.length > 0 ? `/storage/${name}/${photos[0]}` : "/storage/logo.png";
                return /*#__PURE__*/ jsx_runtime_.jsx(CategoryItem, {
                    name: name,
                    img: img,
                    id: _id
                }, _id);
            })
        })
    });
};


/***/ })

};
;