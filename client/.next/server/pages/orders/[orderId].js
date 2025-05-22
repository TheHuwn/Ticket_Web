"use strict";
(() => {
var exports = {};
exports.id = 349;
exports.ids = [349];
exports.modules = {

/***/ 782:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5244);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7182);
/* harmony import */ var private_next_pages_document_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6088);
/* harmony import */ var private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6004);
/* harmony import */ var private_next_pages_orders_orderId_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2692);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_orders_orderId_jsx__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_orders_orderId_jsx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_orders_orderId_jsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_orders_orderId_jsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_orders_orderId_jsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_orders_orderId_jsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_orders_orderId_jsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_orders_orderId_jsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_orders_orderId_jsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_orders_orderId_jsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_orders_orderId_jsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_orders_orderId_jsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_orders_orderId_jsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/orders/[orderId]",
        pathname: "/orders/[orderId]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: private_next_pages_document_js__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    userland: private_next_pages_orders_orderId_jsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 673:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ PayPalCheckout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2929);
/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7057);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_alertSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5363);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__]);
_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const PayPalCheckout = ({ ticketId, ticketPrice, orderId })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const [paypalId, setPaypalId] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const createOrder = async ()=>{
        return fetch("/api/payments/create-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                price: ticketPrice
            })
        }).then((response)=>response.json()).then((data)=>{
            return data.id;
        });
    };
    const onApprove = async (data)=>{
        // TODO: if the order is already completed, it cant be selled again!!!
        try {
            await fetch(`/api/payments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    orderId,
                    paypalId: data.orderID
                })
            });
        } catch (error) {
            console.log(error);
            return;
        }
        return fetch(`/api/payments/${data.orderID}/capture`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response)=>response.json()).then(async (orderData)=>{
            dispatch((0,_redux_alertSlice__WEBPACK_IMPORTED_MODULE_5__/* .setAlertInfo */ .Sm)({
                severity: "success",
                message: `Payment completed successfully by ${orderData.payer.name.given_name} paypal account`
            }));
            dispatch((0,_redux_alertSlice__WEBPACK_IMPORTED_MODULE_5__/* .setShowAlert */ .jY)(true));
            setTimeout(()=>{
                dispatch((0,_redux_alertSlice__WEBPACK_IMPORTED_MODULE_5__/* .setShowAlert */ .jY)(false));
            }, 3000);
        });
    };
    const onError = (err)=>{
        dispatch((0,_redux_alertSlice__WEBPACK_IMPORTED_MODULE_5__/* .setAlertInfo */ .Sm)({
            severity: "error",
            message: `Error occurred`
        }));
        dispatch((0,_redux_alertSlice__WEBPACK_IMPORTED_MODULE_5__/* .setShowAlert */ .jY)(true));
        setTimeout(()=>{
            dispatch((0,_redux_alertSlice__WEBPACK_IMPORTED_MODULE_5__/* .setShowAlert */ .jY)(false));
        }, 3000);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalScriptProvider, {
            options: {
                "client-id": "AeLsvT4Y9JSyIx30EXCjhkCHG6gPcDAbmfEmv3MOGps5uwOtwAf6770dO9BNmBTRwE3gy2zGSY9Aei5R",
                currency: "USD",
                intent: "capture"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalButtons, {
                forceReRender: [
                    ticketId
                ],
                // disabled={disabled || disabledButtons}
                // style={{ layout: 'vertical' }}
                createOrder: createOrder,
                onApprove: onApprove,
                onError: onError
            })
        }, `${ticketId}`)
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2692:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PaypalCheckout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(673);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_PaypalCheckout__WEBPACK_IMPORTED_MODULE_3__]);
_components_PaypalCheckout__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const OrderShow = ({ order })=>{
    const [timeLeft, setTimeLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getTimeLeft = ()=>{
            const timeLeft = new Date(order.expiresAt) - new Date();
            setTimeLeft(Math.round(timeLeft / 1000));
        };
        getTimeLeft();
        const timerId = setInterval(getTimeLeft, 1000);
        return ()=>{
            clearInterval(timerId);
        };
    }, [
        order
    ]);
    if (timeLeft < 0) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "h5",
            textAlign: "center",
            marginTop: "50px",
            color: "#1976d2",
            under: true,
            sx: {
                textDecoration: "underline"
            },
            children: "Order Expired"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "h4",
                textAlign: "center",
                marginTop: "50px",
                color: "cornflowerblue",
                under: true,
                sx: {
                    textDecoration: "underline"
                },
                children: "Order Details"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
                sx: {
                    width: "500px",
                    marginTop: "80px"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        textAlign: "center",
                        marginBottom: "40px",
                        fontSize: "large",
                        fontWeight: "600",
                        color: "#495057",
                        children: [
                            "\uD83D\uDED1 Time left to pay: ",
                            timeLeft,
                            " seconds"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PaypalCheckout__WEBPACK_IMPORTED_MODULE_3__/* .PayPalCheckout */ .v, {
                        orderId: order.id,
                        ticketId: order.ticket.id,
                        ticketPrice: order.ticket.price
                    })
                ]
            })
        ]
    });
};
OrderShow.getInitialProps = async (context, client)=>{
    // has access to the request comming from browser
    const { orderId } = context.query;
    const { data } = await client.get(`/api/orders/${orderId}`);
    return {
        order: data.order
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderShow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1883:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AccountCircle");

/***/ }),

/***/ 5848:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Adb");

/***/ }),

/***/ 399:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LockOutlined");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 8017:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3765:
/***/ ((module) => {

module.exports = require("@mui/material/Alert");

/***/ }),

/***/ 5992:
/***/ ((module) => {

module.exports = require("@mui/material/AlertTitle");

/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 4475:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 8855:
/***/ ((module) => {

module.exports = require("@mui/material/InputBase");

/***/ }),

/***/ 8125:
/***/ ((module) => {

module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 1431:
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 7229:
/***/ ((module) => {

module.exports = require("@mui/material/Tooltip");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 2929:
/***/ ((module) => {

module.exports = require("@paypal/react-paypal-js");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [768,947,57], () => (__webpack_exec__(782)));
module.exports = __webpack_exports__;

})();