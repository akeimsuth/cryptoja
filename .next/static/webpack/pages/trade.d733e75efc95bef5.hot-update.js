"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/trade",{

/***/ "./src/layouts/dashboard/ToggleHeaderUser.tsx":
/*!****************************************************!*\
  !*** ./src/layouts/dashboard/ToggleHeaderUser.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/link */ \"./node_modules/next/dist/client/link.js\");\n/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/firebase/firebase */ \"./src/firebase/firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _components_UseClickOutside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/UseClickOutside */ \"./src/components/UseClickOutside.tsx\");\n/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/UserService */ \"./src/services/UserService/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar ToggleHeaderUser = function() {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), toggleuser = ref[0], setToggleuser = ref[1];\n    var ref1 = _slicedToArray((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_src_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__.auth), 2), user = ref1[0], loading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), userDetails = ref2[0], setUserDetails = ref2[1];\n    var showUserDetails = function() {\n        if (user) {\n            (0,_services_UserService__WEBPACK_IMPORTED_MODULE_6__.getUser)(user.uid).then(function(res) {\n                return setUserDetails(res.data);\n            }).catch(function(error) {\n                return console.log(error);\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        showUserDetails();\n    }, [\n        user\n    ]);\n    var domNode = (0,_components_UseClickOutside__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n        setToggleuser(false);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"profile_log dropdown\",\n        ref: domNode,\n        __source: {\n            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n            lineNumber: 27,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"user\",\n                onClick: function() {\n                    return setToggleuser(!toggleuser);\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"thumb\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/images/profile/2.png\",\n                            alt: \"\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"arrow\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                            className: \"icofont-angle-down\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"dropdown-menu dropdown-menu-right \".concat(toggleuser ? \"show\" : \"\"),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"user-email\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"user\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"thumb\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                        src: \"/images/profile/2.png\",\n                                        alt: \"\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"user-info\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h5\", {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 15\n                                            },\n                                            __self: _this,\n                                            children: userDetails === null || userDetails === void 0 ? void 0 : userDetails.name\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 15\n                                            },\n                                            __self: _this,\n                                            children: user === null || user === void 0 ? void 0 : user.email\n                                        })\n                                    ]\n                                })\n                            ]\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/settings-profile\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                            className: \"dropdown-item\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                    className: \"bi bi-gear\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this\n                                }),\n                                \" Setting\"\n                            ]\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/signin\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                            className: \"dropdown-item logout\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                    className: \"bi bi-power\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this\n                                }),\n                                \" Logout\"\n                            ]\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s1(ToggleHeaderUser, \"gau9QXCqgQR8ARYy3Btk7K+W/V8=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState\n    ];\n});\n_c = ToggleHeaderUser;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToggleHeaderUser);\nvar _c;\n$RefreshReg$(_c, \"ToggleHeaderUser\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9kYXNoYm9hcmQvVG9nZ2xlSGVhZGVyVXNlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNPO0FBQ2M7QUFDTDtBQUNNO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsR0FBSyxDQUFDTyxnQkFBZ0IsR0FBTyxRQUFRLEdBQUYsQ0FBQzs7SUFDbEMsR0FBSyxDQUErQk4sR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBM0NPLFVBQVUsR0FBbUJQLEdBQWUsS0FBaENRLGFBQWEsR0FBSVIsR0FBZTtJQUNuRCxHQUFLLENBQW1CRyxJQUFrQixrQkFBbEJBLHVFQUFZLENBQUNELHdEQUFJLE9BQWxDTyxJQUFJLEdBQWFOLElBQWtCLEtBQTdCTyxPQUFPLEdBQUlQLElBQWtCO0lBQzFDLEdBQUssQ0FBaUNILElBQWUsR0FBZkEsK0NBQVEsSUFBdkNXLFdBQVcsR0FBb0JYLElBQWUsS0FBakNZLGNBQWMsR0FBSVosSUFBZTtJQUNyRCxHQUFLLENBQUNhLGVBQWUsR0FBRyxRQUFRLEdBQUYsQ0FBQztRQUM3QixFQUFFLEVBQUVKLElBQUksRUFBRSxDQUFDO1lBQ1RKLDhEQUFPLENBQUNJLElBQUksQ0FBQ0ssR0FBRyxFQUNmQyxJQUFJLENBQUNDLFFBQVEsQ0FBUkEsR0FBRztnQkFBSUosTUFBTSxDQUFOQSxjQUFjLENBQUNJLEdBQUcsQ0FBQ0MsSUFBSTtlQUNuQ0MsS0FBSyxDQUFDQyxRQUFRLENBQVJBLEtBQUs7Z0JBQUlDLE1BQU0sQ0FBTkEsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUs7O1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRURsQixnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2ZZLGVBQWU7SUFDakIsQ0FBQyxFQUFDLENBQUNKO1FBQUFBLElBQUk7SUFBQSxDQUFDO0lBQ1IsR0FBRyxDQUFDYSxPQUFPLEdBQUdsQix1RUFBZSxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ25DSSxhQUFhLENBQUMsS0FBSztJQUNyQixDQUFDO0lBQ0QsTUFBTSx1RUFDSGUsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBc0I7UUFBQ0MsR0FBRyxFQUFFSCxPQUFPOzs7Ozs7OztrRkFDL0NDLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFNO2dCQUFDRSxPQUFPLEVBQUUsUUFBUTtvQkFBRmxCLE1BQU0sQ0FBTkEsYUFBYSxFQUFFRCxVQUFVOzs7Ozs7Ozs7eUZBQzNEb0IsQ0FBSTt3QkFBQ0gsU0FBUyxFQUFDLENBQU87Ozs7Ozs7dUdBQ3BCSSxDQUFHOzRCQUFDQyxHQUFHLEVBQUMsQ0FBdUI7NEJBQUNDLEdBQUcsRUFBQyxDQUFFOzs7Ozs7Ozs7eUZBRXhDSCxDQUFJO3dCQUFDSCxTQUFTLEVBQUMsQ0FBTzs7Ozs7Ozt1R0FDcEJPLENBQUM7NEJBQUNQLFNBQVMsRUFBQyxDQUFvQjs7Ozs7Ozs7Ozs7a0ZBR3BDRCxDQUFHO2dCQUNGQyxTQUFTLEVBQUcsQ0FBa0Msb0NBRTdDLE9BRENqQixVQUFVLEdBQUcsQ0FBTSxRQUFHLENBQUU7Ozs7Ozs7O3lGQUd6QmdCLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFZOzs7Ozs7O3dHQUN4QkQsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQU07Ozs7Ozs7O3FHQUNsQkcsQ0FBSTtvQ0FBQ0gsU0FBUyxFQUFDLENBQU87Ozs7Ozs7bUhBQ3BCSSxDQUFHO3dDQUFDQyxHQUFHLEVBQUMsQ0FBdUI7d0NBQUNDLEdBQUcsRUFBQyxDQUFFOzs7Ozs7Ozs7c0dBRXhDUCxDQUFHO29DQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs7NkdBQ3ZCUSxDQUFFOzs7Ozs7O3NEQUFFckIsV0FBVyxhQUFYQSxXQUFXLEtBQVhBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLFdBQVcsQ0FBRXNCLElBQUk7OzZHQUNyQk4sQ0FBSTs7Ozs7OztzREFBRWxCLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLElBQUksQ0FBRXlCLEtBQUs7Ozs7Ozs7eUZBeUJ2Qm5DLDhEQUFJO3dCQUFDb0MsSUFBSSxFQUFDLENBQW1COzs7Ozs7O3dHQUMzQkMsQ0FBQzs0QkFBQ1osU0FBUyxFQUFDLENBQWU7Ozs7Ozs7O3FHQUN6Qk8sQ0FBQztvQ0FBQ1AsU0FBUyxFQUFDLENBQVk7Ozs7Ozs7O2dDQUFLLENBQ2hDOzs7O3lGQVlEekIsOERBQUk7d0JBQUNvQyxJQUFJLEVBQUMsQ0FBUzs7Ozs7Ozt3R0FDakJDLENBQUM7NEJBQUNaLFNBQVMsRUFBQyxDQUFzQjs7Ozs7Ozs7cUdBQ2hDTyxDQUFDO29DQUFDUCxTQUFTLEVBQUMsQ0FBYTs7Ozs7Ozs7Z0NBQUssQ0FDakM7Ozs7Ozs7O0FBS1YsQ0FBQztJQXhGS2xCLGdCQUFnQjs7UUFFSUgsbUVBQVk7OztLQUZoQ0csZ0JBQWdCO0FBMEZ0QiwrREFBZUEsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvZGFzaGJvYXJkL1RvZ2dsZUhlYWRlclVzZXIudHN4P2FjMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvbGlua1wiO1xyXG5pbXBvcnQgeyBGQywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhdXRoLCBsb2dvdXQgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2ZpcmViYXNlL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XHJcbmltcG9ydCBVc2VDbGlja091dHNpZGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXNlQ2xpY2tPdXRzaWRlXCI7XHJcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvVXNlclNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IFRvZ2dsZUhlYWRlclVzZXI6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0b2dnbGV1c2VyLCBzZXRUb2dnbGV1c2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlciwgbG9hZGluZ10gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XHJcbiAgY29uc3QgW3VzZXJEZXRhaWxzLCBzZXRVc2VyRGV0YWlsc10gPSB1c2VTdGF0ZTxhbnk+KCk7XHJcbiAgY29uc3Qgc2hvd1VzZXJEZXRhaWxzID0gKCkgPT4ge1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgZ2V0VXNlcih1c2VyLnVpZClcclxuICAgICAgLnRoZW4ocmVzID0+IHNldFVzZXJEZXRhaWxzKHJlcy5kYXRhKSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzaG93VXNlckRldGFpbHMoKTtcclxuICB9LFt1c2VyXSlcclxuICBsZXQgZG9tTm9kZSA9IFVzZUNsaWNrT3V0c2lkZSgoKSA9PiB7XHJcbiAgICBzZXRUb2dnbGV1c2VyKGZhbHNlKTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlX2xvZyBkcm9wZG93blwiIHJlZj17ZG9tTm9kZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZXVzZXIoIXRvZ2dsZXVzZXIpfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aHVtYlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUvMi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnJvd1wiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvZm9udC1hbmdsZS1kb3duXCI+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Bkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHQgJHtcclxuICAgICAgICAgIHRvZ2dsZXVzZXIgPyBcInNob3dcIiA6IFwiXCJcclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1lbWFpbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRodW1iXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUvMi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgPGg1Pnt1c2VyRGV0YWlscz8ubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt1c2VyPy5lbWFpbH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInVzZXItYmFsYW5jZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmFpbGFibGVcIj5cclxuICAgICAgICAgICAgPHA+QXZhaWxhYmxlPC9wPlxyXG4gICAgICAgICAgICA8c3Bhbj4wLjAwIEJUQzwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbFwiPlxyXG4gICAgICAgICAgICA8cD5Ub3RhbDwvcD5cclxuICAgICAgICAgICAgPHNwYW4+MC4wMCBVU0Q8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaSBiaS1wZXJzb25cIj48L2k+UHJvZmlsZVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvd2FsbGV0XCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLXdhbGxldFwiPjwvaT5XYWxsZXRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2V0dGluZ3MtcHJvZmlsZVwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaSBiaS1nZWFyXCI+PC9pPiBTZXR0aW5nXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIHsvKiA8TGluayBocmVmPVwiL3NldHRpbmdzLWFjdGl2aXR5XCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWNsb2NrLWhpc3RvcnlcIj48L2k+IEFjdGl2aXR5XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9sb2NrXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWxvY2tcIj48L2k+TG9ja1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gbG9nb3V0XCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLXBvd2VyXCI+PC9pPiBMb2dvdXRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZUhlYWRlclVzZXI7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhdXRoIiwidXNlQXV0aFN0YXRlIiwiVXNlQ2xpY2tPdXRzaWRlIiwiZ2V0VXNlciIsIlRvZ2dsZUhlYWRlclVzZXIiLCJ0b2dnbGV1c2VyIiwic2V0VG9nZ2xldXNlciIsInVzZXIiLCJsb2FkaW5nIiwidXNlckRldGFpbHMiLCJzZXRVc2VyRGV0YWlscyIsInNob3dVc2VyRGV0YWlscyIsInVpZCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkb21Ob2RlIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwib25DbGljayIsInNwYW4iLCJpbWciLCJzcmMiLCJhbHQiLCJpIiwiaDUiLCJuYW1lIiwiZW1haWwiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layouts/dashboard/ToggleHeaderUser.tsx\n");

/***/ })

});