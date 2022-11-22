"use strict";
(() => {
var exports = {};
exports.id = 5501;
exports.ids = [5501];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 6284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateProfile)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);


async function updateProfile(req, res) {
    if (req.method === "PATCH") {
        if (!req.headers.cookie) {
            res.status(403).json({
                message: "Not authorized!"
            });
            return;
        }
        const { token  } = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie);
        const { address  } = req.body;
        //  console.log(me,address)
        const backendRes = await fetch(`https://api.taroneh.ir/api/panel/update_profile`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(address)
        });
        const data = await backendRes.json();
        if (backendRes.ok) {
            res.status(200).json({
                message: "Success!",
                data: data.profile
            });
        } else {
            res.status(backendRes.status).json({
                message: data.message
            });
        }
    } else {
        res.setHeader("Allow", [
            "PATCH"
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
var __webpack_exports__ = (__webpack_exec__(6284));
module.exports = __webpack_exports__;

})();