"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/reset",{

/***/ "./pages/reset.tsx":
/*!*************************!*\
  !*** ./pages/reset.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/link */ \"./node_modules/next/dist/client/link.js\");\n/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/firebase/firebase */ \"./src/firebase/firebase.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/react-hot-toast.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Reset = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        email: \"\"\n    }), formData = ref[0], setFormData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), error = ref1[0], setError = ref1[1];\n    var email = formData.email;\n    var onChange = function(e) {\n        return setFormData(_objectSpread({\n        }, formData, _defineProperty({\n        }, e.target.name, e.target.value)));\n    };\n    var onSubmit = function(e) {\n        e.preventDefault();\n        setError(true);\n        if (email) {\n            (0,_src_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__.sendPasswordReset)(email);\n        // router.push(\"/verify-email\");\n        } else {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(\"Email required\");\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"authincation section-padding\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n            lineNumber: 30,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"container h-100\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"row justify-content-center h-100 align-items-center\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"col-xl-4 col-md-5\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"mini-logo text-center my-3\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                    src: \"/images/logo.png\",\n                                                    alt: \"\",\n                                                    width: \"45\",\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                        lineNumber: 38,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: _this\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                                                    className: \"text-dark\",\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                        lineNumber: 43,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: _this,\n                                                    children: \"Tokenomyja\"\n                                                })\n                                            ]\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                                        className: \"card-title mt-5\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: \"Reset Password\"\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"auth-form card\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"card-body\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n                                            onSubmit: function(e) {\n                                                return onSubmit(e);\n                                            },\n                                            className: \"row g-3\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                                    className: \"col-12\",\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: _this,\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                                            className: \"form-label\",\n                                                            __source: {\n                                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                                lineNumber: 52,\n                                                                columnNumber: 21\n                                                            },\n                                                            __self: _this,\n                                                            children: \"Email\"\n                                                        }),\n                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                                            type: \"text\",\n                                                            placeholder: \"Enter your email\",\n                                                            className: \"form-control \".concat(error && !email ? \"is-invalid\" : \"\"),\n                                                            name: \"email\",\n                                                            value: email,\n                                                            onChange: function(e) {\n                                                                return onChange(e);\n                                                            },\n                                                            __source: {\n                                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                                lineNumber: 53,\n                                                                columnNumber: 21\n                                                            },\n                                                            __self: _this\n                                                        })\n                                                    ]\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                    className: \"text-center mt-4\",\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: _this,\n                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                                        type: \"submit\",\n                                                        className: \"btn btn-primary btn-block\",\n                                                        __source: {\n                                                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                            lineNumber: 65,\n                                                            columnNumber: 21\n                                                        },\n                                                        __self: _this,\n                                                        children: \"Submit\"\n                                                    })\n                                                })\n                                            ]\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"new-account mt-3\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 19\n                                                },\n                                                __self: _this,\n                                                children: [\n                                                    \"Back to sign in?\",\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        href: \"/otp-1\",\n                                                        __source: {\n                                                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                            lineNumber: 73,\n                                                            columnNumber: 21\n                                                        },\n                                                        __self: _this,\n                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                            className: \"text-primary\",\n                                                            __source: {\n                                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                                lineNumber: 74,\n                                                                columnNumber: 23\n                                                            },\n                                                            __self: _this,\n                                                            children: \"Resend\"\n                                                        })\n                                                    })\n                                                ]\n                                            })\n                                        })\n                                    ]\n                                })\n                            })\n                        ]\n                    })\n                })\n            })\n        ]\n    }));\n};\n_s(Reset, \"jSh6kro9pggTDTLxJY5B32BgSfo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Reset;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reset);\nvar _c;\n$RefreshReg$(_c, \"Reset\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUs7NERBQ1pLLFFBQVEsRUFBRSxRQUFRLENBQVBDLENBQUM7Z0VBQUtELE1BQU0sQ0FBTkEsUUFBUSxDQUFDQyxDQUFDOzs7Ozs7Ozs7OztxSEFHOUJNLENBQUc7b0RBQUNDLFNBQVMsRUFBQyxDQUFrQjs7Ozs7OzttSUFDOUJjLENBQU07d0RBQUNGLElBQUksRUFBQyxDQUFRO3dEQUFDWixTQUFTLEVBQUMsQ0FBMkI7Ozs7Ozs7a0VBQUMsQ0FFNUQ7Ozs7OzZHQUdIRCxDQUFHOzRDQUFDQyxTQUFTLEVBQUMsQ0FBa0I7Ozs7Ozs7NEhBQzlCZSxDQUFDOzs7Ozs7OztvREFDRSxDQUFnQjtvREFBRyxDQUFHO3lIQUN2QnBDLDhEQUFJO3dEQUFDc0IsSUFBSSxFQUFDLENBQVE7Ozs7Ozs7dUlBQ2hCQyxDQUFDOzREQUFDRixTQUFTLEVBQUMsQ0FBYzs7Ozs7OztzRUFBQyxDQUFNOzs7Ozs7Ozs7Ozs7Ozs7QUFXeEQsQ0FBQztHQTVFS2YsS0FBSzs7UUFDTUwsa0RBQVM7OztLQURwQkssS0FBSztBQThFWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Jlc2V0LnRzeD82ZTM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGF1dGgsIHNlbmRQYXNzd29yZFJlc2V0IH0gZnJvbSBcIi4uL3NyYy9maXJlYmFzZS9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdG9hc3QsIHtUb2FzdGVyfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcblxyXG5jb25zdCBSZXNldDogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IGVtYWlsIH0gPSBmb3JtRGF0YTtcclxuICBjb25zdCBvbkNoYW5nZSA9IChlOiBhbnkpID0+XHJcbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGU6IGFueSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICBpZiAoZW1haWwpIHtcclxuICAgICAgc2VuZFBhc3N3b3JkUmVzZXQoZW1haWwpO1xyXG4gICAgICAvLyByb3V0ZXIucHVzaChcIi92ZXJpZnktZW1haWxcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkVtYWlsIHJlcXVpcmVkXCIpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aGluY2F0aW9uIHNlY3Rpb24tcGFkZGluZ1wiPlxyXG4gICAgICA8VG9hc3Rlci8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGgtMTAwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBoLTEwMCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTQgY29sLW1kLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW5pLWxvZ28gdGV4dC1jZW50ZXIgbXktM1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIFxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIiBcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0NVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1kYXJrXCI+VG9rZW5vbXlqYTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBtdC01XCI+UmVzZXQgUGFzc3dvcmQ8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWZvcm0gY2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IG9uU3VibWl0KGUpfSBjbGFzc05hbWU9XCJyb3cgZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yICYmICFlbWFpbCA/IFwiaXMtaW52YWxpZFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctYWNjb3VudCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgQmFjayB0byBzaWduIGluP2B9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvb3RwLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPlJlc2VuZDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNldDtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJzZW5kUGFzc3dvcmRSZXNldCIsInVzZVN0YXRlIiwidG9hc3QiLCJUb2FzdGVyIiwiUmVzZXQiLCJyb3V0ZXIiLCJlbWFpbCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJlcnJvciIsInNldEVycm9yIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJhIiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJzdHJvbmciLCJoNCIsImZvcm0iLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/reset.tsx\n");

/***/ })

});