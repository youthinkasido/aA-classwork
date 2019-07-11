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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection{  \n    constructor(array) {\n         this.array = array // array consists of html elements\n    }; // [ ]\n    \n    html(string) { //get all the data back from the query this has been called on. this may contain a query that has 1 or more html tags\n        if (string){ // if a string is passed in, add that to the innermost tag of the query?\n            for (let i = 0; i < this.array.length; i++){\n                 this.array[i].innerHTML = string\n            }\n        } else {    \n \n           return this.array[0].innerHTML // does innerHTML belong to DOMnodecollection?\n        }\n    }; \n    \n    empty() {\n        for (let i = 0; i < this.array.length; i++) {\n            this.array[i].innerHTML = \"\";\n        }\n    };\n\n    append(att) { // append the outerHTML of each element in the arg to the innerHTML of each element in the DOMNodeCollection\n        if (typeof (att) === 'string') {\n            this.array[0].innerHTML += att\n        }\n        if (typeof (att) === 'array') {\n            let newarr = new DOMNodeCollection(att);\n            this.array.push(newarr)\n        }\n        if (typeof (att) === 'object' &&\n            !(typeof (att) === 'string')) {\n            this.array[0].appendChild(att);\n        }\n    }\n\n        attr(key, value) {\n            for ( i = 0; i < this.array.length; i++) {\n                this.array[i].setAttributes(key, value);\n            }\n        };\n            \n};\n\n\n\n/* <div class=\"outer\">\n    <div class=\"middle\">\n        <div class=\"inner\">\n            I am in the innermost div!\n    </div>\n    </div>\n</div>\n\n    <script>\n        const outerDiv = document.querySelector('.outer');\n  outerDiv.addEventListener('click', function (e) {\n            alert('CLICKED!');\n        });\n</script> */\n\n\n// DOMNodeCollection\n\n\n// class Rectangle {\n//     constructor(height, width) {\n//         this.height = height;\n//         this.width = width;\n//     }\n// }\n\n\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\")\n\nconsole.log(\"testtest\");\n// let domNode = new DOMNodeCollection(nodesArr); //needed?\n// a = $('div')\n// b\n//  $('div')\nwindow.$l = function (selector) { // create the ability to query html, find an element\n   \n    if ( selector instanceof HTMLElement) { //checks to see if argument is an html el\n        console.log('html!')\n        let arr = [];\n        arr.push(selector);\n        let domcoll = new DOMNodeCollection(arr);\n        return domcoll;\n    \n    } else {\n        let nodes = document.querySelectorAll(selector);\n        let nodesArr = Array.prototype.slice.call(nodes);\n        return new DOMNodeCollection(nodesArr);\n    }\n\n    // <div>\n    // <li> </li>\n    //hello\n    //</div>\n    // \n    \n  \n};\n\n\n// querySelectorAll()  /// used to get static NodeList// Nodelist consists of a list of all nodes in a document\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });