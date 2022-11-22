exports.id = 5867;
exports.ids = [5867];
exports.modules = {

/***/ 6787:
/***/ ((module) => {

// Exports
module.exports = {
	"field": "input_field__2zxFN",
	"error": "input_error__RdkB_",
	"input": "input_input__YKei4",
	"icon": "input_icon__2f3n3",
	"error_message": "input_error_message__k6PSm"
};


/***/ }),

/***/ 6641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Input)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/icons/eye-icon.js

function EyeIcon({ className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512",
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
        })
    });
};

;// CONCATENATED MODULE: ./components/icons/eye-slash-icon.js

function EyeSlashIcon({ className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 640 512",
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"
        })
    });
};

// EXTERNAL MODULE: ./styles/components/input.module.scss
var input_module = __webpack_require__(6787);
var input_module_default = /*#__PURE__*/__webpack_require__.n(input_module);
;// CONCATENATED MODULE: ./components/ui/input.jsx




function Input({ label , handleChange , togglePasswordVisibility , passwordShown , textCenter , error , w_auto , ...otherProps }) {
    let customStyle;
    if (w_auto) {
        customStyle = {
            width: "auto"
        };
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (input_module_default()).container,
        style: customStyle,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(input_module_default()).field} ${error ? (input_module_default()).error : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: (input_module_default()).input,
                        onChange: handleChange,
                        autoComplete: "off",
                        style: {
                            textAlign: textCenter ? "center" : "unset"
                        },
                        ...otherProps
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: label
                    }),
                    (otherProps.name === "password" || otherProps.name === "confirmPassword") && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        onClick: togglePasswordVisibility,
                        children: [
                            !passwordShown && /*#__PURE__*/ jsx_runtime_.jsx(EyeIcon, {
                                className: (input_module_default()).icon
                            }),
                            passwordShown && /*#__PURE__*/ jsx_runtime_.jsx(EyeSlashIcon, {
                                className: (input_module_default()).icon
                            })
                        ]
                    })
                ]
            }),
            error && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (input_module_default()).error_message,
                children: error
            })
        ]
    });
};


/***/ }),

/***/ 5502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useTimer = (delay)=>{
    const { 0: toggleTimer , 1: setToggleTimer  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const { 0: timer , 1: setTimer  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(59);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let timeout;
        if (toggleTimer) {
            const timeout1 = setTimeout(()=>{
                if (timer > 0) {
                    setTimer((prevTimer)=>prevTimer - 1);
                } else {
                    setToggleTimer(false);
                    setTimer(59);
                }
            }, delay || 1000);
            return ()=>clearTimeout(timeout1);
        }
        if (timeout) clearTimeout(timeout);
    }, [
        timer,
        toggleTimer,
        delay
    ]);
    return {
        timer,
        toggleTimer,
        setToggleTimer
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTimer);


/***/ })

};
;