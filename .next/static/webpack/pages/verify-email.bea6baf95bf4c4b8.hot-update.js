"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/verify-email",{

/***/ "./pages/verify-email.tsx":
/*!********************************!*\
  !*** ./pages/verify-email.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/firebase/firebase */ \"./src/firebase/firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/link */ \"./node_modules/next/dist/client/link.js\");\n/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar VerifyEmail = function() {\n    _s1();\n    var ref = _slicedToArray((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState)(_src_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__.auth), 2), user = ref[0], loading = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"verification section-padding\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\verify-email.tsx\",\n            lineNumber: 12,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container h-100\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\verify-email.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                console.log(\"User details: \", user),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"row justify-content-center h-100 align-items-center\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\verify-email.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"col-xl-5 col-md-6\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\verify-email.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"mini-logo text-center my-4\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\verify-email.tsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\verify-email.tsx\",\n                                            lineNumber: 18,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\verify-email.tsx\",\n                                                lineNumber: 19,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                    src: \"/images/logo.png\",\n                                                    alt: \"\",\n                                                    width: \"45\",\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\verify-email.tsx\",\n                                                        lineNumber: 20,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: _this\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                                                    className: \"text-dark\",\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\verify-email.tsx\",\n                                                        lineNumber: 21,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: _this,\n                                                    children: \"Tokenomyja\"\n                                                })\n                                            ]\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                                        className: \"card-title mt-5\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\verify-email.tsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: \"Verify your Email\"\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"auth-form card\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\verify-email.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: \"card-body\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\verify-email.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"form\", {\n                                        className: \"identity-upload\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\verify-email.tsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                            className: \"identity-content\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\verify-email.tsx\",\n                                                lineNumber: 29,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                    className: \"icon\",\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\verify-email.tsx\",\n                                                        lineNumber: 30,\n                                                        columnNumber: 21\n                                                    },\n                                                    __self: _this,\n                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                                        className: \"icofont-email\",\n                                                        __source: {\n                                                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\verify-email.tsx\",\n                                                            lineNumber: 31,\n                                                            columnNumber: 23\n                                                        },\n                                                        __self: _this\n                                                    })\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\verify-email.tsx\",\n                                                        lineNumber: 33,\n                                                        columnNumber: 21\n                                                    },\n                                                    __self: _this,\n                                                    children: [\n                                                        \"We sent verification email to\",\n                                                        \" \",\n                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                                                            className: \"text-dark\",\n                                                            __source: {\n                                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\pages\\\\verify-email.tsx\",\n                                                                lineNumber: 35,\n                                                                columnNumber: 23\n                                                            },\n                                                            __self: _this,\n                                                            children: user === null || user === void 0 ? void 0 : user.email\n                                                        }),\n                                                        \". Click the link inside to get started!\"\n                                                    ]\n                                                })\n                                            ]\n                                        })\n                                    })\n                                })\n                            })\n                        ]\n                    })\n                })\n            ]\n        })\n    }));\n};\n_s1(VerifyEmail, \"CDxTn76UQ/Bz2q+GhFWw/SAktuI=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState\n    ];\n});\n_c = VerifyEmail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VerifyEmail);\nvar _c;\n$RefreshReg$(_c, \"VerifyEmail\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92ZXJpZnktZW1haWwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ3NCO0FBQ0M7QUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeEMsR0FBSyxDQUFDSSxXQUFXLEdBQWEsUUFBUSxHQUFGLENBQUM7O0lBQ25DLEdBQUssQ0FBbUJGLEdBQWtCLGtCQUFsQkEsdUVBQVksQ0FBQ0Qsd0RBQUksT0FBbENJLElBQUksR0FBYUgsR0FBa0IsS0FBN0JJLE9BQU8sR0FBSUosR0FBa0I7SUFFMUNGLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7SUFBQSxDQUFDO0lBRWxCLE1BQU0sc0VBQ0hPLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQThCOzs7Ozs7O3dGQUMxQ0QsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozs7O2dCQUM3QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBZ0IsaUJBQUVMLElBQUk7cUZBQ2xDRSxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBcUQ7Ozs7Ozs7b0dBQ2pFRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBbUI7Ozs7Ozs7O2tHQUMvQkQsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQTRCOzs7Ozs7Ozt5R0FDeENMLDhEQUFJO3dDQUFDUSxJQUFJLEVBQUMsQ0FBRzs7Ozs7Ozt3SEFDWEMsQ0FBQzs7Ozs7Ozs7cUhBQ0NDLENBQUc7b0RBQUNDLEdBQUcsRUFBQyxDQUFrQjtvREFBQ0MsR0FBRyxFQUFDLENBQUU7b0RBQUVDLEtBQUssRUFBQyxDQUFJOzs7Ozs7OztxSEFDN0NDLENBQU07b0RBQUNULFNBQVMsRUFBQyxDQUFXOzs7Ozs7OzhEQUFDLENBQVU7Ozs7O3lHQUczQ1UsQ0FBRTt3Q0FBQ1YsU0FBUyxFQUFDLENBQWlCOzs7Ozs7O2tEQUFDLENBQWlCOzs7O2lHQUVsREQsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQWdCOzs7Ozs7OytHQUM1QkQsQ0FBRztvQ0FBQ0MsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7bUhBQ3ZCVyxDQUFJO3dDQUFDWCxTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozs7d0hBQzlCRCxDQUFHOzRDQUFDQyxTQUFTLEVBQUMsQ0FBa0I7Ozs7Ozs7O3FIQUM5QlksQ0FBSTtvREFBQ1osU0FBUyxFQUFDLENBQU07Ozs7Ozs7bUlBQ25CYSxDQUFDO3dEQUFDYixTQUFTLEVBQUMsQ0FBZTs7Ozs7Ozs7O3NIQUU3QmMsQ0FBQzs7Ozs7Ozs7d0RBQUMsQ0FDNEI7d0RBQUMsQ0FBRzs2SEFDaENMLENBQU07NERBQUNULFNBQVMsRUFBQyxDQUFXOzs7Ozs7O3NFQUFFSCxJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLElBQUksQ0FBSkEsQ0FBVyxHQUFYQSxJQUFJLENBQUVrQixLQUFLOzt3REFBVSxDQUV0RDs7Ozs7Ozs7Ozs7Ozs7QUFjcEIsQ0FBQztJQTdDS25CLFdBQVc7O1FBQ1NGLG1FQUFZOzs7S0FEaENFLFdBQVc7QUErQ2pCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmVyaWZ5LWVtYWlsLnRzeD80ZDc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGF1dGgsIGxvZ291dCB9IGZyb20gXCIuLi9zcmMvZmlyZWJhc2UvZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvbGlua1wiO1xyXG5jb25zdCBWZXJpZnlFbWFpbDogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIGxvYWRpbmddID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge30pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcmlmaWNhdGlvbiBzZWN0aW9uLXBhZGRpbmdcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaC0xMDBcIj5cclxuICAgICAgICB7Y29uc29sZS5sb2coXCJVc2VyIGRldGFpbHM6IFwiLCB1c2VyKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGgtMTAwIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNSBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbmktbG9nbyB0ZXh0LWNlbnRlciBteS00XCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJcIiAgd2lkdGg9XCI0NVwiLz5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LWRhcmtcIj5Ub2tlbm9teWphPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIG10LTVcIj5WZXJpZnkgeW91ciBFbWFpbDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtZm9ybSBjYXJkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImlkZW50aXR5LXVwbG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkZW50aXR5LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29mb250LWVtYWlsXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIFdlIHNlbnQgdmVyaWZpY2F0aW9uIGVtYWlsIHRve1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LWRhcmtcIj57dXNlcj8uZW1haWx9PC9zdHJvbmc+LlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgdGhlIGxpbmsgaW5zaWRlIHRvIGdldCBzdGFydGVkIVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj5HbyB0byBEYXNoYm9hcmQ8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj57YEVtYWlsIGRpZG4ndCBhcnJpdmU/YH08L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZXJpZnlFbWFpbDtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsImF1dGgiLCJ1c2VBdXRoU3RhdGUiLCJMaW5rIiwiVmVyaWZ5RW1haWwiLCJ1c2VyIiwibG9hZGluZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJocmVmIiwiYSIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwic3Ryb25nIiwiaDQiLCJmb3JtIiwic3BhbiIsImkiLCJwIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/verify-email.tsx\n");

/***/ })

});