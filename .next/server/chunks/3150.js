exports.id = 3150;
exports.ids = [3150];
exports.modules = {

/***/ 6367:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "add-address_container__x7RhQ",
	"address": "add-address_address__PrYHI"
};


/***/ }),

/***/ 3150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AddAddress)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _personal_info_form_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5859);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1404);
/* harmony import */ var _styles_components_add_address_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6367);
/* harmony import */ var _styles_components_add_address_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_components_add_address_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_services_apiSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6558);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3066);









function AddAddress({ handleModal  }) {
    const [addAddress] = (0,_app_services_apiSlice__WEBPACK_IMPORTED_MODULE_5__/* .useAddAddressMutation */ .sH)();
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_7__/* .selectUser */ .dy);
    const { 0: city , 1: setCity  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        value: "",
        error: ""
    });
    const { 0: addressTitle , 1: setAddressTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        value: "",
        error: ""
    });
    const { 0: phone , 1: setPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        value: "",
        error: ""
    });
    const { 0: postal , 1: setPostal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        value: "",
        error: ""
    });
    const { 0: address , 1: setAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        value: "",
        error: ""
    });
    // const MapWithNoSSR = dynamic(() => import("@/components/ui/map"), {
    // 	ssr: false,
    // });
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        switch(name){
            case "city":
                setCity({
                    error: "",
                    value
                });
                break;
            case "addressTitle":
                setAddressTitle({
                    error: "",
                    value
                });
                break;
            case "phone":
                const re = /^[0-9\b]+$/;
                if (value === "" || re.test(value)) {
                    setPhone({
                        error: "",
                        value
                    });
                }
                break;
            case "address":
                setAddress({
                    error: "",
                    value
                });
                break;
            default:
                break;
        }
    };
    const [setCompeletProfile] = (0,_app_services_apiSlice__WEBPACK_IMPORTED_MODULE_5__/* .useCompleteProfileMutation */ .eP)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const handleClick = async (e)=>{
        e.preventDefault();
        // const addressReq = `${addressTitle.value}, ${city.value}, ${address.value}`;
        // console.log( addressReq, "adresss", user.address)
        const data = {
            address: address.value,
            postal_code: addressTitle.value,
            name: user.f_name + `${user.l_name && user.l_name !== "" ? user.l_name : ""}`,
            phone: phone.value,
            city: city.value,
            meli_code: "0023201194",
            lat: "36.324532",
            lng: "45.7236432",
            id: Date.now() * 1
        };
        if (user.address) {
            addAddress(data).unwrap().then((res)=>{
                console.log(res);
                // await setCompeletProfile( {...user, address: res.data});
                dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_7__/* .setCredentials */ .Dj)({
                    ...user,
                    address: res.data
                }));
            }).catch((er)=>console.log(er));
        }
        // else {
        // 	// setCompeletProfile({...user, address:  data})
        // 	await addAddress(data).unwrap().then(res=>{
        // 		console.log(res,'prof');
        // 		dispatch(setCredentials({...user, address: res.data}))
        // 	});
        // console.log(addAddress)
        // }
        handleModal();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_components_add_address_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_personal_info_form_input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                id: "city",
                name: "city",
                type: "text",
                value: city.value,
                handleChange: handleChange,
                error: city.error,
                label: "شهر"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_personal_info_form_input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                id: "addressTitle",
                name: "addressTitle",
                type: "text",
                value: addressTitle.value,
                handleChange: handleChange,
                error: addressTitle.error,
                label: "کد پستی"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_personal_info_form_input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                id: "phone",
                name: "phone",
                type: "text",
                value: phone.value,
                handleChange: handleChange,
                error: phone.error,
                label: "تلفن ثابت | موبایل"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_components_add_address_module_scss__WEBPACK_IMPORTED_MODULE_8___default().address),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "address",
                        children: "آدرس کامل"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        id: "address",
                        name: "address",
                        onChange: handleChange,
                        value: address.value,
                        cols: 13,
                        rows: 7,
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    order: "8"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    type: "button",
                    variant: "primary",
                    handleClick: handleClick,
                    rounded: true,
                    children: "ثبت آدرس"
                })
            })
        ]
    });
};


/***/ })

};
;