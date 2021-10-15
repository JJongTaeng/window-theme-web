/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Component.js":
/*!*****************************!*\
  !*** ./src/js/Component.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Component = /*#__PURE__*/function () {
  function Component(_ref) {
    var element = _ref.element;

    _classCallCheck(this, Component);

    this.element = element;
    console.log(element);
    this.$parentComponent;
  }

  _createClass(Component, [{
    key: "render",
    value: function render(parent) {
      var _this$element;

      switch (parent.nodeName) {
        case 'IMG':
        case 'INPUT':
          throw new Error('### element img, input is not parent elemenet!');
          return;
      }

      var fragment = document.createDocumentFragment();

      if (this.element == null) {
        this.$parentComponent = parent;
        return;
      }

      if (((_this$element = this.element) === null || _this$element === void 0 ? void 0 : _this$element.length) > 1) {
        this.element.forEach(function (element) {
          fragment.appendChild(element);
        });
      } else {
        fragment.appendChild(this.element);
      }

      parent.appendChild(fragment);
      this.$parentComponent = parent;
    }
  }, {
    key: "getParentComponent",
    get: function get() {
      return this.$parentComponent;
    }
  }], [{
    key: "createElement",
    value: function createElement(_ref2) {
      var type = _ref2.type,
          className = _ref2.className,
          content = _ref2.content;
      var element = document.createElement(type);
      className && element.classList.add(className);
      element.textContent = content && content;
      return element;
    }
  }]);

  return Component;
}();



/***/ }),

/***/ "./src/js/DateTime.js":
/*!****************************!*\
  !*** ./src/js/DateTime.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateTime)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateTime = function DateTime(_ref) {
  var date = _ref.date;

  _classCallCheck(this, DateTime);

  this.$date = document.querySelector('.date');
  this.$time = document.querySelector('.time');
  this.date = date;
  this.$date.textContent = date.toLocaleDateString();
  this.$time.textContent = date.toLocaleTimeString();
};



/***/ }),

