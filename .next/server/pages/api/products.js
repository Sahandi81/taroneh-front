"use strict";
(() => {
var exports = {};
exports.id = 7221;
exports.ids = [7221];
exports.modules = {

/***/ 7611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ API_URL)
/* harmony export */ });
/* unused harmony export NEXT_URL */
const API_URL = "https://api.taroneh.ir" || 0;
const NEXT_URL = (/* unused pure expression or super */ null && ("http://localhost:3000" || 0));


/***/ }),

/***/ 1003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getProducts)
/* harmony export */ });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7611);

async function getProducts(req, res) {
    if (req.method === "GET") {
        const backendRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__/* .API_URL */ .T}/api/shop`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        const data = await backendRes.json();
        if (backendRes.ok) {
            res.status(200).json({
                data
            });
        } else {
            res.status(backendRes.status).json({
                message: data.message
            });
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
var __webpack_exports__ = (__webpack_exec__(1003));
module.exports = __webpack_exports__;

})();