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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\"); // (childclass, parentclass)\n\nfunction Asteroid(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.RADIUS;\n    this.color = options.COLOR;\n};\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n \n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Util = Util;\n// window.MovingObject.move = move;\n// window.\nconsole.log('webpack works yo');\n\n//document refers to index.html\n//if page is loaded, run callback function -- find the specified tag\ndocument.addEventListener('DOMContentLoaded', (event) => {\n    const doc = document.getElementById('game-canvas'); // looks in html doc grabs game-canvas tag\n      \n    const mo = new MovingObject(\n        { pos: [400, 300], vel: [1, 1], radius: 25, color: \"#00FF00\" } \n    );\n    const lo = new MovingObject(\n        { pos: [200, 200], vel: [1, 1], radius: 25, color: \"gray\" }\n    );\n    const asteroid = new Asteroid(\n        { pos: [150, 150], vel: [5, 5], RADIUS: 35, COLOR: \"brown\" }\n    );\n        \n    window.mo = mo;\n    window.asteroid = asteroid;\n    window.lo = lo;\n\n    let ctx = doc.getContext('2d'); // set context equal to canvas element in html\n        // draws circle when page loads, ctx expects options hash\n       \n       \n        const animateCallback = () => { // is this what we're going to be using to render animation?\n            ctx.clearRect(0, 0, 800, 600);\n            mo.draw(ctx); \n            mo.move(ctx);\n\n            asteroid.draw(ctx);\n            asteroid.move(ctx);\n            console.log('whatever feels right')\n            requestAnimationFrame(animateCallback);\n        };\n\n    requestAnimationFrame(animateCallback);\n    // requestAnimationFrame(animateCallback.bind(_, ctx)); same thang?\n});\n\n// move\n// draw\n// rect\n\n// element.addEventListener(\"click\", function () { alert(\"Hello World!\"); });\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\n// const Circle = function(centerX, centerY, radius, color) {\n//     this.centerX = centerX;\n//     this.centerY = centerY;\n//     this.radius = radius;\n//     this.color = color;\n// };\n\nMovingObject.prototype.draw = function (ctx) { //does fillstyle come from '2d'\n    let [x, y] = this.pos\n    ctx.fillStyle = this.color;\n    ctx.beginPath(); // draws a point at the arc \n    ctx.arc(\n        x,\n        y,\n        this.radius,\n        0,\n        2 * Math.PI,\n        false\n    );\n    ctx.fill();\n};\n\nMovingObject.prototype.move = function () { // distance between start and end\n    let [x1, y1] = this.pos;\n    let [x2, y2] = this.vel;\n    // let dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)\n    // Dist([x1, y1], [x2, y2]) = sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)\n    this.pos = [(x1 + x2), (y1 + y2)]\n    // this.draw(ctx)\n};\n\n// increment pos by the vel until x2,y2 is reached\n\n// this is math, not JavaScript\n// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)\n\n// Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1]) // norm is the vectors norm, the velocity vector of this object, obj.vel = [3, 4] \n// 3 horizontal pixels and 4 vertical pixels per unit of time, overall spped is 5 px/unit of time\n\n//ctx\n\n// const mo = new MovingObject(\n//     { pos: [30, 30], vel: [10, 10], radius: 5, color: \"#00FF00\" }\n// );\n\n// var x = {\n//    pos: [30, 30],\n//    vel: [10, 10], \n//    radius: 5, \n//    color: \"#00FF00\" \n// }\n\n// const y = new Object(pos, vel, radius, color)\n\n// const asteroid = new MovingObject(x);\n\nmodule.exports = MovingObject;\n// module.exports = {\n//     MovingObject,\n//     move: MovingObject.prototype.move\n// }\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        function Surrogate() {};\n        Surrogate.prototype = parentClass.prototype;\n        // debugger;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util;\n\n// Function.prototype.inherits = function (parentClass) {\n\n// }\n\n// Util.inherits(childClass, parentClass)\n\n// // if you dont call on constructor function, must be passed in.\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });