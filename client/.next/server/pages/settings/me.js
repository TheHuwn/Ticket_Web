"use strict";
(() => {
var exports = {};
exports.id = 927;
exports.ids = [927];
exports.modules = {

/***/ 2053:
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
/* harmony import */ var private_next_pages_settings_me_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2231);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_settings_me_jsx__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_settings_me_jsx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_me_jsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_me_jsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_me_jsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_me_jsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_me_jsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_me_jsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_me_jsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_me_jsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_me_jsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_me_jsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_me_jsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/settings/me",
        pathname: "/settings/me",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: private_next_pages_document_js__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    userland: private_next_pages_settings_me_jsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2231:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7248);
/* harmony import */ var _mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7057);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6902);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3281);
/* harmony import */ var _mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5631);
/* harmony import */ var _mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7666);
/* harmony import */ var _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_alertSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5363);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_request__WEBPACK_IMPORTED_MODULE_5__]);
_hooks_use_request__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const PersonalProfile = ({ currentUser })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [newName, setNewName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [newEmail, setNewEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [newPhone, setNewPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [newJobTitle, setNewJob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [photo, setPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [currentPassword, setCurrentPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [newPassword, setNewPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [confirmNewPassword, setConfirmNewPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [editDialogOpen, setEditDialogOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [editPassDialogOpen, setEditPassDialogOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    let bodyFormData = new FormData();
    if (!currentUser) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
        margin: 10,
        textAlign: "center",
        children: "Not Authorized!"
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setNewEmail(currentUser.email);
        setNewJob(currentUser.jobTitle);
        setNewName(currentUser.name);
        setNewPhone(currentUser.phone);
    }, []);
    const { errors: updateCurrentUserErrors, doRequest: doUpdateMyData } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        method: "patch",
        url: "/api/users/update-current-user",
        body: bodyFormData,
        // onSuccess: () => {
        //   dispatch(
        //     setAlertInfo({
        //       severity: 'success',
        //       message: 'Your Data has been Changed successfully 🫡',
        //     })
        //   );
        //   dispatch(setShowAlert(true));
        //   setTimeout(() => {
        //     dispatch(setShowAlert(false));
        //     router.reload();
        //   }, 3000);
        // },
        // onSuccess: async () => {
        //   // Gọi lại API lấy user mới
        //   const res = await fetch("/api/users/currentuser");
        //   const data = await res.json();
        //   // Cập nhật lại state với user mới
        //   setNewEmail(data.currentUser.email);
        //   setNewJob(data.currentUser.jobTitle);
        //   setNewName(data.currentUser.name);
        //   setNewPhone(data.currentUser.phone);
        //   setPhoto(data.currentUser.photo);
        //   // Hiển thị alert như cũ
        //   dispatch(
        //     setAlertInfo({
        //       severity: "success",
        //       message: "Your Data has been Changed successfully 🫡",
        //     })
        //   );
        //   dispatch(setShowAlert(true));
        //   setTimeout(() => {
        //     dispatch(setShowAlert(false));
        //     setEditDialogOpen(false);
        //   }, 2000);
        // },
        onSuccess: async ()=>{
            const res = await fetch("/api/users/currentuser");
            const data = await res.json();
            // Nếu data.data.currentUser tồn tại thì lấy ở đó, nếu không thì lấy data.currentUser
            const user = data.data?.currentUser || data.currentUser;
            setNewEmail(user.email);
            setNewJob(user.jobTitle);
            setNewName(user.name);
            setNewPhone(user.phone);
            setPhoto(user.photo);
            dispatch((0,_redux_alertSlice__WEBPACK_IMPORTED_MODULE_11__/* .setAlertInfo */ .Sm)({
                severity: "success",
                message: "Your Data has been Changed successfully \uD83E\uDEE1"
            }));
            dispatch((0,_redux_alertSlice__WEBPACK_IMPORTED_MODULE_11__/* .setShowAlert */ .jY)(true));
            setTimeout(()=>{
                dispatch((0,_redux_alertSlice__WEBPACK_IMPORTED_MODULE_11__/* .setShowAlert */ .jY)(false));
                setEditDialogOpen(false);
            }, 2000);
        }
    });
    const { errors: changePasswordErrors, doRequest: doChangeMyPassword } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        method: "patch",
        url: "/api/users/change-password",
        body: {
            currentPassword,
            newPassword,
            newPasswordConfirm: confirmNewPassword
        },
        onSuccess: ()=>{
            dispatch((0,_redux_alertSlice__WEBPACK_IMPORTED_MODULE_11__/* .setAlertInfo */ .Sm)({
                severity: "success",
                message: "Your Password has been Changed successfully \uD83E\uDEE1"
            }));
            dispatch((0,_redux_alertSlice__WEBPACK_IMPORTED_MODULE_11__/* .setShowAlert */ .jY)(true));
            setTimeout(()=>{
                dispatch((0,_redux_alertSlice__WEBPACK_IMPORTED_MODULE_11__/* .setShowAlert */ .jY)(false));
            }, 3000);
        }
    });
    const handleEdit = async (e)=>{
        bodyFormData.append("email", newEmail);
        bodyFormData.append("name", newName);
        bodyFormData.append("phone", newPhone);
        bodyFormData.append("jobTitle", newJobTitle);
        if (photo) bodyFormData.append("photo", photo);
        try {
            await doUpdateMyData();
            if (updateCurrentUserErrors !== null) setEditDialogOpen(false);
        } catch (error) {
            console.log(error);
        }
    };
    const handleEditPassword = async (e)=>{
        await doChangeMyPassword();
        if (changePasswordErrors !== null) setEditPassDialogOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        className: "vh-100",
        sx: {
            backgroundColor: "#f4f5f7",
            backgroundImage: "url(/imgs/ticketBG.jpg)"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
                className: "py-5 h-100",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    container: true,
                    justifyContent: "center",
                    alignItems: "center",
                    className: "h-100",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        lg: 6,
                        className: "mb-4 mb-lg-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                            sx: {
                                mb: 3,
                                borderRadius: ".5rem"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                container: true,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                        item: true,
                                        md: 4,
                                        className: "gradient-custom text-center text-white",
                                        sx: {
                                            borderTopLeftRadius: ".5rem",
                                            borderBottomLeftRadius: ".5rem",
                                            display: "flex",
                                            "flex-direction": "column",
                                            "align-items": "center",
                                            flexBasis: "70%"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardMedia, {
                                                component: "img",
                                                src: photo || currentUser.photo,
                                                alt: "Image",
                                                className: "my-5",
                                                sx: {
                                                    width: "100px",
                                                    borderRadius: "50%",
                                                    height: "100px"
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                variant: "h5",
                                                children: newName || currentUser.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                variant: "body1",
                                                children: newJobTitle || currentUser.jobTitle || "Job Title"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                                onClick: (e)=>setEditDialogOpen(true),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_6___default()), {})
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                        item: true,
                                        md: 8,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                        variant: "h6",
                                                        children: "Information"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                        sx: {
                                                            mt: 0,
                                                            mb: 4
                                                        }
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                        container: true,
                                                        sx: {
                                                            pt: 1
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                item: true,
                                                                xs: 6,
                                                                sx: {
                                                                    mb: 3
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                        variant: "h6",
                                                                        children: "Email"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                        variant: "body2",
                                                                        color: "text.secondary",
                                                                        children: newEmail || currentUser.email
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                item: true,
                                                                xs: 6,
                                                                sx: {
                                                                    mb: 3
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                        variant: "h6",
                                                                        children: "Phone"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                        variant: "body2",
                                                                        color: "text.secondary",
                                                                        children: newPhone || currentUser.phone || "xxx-xxx-xxx"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                        sx: {
                                                            display: "flex",
                                                            justifyContent: "start"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {
                                                                href: "#!",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                        color: "#1976d2"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {
                                                                href: "#!",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                        color: "#1976d2"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {
                                                                href: "#!",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                        color: "#1976d2"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                sx: {
                                                    mt: 0,
                                                    mb: 4
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                    onClick: (e)=>setEditPassDialogOpen(true),
                                                    children: "Change Password"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
                open: editDialogOpen,
                onClose: ()=>setEditDialogOpen(false),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.DialogTitle, {
                        className: "dialog-title",
                        children: "Edit Personal Data"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.DialogContent, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                sx: {
                                    marginBottom: "10px"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    htmlFor: "photo-input",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            sx: {
                                                "font-size": "34px",
                                                position: "relative",
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                color: "#1976d2"
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            id: "photo-input",
                                            type: "file",
                                            hidden: true,
                                            required: true,
                                            onChange: (e)=>{
                                                const file = e.target.files[0];
                                                setPhoto(file);
                                            }
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                style: {
                                    marginBottom: "20px"
                                },
                                margin: "dense",
                                label: "Email",
                                type: "text",
                                fullWidth: true,
                                required: true,
                                value: newEmail,
                                onChange: (e)=>setNewEmail(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                style: {
                                    marginBottom: "20px"
                                },
                                margin: "dense",
                                label: "Name",
                                type: "text",
                                fullWidth: true,
                                required: true,
                                value: newName,
                                onChange: (e)=>setNewName(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                style: {
                                    marginBottom: "20px"
                                },
                                margin: "dense",
                                label: "Job Title",
                                type: "text",
                                fullWidth: true,
                                required: true,
                                value: newJobTitle,
                                onChange: (e)=>setNewJob(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                style: {
                                    marginBottom: "20px"
                                },
                                margin: "dense",
                                label: "Phone Number",
                                type: "tel",
                                fullWidth: true,
                                required: true,
                                value: newPhone,
                                onChange: (e)=>setNewPhone(e.target.value)
                            }),
                            updateCurrentUserErrors
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.DialogActions, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                onClick: handleEdit,
                                variant: "contained",
                                children: "Edit"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                onClick: ()=>setEditDialogOpen(false),
                                children: "close"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
                open: editPassDialogOpen,
                onClose: ()=>setEditPassDialogOpen(false),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.DialogTitle, {
                        className: "dialog-title",
                        children: "Edit Password"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.DialogContent, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                style: {
                                    marginBottom: "20px"
                                },
                                margin: "dense",
                                label: "Current Password",
                                type: "text",
                                fullWidth: true,
                                required: true,
                                value: currentPassword,
                                onChange: (e)=>setCurrentPassword(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                style: {
                                    marginBottom: "20px"
                                },
                                margin: "dense",
                                label: "New Password",
                                type: "text",
                                fullWidth: true,
                                required: true,
                                value: newPassword,
                                onChange: (e)=>setNewPassword(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                style: {
                                    marginBottom: "20px"
                                },
                                margin: "dense",
                                label: "Confirm New Password",
                                type: "text",
                                fullWidth: true,
                                required: true,
                                value: confirmNewPassword,
                                onChange: (e)=>setConfirmNewPassword(e.target.value)
                            }),
                            changePasswordErrors
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.DialogActions, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                onClick: handleEditPassword,
                                variant: "contained",
                                children: "Edit"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                onClick: ()=>setEditPassDialogOpen(false),
                                children: "close"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonalProfile);

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

/***/ 7248:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AddAPhoto");

/***/ }),

/***/ 6902:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Edit");

/***/ }),

/***/ 7666:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Facebook");

/***/ }),

/***/ 3281:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Instagram");

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

/***/ 5631:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Twitter");

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
var __webpack_exports__ = __webpack_require__.X(0, [768,947,57], () => (__webpack_exec__(2053)));
module.exports = __webpack_exports__;

})();