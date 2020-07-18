var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AdminUser.js":
/*!**************************!*\
  !*** ./src/AdminUser.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let User = __webpack_require__(/*! ./User */ \"./src/User.js\")\n\nclass AdminUser extends User {\n    constructor() {\n        super()\n    }\n\n    can() {\n        return true\n    }\n}\n\nmodule.exports = AdminUser\n\n//# sourceURL=webpack://app/./src/AdminUser.js?");

/***/ }),

/***/ "./src/CustomerUser.js":
/*!*****************************!*\
  !*** ./src/CustomerUser.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let User = __webpack_require__(/*! ./User */ \"./src/User.js\")\n\nclass CustomerUser extends User {\n    constructor() {\n        super()\n\n        this.permissions = [\n            'list-orders',\n            'list-products',\n        ]\n    }\n}\n\nmodule.exports = CustomerUser\n\n//# sourceURL=webpack://app/./src/CustomerUser.js?");

/***/ }),

/***/ "./src/RegisterForm.js":
/*!*****************************!*\
  !*** ./src/RegisterForm.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CustomerUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerUser */ \"./src/CustomerUser.js\");\n/* harmony import */ var _CustomerUser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_CustomerUser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SellerUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SellerUser */ \"./src/SellerUser.js\");\n/* harmony import */ var _SellerUser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SellerUser__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass RegisterForm {\n    constructor() {\n        this.data = {}\n        this.errors = {}\n        this.user = null \n    }\n\n    getUser() {\n        return this.user\n    }\n\n    register(data) {\n        this.validate(data)\n\n        if (this.hasErrors()) {\n            return Promise.reject(this.errors)\n        }\n\n        let user\n\n        if (data.type == 'customer') {\n            user = new _CustomerUser__WEBPACK_IMPORTED_MODULE_0___default.a\n        } else if (data.type == 'seller') {\n            user = new _SellerUser__WEBPACK_IMPORTED_MODULE_1___default.a\n        }\n\n        user.setEmail(data.email)\n        user.setPassword(data.password)\n        \n        this.user = user\n\n        return Promise.resolve(this.user)\n    }\n\n    hasErrors() {\n        return Object.keys(this.errors).length > 0\n    }\n\n    getErrors() {\n        return this.errors\n    }\n\n    validate(data) {\n        this.errors = {}\n\n        if (data.email.length == 0) {\n            this.errors.email = 'El email es requerido'\n        }\n\n        if (data.password.length < 6 || data.password.length > 9) {\n            this.errors.password = 'El password debe contener entre 6 y 9 caracteres'\n        }\n\n        if (! ['customer', 'seller'].includes(data.type)) {\n            this.errors.type = 'El tipo de usuario especificado no es valido'\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterForm);\n\n//# sourceURL=webpack://app/./src/RegisterForm.js?");

/***/ }),

/***/ "./src/SellerUser.js":
/*!***************************!*\
  !*** ./src/SellerUser.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let User = __webpack_require__(/*! ./User */ \"./src/User.js\")\n\nclass SellerUser extends User {\n    constructor() {\n        super()\n\n        this.permissions = [\n            'publish-products',\n            'list-customers',\n        ]\n    }\n}\n\nmodule.exports = SellerUser\n\n//# sourceURL=webpack://app/./src/SellerUser.js?");

/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class User {\n    constructor() {\n        this.email = ''\n        this.password = ''\n        this.createdAt = new Date\n        this.permissions = []\n    }\n\n    can(action) {\n        return this.permissions.includes(action)\n    }\n\n    setEmail(email) {\n        this.email = email \n    }\n\n    setPassword(pwd) {\n        this.password = pwd.split('').reverse().join('')\n    }\n\n    getEmail() {\n        return this.email\n    }\n\n    getPassword() {\n        return this.password\n    }\n}\n\nmodule.exports = User\n\n//# sourceURL=webpack://app/./src/User.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    User: __webpack_require__(/*! ./User */ \"./src/User.js\"),\n    AdminUser: __webpack_require__(/*! ./AdminUser */ \"./src/AdminUser.js\"),\n    CustomerUser: __webpack_require__(/*! ./CustomerUser */ \"./src/CustomerUser.js\"),\n    SellerUser: __webpack_require__(/*! ./SellerUser */ \"./src/SellerUser.js\"),\n    RegisterForm: __webpack_require__(/*! ./RegisterForm */ \"./src/RegisterForm.js\"),\n});\n\n\n//# sourceURL=webpack://app/./src/index.js?");

/***/ })

/******/ });