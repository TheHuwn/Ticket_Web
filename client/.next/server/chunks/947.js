exports.id = 947;
exports.ids = [947];
exports.modules = {

/***/ 995:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import axios from 'axios';
// axios.defaults.withCredentials = true;
// const buildClient = ({ req }) => {
//   if (typeof window === 'undefined') {
//     // server
//     return axios.create({
//       headers: req.headers, // cookie and host from the request from browser
//       baseURL:
//         'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
//       withCredentials: true,
//     });
//   } else {
//     //  browser
//     return axios.create({
//       baseURL: '/',
//       withCredentials: true,
//     });
//   }
// };
// export default buildClient;

axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.withCredentials = true;
const buildClient = ({ req })=>{
    if (true) {
        // server
        return axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
            headers: {
                ...req.headers,
                Host: "ticketing.dev"
            },
            baseURL: "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
            withCredentials: true
        });
    } else {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildClient);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ header)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/AppBar"
var AppBar_ = __webpack_require__(3882);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Toolbar"
var Toolbar_ = __webpack_require__(1431);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Menu"
var Menu_ = __webpack_require__(8125);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var icons_material_Menu_ = __webpack_require__(3365);
var icons_material_Menu_default = /*#__PURE__*/__webpack_require__.n(icons_material_Menu_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(7229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/icons-material/Adb"
var Adb_ = __webpack_require__(5848);
var Adb_default = /*#__PURE__*/__webpack_require__.n(Adb_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/InputBase"
var InputBase_ = __webpack_require__(8855);
var InputBase_default = /*#__PURE__*/__webpack_require__.n(InputBase_);
// EXTERNAL MODULE: external "@mui/icons-material/Search"
var Search_ = __webpack_require__(8017);
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/icons-material/LockOutlined"
var LockOutlined_ = __webpack_require__(399);
// EXTERNAL MODULE: external "@mui/icons-material/AccountCircle"
var AccountCircle_ = __webpack_require__(1883);
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@mui/material/Alert"
var Alert_ = __webpack_require__(3765);
var Alert_default = /*#__PURE__*/__webpack_require__.n(Alert_);
// EXTERNAL MODULE: external "@mui/material/AlertTitle"
var AlertTitle_ = __webpack_require__(5992);
var AlertTitle_default = /*#__PURE__*/__webpack_require__.n(AlertTitle_);
;// CONCATENATED MODULE: ./components/alert.jsx




const MyAlert = ({ severity, title, message })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "alert",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Alert_default()), {
            severity: severity,
            children: [
                title && /*#__PURE__*/ jsx_runtime.jsx((AlertTitle_default()), {
                    style: {
                        fontWeight: 800,
                        textTransform: "uppercase"
                    },
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    style: {
                        fontWeight: 900,
                        textTransform: "capitalize"
                    },
                    children: message
                })
            ]
        })
    });
};
/* harmony default export */ const components_alert = (MyAlert);

;// CONCATENATED MODULE: ./components/header.jsx























