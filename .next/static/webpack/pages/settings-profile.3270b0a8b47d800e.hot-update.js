"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/settings-profile",{

/***/ "./src/services/endpoints.tsx":
/*!************************************!*\
  !*** ./src/services/endpoints.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _obj;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_obj = {\n    user: '/user',\n    users: '/users',\n    oneUser: function(id) {\n        return \"/user/\".concat(id);\n    }\n}, _defineProperty(_obj, \"oneUser\", function(id) {\n    return \"/user/\".concat(id);\n}), _defineProperty(_obj, \"oneKYC\", function(id) {\n    return \"/userKYC/\".concat(id);\n}), _defineProperty(_obj, \"transactions\", '/transactions'), _defineProperty(_obj, \"oneTransaction\", function(id) {\n    return \"/transaction/\".concat(id);\n}), _defineProperty(_obj, \"oneWallet\", function(id) {\n    return \"/wallet/\".concat(id);\n}), _obj);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZW5kcG9pbnRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFBZSxJQW1CZDtBQW5CRCwrREFBZSxJQW1CZDtJQWxCR0EsSUFBSSxFQUFFLENBQU87SUFDYkMsS0FBSyxFQUFFLENBQVE7SUFDZkMsT0FBTyxFQUFQQSxRQUFRQyxDQUFBQSxFQUFVLEVBQUUsQ0FBQztRQUNqQixNQUFNLENBQUUsQ0FBTSxRQUFLLE9BQUhBLEVBQUU7SUFDdEIsQ0FBQzttQkFMVSxJQW1CZCxFQWJHRCxDQUFPLFVBQVBBLFFBQVFDLENBQUFBLEVBQVUsRUFBRSxDQUFDO0lBQ2pCLE1BQU0sQ0FBRSxDQUFNLFFBQUssT0FBSEEsRUFBRTtBQUN0QixDQUFDLG1CQVJVLElBbUJkLEVBVkdDLENBQU0sU0FBTkEsUUFBUSxDQUFERCxFQUFVLEVBQUUsQ0FBQztJQUNoQixNQUFNLENBQUUsQ0FBUyxXQUFLLE9BQUhBLEVBQUU7QUFDekIsQ0FBQyxtQkFYVSxJQW1CZCxFQVBHRSxDQUFZLGVBQUUsQ0FBZSxpQ0FabEIsSUFtQmQsRUFOR0MsQ0FBYyxpQkFBZEEsUUFBUSxDQUFPSCxFQUFVLEVBQUUsQ0FBQztJQUN4QixNQUFNLENBQUUsQ0FBYSxlQUFLLE9BQUhBLEVBQUU7QUFDN0IsQ0FBQyxtQkFmVSxJQW1CZCxFQUhHSSxDQUFTLFlBQVRBLFFBQVEsQ0FBRUosRUFBVSxFQUFFLENBQUM7SUFDbkIsTUFBTSxDQUFFLENBQVEsVUFBSyxPQUFIQSxFQUFFO0FBQ3hCLENBQUMsR0FsQlUsSUFtQmQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL2VuZHBvaW50cy50c3g/MDRhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICB1c2VyOiAnL3VzZXInLFxyXG4gICAgdXNlcnM6ICcvdXNlcnMnLFxyXG4gICAgb25lVXNlcihpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGAvdXNlci8ke2lkfWBcclxuICAgIH0sXHJcbiAgICBvbmVVc2VyKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gYC91c2VyLyR7aWR9YFxyXG4gICAgfSxcclxuICAgIG9uZUtZQyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGAvdXNlcktZQy8ke2lkfWBcclxuICAgIH0sXHJcbiAgICB0cmFuc2FjdGlvbnM6ICcvdHJhbnNhY3Rpb25zJyxcclxuICAgIG9uZVRyYW5zYWN0aW9uKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gYC90cmFuc2FjdGlvbi8ke2lkfWBcclxuICAgIH0sXHJcbiAgICBvbmVXYWxsZXQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBgL3dhbGxldC8ke2lkfWBcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJ1c2VyIiwidXNlcnMiLCJvbmVVc2VyIiwiaWQiLCJvbmVLWUMiLCJ0cmFuc2FjdGlvbnMiLCJvbmVUcmFuc2FjdGlvbiIsIm9uZVdhbGxldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/endpoints.tsx\n");

/***/ })

});