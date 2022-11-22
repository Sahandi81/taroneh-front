"use strict";
(() => {
var exports = {};
exports.id = 353;
exports.ids = [353];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 7611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ API_URL)
/* harmony export */ });
/* unused harmony export NEXT_URL */
const API_URL = "https://api.taroneh.ir" || 0;
const NEXT_URL = (/* unused pure expression or super */ null && ("http://localhost:3000" || 0));


/***/ }),

/***/ 8888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ userDetails)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7611);


async function userDetails(req, res) {
    if (req.method === "GET") {
        if (!req.headers.cookie) {
            res.status(304).end();
            return;
        }
        if (req.headers.cookie) {
            const { token  } = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie);
            if (token) {
                const backendRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__/* .API_URL */ .T}/api/user_details`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                const data = await backendRes.json();
                if (backendRes.ok) {
                    res.status(200).json({
                        user: data
                    });
                } else {
                    res.status(backendRes.status).json({
                        message: data.message || "User not found!"
                    });
                }
            } else {
                res.status(304).end();
                return;
            }
        }
    } else {
        res.setHeader("Allow", [
            "GET"
        ]);
        res.status(405).json({
            message: `Method ${req.method} not allowed`
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8888));
module.exports = __webpack_exports__;

})();