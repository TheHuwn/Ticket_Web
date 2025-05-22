"use strict";
exports.id = 57;
exports.ids = [57];
exports.modules = {

/***/ 7057:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useRequest = ({ method, url, body, onSuccess })=>{
    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const doRequest = async ()=>{
        setErrors(null);
        try {
            const Response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"][method](url, body);
            if (onSuccess) {
                onSuccess(Response.data);
            }
            return Response.data;
        } catch (error) {
            setErrors(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                severity: "error",
                sx: {
                    margin: "15px 0px"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.AlertTitle, {
                        children: "Ooopps..."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "my-0",
                        children: error.response.data.errors.map((error)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: error.message
                            }, error.message))
                    })
                ]
            }));
        }
    };
    return {
        doRequest,
        errors
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRequest);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;