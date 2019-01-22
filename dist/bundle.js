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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/distanceConverter.js":
/*!**********************************!*\
  !*** ./src/distanceConverter.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function convert(distance, selectedScale) {\n    const specNumber = 1.609344;\n    if (selectedScale == \"kilometers\"){\n        return `Result: ${distance / specNumber} mi`;\n    }\n    else { \n        return `Result: ${distance * specNumber} km`;\n    }\n}\nmodule.exports = convert;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGlzdGFuY2VDb252ZXJ0ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGlzdGFuY2VDb252ZXJ0ZXIuanM/NGZkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb252ZXJ0KGRpc3RhbmNlLCBzZWxlY3RlZFNjYWxlKSB7XG4gICAgY29uc3Qgc3BlY051bWJlciA9IDEuNjA5MzQ0O1xuICAgIGlmIChzZWxlY3RlZFNjYWxlID09IFwia2lsb21ldGVyc1wiKXtcbiAgICAgICAgcmV0dXJuIGBSZXN1bHQ6ICR7ZGlzdGFuY2UgLyBzcGVjTnVtYmVyfSBtaWA7XG4gICAgfVxuICAgIGVsc2UgeyBcbiAgICAgICAgcmV0dXJuIGBSZXN1bHQ6ICR7ZGlzdGFuY2UgKiBzcGVjTnVtYmVyfSBrbWA7XG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/distanceConverter.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const distanceConverter = __webpack_require__(/*! ./distanceConverter */ \"./src/distanceConverter.js\");\nconst temperatureConverter = __webpack_require__(/*! ./temperatureConverter */ \"./src/temperatureConverter.js\");\n\nfunction convertTemp() {\n    let toConvertField = document.getElementById(\"temp\");\n    let answerField = document.getElementById(\"tempAnswer\");\n    if (Number(toConvertField.value) || toConvertField.value === \"0\") {\n        let degrees = Number(toConvertField.value);\n        answerField.textContent = temperatureConverter(degrees, getSelectedOption(\"tempOptions\"));\n    }\n    else {\n        answerField.textContent = \"\";\n        alert(\"Not a number\");\n    }\n}\nfunction convertDist() {\n    let toConvertField = document.getElementById(\"dist\");\n    let answerField = document.getElementById(\"distAnswer\");\n    if (Number(toConvertField.value) || toConvertField.value === \"0\") {\n        let distance = Number(toConvertField.value);\n        answerField.textContent = distanceConverter(distance, getSelectedOption(\"distOptions\"));\n    }\n    else {\n        answerField.textContent = \"\";\n        alert(\"Not a number\");\n    }\n}\n\nfunction getSelectedOption(selectId) {\n    let scales = document.getElementById(selectId);\n    return scales.options[scales.selectedIndex].value;\n}\n\nwindow.onload = function () {\n    document.getElementById('distButton').onclick = () => {\n        convertDist();\n    };\n    document.getElementById('tempButton').onclick = () => {\n        convertTemp();\n    };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGlzdGFuY2VDb252ZXJ0ZXIgPSByZXF1aXJlKFwiLi9kaXN0YW5jZUNvbnZlcnRlclwiKTtcbmNvbnN0IHRlbXBlcmF0dXJlQ29udmVydGVyID0gcmVxdWlyZShcIi4vdGVtcGVyYXR1cmVDb252ZXJ0ZXJcIik7XG5cbmZ1bmN0aW9uIGNvbnZlcnRUZW1wKCkge1xuICAgIGxldCB0b0NvbnZlcnRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFwiKTtcbiAgICBsZXQgYW5zd2VyRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBBbnN3ZXJcIik7XG4gICAgaWYgKE51bWJlcih0b0NvbnZlcnRGaWVsZC52YWx1ZSkgfHwgdG9Db252ZXJ0RmllbGQudmFsdWUgPT09IFwiMFwiKSB7XG4gICAgICAgIGxldCBkZWdyZWVzID0gTnVtYmVyKHRvQ29udmVydEZpZWxkLnZhbHVlKTtcbiAgICAgICAgYW5zd2VyRmllbGQudGV4dENvbnRlbnQgPSB0ZW1wZXJhdHVyZUNvbnZlcnRlcihkZWdyZWVzLCBnZXRTZWxlY3RlZE9wdGlvbihcInRlbXBPcHRpb25zXCIpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFuc3dlckZpZWxkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgYWxlcnQoXCJOb3QgYSBudW1iZXJcIik7XG4gICAgfVxufVxuZnVuY3Rpb24gY29udmVydERpc3QoKSB7XG4gICAgbGV0IHRvQ29udmVydEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXN0XCIpO1xuICAgIGxldCBhbnN3ZXJGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzdEFuc3dlclwiKTtcbiAgICBpZiAoTnVtYmVyKHRvQ29udmVydEZpZWxkLnZhbHVlKSB8fCB0b0NvbnZlcnRGaWVsZC52YWx1ZSA9PT0gXCIwXCIpIHtcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gTnVtYmVyKHRvQ29udmVydEZpZWxkLnZhbHVlKTtcbiAgICAgICAgYW5zd2VyRmllbGQudGV4dENvbnRlbnQgPSBkaXN0YW5jZUNvbnZlcnRlcihkaXN0YW5jZSwgZ2V0U2VsZWN0ZWRPcHRpb24oXCJkaXN0T3B0aW9uc1wiKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhbnN3ZXJGaWVsZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGFsZXJ0KFwiTm90IGEgbnVtYmVyXCIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0U2VsZWN0ZWRPcHRpb24oc2VsZWN0SWQpIHtcbiAgICBsZXQgc2NhbGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0SWQpO1xuICAgIHJldHVybiBzY2FsZXMub3B0aW9uc1tzY2FsZXMuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3RCdXR0b24nKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjb252ZXJ0RGlzdCgpO1xuICAgIH07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBCdXR0b24nKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjb252ZXJ0VGVtcCgpO1xuICAgIH07XG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/temperatureConverter.js":
