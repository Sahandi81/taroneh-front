"use strict";
(() => {
var exports = {};
exports.id = 6196;
exports.ids = [6196];
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

/***/ 9147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ getSingleProduct)
});

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(7611);
;// CONCATENATED MODULE: ./data/messages.js
const MSG_PHONE_LENGTH = "شماره موبایل میبایست 11 رقمی باشد!";
const MSG_PASSWORD_LENGTH = "رمز عبور می بایست بیشتر از 6 کاراکتر باشد";
const MSG_CONFIRM_PASSWORD_DIFF = "تکرار رمز عبور با رمز عبور یکسان نمی باشد";
const MSG_INVALID_CREDENTIALS = "اطلاعات کاربری اشتباه است";
const MSG_ERROR_SEND_VERIFICATION_CODE = "خطا در ارسال کد تایید";
const MSG_INVALID_VERIFY_CODE = "کد تایید نامعتبر می باشد";
const MSG_REGISTERATION_COMPLETED = "عضویت شما با موفقیت انجام شد";
const MSG_ERROR_IN_REGISTERATION = "خطا در فرآیند ثبت نام، لطفا با پشتیبانی سایت تماس بگیرید";
const MSG_SELECT_ADDRESS = "آدرسی برای ارسال محصول انتخاب نشده است";
const MSG_EMPTY_BASKET = "سبد خرید شما خالی می باشد";
const MSG_SERVER_ERROR = "خطای سمت سرور";
const MSG_INVALID_EMAIL = "فرمت ایمیل وارد شده اشتباه است";
const LOGOUT_ERROR = "خطا در خروج از حساب کاربری";

;// CONCATENATED MODULE: ./pages/api/products/single.js


async function getSingleProduct(req, res) {
    if (req.method === "GET") {
        const { id  } = req.query;
        const backendRes = await fetch(`${config/* API_URL */.T}/api/shop/single_product?id=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        const data = await backendRes.json();
        if (backendRes.ok) {
            res.status(200).json({
                data: data.product_info
            });
        } else {
            res.status(backendRes.status).json({
                message: data.message || MSG_SERVER_ERROR
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9147));
module.exports = __webpack_exports__;

})();