"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/layouts/dashboard/DashboardSidebar.tsx":
/*!****************************************************!*\
  !*** ./src/layouts/dashboard/DashboardSidebar.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/link */ \"./node_modules/next/dist/client/link.js\");\n/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/firebase/firebase */ \"./src/firebase/firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/utils */ \"./src/utils/utils.ts\");\n/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/UserService */ \"./src/services/UserService/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar DashboardSidebar = function() {\n    _s1();\n    var ref = _slicedToArray((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_src_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__.auth), 2), user = ref[0], loading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), userDetails = ref1[0], setUserDetails = ref1[1];\n    var getUserInfo = function() {\n        if (user) {\n            (0,_services_UserService__WEBPACK_IMPORTED_MODULE_6__.getUser)(user.uid).then(function(res) {\n                return setUserDetails(res.data);\n            }).catch(function(error) {\n                return console.log(error);\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.dashboardMenuActive)();\n        getUserInfo();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"sidebar\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n            lineNumber: 25,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"brand-logo\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/dashboard\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/images/logoi.png\",\n                            alt: \"\",\n                            width: \"30\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            },\n                            __self: _this\n                        })\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"menu\",\n                id: \"d_menu\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/dashboard\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                                className: \"bi bi-house\",\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 19\n                                                },\n                                                __self: _this\n                                            })\n                                        })\n                                    })\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/trade\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                                className: \"bi bi-globe2\",\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 19\n                                                },\n                                                __self: _this\n                                            })\n                                        })\n                                    })\n                                })\n                            }),\n                            (userDetails === null || userDetails === void 0 ? void 0 : userDetails.role) === 'admin' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/wallet\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                                className: \"bi bi-wallet2\",\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 21\n                                                },\n                                                __self: _this\n                                            })\n                                        })\n                                    })\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/settings-profile\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        id: \"settings__mainMenu\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                                className: \"bi bi-gear\",\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 19\n                                                },\n                                                __self: _this\n                                            })\n                                        })\n                                    })\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                className: \"logout\",\n                                onClick: function() {\n                                    return (0,_src_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__.logout)();\n                                },\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                            className: \"bi bi-power\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this\n                                        })\n                                    })\n                                })\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                        className: \"copyright\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            \"\\xa9 \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: \"#\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\DashboardSidebar.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 18\n                                },\n                                __self: _this,\n                                children: \"Qkit\"\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s1(DashboardSidebar, \"FtBgGtkcHx4MgLAQpf1dxu0pkls=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState\n    ];\n});\n_c = DashboardSidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardSidebar);\nvar _c;\n$RefreshReg$(_c, \"DashboardSidebar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9kYXNoYm9hcmQvRGFzaGJvYXJkU2lkZWJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNPO0FBQ2M7QUFDTDtBQUNEO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsR0FBSyxDQUFDUSxnQkFBZ0IsR0FBTyxRQUFRLEdBQUYsQ0FBQzs7SUFDbEMsR0FBSyxDQUFtQkgsR0FBa0Isa0JBQWxCQSx1RUFBWSxDQUFDRix3REFBSSxPQUFsQ00sSUFBSSxHQUFhSixHQUFrQixLQUE3QkssT0FBTyxHQUFJTCxHQUFrQjtJQUMxQyxHQUFLLENBQWlDSCxJQUFlLEdBQWZBLCtDQUFRLElBQXZDUyxXQUFXLEdBQW9CVCxJQUFlLEtBQWpDVSxjQUFjLEdBQUlWLElBQWU7SUFFckQsR0FBSyxDQUFDVyxXQUFXLEdBQUcsUUFBUSxHQUFGLENBQUM7UUFDekIsRUFBRSxFQUFDSixJQUFJLEVBQUMsQ0FBQztZQUNQRiw4REFBTyxDQUFDRSxJQUFJLENBQUNLLEdBQUcsRUFDZkMsSUFBSSxDQUFDQyxRQUFRLENBQVJBLEdBQUc7Z0JBQUlKLE1BQU0sQ0FBTkEsY0FBYyxDQUFDSSxHQUFHLENBQUNDLElBQUk7ZUFDbkNDLEtBQUssQ0FBQ0MsUUFBUSxDQUFSQSxLQUFLO2dCQUFJQyxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLOztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQUVEbEIsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNmSyxpRUFBbUI7UUFDbkJPLFdBQVc7SUFDYixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsTUFBTSx1RUFDSFMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBUzs7Ozs7Ozs7aUZBQ3JCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBWTs7Ozs7OzsrRkFDeEJ2Qiw4REFBSTtvQkFBQ3dCLElBQUksRUFBQyxDQUFZOzs7Ozs7O21HQUNwQkMsQ0FBQzs7Ozs7Ozt1R0FDQ0MsQ0FBRzs0QkFBQ0MsR0FBRyxFQUFDLENBQW1COzRCQUFDQyxHQUFHLEVBQUMsQ0FBRTs0QkFBQ0MsS0FBSyxFQUFDLENBQUk7Ozs7Ozs7Ozs7O2tGQUluRFAsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQU07Z0JBQUNPLEVBQUUsRUFBQyxDQUFROzs7Ozs7OzswRkFDOUJDLENBQUU7Ozs7Ozs7O2lHQUNBQyxDQUFFOzs7Ozs7OytHQUNBaEMsOERBQUk7b0NBQUN3QixJQUFJLEVBQUMsQ0FBWTs7Ozs7OzttSEFDcEJDLENBQUM7Ozs7Ozs7dUhBQ0NRLENBQUk7Ozs7Ozs7MkhBQ0ZDLENBQUM7Z0RBQUNYLFNBQVMsRUFBQyxDQUFhOzs7Ozs7Ozs7Ozs7aUdBS2pDUyxDQUFFOzs7Ozs7OytHQUNBaEMsOERBQUk7b0NBQUN3QixJQUFJLEVBQUMsQ0FBUTs7Ozs7OzttSEFDaEJDLENBQUM7Ozs7Ozs7dUhBQ0NRLENBQUk7Ozs7Ozs7MkhBQ0ZDLENBQUM7Z0RBQUNYLFNBQVMsRUFBQyxDQUFjOzs7Ozs7Ozs7Ozs7NkJBS2xDWixXQUFXLGFBQVhBLFdBQVcsS0FBWEEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsV0FBVyxDQUFFd0IsSUFBSSxNQUFLLENBQU8sK0VBQzNCSCxDQUFFOzs7Ozs7OytHQUNBaEMsOERBQUk7b0NBQUN3QixJQUFJLEVBQUMsQ0FBUzs7Ozs7OzttSEFDakJDLENBQUM7Ozs7Ozs7dUhBQ0NRLENBQUk7Ozs7Ozs7MkhBQ0ZDLENBQUM7Z0RBQUNYLFNBQVMsRUFBQyxDQUFlOzs7Ozs7Ozs7Ozs7aUdBTXJDUyxDQUFFOzs7Ozs7OytHQUNBaEMsOERBQUk7b0NBQUN3QixJQUFJLEVBQUMsQ0FBbUI7Ozs7Ozs7bUhBQzNCQyxDQUFDO3dDQUFDSyxFQUFFLEVBQUMsQ0FBb0I7Ozs7Ozs7dUhBQ3ZCRyxDQUFJOzs7Ozs7OzJIQUNGQyxDQUFDO2dEQUFDWCxTQUFTLEVBQUMsQ0FBWTs7Ozs7Ozs7Ozs7O2lHQUtoQ1MsQ0FBRTtnQ0FBQ1QsU0FBUyxFQUFDLENBQVE7Z0NBQUNhLE9BQU8sRUFBRSxRQUFRO29DQUFGaEMsTUFBTSxDQUFOQSw4REFBTTs7Ozs7Ozs7K0dBRXZDcUIsQ0FBQzs7Ozs7OzttSEFDQ1EsQ0FBSTs7Ozs7Ozt1SEFDRkMsQ0FBQzs0Q0FBQ1gsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7Ozs7Ozs7MEZBT25DYyxDQUFDO3dCQUFDZCxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs7NEJBQUMsQ0FDaEI7aUdBQUNFLENBQUM7Z0NBQUNELElBQUksRUFBQyxDQUFHOzs7Ozs7OzBDQUFDLENBQUk7Ozs7Ozs7O0FBS2pDLENBQUM7SUFsRktoQixnQkFBZ0I7O1FBQ0lILG1FQUFZOzs7S0FEaENHLGdCQUFnQjtBQW9GdEIsK0RBQWVBLGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXRzL2Rhc2hib2FyZC9EYXNoYm9hcmRTaWRlYmFyLnRzeD83ZTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L2xpbmtcIjtcclxuaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXV0aCwgbG9nb3V0IH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9maXJlYmFzZS9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xyXG5pbXBvcnQgeyBkYXNoYm9hcmRNZW51QWN0aXZlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvVXNlclNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IERhc2hib2FyZFNpZGViYXI6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBsb2FkaW5nXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcclxuICBjb25zdCBbdXNlckRldGFpbHMsIHNldFVzZXJEZXRhaWxzXSA9IHVzZVN0YXRlPGFueT4oKTtcclxuXHJcbiAgY29uc3QgZ2V0VXNlckluZm8gPSAoKSA9PiB7XHJcbiAgICBpZih1c2VyKXtcclxuICAgICAgZ2V0VXNlcih1c2VyLnVpZClcclxuICAgICAgLnRoZW4ocmVzID0+IHNldFVzZXJEZXRhaWxzKHJlcy5kYXRhKSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkYXNoYm9hcmRNZW51QWN0aXZlKCk7XHJcbiAgICBnZXRVc2VySW5mbygpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmQtbG9nb1wiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ29pLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiMzBcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiIGlkPVwiZF9tZW51XCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWhvdXNlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90cmFkZVwiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWdsb2JlMlwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICB7dXNlckRldGFpbHM/LnJvbGUgPT09ICdhZG1pbicgJiYgXHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3dhbGxldFwiPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLXdhbGxldDJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2V0dGluZ3MtcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgIDxhIGlkPVwic2V0dGluZ3NfX21haW5NZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktZ2VhclwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG9nb3V0XCIgb25DbGljaz17KCkgPT4gbG9nb3V0KCl9PlxyXG4gICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9zaWduaW5cIj4gKi99XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktcG93ZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+XHJcbiAgICAgICAgICAmIzE2OTsgPGEgaHJlZj1cIiNcIj5Ra2l0PC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkU2lkZWJhcjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF1dGgiLCJsb2dvdXQiLCJ1c2VBdXRoU3RhdGUiLCJkYXNoYm9hcmRNZW51QWN0aXZlIiwiZ2V0VXNlciIsIkRhc2hib2FyZFNpZGViYXIiLCJ1c2VyIiwibG9hZGluZyIsInVzZXJEZXRhaWxzIiwic2V0VXNlckRldGFpbHMiLCJnZXRVc2VySW5mbyIsInVpZCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiYSIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwiaWQiLCJ1bCIsImxpIiwic3BhbiIsImkiLCJyb2xlIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layouts/dashboard/DashboardSidebar.tsx\n");

/***/ })

});