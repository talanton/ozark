"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _consts_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @consts/paths */ \"./src/consts/paths.ts\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nvar getRootUrl = function() {\n    if (process.env.NEXT_PUBLIC_VERCEL_ENV === \"production\") return process.env.NEXT_PUBLIC_SITE_URL || \"missing NEXT_PUBLIC_SITE_URL env\";\n    return process.env.NEXT_PUBLIC_VERCEL_URL ? \"https://\".concat(process.env.NEXT_PUBLIC_VERCEL_URL) : \"http://localhost:3001\";\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    app: {\n        title: \"Talanton | Innovation First\",\n        description: \"Modern applications are distributed, interconnected, and have Zero-Trust in network boundaries. These applications must exchange data with Trust. Talanton empowers developers to build applications that can Trust Data-in-Motion across complex, variable, and hostile networks. Ockam has a simple developer experience and powerful primitives that orchestrate end-to-end encryption, key management, authorization policy enforcement, and mutual authentication.\",\n        rootUrl: getRootUrl(),\n        recaptchaSiteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY || \"6LfIDtwUAAAAAIt2vgTj7LTIJ9tqwlNKV4fZecbK\"\n    },\n    salesforce: {\n        oid: \"00D4T000000FcUg\",\n        actionUrl: \"\",\n        returnUrl: \"\".concat(getRootUrl()).concat(_consts_paths__WEBPACK_IMPORTED_MODULE_0__.CONTACT_PAGE_PATH)\n    },\n    lever: {\n        siteName: \"ockam\",\n        apiUrl: \"\"\n    },\n    github: {\n        ownerName: \"build-trust\",\n        apiUrl: \"\"\n    },\n    crates: {\n        apiUrl: \"\",\n        projectsNames: [\n            \"ockam\",\n            \"ockam_macros\",\n            \"ockam_core\",\n            \"ockam_vault\",\n            \"ockam_signature_core\",\n            \"ockam_transport_websocket\",\n            \"ockam_signature_bls\",\n            \"ockam_vault_test_suite\",\n            \"ockam_node\",\n            \"ockam_signature_bbs\",\n            \"ockam_vault_core\",\n            \"ockam_node_attribute\",\n            \"ockam_executor\",\n            \"ockam_key_exchange_xx\",\n            \"ockam_key_exchange_core\",\n            \"ockam_key_exchange_x3dh\",\n            \"ockam_transport_tcp\",\n            \"ockam-ffi\",\n            \"ockam_transport_core\",\n            \"ockam_credential\",\n            \"ockam_entity\",\n            \"ockam_identity\",\n            \"ockam_node_no_std\",\n            \"ockam_transport_ble\",\n            \"ockam_vault_test_attribute\",\n            \"ockam_node_test_attribute\",\n            \"ockam_examples\",\n            \"ockam_vault_sync_core\",\n            \"ockam_channel\",\n            \"ockam_message_derive\",\n            \"ockam_macro\",\n            \"ockam_api\",\n            \"ockam_multiaddr\",\n            \"signature_core\",\n            \"signature_bbs_plus\",\n            \"signature_bls\",\n            \"signature_ps\", \n        ]\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnLnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFrRDtBQUVsRCxJQUFNQyxVQUFVLEdBQUcsV0FBYztJQUMvQixJQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Msc0JBQXNCLEtBQUssWUFBWSxFQUNyRCxPQUFPRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0Usb0JBQW9CLElBQUksa0NBQWtDLENBQUM7SUFFaEYsT0FBT0gsT0FBTyxDQUFDQyxHQUFHLENBQUNHLHNCQUFzQixHQUNyQyxVQUFTLENBQXFDLE9BQW5DSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0csc0JBQXNCLENBQUUsR0FDL0MsdUJBQXVCLENBQUM7Q0FDN0I7QUFFRCwrREFBZTtJQUNiQyxHQUFHLEVBQUU7UUFDSEMsS0FBSyxFQUFFLDZCQUE2QjtRQUNwQ0MsV0FBVyxFQUFHLHljQUF1YztRQUNyZEMsT0FBTyxFQUFFVCxVQUFVLEVBQUU7UUFDckJVLGdCQUFnQixFQUNkVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1MsNkJBQTZCLElBQUksMENBQTBDO0tBQzFGO0lBQ0RDLFVBQVUsRUFBRTtRQUNWQyxHQUFHLEVBQUUsaUJBQWlCO1FBQ3RCQyxTQUFTLEVBQUUsRUFBRTtRQUNiQyxTQUFTLEVBQUUsRUFBQyxDQUFpQmhCLE1BQWlCLENBQWhDQyxVQUFVLEVBQUUsQ0FBcUIsUUFBbEJELDREQUFpQixDQUFFO0tBQ2pEO0lBQ0RpQixLQUFLLEVBQUU7UUFDTEMsUUFBUSxFQUFFLE9BQU87UUFDakJDLE1BQU0sRUFBRSxFQUFFO0tBQ1g7SUFDREMsTUFBTSxFQUFFO1FBQ05DLFNBQVMsRUFBRSxhQUFhO1FBQ3hCRixNQUFNLEVBQUUsRUFBRTtLQUNYO0lBQ0RHLE1BQU0sRUFBRTtRQUNOSCxNQUFNLEVBQUUsRUFBRTtRQUNWSSxhQUFhLEVBQUU7WUFDYixPQUFPO1lBQ1AsY0FBYztZQUNkLFlBQVk7WUFDWixhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLDJCQUEyQjtZQUMzQixxQkFBcUI7WUFDckIsd0JBQXdCO1lBQ3hCLFlBQVk7WUFDWixxQkFBcUI7WUFDckIsa0JBQWtCO1lBQ2xCLHNCQUFzQjtZQUN0QixnQkFBZ0I7WUFDaEIsdUJBQXVCO1lBQ3ZCLHlCQUF5QjtZQUN6Qix5QkFBeUI7WUFDekIscUJBQXFCO1lBQ3JCLFdBQVc7WUFDWCxzQkFBc0I7WUFDdEIsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQiw0QkFBNEI7WUFDNUIsMkJBQTJCO1lBQzNCLGdCQUFnQjtZQUNoQix1QkFBdUI7WUFDdkIsZUFBZTtZQUNmLHNCQUFzQjtZQUN0QixhQUFhO1lBQ2IsV0FBVztZQUNYLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZixjQUFjO1NBQ2Y7S0FDRjtDQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbmZpZy50cz9kNDFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENPTlRBQ1RfUEFHRV9QQVRIIH0gZnJvbSAnQGNvbnN0cy9wYXRocyc7XG5cbmNvbnN0IGdldFJvb3RVcmwgPSAoKTogc3RyaW5nID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1ZFUkNFTF9FTlYgPT09ICdwcm9kdWN0aW9uJylcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0lURV9VUkwgfHwgJ21pc3NpbmcgTkVYVF9QVUJMSUNfU0lURV9VUkwgZW52JztcblxuICByZXR1cm4gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVkVSQ0VMX1VSTFxuICAgID8gYGh0dHBzOi8vJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19WRVJDRUxfVVJMfWBcbiAgICA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhcHA6IHtcbiAgICB0aXRsZTogJ1RhbGFudG9uIHwgSW5ub3ZhdGlvbiBGaXJzdCcsXG4gICAgZGVzY3JpcHRpb246IGBNb2Rlcm4gYXBwbGljYXRpb25zIGFyZSBkaXN0cmlidXRlZCwgaW50ZXJjb25uZWN0ZWQsIGFuZCBoYXZlIFplcm8tVHJ1c3QgaW4gbmV0d29yayBib3VuZGFyaWVzLiBUaGVzZSBhcHBsaWNhdGlvbnMgbXVzdCBleGNoYW5nZSBkYXRhIHdpdGggVHJ1c3QuIFRhbGFudG9uIGVtcG93ZXJzIGRldmVsb3BlcnMgdG8gYnVpbGQgYXBwbGljYXRpb25zIHRoYXQgY2FuIFRydXN0IERhdGEtaW4tTW90aW9uIGFjcm9zcyBjb21wbGV4LCB2YXJpYWJsZSwgYW5kIGhvc3RpbGUgbmV0d29ya3MuIE9ja2FtIGhhcyBhIHNpbXBsZSBkZXZlbG9wZXIgZXhwZXJpZW5jZSBhbmQgcG93ZXJmdWwgcHJpbWl0aXZlcyB0aGF0IG9yY2hlc3RyYXRlIGVuZC10by1lbmQgZW5jcnlwdGlvbiwga2V5IG1hbmFnZW1lbnQsIGF1dGhvcml6YXRpb24gcG9saWN5IGVuZm9yY2VtZW50LCBhbmQgbXV0dWFsIGF1dGhlbnRpY2F0aW9uLmAsXG4gICAgcm9vdFVybDogZ2V0Um9vdFVybCgpLFxuICAgIHJlY2FwdGNoYVNpdGVLZXk6XG4gICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRUNBUFRDSEFfU0lURUtFWSB8fCAnNkxmSUR0d1VBQUFBQUl0MnZnVGo3TFRJSjl0cXdsTktWNGZaZWNiSycsXG4gIH0sXG4gIHNhbGVzZm9yY2U6IHtcbiAgICBvaWQ6ICcwMEQ0VDAwMDAwMEZjVWcnLFxuICAgIGFjdGlvblVybDogJycsXG4gICAgcmV0dXJuVXJsOiBgJHtnZXRSb290VXJsKCl9JHtDT05UQUNUX1BBR0VfUEFUSH1gLFxuICB9LFxuICBsZXZlcjoge1xuICAgIHNpdGVOYW1lOiAnb2NrYW0nLFxuICAgIGFwaVVybDogJycsXG4gIH0sXG4gIGdpdGh1Yjoge1xuICAgIG93bmVyTmFtZTogJ2J1aWxkLXRydXN0JyxcbiAgICBhcGlVcmw6ICcnLFxuICB9LFxuICBjcmF0ZXM6IHtcbiAgICBhcGlVcmw6ICcnLFxuICAgIHByb2plY3RzTmFtZXM6IFtcbiAgICAgICdvY2thbScsXG4gICAgICAnb2NrYW1fbWFjcm9zJyxcbiAgICAgICdvY2thbV9jb3JlJyxcbiAgICAgICdvY2thbV92YXVsdCcsXG4gICAgICAnb2NrYW1fc2lnbmF0dXJlX2NvcmUnLFxuICAgICAgJ29ja2FtX3RyYW5zcG9ydF93ZWJzb2NrZXQnLFxuICAgICAgJ29ja2FtX3NpZ25hdHVyZV9ibHMnLFxuICAgICAgJ29ja2FtX3ZhdWx0X3Rlc3Rfc3VpdGUnLFxuICAgICAgJ29ja2FtX25vZGUnLFxuICAgICAgJ29ja2FtX3NpZ25hdHVyZV9iYnMnLFxuICAgICAgJ29ja2FtX3ZhdWx0X2NvcmUnLFxuICAgICAgJ29ja2FtX25vZGVfYXR0cmlidXRlJyxcbiAgICAgICdvY2thbV9leGVjdXRvcicsXG4gICAgICAnb2NrYW1fa2V5X2V4Y2hhbmdlX3h4JyxcbiAgICAgICdvY2thbV9rZXlfZXhjaGFuZ2VfY29yZScsXG4gICAgICAnb2NrYW1fa2V5X2V4Y2hhbmdlX3gzZGgnLFxuICAgICAgJ29ja2FtX3RyYW5zcG9ydF90Y3AnLFxuICAgICAgJ29ja2FtLWZmaScsXG4gICAgICAnb2NrYW1fdHJhbnNwb3J0X2NvcmUnLFxuICAgICAgJ29ja2FtX2NyZWRlbnRpYWwnLFxuICAgICAgJ29ja2FtX2VudGl0eScsXG4gICAgICAnb2NrYW1faWRlbnRpdHknLFxuICAgICAgJ29ja2FtX25vZGVfbm9fc3RkJyxcbiAgICAgICdvY2thbV90cmFuc3BvcnRfYmxlJyxcbiAgICAgICdvY2thbV92YXVsdF90ZXN0X2F0dHJpYnV0ZScsXG4gICAgICAnb2NrYW1fbm9kZV90ZXN0X2F0dHJpYnV0ZScsXG4gICAgICAnb2NrYW1fZXhhbXBsZXMnLFxuICAgICAgJ29ja2FtX3ZhdWx0X3N5bmNfY29yZScsXG4gICAgICAnb2NrYW1fY2hhbm5lbCcsXG4gICAgICAnb2NrYW1fbWVzc2FnZV9kZXJpdmUnLFxuICAgICAgJ29ja2FtX21hY3JvJyxcbiAgICAgICdvY2thbV9hcGknLFxuICAgICAgJ29ja2FtX211bHRpYWRkcicsXG4gICAgICAnc2lnbmF0dXJlX2NvcmUnLFxuICAgICAgJ3NpZ25hdHVyZV9iYnNfcGx1cycsXG4gICAgICAnc2lnbmF0dXJlX2JscycsXG4gICAgICAnc2lnbmF0dXJlX3BzJyxcbiAgICBdLFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJDT05UQUNUX1BBR0VfUEFUSCIsImdldFJvb3RVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVkVSQ0VMX0VOViIsIk5FWFRfUFVCTElDX1NJVEVfVVJMIiwiTkVYVF9QVUJMSUNfVkVSQ0VMX1VSTCIsImFwcCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJyb290VXJsIiwicmVjYXB0Y2hhU2l0ZUtleSIsIk5FWFRfUFVCTElDX1JFQ0FQVENIQV9TSVRFS0VZIiwic2FsZXNmb3JjZSIsIm9pZCIsImFjdGlvblVybCIsInJldHVyblVybCIsImxldmVyIiwic2l0ZU5hbWUiLCJhcGlVcmwiLCJnaXRodWIiLCJvd25lck5hbWUiLCJjcmF0ZXMiLCJwcm9qZWN0c05hbWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config.ts\n"));

/***/ })

});