const Header = ({ currentUser })=>{
    const [anchorElNav, setAnchorElNav] = external_react_.useState(null);
    const [anchorElUser, setAnchorElUser] = external_react_.useState(null);
    const { showAlert, alertInfo } = (0,external_react_redux_.useSelector)((state)=>state.alert);
    const handleOpenNavMenu = (event)=>{
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event)=>{
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = ()=>{
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = ()=>{
        setAnchorElUser(null);
    };
    const settings = [
        {
            label: "Profile",
            href: "https://ticketing.dev/settings/me"
        },
        {
            label: "Sign Out",
            href: "https://ticketing.dev/auth/signout"
        }
    ].filter((link)=>link).map(({ label, href })=>{
        return /*#__PURE__*/ jsx_runtime.jsx(material_.Link, {
            href: href,
            className: "nav-link",
            children: label
        });
    });
    const links = [
        !currentUser && {
            label: "Sign Up",
            href: "https://ticketing.dev/auth/signup"
        },
        !currentUser && {
            label: "Sign In",
            href: "https://ticketing.dev/auth/signin"
        },
        currentUser && {
            label: "My Orders",
            href: "https://ticketing.dev/orders"
        },
        currentUser && {
            label: "Sell Tickets",
            href: "https://ticketing.dev/tickets/new"
        }
    ].filter((link)=>link).map(({ label, href })=>{
        return /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
            textAlign: "center",
            children: /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx(material_.Link, {
                    href: href,
                    className: "nav-link",
                    children: label
                })
            })
        });
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((AppBar_default()), {
        position: "static",
        children: [
            showAlert && /*#__PURE__*/ jsx_runtime.jsx(components_alert, {
                severity: alertInfo.severity,
                title: alertInfo.title,
                message: alertInfo.message
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Container_default()), {
                maxWidth: "xl",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Toolbar_default()), {
                    disableGutters: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((Adb_default()), {
                            sx: {
                                display: {
                                    xs: "none",
                                    md: "flex"
                                },
                                mr: 1
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                            variant: "h6",
                            noWrap: true,
                            component: "a",
                            href: "/",
                            sx: {
                                mr: 2,
                                display: {
                                    xs: "none",
                                    md: "flex"
                                },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none"
                            },
                            children: "TicketHub"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
                            sx: {
                                flexGrow: 1,
                                display: {
                                    xs: "flex",
                                    md: "none"
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                                    size: "large",
                                    "aria-label": "account of current user",
                                    "aria-controls": "menu-appbar",
                                    "aria-haspopup": "true",
                                    onClick: handleOpenNavMenu,
                                    color: "inherit",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((icons_material_Menu_default()), {})
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Menu_default()), {
                                    id: "menu-appbar",
                                    anchorEl: anchorElNav,
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "left"
                                    },
                                    keepMounted: true,
                                    transformOrigin: {
                                        vertical: "top",
                                        horizontal: "left"
                                    },
                                    open: Boolean(anchorElNav),
                                    onClose: handleCloseNavMenu,
                                    sx: {
                                        display: {
                                            xs: "block",
                                            md: "none"
                                        }
                                    },
                                    children: links.map((page)=>/*#__PURE__*/ jsx_runtime.jsx((MenuItem_default()), {
                                            onClick: handleCloseNavMenu,
                                            sx: {
                                                display: "flex",
                                                alignItems: "center"
                                            },
                                            children: page
                                        }, page))
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((Adb_default()), {
                            sx: {
                                display: {
                                    xs: "flex",
                                    md: "none"
                                },
                                mr: 1
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                            variant: "h5",
                            noWrap: true,
                            component: "a",
                            href: "#app-bar-with-responsive-menu",
                            sx: {
                                mr: 2,
                                display: {
                                    xs: "flex",
                                    md: "none"
                                },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none"
                            },
                            children: "GitTix"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                            sx: {
                                flexGrow: 1,
                                display: {
                                    xs: "none",
                                    md: "flex"
                                }
                            },
                            children: links.map((page)=>/*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                                    onClick: handleCloseNavMenu,
                                    sx: {
                                        my: 2,
                                        color: "white",
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: page
                                }, page))
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Search, {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(SearchIconWrapper, {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Search_default()), {})
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(StyledInputBase, {
                                    placeholder: "Search…",
                                    inputProps: {
                                        "aria-label": "search"
                                    }
                                })
                            ]
                        }),
                        currentUser && /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
                            sx: {
                                flexGrow: 0,
                                marginLeft: "10px"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((Tooltip_default()), {
                                    title: "Open settings",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                                        onClick: handleOpenUserMenu,
                                        sx: {
                                            p: 0
                                        },
                                        children: /*#__PURE__*/ jsx_runtime.jsx((Avatar_default()), {
                                            alt: `${currentUser.name}`,
                                            src: `${currentUser.photo}`
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Menu_default()), {
                                    sx: {
                                        mt: "45px"
                                    },
                                    id: "menu-appbar",
                                    anchorEl: anchorElUser,
                                    anchorOrigin: {
                                        vertical: "top",
                                        horizontal: "right"
                                    },
                                    keepMounted: true,
                                    transformOrigin: {
                                        vertical: "top",
                                        horizontal: "right"
                                    },
                                    open: Boolean(anchorElUser),
                                    onClose: handleCloseUserMenu,
                                    children: settings.map((setting)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((MenuItem_default()), {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center"
                                            },
                                            onClick: handleCloseUserMenu,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                                    marginRight: "5px",
                                                    color: "#0020ac",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((AccountCircle_default()), {
                                                        color: "#0020ac"
                                                    })
                                                }),
                                                setting
                                            ]
                                        }, setting))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const header = (Header);
const Search = (0,styles_.styled)("div")(({ theme })=>({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: (0,styles_.alpha)(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: (0,styles_.alpha)(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto"
        }
    }));
const SearchIconWrapper = (0,styles_.styled)("div")(({ theme })=>({
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }));
const StyledInputBase = (0,styles_.styled)((InputBase_default()))(({ theme })=>({
        color: "inherit",
        "& .MuiInputBase-input": {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                width: "12ch",
                "&:focus": {
                    width: "20ch"
                }
            }
        }
    }));


/***/ }),

/***/ 6004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5931);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4595);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(995);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4191);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1610);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_build_client__WEBPACK_IMPORTED_MODULE_4__]);
_api_build_client__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// import 'mdb-react-ui-kit/dist/css/mdb.min.css';






const AppComponent = ({ Component, pageProps, currentUser })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {
            store: _redux_store__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    currentUser: currentUser
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    currentUser: currentUser,
                    ...pageProps
                })
            ]
        })
    });
};
AppComponent.getInitialProps = async (appContext)=>{
    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(appContext.ctx);
    const { data } = await client.get("/api/users/currentuser");
    let pageProps = {};
    if (appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx, client);
    }
    return {
        pageProps,
        ...data
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


//A custom Document can update the <html> and <body> tags used to render a Page,
// To override the default Document
function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
                    rel: "stylesheet"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 5363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sm: () => (/* binding */ setAlertInfo),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   jY: () => (/* binding */ setShowAlert)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
// alertSlice.js

const alertSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "alert",
    initialState: {
        showAlert: false,
        alertInfo: {
            severity: "",
            title: "",
            message: ""
        }
    },
    reducers: {
        setShowAlert: (state, action)=>{
            state.showAlert = action.payload;
        },
        setAlertInfo: (state, action)=>{
            state.alertInfo = action.payload;
        }
    }
});
const { setShowAlert, setAlertInfo } = alertSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (alertSlice.reducer);


/***/ }),

/***/ 1610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ redux_store)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: ./redux/alertSlice.js
var alertSlice = __webpack_require__(5363);
;// CONCATENATED MODULE: ./redux/rootReducer.js
// rootReducer.js


const rootReducer = (0,external_redux_.combineReducers)({
    alert: alertSlice/* default */.ZP
});
/* harmony default export */ const redux_rootReducer = (rootReducer);

;// CONCATENATED MODULE: ./redux/store.js
// store.js


const store = (0,toolkit_.configureStore)({
    reducer: redux_rootReducer
});
/* harmony default export */ const redux_store = (store);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;