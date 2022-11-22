(() => {
var exports = {};
exports.id = 4359;
exports.ids = [4359];
exports.modules = {

/***/ 1793:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "spinner_container__L6MLd",
	"rotate360": "spinner_rotate360__kFbhl",
	"moveInBottom": "spinner_moveInBottom__G0_y_",
	"moveInLeft": "spinner_moveInLeft__2mjMy",
	"moveInRight": "spinner_moveInRight__exNWr",
	"animateBasket": "spinner_animateBasket__8s6da"
};


/***/ }),

/***/ 2154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_spinner_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1793);
/* harmony import */ var _styles_components_spinner_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_spinner_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



function Spinner({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_styles_components_spinner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container), [
            className
        ])
    });
};


/***/ }),

/***/ 8620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PersonalInfoPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout/layout.jsx + 27 modules
var layout = __webpack_require__(2767);
// EXTERNAL MODULE: ./components/profile/sidebar.jsx + 2 modules
var sidebar = __webpack_require__(7305);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./features/auth/authSlice.js
var authSlice = __webpack_require__(3066);
// EXTERNAL MODULE: ./components/profile/personal-info/form-input.jsx + 1 modules
var form_input = __webpack_require__(5859);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./styles/components/personal-info.module.scss
var personal_info_module = __webpack_require__(9040);
var personal_info_module_default = /*#__PURE__*/__webpack_require__.n(personal_info_module);
// EXTERNAL MODULE: ./helpers/imageLoader.js
var imageLoader = __webpack_require__(909);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(2500);
// EXTERNAL MODULE: ./components/ui/spinner.jsx
var spinner = __webpack_require__(2154);
;// CONCATENATED MODULE: ./components/profile/personal-info/avatar-upload.jsx









