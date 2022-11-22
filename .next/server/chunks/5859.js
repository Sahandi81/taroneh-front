exports.id = 5859;
exports.ids = [5859];
exports.modules = {

/***/ 9040:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "personal-info_container__5dI5s",
	"header": "personal-info_header__nPHmu",
	"active": "personal-info_active__sd6cW",
	"active_line": "personal-info_active_line__RerY7",
	"body": "personal-info_body__K5Bxt",
	"user_info": "personal-info_user_info__ux4fr",
	"change_password": "personal-info_change_password__PqAC7",
	"form_input": "personal-info_form_input__0ROG2",
	"error_state": "personal-info_error_state__EWK0t",
	"error": "personal-info_error__79wI5",
	"verified": "personal-info_verified__l1AQs",
	"avatar_upload": "personal-info_avatar_upload__Jzkn2",
	"gender": "personal-info_gender___Hbsq",
	"radio": "personal-info_radio__J5rgx",
	"custom_radio": "personal-info_custom_radio__5Lx_7"
};


/***/ }),

/***/ 5859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FormInput)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/icons/verified-icon.js

function VerifiedIcon({ className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16.308",
        height: "11.727",
        viewBox: "0 0 16.308 11.727",
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            id: "Path_40",
            "data-name": "Path 40",
            d: "M775.232,631.721l-8.229,9c-.038.038-.1.039-.177-.035l-3.926-3.6a1.164,1.164,0,1,0-1.573,1.717l3.888,3.562a2.4,2.4,0,0,0,1.7.706,2.491,2.491,0,0,0,1.767-.743l8.265-9.033a1.165,1.165,0,0,0-1.719-1.573Z",
            transform: "translate(-760.949 -631.343)",
            fill: "#53bb8b"
        })
    });
};

// EXTERNAL MODULE: ./styles/components/personal-info.module.scss
var personal_info_module = __webpack_require__(9040);
var personal_info_module_default = /*#__PURE__*/__webpack_require__.n(personal_info_module);
;// CONCATENATED MODULE: ./components/profile/personal-info/form-input.jsx



function FormInput({ label , id , error , isVerified , handleChange , ...otherProps }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (personal_info_module_default()).form_input,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: id,
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                id: id,
                onChange: handleChange,
                className: error && (personal_info_module_default()).error_state,
                ...otherProps,
                autoComplete: "off"
            }),
            isVerified && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: (personal_info_module_default()).verified,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(VerifiedIcon, {}),
                    "تایید شده"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                className: (personal_info_module_default()).error,
                children: error
            })
        ]
    });
};


/***/ })

};
;