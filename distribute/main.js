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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Kiyoh.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Kiyoh.ts":
/*!******************!*\
  !*** ./Kiyoh.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar Vindmijnwijn;\n(function (Vindmijnwijn) {\n    class VMWKiyoh {\n        constructor() {\n            this._data_url = '';\n            this._target = null;\n            this._average = null;\n            this.vmw_data = {};\n        }\n        setTarget(target) {\n            this._target = target;\n            return this;\n        }\n        sendData(key) {\n            if (!this.vmw_data) {\n                console.error(\"No data set yet.\");\n            }\n            if (!this.target) {\n                console.error(\"No target set.\");\n            }\n            this.vmw_data = window.vmw;\n            try {\n                document.querySelector(this.target).innerHTML = this.vmw_data[key];\n            }\n            catch (e) {\n                console.warn(e);\n            }\n        }\n        liveData() {\n            this._data_url = `https://vindmijnwijn.nl/wp-admin/admin-post.php?action=fetch_kiyoh`;\n            return this;\n        }\n        testData() {\n            this._data_url = `https://vindmijnwijn.nl/vmw_new_staging/wp-admin/admin-post.php?action=fetch_kiyoh`;\n            return this;\n        }\n        parseData() {\n            return __awaiter(this, void 0, void 0, function* () {\n                try {\n                    yield this.checkAndGetData();\n                }\n                catch (e) {\n                    console.warn(e);\n                }\n                return this;\n            });\n        }\n        checkAndGetData() {\n            return __awaiter(this, void 0, void 0, function* () {\n                console.info(\"No data set!\");\n                try {\n                    console.info(\"Fetching data\");\n                    yield this.fetchData();\n                    console.info('Data set');\n                    return this;\n                }\n                catch (e) {\n                    console.warn(e);\n                    return this;\n                }\n            });\n        }\n        fetchData() {\n            return __awaiter(this, void 0, void 0, function* () {\n                const xhr = new XMLHttpRequest();\n                xhr.open('get', this.dataUrl);\n                try {\n                    xhr.onreadystatechange = yield this.xhrReady();\n                    yield xhr.send();\n                }\n                catch (e) {\n                    console.warn(e);\n                }\n            });\n        }\n        xhrReady() {\n            return __awaiter(this, void 0, void 0, function* () {\n                if (this.readyState == 4 && this.status == 200) {\n                    window.vmw = {};\n                    try {\n                        window.vmw = yield JSON.parse(this.response).data;\n                        return JSON.parse(this.response).data;\n                    }\n                    catch (e) {\n                        console.warn(e);\n                    }\n                }\n            });\n        }\n        get average() { return this._average; }\n        get target() { return this._target; }\n        get dataUrl() { return this._data_url; }\n        set average(value) { this._average = value; }\n        set target(value) { this._target = value; }\n        set dataUrl(value) { this._data_url = value; }\n    }\n    window.Kiyoh = new VMWKiyoh();\n})(Vindmijnwijn || (Vindmijnwijn = {}));\n\n\n//# sourceURL=webpack:///./Kiyoh.ts?");

/***/ })

/******/ });