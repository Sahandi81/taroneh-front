"use strict";
(() => {
var exports = {};
exports.id = 1902;
exports.ids = [1902];
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

/***/ 8811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ completeProfile)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7611);


async function completeProfile(req, res) {
    if (req.method === "PUT") {
        if (!req.headers.cookie) {
            res.status(403).json({
                message: "Not authorized!"
            });
            return;
        }
        const { token  } = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie);
        const { f_name , l_name , email , password , phone , address , photos  } = req.body;
        const backendRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__/* .API_URL */ .T}/api/panel/complete_profile`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                f_name,
                l_name,
                email,
                password,
                phone,
                address,
                photos
            })
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
            "PUT"
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
var __webpack_exports__ = (__webpack_exec__(8811));
module.exports = __webpack_exports__;

})();