"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/wallet",{

/***/ "./src/components/ApproveDocuments.tsx":
/*!*********************************************!*\
  !*** ./src/components/ApproveDocuments.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _SuccessModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SuccessModal */ \"./src/components/SuccessModal.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ApproveDocuments = function(param) {\n    var show = param.show, close = param.close, values = param.values, onComplete = param.onComplete;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), successModal = ref[0], setSuccessModal = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n            lineNumber: 14,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SuccessModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                show: successModal,\n                close: setSuccessModal,\n                footerOff: true,\n                text: \"KYC documents have been approved!\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n                className: \"modal fade\",\n                id: \"BuyModal\",\n                show: show,\n                onHide: function() {\n                    return close(false);\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"modal-content border-0\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"modal-header\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h5\", {\n                                    className: \"modal-title\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: \"Approve details for \".concat(values === null || values === void 0 ? void 0 : values.name)\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                    type: \"button\",\n                                    className: \"btn-close\",\n                                    \"data-dismiss\": \"modal\",\n                                    \"aria-label\": \"Close\",\n                                    onClick: function() {\n                                        return close(false);\n                                    },\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"modal-body\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"form\", {\n                                onSubmit: function(e) {\n                                    return e.preventDefault();\n                                },\n                                className: \"identity-upload\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"row g-3\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                            className: \"col-xl-12\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 15\n                                            },\n                                            __self: _this,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"label\", {\n                                                    className: \"form-label\",\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 17\n                                                    },\n                                                    __self: _this,\n                                                    children: [\n                                                        \"\".concat(values === null || values === void 0 ? void 0 : values.idType, \" front image\"),\n                                                        \" \"\n                                                    ]\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                    src: values === null || values === void 0 ? void 0 : values.idFront[0],\n                                                    alt: \"\",\n                                                    className: \"img-fluid\",\n                                                    width: \"300\",\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                                                        lineNumber: 88,\n                                                        columnNumber: 17\n                                                    },\n                                                    __self: _this\n                                                })\n                                            ]\n                                        }),\n                                        (values === null || values === void 0 ? void 0 : values.idType) !== \"passport\" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                            className: \"col-xl-12\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"label\", {\n                                                    className: \"form-label\",\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: _this,\n                                                    children: [\n                                                        \"\".concat(values === null || values === void 0 ? void 0 : values.idType, \" back image\"),\n                                                        \" \"\n                                                    ]\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                    src: values === null || values === void 0 ? void 0 : values.idBack[0],\n                                                    alt: \"\",\n                                                    className: \"img-fluid\",\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: _this\n                                                })\n                                            ]\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                            className: \"col-xl-12\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 15\n                                            },\n                                            __self: _this,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"label\", {\n                                                    className: \"form-label\",\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                                                        lineNumber: 97,\n                                                        columnNumber: 15\n                                                    },\n                                                    __self: _this,\n                                                    children: [\n                                                        \"\".concat(values === null || values === void 0 ? void 0 : values.idType, \" selfie\"),\n                                                        \" \"\n                                                    ]\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                    src: values === null || values === void 0 ? void 0 : values.selfie[0],\n                                                    alt: \"\",\n                                                    className: \"img-fluid\",\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                                                        lineNumber: 98,\n                                                        columnNumber: 17\n                                                    },\n                                                    __self: _this\n                                                })\n                                            ]\n                                        })\n                                    ]\n                                })\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"modal-footer\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                type: \"button\",\n                                className: \"btn btn-success\",\n                                \"data-dismiss\": \"modal\",\n                                \"data-toggle\": \"modal\",\n                                \"data-target\": \"#successBankAccount\",\n                                onClick: function() {\n                                    close(false);\n                                    setSuccessModal(true);\n                                    onComplete();\n                                },\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Visucom\\\\Documents\\\\tendex\\\\src\\\\components\\\\ApproveDocuments.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Approve\"\n                            })\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(ApproveDocuments, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = ApproveDocuments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ApproveDocuments);\nvar _c;\n$RefreshReg$(_c, \"ApproveDocuments\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHByb3ZlRG9jdW1lbnRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEM7QUFFUDtBQUNFOzs7QUFFekMsR0FBSyxDQUFDSSxnQkFBZ0IsR0FBd0UsUUFDMUYsUUFJRSxDQUFDO1FBSkxDLElBQUksU0FBSkEsSUFBSSxFQUNKQyxLQUFLLFNBQUxBLEtBQUssRUFDTEMsTUFBTSxTQUFOQSxNQUFNLEVBQ05DLFVBQVUsU0FBVkEsVUFBVTs7SUFFVixHQUFLLENBQW1DUCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUEvQ1EsWUFBWSxHQUFxQlIsR0FBZSxLQUFsQ1MsZUFBZSxHQUFJVCxHQUFlO0lBQ3ZELE1BQU0sdUVBQ0hELDJDQUFROzs7Ozs7OztpRkFDTkcscURBQVk7Z0JBQ1hFLElBQUksRUFBRUksWUFBWTtnQkFDbEJILEtBQUssRUFBRUksZUFBZTtnQkFDdEJDLFNBQVM7Z0JBQ1RDLElBQUksRUFBQyxDQUFtQzs7Ozs7Ozs7aUZBRXpDVixrREFBSztnQkFDSlcsU0FBUyxFQUFDLENBQVk7Z0JBQ3RCQyxFQUFFLEVBQUMsQ0FBVTtnQkFDYlQsSUFBSSxFQUFFQSxJQUFJO2dCQUNWVSxNQUFNLEVBQUUsUUFBUTtvQkFBRlQsTUFBTSxDQUFOQSxLQUFLLENBQUMsS0FBSzs7Ozs7Ozs7Z0dBRXhCVSxDQUFHO29CQUFDSCxTQUFTLEVBQUMsQ0FBd0I7Ozs7Ozs7OzhGQUNwQ0csQ0FBRzs0QkFBQ0gsU0FBUyxFQUFDLENBQWM7Ozs7Ozs7O3FHQUMxQkksQ0FBRTtvQ0FBQ0osU0FBUyxFQUFDLENBQWE7Ozs7Ozs7OENBQUcsQ0FBb0Isc0JBQWUsT0FBYk4sTUFBTSxhQUFOQSxNQUFNLEtBQU5BLElBQUksQ0FBSkEsQ0FBWSxHQUFaQSxJQUFJLENBQUpBLENBQVksR0FBWkEsTUFBTSxDQUFFVyxJQUFJOztxR0FDL0RDLENBQU07b0NBQ0xDLElBQUksRUFBQyxDQUFRO29DQUNiUCxTQUFTLEVBQUMsQ0FBVztvQ0FD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UUFBUSxHQUFGLENBQUM7b0NBQ2RqQixLQUFLLENBQUMsS0FBSztvQ0FDWEksZUFBZSxDQUFDLElBQUk7b0NBQ3BCRixVQUFVO2dDQUNaLENBQUM7Ozs7Ozs7MENBQ0YsQ0FFRDs7Ozs7Ozs7QUFNWixDQUFDO0dBdkhLSixnQkFBZ0I7S0FBaEJBLGdCQUFnQjtBQXlIdEIsK0RBQWVBLGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FwcHJvdmVEb2N1bWVudHMudHN4PzkxNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMsIEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBTdWNjZXNzTW9kYWwgZnJvbSBcIi4vU3VjY2Vzc01vZGFsXCI7XHJcblxyXG5jb25zdCBBcHByb3ZlRG9jdW1lbnRzOiBGQzx7IHNob3c/OiBib29sZWFuOyBjbG9zZT86IGFueSwgdmFsdWVzPzogYW55LCBvbkNvbXBsZXRlPzogYW55IH0+ID0gKHtcclxuICBzaG93LFxyXG4gIGNsb3NlLFxyXG4gIHZhbHVlcyxcclxuICBvbkNvbXBsZXRlXHJcbn0pID0+IHtcclxuICBjb25zdCBbc3VjY2Vzc01vZGFsLCBzZXRTdWNjZXNzTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxTdWNjZXNzTW9kYWxcclxuICAgICAgICBzaG93PXtzdWNjZXNzTW9kYWx9XHJcbiAgICAgICAgY2xvc2U9e3NldFN1Y2Nlc3NNb2RhbH1cclxuICAgICAgICBmb290ZXJPZmZcclxuICAgICAgICB0ZXh0PVwiS1lDIGRvY3VtZW50cyBoYXZlIGJlZW4gYXBwcm92ZWQhXCJcclxuICAgICAgLz5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9XCJCdXlNb2RhbFwiXHJcbiAgICAgICAgc2hvdz17c2hvd31cclxuICAgICAgICBvbkhpZGU9eygpID0+IGNsb3NlKGZhbHNlKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudCBib3JkZXItMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e2BBcHByb3ZlIGRldGFpbHMgZm9yICR7dmFsdWVzPy5uYW1lfWB9PC9oNT5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1jbG9zZVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2xvc2UoZmFsc2UpfVxyXG4gICAgICAgICAgICA+PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgIHsvKiB7dmFsdWVzPy5pZFR5cGUgPT09IFwicGFzc3BvcnRcIiA/XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpZGVudGl0eS11cGxvYWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZy0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPk5hbWUgb24gUGFzc3BvcnQgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIyNTQ4N1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcz8ucGFzc3BvcnROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkRhdGUgb2YgUGFzc3BvcnQgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIzNjQ3NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcz8ucGFzc3BvcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlBhc3Nwb3J0IE51bWJlciA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkphbm5hdHVsIE1hb3dhXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzPy5wYXNzcG9ydE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3JvdXRpbmcucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+ICovfVxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWRlbnRpdHktdXBsb2FkXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+e2Ake3ZhbHVlcz8uaWRUeXBlfSBmcm9udCBpbWFnZWB9IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17dmFsdWVzPy5pZEZyb250WzBdfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiB3aWR0aD1cIjMwMFwiLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7dmFsdWVzPy5pZFR5cGUgIT09IFwicGFzc3BvcnRcIiAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj57YCR7dmFsdWVzPy5pZFR5cGV9IGJhY2sgaW1hZ2VgfSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dmFsdWVzPy5pZEJhY2tbMF19IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMTJcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPntgJHt2YWx1ZXM/LmlkVHlwZX0gc2VsZmllYH0gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2YWx1ZXM/LnNlbGZpZVswXX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI3N1Y2Nlc3NCYW5rQWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xvc2UoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3VjY2Vzc01vZGFsKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBcHByb3ZlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHByb3ZlRG9jdW1lbnRzO1xyXG4iXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJ1c2VTdGF0ZSIsIk1vZGFsIiwiU3VjY2Vzc01vZGFsIiwiQXBwcm92ZURvY3VtZW50cyIsInNob3ciLCJjbG9zZSIsInZhbHVlcyIsIm9uQ29tcGxldGUiLCJzdWNjZXNzTW9kYWwiLCJzZXRTdWNjZXNzTW9kYWwiLCJmb290ZXJPZmYiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiaWQiLCJvbkhpZGUiLCJkaXYiLCJoNSIsIm5hbWUiLCJidXR0b24iLCJ0eXBlIiwiZGF0YS1kaXNtaXNzIiwiYXJpYS1sYWJlbCIsIm9uQ2xpY2siLCJmb3JtIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJsYWJlbCIsImlkVHlwZSIsImltZyIsInNyYyIsImlkRnJvbnQiLCJhbHQiLCJ3aWR0aCIsImlkQmFjayIsInNlbGZpZSIsImRhdGEtdG9nZ2xlIiwiZGF0YS10YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ApproveDocuments.tsx\n");

/***/ })

});