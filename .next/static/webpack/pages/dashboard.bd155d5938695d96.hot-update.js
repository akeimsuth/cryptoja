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

/***/ "./src/services/UserService/index.tsx":
/*!********************************************!*\
  !*** ./src/services/UserService/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUser\": function() { return /* binding */ createUser; },\n/* harmony export */   \"updateUser\": function() { return /* binding */ updateUser; },\n/* harmony export */   \"updateUserDetails\": function() { return /* binding */ updateUserDetails; },\n/* harmony export */   \"updateKYCUser\": function() { return /* binding */ updateKYCUser; },\n/* harmony export */   \"getUser\": function() { return /* binding */ getUser; },\n/* harmony export */   \"getUsers\": function() { return /* binding */ getUsers; }\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/services/utils.tsx\");\n/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../endpoints */ \"./src/services/endpoints.tsx\");\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../axios */ \"./src/services/axios.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction createUser(params) {\n    var url = _endpoints__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user;\n    return _axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(url, params).then(_utils__WEBPACK_IMPORTED_MODULE_0__.handleResponse).catch(_utils__WEBPACK_IMPORTED_MODULE_0__.handleError);\n}\nfunction updateUser(id, params) {\n    var url = _endpoints__WEBPACK_IMPORTED_MODULE_1__[\"default\"].oneUser(id);\n    return _axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(url, params).then(_utils__WEBPACK_IMPORTED_MODULE_0__.handleResponse).catch(_utils__WEBPACK_IMPORTED_MODULE_0__.handleError);\n}\nfunction updateUserDetails(id, params) {\n    var url = _endpoints__WEBPACK_IMPORTED_MODULE_1__[\"default\"].singleUser(id);\n    return _axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(url, params).then(_utils__WEBPACK_IMPORTED_MODULE_0__.handleResponse).catch(_utils__WEBPACK_IMPORTED_MODULE_0__.handleError);\n}\nfunction updateKYCUser(id, params) {\n    var url = _endpoints__WEBPACK_IMPORTED_MODULE_1__[\"default\"].oneKYC(id);\n    return _axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(url, params).then(_utils__WEBPACK_IMPORTED_MODULE_0__.handleResponse).catch(_utils__WEBPACK_IMPORTED_MODULE_0__.handleError);\n}\nfunction getUser(id) {\n    var url = _endpoints__WEBPACK_IMPORTED_MODULE_1__[\"default\"].oneUser(id);\n    return _axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(url).then(_utils__WEBPACK_IMPORTED_MODULE_0__.handleResponse).catch(_utils__WEBPACK_IMPORTED_MODULE_0__.handleError);\n}\nfunction getUsers() {\n    var url = _endpoints__WEBPACK_IMPORTED_MODULE_1__[\"default\"].users;\n    return _axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(url).then(_utils__WEBPACK_IMPORTED_MODULE_0__.handleResponse).catch(_utils__WEBPACK_IMPORTED_MODULE_0__.handleError);\n}\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvVXNlclNlcnZpY2UvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDbEI7QUFDQTtBQUU3QixTQUFTSSxVQUFVLENBQUNDLE1BQVcsRUFBRSxDQUFDO0lBQ3JDLEdBQUssQ0FBQ0MsR0FBRyxHQUFHSix1REFBYztJQUMxQixNQUFNLENBQUNDLG1EQUFrQixDQUFDRyxHQUFHLEVBQUVELE1BQU0sRUFDaENJLElBQUksQ0FBQ1Isa0RBQWMsRUFDbkJTLEtBQUssQ0FBQ1YsK0NBQVc7QUFDMUIsQ0FBQztBQUVNLFNBQVNXLFVBQVUsQ0FBQ0MsRUFBVSxFQUFFUCxNQUFXLEVBQUUsQ0FBQztJQUNqRCxHQUFLLENBQUNDLEdBQUcsR0FBR0osMERBQWlCLENBQUNVLEVBQUU7SUFDaEMsTUFBTSxDQUFDVCxrREFBaUIsQ0FBQ0csR0FBRyxFQUFFRCxNQUFNLEVBQy9CSSxJQUFJLENBQUNSLGtEQUFjLEVBQ25CUyxLQUFLLENBQUNWLCtDQUFXO0FBQzFCLENBQUM7QUFFTSxTQUFTZSxpQkFBaUIsQ0FBQ0gsRUFBVSxFQUFFUCxNQUFXLEVBQUUsQ0FBQztJQUN4RCxHQUFLLENBQUNDLEdBQUcsR0FBR0osNkRBQW9CLENBQUNVLEVBQUU7SUFDbkMsTUFBTSxDQUFDVCxrREFBaUIsQ0FBQ0csR0FBRyxFQUFFRCxNQUFNLEVBQy9CSSxJQUFJLENBQUNSLGtEQUFjLEVBQ25CUyxLQUFLLENBQUNWLCtDQUFXO0FBQzFCLENBQUM7QUFFTSxTQUFTaUIsYUFBYSxDQUFDTCxFQUFVLEVBQUVQLE1BQVcsRUFBRSxDQUFDO0lBQ3BELEdBQUssQ0FBQ0MsR0FBRyxHQUFHSix5REFBZ0IsQ0FBQ1UsRUFBRTtJQUMvQixNQUFNLENBQUNULGtEQUFpQixDQUFDRyxHQUFHLEVBQUVELE1BQU0sRUFDL0JJLElBQUksQ0FBQ1Isa0RBQWMsRUFDbkJTLEtBQUssQ0FBQ1YsK0NBQVc7QUFDMUIsQ0FBQztBQUVNLFNBQVNtQixPQUFPLENBQUNQLEVBQVUsRUFBRSxDQUFDO0lBQ2pDLEdBQUssQ0FBQ04sR0FBRyxHQUFHSiwwREFBaUIsQ0FBQ1UsRUFBRTtJQUNoQyxNQUFNLENBQUNULGtEQUFpQixDQUFDRyxHQUFHLEVBQ3ZCRyxJQUFJLENBQUNSLGtEQUFjLEVBQ25CUyxLQUFLLENBQUNWLCtDQUFXO0FBQzFCLENBQUM7QUFFTSxTQUFTcUIsUUFBUSxHQUFHLENBQUM7SUFDeEIsR0FBSyxDQUFDZixHQUFHLEdBQUdKLHdEQUFlO0lBQzNCLE1BQU0sQ0FBQ0Msa0RBQWlCLENBQUNHLEdBQUcsRUFDdkJHLElBQUksQ0FBQ1Isa0RBQWMsRUFDbkJTLEtBQUssQ0FBQ1YsK0NBQVc7QUFDMUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvVXNlclNlcnZpY2UvaW5kZXgudHN4PzYwNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlRXJyb3IsIGhhbmRsZVJlc3BvbnNlIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgZW5kcG9pbnRzIGZyb20gJy4uL2VuZHBvaW50cyc7XHJcbmltcG9ydCBheGlvc0luc3RhbmNlIGZyb20gJy4uL2F4aW9zJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVc2VyKHBhcmFtczogYW55KSB7XHJcbiAgICBjb25zdCB1cmwgPSBlbmRwb2ludHMudXNlcjtcclxuICAgIHJldHVybiBheGlvc0luc3RhbmNlLnBvc3QodXJsLCBwYXJhbXMpXHJcbiAgICAgICAgLnRoZW4oaGFuZGxlUmVzcG9uc2UpXHJcbiAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVVzZXIoaWQ6IHN0cmluZywgcGFyYW1zOiBhbnkpIHtcclxuICAgIGNvbnN0IHVybCA9IGVuZHBvaW50cy5vbmVVc2VyKGlkKTtcclxuICAgIHJldHVybiBheGlvc0luc3RhbmNlLnB1dCh1cmwsIHBhcmFtcylcclxuICAgICAgICAudGhlbihoYW5kbGVSZXNwb25zZSlcclxuICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVXNlckRldGFpbHMoaWQ6IHN0cmluZywgcGFyYW1zOiBhbnkpIHtcclxuICAgIGNvbnN0IHVybCA9IGVuZHBvaW50cy5zaW5nbGVVc2VyKGlkKTtcclxuICAgIHJldHVybiBheGlvc0luc3RhbmNlLnB1dCh1cmwsIHBhcmFtcylcclxuICAgICAgICAudGhlbihoYW5kbGVSZXNwb25zZSlcclxuICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlS1lDVXNlcihpZDogc3RyaW5nLCBwYXJhbXM6IGFueSkge1xyXG4gICAgY29uc3QgdXJsID0gZW5kcG9pbnRzLm9uZUtZQyhpZCk7XHJcbiAgICByZXR1cm4gYXhpb3NJbnN0YW5jZS5wdXQodXJsLCBwYXJhbXMpXHJcbiAgICAgICAgLnRoZW4oaGFuZGxlUmVzcG9uc2UpXHJcbiAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXIoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgdXJsID0gZW5kcG9pbnRzLm9uZVVzZXIoaWQpO1xyXG4gICAgcmV0dXJuIGF4aW9zSW5zdGFuY2UuZ2V0KHVybClcclxuICAgICAgICAudGhlbihoYW5kbGVSZXNwb25zZSlcclxuICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlcnMoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBlbmRwb2ludHMudXNlcnM7XHJcbiAgICByZXR1cm4gYXhpb3NJbnN0YW5jZS5nZXQodXJsKVxyXG4gICAgICAgIC50aGVuKGhhbmRsZVJlc3BvbnNlKVxyXG4gICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XHJcbn0iXSwibmFtZXMiOlsiaGFuZGxlRXJyb3IiLCJoYW5kbGVSZXNwb25zZSIsImVuZHBvaW50cyIsImF4aW9zSW5zdGFuY2UiLCJjcmVhdGVVc2VyIiwicGFyYW1zIiwidXJsIiwidXNlciIsInBvc3QiLCJ0aGVuIiwiY2F0Y2giLCJ1cGRhdGVVc2VyIiwiaWQiLCJvbmVVc2VyIiwicHV0IiwidXBkYXRlVXNlckRldGFpbHMiLCJzaW5nbGVVc2VyIiwidXBkYXRlS1lDVXNlciIsIm9uZUtZQyIsImdldFVzZXIiLCJnZXQiLCJnZXRVc2VycyIsInVzZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/UserService/index.tsx\n");

/***/ })

});