/***/ "./src/js/Directory.js":
/*!*****************************!*\
  !*** ./src/js/Directory.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Directory)
/* harmony export */ });
/* harmony import */ var _WindowElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WindowElement.js */ "./src/js/WindowElement.js");
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component.js */ "./src/js/Component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Directory = /*#__PURE__*/function (_WindowElement) {
  _inherits(Directory, _WindowElement);

  var _super = _createSuper(Directory);

  function Directory(_ref) {
    var _this;

    var title = _ref.title,
        image = _ref.image,
        files = _ref.files,
        modal = _ref.modal;

    _classCallCheck(this, Directory);

    _this = _super.call(this, {
      title: title,
      image: image
    });

    _defineProperty(_assertThisInitialized(_this), "$directory", void 0);

    _defineProperty(_assertThisInitialized(_this), "$directoryModal", void 0);

    var component = new _Component_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      element: [_this.$windowElementImage, _this.$windowElementTitle]
    });
    component.render(_this.$container);
    _this.$directoryModal = modal;
    _this.$directory = component.getParentComponent;

    _this.dblClick();

    return _this;
  }

  _createClass(Directory, [{
    key: "dblClick",
    value: function dblClick() {
      var _this2 = this;

      this.$directory.addEventListener('dblclick', function (e) {
        console.log(e.clientX, e.clientY);
        _this2.$directoryModal.style.transformOrigin = "".concat(e.clientX, "px ").concat(e.clientY, "px");
        setTimeout(function () {
          _this2.$directoryModal.style.transform = "scale(1, 1)";
        }, 200);
      });
    }
  }, {
    key: "getDirectory",
    get: function get() {
      return this.$directory;
    }
  }]);

  return Directory;
}(_WindowElement_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/LinkFile.js":
/*!****************************!*\
  !*** ./src/js/LinkFile.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LinkFile)
/* harmony export */ });
/* harmony import */ var _WindowElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WindowElement.js */ "./src/js/WindowElement.js");
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component.js */ "./src/js/Component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var LinkFile = /*#__PURE__*/function (_WindowElement) {
  _inherits(LinkFile, _WindowElement);

  var _super = _createSuper(LinkFile);

  function LinkFile(_ref) {
    var _this;

    var title = _ref.title,
        image = _ref.image,
        link = _ref.link;

    _classCallCheck(this, LinkFile);

    _this = _super.call(this, {
      title: title,
      image: image
    });

    _defineProperty(_assertThisInitialized(_this), "$file", void 0);

    _this.link = link;
    var component = new _Component_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      element: [_this.$windowElementImage, _this.$windowElementTitle]
    });
    component.render(_this.$container);
    _this.$file = component.getParentComponent;

    _this.dbClick();

    return _this;
  }

  _createClass(LinkFile, [{
    key: "dbClick",
    value: function dbClick() {
      var _this2 = this;

      this.$file.addEventListener('dblclick', function () {
        console.log(123);
        window.open(_this2.link);
      });
    }
  }, {
    key: "getFile",
    get: function get() {
      return this.$file;
    }
  }]);

  return LinkFile;
}(_WindowElement_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/Modal.js":
/*!*************************!*\
  !*** ./src/js/Modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ "./src/js/Component.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Modal = /*#__PURE__*/function () {
  function Modal(_ref) {
    var files = _ref.files;

    _classCallCheck(this, Modal);

    _defineProperty(this, "$modalContainer", _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      className: 'modal-container'
    }));

    _defineProperty(this, "$modalHeader", _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      className: 'modal-header'
    }));

    _defineProperty(this, "$modalBody", _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      className: 'modal-body'
    }));

    _defineProperty(this, "$modalButtonWrapper", _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      className: 'modal-button-wrapper'
    }));

    _defineProperty(this, "$closeButton", _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      className: 'modal-close-button'
    }));

    _defineProperty(this, "$closeButtonContent", _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      className: 'close-button-content'
    }));

    _defineProperty(this, "$minimizeButton", _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      className: 'modal-minimize-button'
    }));

    _defineProperty(this, "$minimizeButtonContent", _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      className: 'minimize-button-content'
    }));

    _defineProperty(this, "$maximizeButton", _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      className: 'modal-maximize-button'
    }));

    _defineProperty(this, "$maximizeButtonContent", _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      className: 'maximize-button-content'
    }));

    _defineProperty(this, "view", false);

    this.files = files;
    this.init();
    this.linkFiles();
    this.click();
    document.body.appendChild(this.$modalContainer);
  }

  _createClass(Modal, [{
    key: "init",
    value: function init() {
      var _this = this;

      var unit = ['__', '☐', 'X'];
      var children = [this.$minimizeButtonContent, this.$maximizeButtonContent, this.$closeButtonContent];
      [this.$minimizeButton, this.$maximizeButton, this.$closeButton].forEach(function (element, index) {
        children[index].textContent = unit[index];
        element.appendChild(children[index]);
        element.classList.add('modal-button');

        _this.$modalButtonWrapper.appendChild(element);
      });
      this.$modalHeader.appendChild(this.$modalButtonWrapper);
      this.$modalContainer.appendChild(this.$modalHeader);
      this.$modalContainer.appendChild(this.$modalBody);
    }
  }, {
    key: "click",
    value: function click() {
      var _this2 = this;

      this.$modalContainer.addEventListener('click', function (e) {
        var element = e.target;

        while (!element.classList.contains('modal-close-button')) {
          element = element.parentNode;

          if (element.nodeName === 'BODY') {
            element = null;
            return;
          }
        }

        _this2.$modalContainer.style.transform = "scale(0, 0)";
      });
    }
  }, {
    key: "linkFiles",
    value: function linkFiles() {
      var component = new _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        element: this.files
      });
      component.render(this.$modalBody);
    }
  }, {
    key: "style",
    value: function style() {}
  }, {
    key: "getContainer",
    get: function get() {
      return this.$modalContainer;
    }
  }]);

  return Modal;
}();



/***/ }),

