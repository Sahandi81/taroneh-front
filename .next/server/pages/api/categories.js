"use strict";
(() => {
var exports = {};
exports.id = 6957;
exports.ids = [6957];
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

/***/ 4272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCategories)
/* harmony export */ });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7611);

async function getCategories(req, res) {
    if (req.method === "GET") {
        const { id  } = req.query;
        let query = `categories?q=${id}`;
        if (!id) query = "categories";
        const backendRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__/* .API_URL */ .T}/api/${query}`, {
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
var __webpack_exports__ = (__webpack_exec__(4272));
module.exports = __webpack_exports__;

})();