function AvatarUpload({ src , id , onUpload ,  }) {
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: image , 1: setImage  } = (0,external_react_.useState)(null);
    const user = (0,external_react_redux_.useSelector)((state)=>state.auth.user);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const handleUploadImage = async (e)=>{
        const file = e.target.files[0];
        // console.log(file,'file')
        if (file) {
            try {
                setLoading(true);
                const formdata = new FormData();
                formdata.append("file", file);
                formdata.append("phone", user.phone);
                const result = await fetch(`${config/* API_URL */.T}/api/panel/upload_photo`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${user.token}`
                    },
                    body: formdata
                });
                const data = await result.json();
                onUpload(data.file);
                setImage(data.file);
                setLoading(false);
                if (data.success) {
                    dispatch((0,authSlice/* setCredentials */.Dj)({
                        ...user,
                        photo: data.file
                    }));
                }
            // console.log(data);
            } catch (error) {
                setTimeout(()=>setLoading(false), 200);
                console.log(error);
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (personal_info_module_default()).avatar_upload,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (personal_info_module_default()).avatar_preview,
                children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(spinner/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    loader: imageLoader/* default */.Z,
                    src: user?.photo ? `/storage/${user?.photo}` : `/storage/${id}/${src}`,
                    alt: "avatar",
                    width: 155,
                    height: 155,
                    placeholder: "blur",
                    blurDataURL: user?.photo ? `/storage/${user?.photo}` : `/storage/${id}/${src}`
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "upload",
                        children: "ویرایش عکس پروفایل"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "file",
                        id: "upload",
                        onChange: handleUploadImage
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/ui/button.jsx + 2 modules
var ui_button = __webpack_require__(1404);
// EXTERNAL MODULE: ./app/services/apiSlice.js
var apiSlice = __webpack_require__(6558);
// EXTERNAL MODULE: ./components/ui/notification.jsx
var ui_notification = __webpack_require__(5214);
;// CONCATENATED MODULE: ./components/profile/personal-info/user-info.jsx










function UserInfo() {
    const { 0: notification , 1: setNotification  } = (0,external_react_.useState)({
        show: false,
        status: null,
        message: ""
    });
    const { 0: firstName , 1: setFirstName  } = (0,external_react_.useState)({
        value: "",
        error: ""
    });
    const { 0: lastName , 1: setLastName  } = (0,external_react_.useState)({
        value: "",
        error: ""
    });
    const { 0: phone , 1: setPhone  } = (0,external_react_.useState)({
        value: "",
        error: ""
    });
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)({
        value: "",
        error: ""
    });
    const { 0: telephone , 1: setTelephone  } = (0,external_react_.useState)({
        value: "",
        error: ""
    });
    const { 0: avatar , 1: setAvatar  } = (0,external_react_.useState)({
        value: "",
        error: ""
    });
    const [completeProfile, { isLoading: isLoading3  }] = (0,apiSlice/* useCompleteProfileMutation */.eP)();
    const { 0: gender , 1: setGender  } = (0,external_react_.useState)(null);
    const user = (0,external_react_redux_.useSelector)(authSlice/* selectUser */.dy);
    const setUserData = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        setFirstName({
            error: "",
            value: user?.f_name || ""
        });
        setLastName({
            error: "",
            value: user?.l_name || ""
        });
        setPhone({
            error: "",
            value: user?.phone || ""
        });
        setEmail({
            error: "",
            value: user?.email || ""
        });
        setTelephone({
            error: "",
            value: user?.telephone || ""
        });
        setAvatar({
            error: "",
            value: user?.photos?.length > 0 && user?.photos[0] || "avatar.png"
        });
    }, [
        user
    ]);
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        const re = /^[0-9\b]+$/;
        switch(name){
            case "firstName":
                setFirstName({
                    error: "",
                    value
                });
                break;
            case "lastName":
                setLastName({
                    error: "",
                    value
                });
                break;
            case "phone":
                if (value === "" || re.test(value)) {
                    setPhone({
                        error: "",
                        value
                    });
                    return;
                }
                break;
            case "email":
                setEmail({
                    error: "",
                    value
                });
                break;
            case "telephone":
                if (value === "" || re.test(value)) {
                    setTelephone({
                        error: "",
                        value
                    });
                    return;
                }
                break;
            case "gender":
                setGender(value);
                break;
            default:
                break;
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // TODO: Update profile avatar and user info
        try {
            const registerData = await completeProfile({
                f_name: firstName.value,
                l_name: lastName.value,
                email: email.value,
                telephone: telephone.value,
                phone: user.phone,
                photos: [
                    avatar.value
                ],
                gender
            }).unwrap();
            // setUserData(setCredentials(registerData.user, ))
            // console.log(registerData, 'dds')
            setNotification({
                show: true,
                status: "success",
                message: "تغییرات با موفقیت ثبت شد"
            });
            setTimeout(()=>{
                setNotification({
                    show: false,
                    status: null,
                    message: ""
                });
            }, 3000);
        } catch (error) {
            console.log(error);
            setNotification({
                show: true,
                status: "error",
                message: "تغییرات  ثبت نشد"
            });
        }
        setTimeout(()=>{
            setNotification({
                show: false,
                status: null,
                message: ""
            });
        }, 3000);
    };
    // console.log(user)
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (personal_info_module_default()).user_info,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(AvatarUpload, {
                id: user?._id,
                src: avatar.value,
                onUpload: (filename)=>setAvatar({
                        ...avatar,
                        value: filename
                    })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(form_input/* default */.Z, {
                id: "firstName",
                name: "firstName",
                type: "text",
                value: firstName.value,
                handleChange: handleChange,
                error: firstName.error,
                label: "نام"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(form_input/* default */.Z, {
                id: "phone",
                name: "phone",
                type: "text",
                value: phone.value,
                handleChange: handleChange,
                error: phone.error,
                label: "شماره موبایل",
                style: {
                    textAlign: "end"
                },
                isVerified: true,
                disabled: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(form_input/* default */.Z, {
                id: "lastName",
                name: "lastName",
                type: "text",
                value: lastName.value,
                handleChange: handleChange,
                error: lastName.error,
                label: "نام خانوادگی"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(form_input/* default */.Z, {
                id: "email",
                name: "email",
                type: "email",
                value: email.value,
                handleChange: handleChange,
                error: email.error,
                label: "ایمیل",
                style: {
                    textAlign: "end"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(form_input/* default */.Z, {
                id: "telephone",
                name: "telephone",
                type: "text",
                value: telephone.value,
                handleChange: handleChange,
                error: telephone.error,
                label: "تلفن ثابت (با کد شهر)"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (personal_info_module_default()).gender,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "جنسیت: ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "(اختیاری)"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "radio",
                        name: "gender",
                        id: "male",
                        className: (personal_info_module_default()).radio,
                        onChange: handleChange,
                        value: "1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "male",
                        className: (personal_info_module_default()).custom_radio,
                        children: "آقا"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "radio",
                        name: "gender",
                        id: "female",
                        className: (personal_info_module_default()).radio,
                        onChange: handleChange,
                        value: "2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "female",
                        className: (personal_info_module_default()).custom_radio,
                        children: "خانم"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                variant: "primary",
                handleClick: handleSubmit,
                rounded: true,
                children: "ذخیره تغییرات"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ui_notification/* default */.Z, {
                ...notification
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/profile/personal-info/change-password.jsx





function ChangePassword() {
    const { 0: oldPassword , 1: setOldPassword  } = (0,external_react_.useState)({
        value: "",
        error: ""
    });
    const { 0: password , 1: setPassword  } = (0,external_react_.useState)({
        value: "",
        error: ""
    });
    const { 0: confirmPassword , 1: setConfirmPassword  } = (0,external_react_.useState)({
        value: "",
        error: ""
    });
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        switch(name){
            case "oldPassword":
                setOldPassword({
                    error: "",
                    value
                });
                break;
            case "password":
                setPassword({
                    error: "",
                    value
                });
                break;
            case "confirmPassword":
                setConfirmPassword({
                    error: "",
                    value
                });
                break;
            default:
                break;
        }
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (password.value !== confirmPassword.value) {
            setConfirmPassword((prevState)=>({
                    ...prevState,
                    error: "Confirm Password does not match to Password!!!"
                }));
            return;
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (personal_info_module_default()).change_password,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(form_input/* default */.Z, {
                    id: "oldPassword",
                    name: "oldPassword",
                    type: "password",
                    value: oldPassword.value,
                    handleChange: handleChange,
                    label: "کلمه عبور فعلی",
                    required: true
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(form_input/* default */.Z, {
                    id: "password",
                    name: "password",
                    type: "password",
                    value: password.value,
                    handleChange: handleChange,
                    label: "کلمه عبور جدید",
                    required: true
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(form_input/* default */.Z, {
                    id: "confirmPassword",
                    name: "confirmPassword",
                    type: "password",
                    value: confirmPassword.value,
                    handleChange: handleChange,
                    label: "تکرار کلمه عبور جدید",
                    error: confirmPassword.error,
                    required: true
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                    type: "submit",
                    variant: "primary",
                    rounded: true,
                    children: "تغییر رمز عبور"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/profile/personal-info/personal-info.jsx







function PersonalInfo() {
    const { 0: activeTab , 1: setActiveTab  } = (0,external_react_.useState)(1);
    const { 0: position , 1: setPosition  } = (0,external_react_.useState)("42px");
    const user = (0,external_react_redux_.useSelector)(authSlice/* selectUser */.dy);
    const handleClickTab = (idx)=>{
        setActiveTab(idx);
        if (idx === 1) {
            setPosition("42px");
        } else if (idx === 2) {
            setPosition("194px");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (personal_info_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (personal_info_module_default()).header,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        onClick: ()=>handleClickTab(1),
                        className: `${activeTab === 1 ? (personal_info_module_default()).active : ""}`,
                        children: "اطلاعات کاربری"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        onClick: ()=>handleClickTab(2),
                        className: `${activeTab === 2 ? (personal_info_module_default()).active : ""}`,
                        children: "تغییر رمز عبور"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (personal_info_module_default()).active_line,
                        style: {
                            right: position
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (personal_info_module_default()).body,
                children: [
                    activeTab === 1 && /*#__PURE__*/ jsx_runtime_.jsx(UserInfo, {
                        user: user
                    }),
                    activeTab === 2 && /*#__PURE__*/ jsx_runtime_.jsx(ChangePassword, {})
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./styles/components/profile.module.scss
var profile_module = __webpack_require__(6591);
var profile_module_default = /*#__PURE__*/__webpack_require__.n(profile_module);
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(4802);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);
;// CONCATENATED MODULE: ./pages/profile/personal-info.js







function PersonalInfoPage() {
    return /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        hasHeader: true,
        hasDescription: true,
        hasKeywords: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: (profile_module_default()).section,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (profile_module_default()).container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(sidebar/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: (profile_module_default()).main,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(PersonalInfo, {})
                    })
                ]
            })
        })
    });
};
async function getServerSideProps(context) {
    const { req  } = context;
    if (req.headers.cookie) {
        const { token  } = external_cookie_default().parse(req.headers.cookie);
        const backendRes = await fetch(`${config/* API_URL */.T}/api/user_details`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await backendRes.json();
        if (backendRes.ok) {
            return {
                props: {
                    user: data
                }
            };
        }
    }
    return {
        redirect: {
            destination: "/login",
            permanent: false
        }
    };
}


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4335:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 4802:
/***/ ((module) => {

"use strict";
module.exports = require("cookie");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,739,2767,7305,5859], () => (__webpack_exec__(8620)));
module.exports = __webpack_exports__;

})();