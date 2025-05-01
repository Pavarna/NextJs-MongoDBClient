"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// for the api route ( pages ) in nextjs this file must be under pages folder -> api folder -> file\n// api folder name is mandatory, file name new-meetup is related to the same name as in the url path to trigger the api\n// server side code and never exposed to client\n// if the url is /new-meetup then this function wil be called\n// build backend API endpoints ( API Routes ) it dont return HTML code but accept incoming http req with json and return JSON data\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        // const { title, image, address, description } = data;\n        // THIS CODE MUST NOT RUN ON CLIENT AS IT EXPOSE PWD and connect returns a promise\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://subbupavar:zTGgF0tKjPN2RLqf@cluster0.8ysfkbe.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0\"); // the connection string is taken from mongodb atlas, here meetups is a database\n        // can use try catch for handling error\n        const db = client.db();\n        const meetupsCollection = db.collection(\"meetups\"); //Mongodb is no sql DB that works with connection ( table ) with documents(entries of table)\n        // it will create collection if not exists\n        const result = await meetupsCollection.insertOne(data);\n        console.log(\"result\", result);\n        client.close();\n        res.status(201).json({\n            message: \"Meetup inserted!\"\n        }); // 201 for indication on insertion\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtR0FBbUc7QUFDbkcsdUhBQXVIO0FBQ3ZILCtDQUErQztBQUMvQyw2REFBNkQ7QUFDN0Qsa0lBQWtJO0FBRTVGO0FBRXRDLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0IsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFJO1FBQ3JCLHVEQUF1RDtRQUV2RCxrRkFBa0Y7UUFDbEYsTUFBTUMsTUFBTSxHQUFHLE1BQU1QLHdEQUFtQixDQUN0Qyw2SEFBNkgsQ0FDOUgsRUFBRSxnRkFBZ0Y7UUFDbkYsdUNBQXVDO1FBQ3ZDLE1BQU1TLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFFLEVBQUU7UUFDdEIsTUFBTUMsaUJBQWlCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLDRGQUE0RjtRQUNoSiwwQ0FBMEM7UUFDMUMsTUFBTUMsTUFBTSxHQUFHLE1BQU1GLGlCQUFpQixDQUFDRyxTQUFTLENBQUNSLElBQUksQ0FBQztRQUN0RFMsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFFSCxNQUFNLENBQUMsQ0FBQztRQUM5QkwsTUFBTSxDQUFDUyxLQUFLLEVBQUUsQ0FBQztRQUVmYixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxrQkFBa0I7U0FBRSxDQUFDLENBQUMsQ0FBQyxrQ0FBa0M7SUFDM0YsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZWxCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz83Mzk0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZvciB0aGUgYXBpIHJvdXRlICggcGFnZXMgKSBpbiBuZXh0anMgdGhpcyBmaWxlIG11c3QgYmUgdW5kZXIgcGFnZXMgZm9sZGVyIC0+IGFwaSBmb2xkZXIgLT4gZmlsZVxyXG4vLyBhcGkgZm9sZGVyIG5hbWUgaXMgbWFuZGF0b3J5LCBmaWxlIG5hbWUgbmV3LW1lZXR1cCBpcyByZWxhdGVkIHRvIHRoZSBzYW1lIG5hbWUgYXMgaW4gdGhlIHVybCBwYXRoIHRvIHRyaWdnZXIgdGhlIGFwaVxyXG4vLyBzZXJ2ZXIgc2lkZSBjb2RlIGFuZCBuZXZlciBleHBvc2VkIHRvIGNsaWVudFxyXG4vLyBpZiB0aGUgdXJsIGlzIC9uZXctbWVldHVwIHRoZW4gdGhpcyBmdW5jdGlvbiB3aWwgYmUgY2FsbGVkXHJcbi8vIGJ1aWxkIGJhY2tlbmQgQVBJIGVuZHBvaW50cyAoIEFQSSBSb3V0ZXMgKSBpdCBkb250IHJldHVybiBIVE1MIGNvZGUgYnV0IGFjY2VwdCBpbmNvbWluZyBodHRwIHJlcSB3aXRoIGpzb24gYW5kIHJldHVybiBKU09OIGRhdGFcclxuXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICAgIC8vIGNvbnN0IHsgdGl0bGUsIGltYWdlLCBhZGRyZXNzLCBkZXNjcmlwdGlvbiB9ID0gZGF0YTtcclxuXHJcbiAgICAvLyBUSElTIENPREUgTVVTVCBOT1QgUlVOIE9OIENMSUVOVCBBUyBJVCBFWFBPU0UgUFdEIGFuZCBjb25uZWN0IHJldHVybnMgYSBwcm9taXNlXHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgICBcIm1vbmdvZGIrc3J2Oi8vc3ViYnVwYXZhcjp6VEdnRjB0S2pQTjJSTHFmQGNsdXN0ZXIwLjh5c2ZrYmUubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1DbHVzdGVyMFwiXHJcbiAgICApOyAvLyB0aGUgY29ubmVjdGlvbiBzdHJpbmcgaXMgdGFrZW4gZnJvbSBtb25nb2RiIGF0bGFzLCBoZXJlIG1lZXR1cHMgaXMgYSBkYXRhYmFzZVxyXG4gICAgLy8gY2FuIHVzZSB0cnkgY2F0Y2ggZm9yIGhhbmRsaW5nIGVycm9yXHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTsgLy9Nb25nb2RiIGlzIG5vIHNxbCBEQiB0aGF0IHdvcmtzIHdpdGggY29ubmVjdGlvbiAoIHRhYmxlICkgd2l0aCBkb2N1bWVudHMoZW50cmllcyBvZiB0YWJsZSlcclxuICAgIC8vIGl0IHdpbGwgY3JlYXRlIGNvbGxlY3Rpb24gaWYgbm90IGV4aXN0c1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTtcclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJNZWV0dXAgaW5zZXJ0ZWQhXCIgfSk7IC8vIDIwMSBmb3IgaW5kaWNhdGlvbiBvbiBpbnNlcnRpb25cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();