/*!*************************************!*\
  !*** ./src/temperatureConverter.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function convert(degrees, selectedScale) {\n    if (selectedScale == \"celsius\") {\n       return `Result: ${degrees * 9 / 5 + 32} °F or ${degrees + 273.15} °K`;\n    }\n    else if (selectedScale == \"kelvin\") {\n        return `Result: ${degrees * 9 / 5 - 459.67} °F or ${degrees - 273.15} °C`;\n    }\n    else {\n        return `Result: ${(degrees - 32) * 5 / 9} °C or ${(degrees + 459.67) * 5 / 9} °K`;\n    }\n}\nmodule.exports = convert;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGVtcGVyYXR1cmVDb252ZXJ0ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGVyYXR1cmVDb252ZXJ0ZXIuanM/YWYwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb252ZXJ0KGRlZ3JlZXMsIHNlbGVjdGVkU2NhbGUpIHtcbiAgICBpZiAoc2VsZWN0ZWRTY2FsZSA9PSBcImNlbHNpdXNcIikge1xuICAgICAgIHJldHVybiBgUmVzdWx0OiAke2RlZ3JlZXMgKiA5IC8gNSArIDMyfSDCsEYgb3IgJHtkZWdyZWVzICsgMjczLjE1fSDCsEtgO1xuICAgIH1cbiAgICBlbHNlIGlmIChzZWxlY3RlZFNjYWxlID09IFwia2VsdmluXCIpIHtcbiAgICAgICAgcmV0dXJuIGBSZXN1bHQ6ICR7ZGVncmVlcyAqIDkgLyA1IC0gNDU5LjY3fSDCsEYgb3IgJHtkZWdyZWVzIC0gMjczLjE1fSDCsENgO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGBSZXN1bHQ6ICR7KGRlZ3JlZXMgLSAzMikgKiA1IC8gOX0gwrBDIG9yICR7KGRlZ3JlZXMgKyA0NTkuNjcpICogNSAvIDl9IMKwS2A7XG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/temperatureConverter.js\n");

/***/ })

/******/ });