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

/***/ "./src/layouts/dashboard/ToggleHeaderUser.tsx":
/*!****************************************************!*\
  !*** ./src/layouts/dashboard/ToggleHeaderUser.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/link */ \"./node_modules/next/dist/client/link.js\");\n/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/firebase/firebase */ \"./src/firebase/firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _components_UseClickOutside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/UseClickOutside */ \"./src/components/UseClickOutside.tsx\");\n/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/UserService */ \"./src/services/UserService/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar ToggleHeaderUser = function() {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), toggleuser = ref[0], setToggleuser = ref[1];\n    var ref1 = _slicedToArray((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_src_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__.auth), 2), user = ref1[0], loading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), userDetails = ref2[0], setUserDetails = ref2[1];\n    var showUserDetails = function() {\n        if (user) {\n            (0,_services_UserService__WEBPACK_IMPORTED_MODULE_6__.getUser)(user.uid).then(function(res) {\n                return setUserDetails(res.data);\n            }).catch(function(error) {\n                return console.log(error);\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        showUserDetails();\n    }, [\n        user\n    ]);\n    var domNode = (0,_components_UseClickOutside__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n        setToggleuser(false);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"profile_log dropdown\",\n        ref: domNode,\n        __source: {\n            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n            lineNumber: 28,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"user\",\n                onClick: function() {\n                    return setToggleuser(!toggleuser);\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"thumb\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/images/profile/2.png\",\n                            alt: \"\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"arrow\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                            className: \"icofont-angle-down\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"dropdown-menu dropdown-menu-right \".concat(toggleuser ? \"show\" : \"\"),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"user-email\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"user\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"thumb\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                        src: \"/images/profile/2.png\",\n                                        alt: \"\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"user-info\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h5\", {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 15\n                                            },\n                                            __self: _this,\n                                            children: userDetails === null || userDetails === void 0 ? void 0 : userDetails.name\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 15\n                                            },\n                                            __self: _this,\n                                            children: user === null || user === void 0 ? void 0 : user.email\n                                        })\n                                    ]\n                                })\n                            ]\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/settings-profile\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                            className: \"dropdown-item\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                    className: \"bi bi-gear\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this\n                                }),\n                                \" Setting\"\n                            ]\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/signin\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                            className: \"dropdown-item logout\",\n                            onClick: function() {\n                                return (0,_src_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__.logout)();\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                    className: \"bi bi-power\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\layouts\\\\dashboard\\\\ToggleHeaderUser.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this\n                                }),\n                                \" Logout\"\n                            ]\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s1(ToggleHeaderUser, \"gau9QXCqgQR8ARYy3Btk7K+W/V8=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState\n    ];\n});\n_c = ToggleHeaderUser;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToggleHeaderUser);\nvar _c;\n$RefreshReg$(_c, \"ToggleHeaderUser\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9kYXNoYm9hcmQvVG9nZ2xlSGVhZGVyVXNlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUVPO0FBQ2M7QUFDTDtBQUNNO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsR0FBSyxDQUFDUSxnQkFBZ0IsR0FBTyxRQUFRLEdBQUYsQ0FBQzs7SUFDbEMsR0FBSyxDQUErQlAsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBM0NRLFVBQVUsR0FBbUJSLEdBQWUsS0FBaENTLGFBQWEsR0FBSVQsR0FBZTtJQUNuRCxHQUFLLENBQW1CSSxJQUFrQixrQkFBbEJBLHVFQUFZLENBQUNGLHdEQUFJLE9BQWxDUSxJQUFJLEdBQWFOLElBQWtCLEtBQTdCTyxPQUFPLEdBQUlQLElBQWtCO0lBQzFDLEdBQUssQ0FBaUNKLElBQWUsR0FBZkEsK0NBQVEsSUFBdkNZLFdBQVcsR0FBb0JaLElBQWUsS0FBakNhLGNBQWMsR0FBSWIsSUFBZTtJQUNyRCxHQUFLLENBQUNjLGVBQWUsR0FBRyxRQUFRLEdBQUYsQ0FBQztRQUM3QixFQUFFLEVBQUVKLElBQUksRUFBRSxDQUFDO1lBQ1RKLDhEQUFPLENBQUNJLElBQUksQ0FBQ0ssR0FBRyxFQUNmQyxJQUFJLENBQUNDLFFBQVEsQ0FBUkEsR0FBRztnQkFBSUosTUFBTSxDQUFOQSxjQUFjLENBQUNJLEdBQUcsQ0FBQ0MsSUFBSTtlQUNuQ0MsS0FBSyxDQUFDQyxRQUFRLENBQVJBLEtBQUs7Z0JBQUlDLE1BQU0sQ0FBTkEsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUs7O1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRURuQixnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2ZhLGVBQWU7SUFDakIsQ0FBQyxFQUFDLENBQUNKO1FBQUFBLElBQUk7SUFBQSxDQUFDO0lBQ1IsR0FBRyxDQUFDYSxPQUFPLEdBQUdsQix1RUFBZSxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ25DSSxhQUFhLENBQUMsS0FBSztJQUNyQixDQUFDO0lBQ0QsTUFBTSx1RUFDSGUsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBc0I7UUFBQ0MsR0FBRyxFQUFFSCxPQUFPOzs7Ozs7OztrRkFDL0NDLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFNO2dCQUFDRSxPQUFPLEVBQUUsUUFBUTtvQkFBRmxCLE1BQU0sQ0FBTkEsYUFBYSxFQUFFRCxVQUFVOzs7Ozs7Ozs7eUZBQzNEb0IsQ0FBSTt3QkFBQ0gsU0FBUyxFQUFDLENBQU87Ozs7Ozs7dUdBQ3BCSSxDQUFHOzRCQUFDQyxHQUFHLEVBQUMsQ0FBdUI7NEJBQUNDLEdBQUcsRUFBQyxDQUFFOzs7Ozs7Ozs7eUZBRXhDSCxDQUFJO3dCQUFDSCxTQUFTLEVBQUMsQ0FBTzs7Ozs7Ozt1R0FDcEJPLENBQUM7NEJBQUNQLFNBQVMsRUFBQyxDQUFvQjs7Ozs7Ozs7Ozs7a0ZBR3BDRCxDQUFHO2dCQUNGQyxTQUFTLEVBQUcsQ0FBa0Msb0NBRTdDLE9BRENqQixVQUFVLEdBQUcsQ0FBTSxRQUFHLENBQUU7Ozs7Ozs7O3lGQUd6QmdCLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFZOzs7Ozs7O3dHQUN4QkQsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQU07Ozs7Ozs7O3FHQUNsQkcsQ0FBSTtvQ0FBQ0gsU0FBUyxFQUFDLENBQU87Ozs7Ozs7bUhBQ3BCSSxDQUFHO3dDQUFDQyxHQUFHLEVBQUMsQ0FBdUI7d0NBQUNDLEdBQUcsRUFBQyxDQUFFOzs7Ozs7Ozs7c0dBRXhDUCxDQUFHO29DQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs7NkdBQ3ZCUSxDQUFFOzs7Ozs7O3NEQUFFckIsV0FBVyxhQUFYQSxXQUFXLEtBQVhBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLFdBQVcsQ0FBRXNCLElBQUk7OzZHQUNyQk4sQ0FBSTs7Ozs7OztzREFBRWxCLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLElBQUksQ0FBRXlCLEtBQUs7Ozs7Ozs7eUZBeUJ2QnBDLDhEQUFJO3dCQUFDcUMsSUFBSSxFQUFDLENBQW1COzs7Ozs7O3dHQUMzQkMsQ0FBQzs0QkFBQ1osU0FBUyxFQUFDLENBQWU7Ozs7Ozs7O3FHQUN6Qk8sQ0FBQztvQ0FBQ1AsU0FBUyxFQUFDLENBQVk7Ozs7Ozs7O2dDQUFLLENBQ2hDOzs7O3lGQVlEMUIsOERBQUk7d0JBQUNxQyxJQUFJLEVBQUMsQ0FBUzs7Ozs7Ozt3R0FDakJDLENBQUM7NEJBQUNaLFNBQVMsRUFBQyxDQUFzQjs0QkFBQ0UsT0FBTyxFQUFFLFFBQVE7Z0NBQUZ4QixNQUFNLENBQU5BLDhEQUFNOzs7Ozs7Ozs7cUdBQ3RENkIsQ0FBQztvQ0FBQ1AsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7O2dDQUFLLENBQ2pDOzs7Ozs7OztBQUtWLENBQUM7SUF4RktsQixnQkFBZ0I7O1FBRUlILG1FQUFZOzs7S0FGaENHLGdCQUFnQjtBQTBGdEIsK0RBQWVBLGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXRzL2Rhc2hib2FyZC9Ub2dnbGVIZWFkZXJVc2VyLnRzeD9hYzBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IEZDLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGF1dGgsIGxvZ291dCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvZmlyZWJhc2UvZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIjtcclxuaW1wb3J0IFVzZUNsaWNrT3V0c2lkZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Vc2VDbGlja091dHNpZGVcIjtcclxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9Vc2VyU2VydmljZVwiO1xyXG5cclxuY29uc3QgVG9nZ2xlSGVhZGVyVXNlcjogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZXVzZXIsIHNldFRvZ2dsZXVzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VyLCBsb2FkaW5nXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcclxuICBjb25zdCBbdXNlckRldGFpbHMsIHNldFVzZXJEZXRhaWxzXSA9IHVzZVN0YXRlPGFueT4oKTtcclxuICBjb25zdCBzaG93VXNlckRldGFpbHMgPSAoKSA9PiB7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBnZXRVc2VyKHVzZXIudWlkKVxyXG4gICAgICAudGhlbihyZXMgPT4gc2V0VXNlckRldGFpbHMocmVzLmRhdGEpKVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNob3dVc2VyRGV0YWlscygpO1xyXG4gIH0sW3VzZXJdKVxyXG4gIGxldCBkb21Ob2RlID0gVXNlQ2xpY2tPdXRzaWRlKCgpID0+IHtcclxuICAgIHNldFRvZ2dsZXVzZXIoZmFsc2UpO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVfbG9nIGRyb3Bkb3duXCIgcmVmPXtkb21Ob2RlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCIgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xldXNlcighdG9nZ2xldXNlcil9PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRodW1iXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcHJvZmlsZS8yLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29mb250LWFuZ2xlLWRvd25cIj48L2k+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodCAke1xyXG4gICAgICAgICAgdG9nZ2xldXNlciA/IFwic2hvd1wiIDogXCJcIlxyXG4gICAgICAgIH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWVtYWlsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGh1bWJcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcHJvZmlsZS8yLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICA8aDU+e3VzZXJEZXRhaWxzPy5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3VzZXI/LmVtYWlsfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidXNlci1iYWxhbmNlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YWlsYWJsZVwiPlxyXG4gICAgICAgICAgICA8cD5BdmFpbGFibGU8L3A+XHJcbiAgICAgICAgICAgIDxzcGFuPjAuMDAgQlRDPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsXCI+XHJcbiAgICAgICAgICAgIDxwPlRvdGFsPC9wPlxyXG4gICAgICAgICAgICA8c3Bhbj4wLjAwIFVTRDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLXBlcnNvblwiPjwvaT5Qcm9maWxlXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICB7LyogPExpbmsgaHJlZj1cIi93YWxsZXRcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktd2FsbGV0XCI+PC9pPldhbGxldFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zZXR0aW5ncy1wcm9maWxlXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWdlYXJcIj48L2k+IFNldHRpbmdcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvc2V0dGluZ3MtYWN0aXZpdHlcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktY2xvY2staGlzdG9yeVwiPjwvaT4gQWN0aXZpdHlcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgIHsvKiA8TGluayBocmVmPVwiL2xvY2tcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktbG9ja1wiPjwvaT5Mb2NrXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBsb2dvdXRcIiBvbkNsaWNrPXsoKSA9PiBsb2dvdXQoKX0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLXBvd2VyXCI+PC9pPiBMb2dvdXRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZUhlYWRlclVzZXI7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhdXRoIiwibG9nb3V0IiwidXNlQXV0aFN0YXRlIiwiVXNlQ2xpY2tPdXRzaWRlIiwiZ2V0VXNlciIsIlRvZ2dsZUhlYWRlclVzZXIiLCJ0b2dnbGV1c2VyIiwic2V0VG9nZ2xldXNlciIsInVzZXIiLCJsb2FkaW5nIiwidXNlckRldGFpbHMiLCJzZXRVc2VyRGV0YWlscyIsInNob3dVc2VyRGV0YWlscyIsInVpZCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkb21Ob2RlIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwib25DbGljayIsInNwYW4iLCJpbWciLCJzcmMiLCJhbHQiLCJpIiwiaDUiLCJuYW1lIiwiZW1haWwiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layouts/dashboard/ToggleHeaderUser.tsx\n");

/***/ })

});