/***/ "./src/js/WindowElement.js":
/*!*********************************!*\
  !*** ./src/js/WindowElement.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WindowElement)
/* harmony export */ });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ "./src/js/Component.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var WindowElement = /*#__PURE__*/function () {
  function WindowElement(_ref) {
    var title = _ref.title,
        image = _ref.image;

    _classCallCheck(this, WindowElement);

    _defineProperty(this, "$container", _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      className: 'window-element-container'
    }));

    _defineProperty(this, "$windowElementImage", _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      className: 'window-element-image'
    }));

    _defineProperty(this, "$windowElementTitle", _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      className: 'window-element-title'
    }));

    _defineProperty(this, "initialMousePos", {
      x: 0,
      y: 0
    });

    _defineProperty(this, "offset", {
      x: 0,
      y: 0
    });

    this.$windowElementTitle.textContent = title;
    this.$windowElementImage.style.backgroundImage = "url('".concat(image, "')");
    this.move();
  }

  _createClass(WindowElement, [{
    key: "move",
    value: function move() {
      var _this = this;

      var move = function move(e) {
        var clientX = e.clientX,
            clientY = e.clientY;

        if (clientX < 40 || clientX > window.innerWidth - 40 || clientY > window.innerHeight - 80 || clientY < 40) {
          return;
        }

        _this.offset.x = clientX - _this.initialMousePos.x;
        _this.offset.y = clientY - _this.initialMousePos.y;
        _this.$container.style.transform = "translate3d(".concat(_this.offset.x, "px, ").concat(_this.offset.y, "px, 0)");
      };

      this.$container.addEventListener('mousedown', function (e) {
        _this.initialMousePos.x = e.clientX - _this.offset.x;
        _this.initialMousePos.y = e.clientY - _this.offset.y;
        document.addEventListener('mousemove', move);
      });
      document.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', move);
      });
    }
  }]);

  return WindowElement;
}();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_Directory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Directory.js */ "./src/js/Directory.js");
/* harmony import */ var _js_DateTime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/DateTime.js */ "./src/js/DateTime.js");
/* harmony import */ var _js_LinkFile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/LinkFile.js */ "./src/js/LinkFile.js");
/* harmony import */ var _js_Modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/Modal.js */ "./src/js/Modal.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    _defineProperty(this, "$windowBody", document.querySelector('.window-body'));

    _defineProperty(this, "$selectedElement", void 0);

    this.init();
    setInterval(function () {
      new _js_DateTime_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        date: new Date()
      });
    }, 1000);
    new _js_DateTime_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      date: new Date()
    });
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      var notionLink = new _js_LinkFile_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        title: '노션 이력서',
        image: './image/notion.png',
        link: 'https://tedev.notion.site/4d8b4384a4b343c8ad584b292f7f382b'
      });
      var resumeModal = new _js_Modal_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
        files: notionLink.getFile
      });
      var webGameModal = new _js_Modal_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
        files: null
      });
      var resumeDirectory = new _js_Directory_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        title: '이력서',
        image: './image/fill-directory.svg',
        modal: resumeModal.getContainer
      });
      var webGameDirectory = new _js_Directory_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        title: 'Web Game',
        image: './image/empty-directory.svg',
        modal: webGameModal.getContainer
      });
      this.$windowBody.appendChild(resumeDirectory.getDirectory);
      this.$windowBody.appendChild(webGameDirectory.getDirectory);
      var githubLink = new _js_LinkFile_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        title: 'Github',
        image: './image/github.svg',
        link: 'https://github.com/JJongTaeng'
      });
      this.$windowBody.appendChild(githubLink.getFile);
      var tistoryLink = new _js_LinkFile_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        title: 'Blog',
        image: './image/tistory.svg',
        link: 'https://jointae.tistory.com'
      });
      this.$windowBody.appendChild(tistoryLink.getFile);
      this.click();
    }
  }, {
    key: "click",
    value: function click() {
      var _this = this;

      this.$windowBody.addEventListener('click', function (event) {
        var element = event.target;

        if (element.classList.contains('window-body')) {
          var childList = _toConsumableArray(_this.$windowBody.children);

          childList.forEach(function (element) {
            element.classList.remove('bordered');
          });
        }

        while (!element.classList.contains('window-element-container')) {
          element = element.parentNode;

          if (element.nodeName === 'BODY') {
            element = null;
            return;
          }
        }

        if (_this.$selectedElement) {
          _this.$selectedElement.classList.remove('bordered');
        }

        element.classList.add('bordered');
        _this.$selectedElement = element;
      });
    }
  }]);

  return App;
}();

new App();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map