(() => {
var exports = {};
exports.id = 1131;
exports.ids = [1131];
exports.modules = {

/***/ 5526:
/***/ (() => {

const apiKey = process.env.MAP_BOX_API_KEY;
const url = `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${apiKey}`;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5526));
module.exports = __webpack_exports__;

})();