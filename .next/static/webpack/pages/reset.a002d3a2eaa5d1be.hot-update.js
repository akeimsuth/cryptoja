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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/link */ \"./node_modules/next/dist/client/link.js\");\n/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Reset = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        email: \"\"\n    }), formData = ref[0], setFormData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), error = ref1[0], setError = ref1[1];\n    var email = formData.email;\n    var onChange = function(e) {\n        return setFormData(_objectSpread({\n        }, formData, _defineProperty({\n        }, e.target.name, e.target.value)));\n    };\n    var onSubmit = function(e) {\n        e.preventDefault();\n        setError(true);\n        if (email) {\n            router.push(\"/verify-email\");\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"authincation section-padding\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n            lineNumber: 24,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"container h-100\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"row justify-content-center h-100 align-items-center\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"col-xl-4 col-md-5\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"mini-logo text-center my-3\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                src: \"/images/logo.png\",\n                                                alt: \"\",\n                                                width: \"45\",\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                    lineNumber: 31,\n                                                    columnNumber: 19\n                                                },\n                                                __self: _this\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                                                className: \"text-dark\",\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                    lineNumber: 36,\n                                                    columnNumber: 19\n                                                },\n                                                __self: _this,\n                                                children: \"Tokenomyja\"\n                                            })\n                                        ]\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                                    className: \"card-title mt-5\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Reset Password\"\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"auth-form card\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"card-body\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n                                    onSubmit: function(e) {\n                                        return onSubmit(e);\n                                    },\n                                    className: \"row g-3\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                            className: \"col-12\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                                    className: \"form-label\",\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                        lineNumber: 45,\n                                                        columnNumber: 21\n                                                    },\n                                                    __self: _this,\n                                                    children: \"Email\"\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                                    type: \"text\",\n                                                    placeholder: \"Enter your email\",\n                                                    className: \"form-control \".concat(error && !email ? \"is-invalid\" : \"\"),\n                                                    name: \"email\",\n                                                    value: email,\n                                                    onChange: function(e) {\n                                                        return onChange(e);\n                                                    },\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                        lineNumber: 46,\n                                                        columnNumber: 21\n                                                    },\n                                                    __self: _this\n                                                })\n                                            ]\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"text-center mt-4\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                                type: \"submit\",\n                                                className: \"btn btn-primary btn-block\",\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\reset.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 21\n                                                },\n                                                __self: _this,\n                                                children: \"Submit\"\n                                            })\n                                        })\n                                    ]\n                                })\n                            })\n                        })\n                    ]\n                })\n            })\n        })\n    }));\n};\n_s(Reset, \"jSh6kro9pggTDTLxJY5B32BgSfo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Reset;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reset);\nvar _c;\n$RefreshReg$(_c, \"Reset\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OUJPLENBQUc7NENBQUNDLFNBQVMsRUFBQyxDQUFrQjs7Ozs7OzsySEFDOUJjLENBQU07Z0RBQUNGLElBQUksRUFBQyxDQUFRO2dEQUFDWixTQUFTLEVBQUMsQ0FBMkI7Ozs7Ozs7MERBQUMsQ0FFNUQ7Ozs7Ozs7Ozs7OztBQWtCcEIsQ0FBQztHQXhFS2hCLEtBQUs7O1FBQ01GLGtEQUFTOzs7S0FEcEJFLEtBQUs7QUEwRVgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZXNldC50c3g/NmUzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBSZXNldDogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IGVtYWlsIH0gPSBmb3JtRGF0YTtcclxuICBjb25zdCBvbkNoYW5nZSA9IChlOiBhbnkpID0+XHJcbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGU6IGFueSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICBpZiAoZW1haWwpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvdmVyaWZ5LWVtYWlsXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhpbmNhdGlvbiBzZWN0aW9uLXBhZGRpbmdcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaC0xMDBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGgtMTAwIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNCBjb2wtbWQtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbmktbG9nbyB0ZXh0LWNlbnRlciBteS0zXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiIFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjQ1XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LWRhcmtcIj5Ub2tlbm9teWphPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIG10LTVcIj5SZXNldCBQYXNzd29yZDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtZm9ybSBjYXJkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gb25TdWJtaXQoZSl9IGNsYXNzTmFtZT1cInJvdyBnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgJiYgIWVtYWlsID8gXCJpcy1pbnZhbGlkXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJuZXctYWNjb3VudCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgRG9uJ3QgZ2V0IGNvZGU/YH17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9vdHAtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+UmVzZW5kPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNldDtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIlJlc2V0Iiwicm91dGVyIiwiZW1haWwiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImEiLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsInN0cm9uZyIsImg0IiwiZm9ybSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/reset.tsx\n");

/***/ })

});