"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 5304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: external "redux-persist/integration/react"
const react_namespaceObject = require("redux-persist/integration/react");
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: external "@reduxjs/toolkit/query"
const query_namespaceObject = require("@reduxjs/toolkit/query");
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
// EXTERNAL MODULE: ./features/cart/cartSlice.js + 1 modules
var cartSlice = __webpack_require__(6098);
// EXTERNAL MODULE: ./features/auth/authSlice.js
var authSlice = __webpack_require__(3066);
;// CONCATENATED MODULE: ./features/notification/notificationSlice.js

const initialState = {
    hidden: true,
    status: null,
    message: ""
};
const notificationSlice = (0,toolkit_.createSlice)({
    name: "notification",
    initialState,
    reducers: {
        showNotification: (state, action)=>{
            state.hidden = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
        },
        hideNotification: (state)=>{
            state.hidden = true;
            state.status = null;
            state.message = "";
        }
    }
});
// Action creators are generated for each case reducer function
const { showNotification , hideNotification  } = notificationSlice.actions;
const selectHidden = (state)=>state.notification.hidden;
const selectStatus = (state)=>state.notification.status;
const selectMessage = (state)=>state.notification.message;
/* harmony default export */ const notification_notificationSlice = (notificationSlice.reducer);

// EXTERNAL MODULE: ./app/services/apiSlice.js
var apiSlice = __webpack_require__(6558);
// EXTERNAL MODULE: ./app/services/shopApi.js
var shopApi = __webpack_require__(2655);
;// CONCATENATED MODULE: ./app/store.js










const persistConfig = {
    key: "root",
    version: 1,
    storage: (storage_default()),
    blacklist: [
        apiSlice/* apiSlice.reducerPath */.gk.reducerPath
    ]
};
const reducers = (0,external_redux_namespaceObject.combineReducers)({
    cart: cartSlice/* default */.ZP,
    auth: authSlice/* default */.ZP,
    notification: notification_notificationSlice,
    [apiSlice/* apiSlice.reducerPath */.gk.reducerPath]: apiSlice/* apiSlice.reducer */.gk.reducer,
    [shopApi/* shopApi.reducerPath */.J.reducerPath]: shopApi/* shopApi.reducer */.J.reducer
});
const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, reducers);
const store = (0,toolkit_.configureStore)({
    reducer: persistedReducer,
    devTools: "production" !== "production",
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    external_redux_persist_namespaceObject.FLUSH,
                    external_redux_persist_namespaceObject.REHYDRATE,
                    external_redux_persist_namespaceObject.PAUSE,
                    external_redux_persist_namespaceObject.PERSIST,
                    external_redux_persist_namespaceObject.PURGE,
                    external_redux_persist_namespaceObject.REGISTER
                ]
            }
        }).concat(apiSlice/* apiSlice.middleware */.gk.middleware).concat(shopApi/* shopApi.middleware */.J.middleware)
});
(0,query_namespaceObject.setupListeners)(store.dispatch);

;// CONCATENATED MODULE: ./pages/_app.js











let persistor = (0,external_redux_persist_namespaceObject.persistStore)(store);
function MyApp({ Component , pageProps  }) {
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        const handleStart = ()=>{
            external_nprogress_default().start();
        };
        const handleStop = ()=>{
            external_nprogress_default().done();
        };
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleStop);
        router.events.on("routeChangeError", handleStop);
        return ()=>{
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleStop);
            router.events.off("routeChangeError", handleStop);
        };
    }, [
        router
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "بازارچه خشکبار طارونه"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "enamad",
                        content: "248475"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
                store: store,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.PersistGate, {
                    loading: null,
                    persistor: persistor,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4335:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [739], () => (__webpack_exec__(5304)));
module.exports = __webpack_exports__;

})();