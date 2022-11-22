exports.id = 7305;
exports.ids = [7305];
exports.modules = {

/***/ 6591:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "profile_section__a4dqt",
	"container": "profile_container___yduo",
	"main": "profile_main__XILq_",
	"sidebar": "profile_sidebar__PXFh_",
	"sidebar_header": "profile_sidebar_header__RRyF7",
	"avatar": "profile_avatar__exztq",
	"name_phone": "profile_name_phone___vrEw",
	"sidebar_item": "profile_sidebar_item__PDgau",
	"icon": "profile_icon__vpDUH",
	"active": "profile_active__S_VR0",
	"exit": "profile_exit__63MrI",
	"loading": "profile_loading__M7I3E",
	"rotate360": "profile_rotate360__FzNa_",
	"moveInBottom": "profile_moveInBottom__Cuj1s",
	"moveInLeft": "profile_moveInLeft__KUXix",
	"moveInRight": "profile_moveInRight__MX6W1",
	"animateBasket": "profile_animateBasket__4BM9E"
};


/***/ }),

/***/ 7305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Sidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./styles/components/profile.module.scss
var profile_module = __webpack_require__(6591);
var profile_module_default = /*#__PURE__*/__webpack_require__.n(profile_module);
;// CONCATENATED MODULE: ./components/profile/sidebar-item.jsx


function SidebarItem({ Icon , title , isActive , handleClick , otherCss  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(profile_module_default()).sidebar_item} ${isActive ? (profile_module_default()).active : ""} ${otherCss ? (profile_module_default())[otherCss] : ""}`,
        onClick: handleClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                className: (profile_module_default()).icon
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: title
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/icons/avatar-icon.js

function AvatarIcon({ className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"
        })
    });
};

// EXTERNAL MODULE: ./components/icons/user-acount-icon.js
var user_acount_icon = __webpack_require__(1204);
// EXTERNAL MODULE: ./components/icons/orders-icon.js
var orders_icon = __webpack_require__(593);
// EXTERNAL MODULE: ./components/icons/my-address-icon.js
var my_address_icon = __webpack_require__(9551);
// EXTERNAL MODULE: ./components/icons/my-favourite-icon.js
var my_favourite_icon = __webpack_require__(2726);
// EXTERNAL MODULE: ./components/icons/exit-icon.js
var exit_icon = __webpack_require__(6543);
// EXTERNAL MODULE: ./features/auth/authSlice.js
var authSlice = __webpack_require__(3066);
;// CONCATENATED MODULE: ./components/profile/sidebar.jsx












function Sidebar({ items  }) {
    const router = (0,router_.useRouter)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const user = (0,external_react_redux_.useSelector)(authSlice/* selectUser */.dy);
    const handleClick = (route)=>router.push(route);
    const handleClickExit = ()=>dispatch((0,authSlice/* toggleSignOutModal */.yz)());
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (profile_module_default()).sidebar,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (profile_module_default()).sidebar_header,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(AvatarIcon, {
                        className: (profile_module_default()).avatar
                    }),
                    user && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (profile_module_default()).name_phone,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: `${user?.f_name} ${user?.l_name}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: user?.phone
                            })
                        ]
                    })
                ]
            }),
            items.map(({ id , route , ...otherProps })=>/*#__PURE__*/ jsx_runtime_.jsx(SidebarItem, {
                    isActive: router.pathname === route,
                    handleClick: ()=>handleClick(route),
                    ...otherProps
                }, id)),
            /*#__PURE__*/ jsx_runtime_.jsx(SidebarItem, {
                title: "خروج",
                Icon: exit_icon/* default */.Z,
                handleClick: handleClickExit,
                otherCss: "exit"
            })
        ]
    });
};
Sidebar.defaultProps = {
    items: [
        {
            id: "sidebar-item-01",
            title: "حساب کاربری",
            Icon: user_acount_icon/* default */.Z,
            route: "/profile/personal-info"
        },
        {
            id: "sidebar-item-02",
            title: "سفارشات",
            Icon: orders_icon/* default */.Z,
            route: "/profile/orders"
        },
        {
            id: "sidebar-item-03",
            title: "آدرس های من",
            Icon: my_address_icon/* default */.Z,
            route: "/profile/addresses"
        },
        {
            id: "sidebar-item-04",
            title: "علاقه مندی ها",
            Icon: my_favourite_icon/* default */.Z,
            route: "/profile/favourites"
        }
    ]
};


/***/ })

};
;