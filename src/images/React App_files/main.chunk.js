(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/actions.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/actions.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".deleteButton{\n    display: inline-block;\n    margin-right: 5%\n}\n\n.editButton{\n    display: inline-block;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/home.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/home.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".homePage{\n    background-color: #000;\n    display: block;\n    color: #fff;\n    padding-left: 16px;\n}\n\n.input{\n    font-size: 12px;\n    display: block;\n    padding-top: 8px;\n    padding-bottom: 8px;\n}\n\n.poster{\n    width: 100px;\n}\n\n.table-container{\n    padding-top: 5%;\n   width: 75%;\n   margin: 0 auto;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: home, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "home", function() { return home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.jsx */ "./src/home.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Development/movie/src/App.js";





class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_home_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }));
  }

}

class home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  //initialize state
  constructor(props) {
    super(props);
    this.state = {
      response: []
    };
    this.onSort = this.onSort.bind(this);
    this.currentSort = "desc";
  }

  onSort(event, sortKey) {
    const response = this.state.response;
    const currentSort = this.state.currentSort;

    if (currentSort === "asc") {
      response.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
      this.setState({
        response,
        currentSort: "desc"
      });
    } else {
      response.sort((a, b) => b[sortKey].localeCompare(a[sortKey]));
      this.setState({
        response,
        currentSort: "asc"
      });
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      path: "/",
      component: _home_jsx__WEBPACK_IMPORTED_MODULE_2__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/actions.css":
/*!*************************!*\
  !*** ./src/actions.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./actions.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/actions.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./actions.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/actions.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./actions.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/actions.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/actions.jsx":
/*!*************************!*\
  !*** ./src/actions.jsx ***!
  \*************************/
/*! exports provided: DeleteButton, AddButton, UpdateButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteButton", function() { return DeleteButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddButton", function() { return AddButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateButton", function() { return UpdateButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Description */ "./node_modules/@material-ui/icons/Description.js");
/* harmony import */ var _material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_actions_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/actions.css */ "./src/actions.css");
/* harmony import */ var _src_actions_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_actions_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Development/movie/src/actions.jsx";






class DeleteButton extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "deleteButton",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: "primary",
      value: this.props.id,
      onClick: this.props.delete,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    })));
  }

}
class AddButton extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "primary",
      onClick: this.props.addModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "ADD");
  }

}
class UpdateButton extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "editButton",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: this.props.openModal,
      color: "secondary",
      "aria-label": "Edit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Development/movie/src/form.js";



class ModalComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.addTitle = event => {
      this.setState({
        movie_title: event.target.value
      });
    };

    this.addYear = event => {
      this.setState({
        movie_year: event.target.value
      });
    };

    this.addDescription = event => {
      this.setState({
        movie_description: event.target.value
      });
    };

    this.addCasts = event => {
      this.setState({
        movie_casts: event.target.value
      });
    };

    this.addDirector = event => {
      this.setState({
        movie_director: event.target.value
      });
    };

    this.state = {
      movie_title: '',
      movie_year: '',
      movie_description: '',
      movie_casts: '',
      movie_director: ''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      this.setState({
        movie_title: '',
        movie_year: '',
        movie_description: '',
        movie_casts: '',
        movie_director: ''
      });
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      show: this.props.showAdd,
      onHide: this.props.handleCloseAdd,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
      closeButton: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Add Item")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      id: "reset",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      controlId: "formTitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Movie Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "text",
      placeholder: "Title",
      onChange: event => this.addTitle(event),
      required: "true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      controlId: "formYear",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Movie Year"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "text",
      placeholder: "Year",
      onChange: event => this.addYear(event),
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      controlId: "formDescription",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "Movie Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "text",
      placeholder: "Description",
      onChange: event => this.addDescription(event),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      controlId: "formCasts",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Movie Casts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "text",
      placeholder: "Casts",
      onChange: event => this.addCasts(event),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      controlId: "formDirector",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "Movie Director"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "text",
      placeholder: "Director",
      onChange: event => this.addDirector(event),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "secondary",
      onClick: this.props.handleCloseAdd,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "Close"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "primary",
      onClick: event => this.props.handleAdd(this.state.movie_title, this.state.movie_year, this.state.movie_description, this.state.movie_casts, this.state.movie_director, event),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "Add"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ModalComponent);

/***/ }),

/***/ "./src/home.css":
/*!**********************!*\
  !*** ./src/home.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/home.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/home.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/home.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/home.jsx":
/*!**********************!*\
  !*** ./src/home.jsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_images_popcorn_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/images/popcorn.jpg */ "./src/images/popcorn.jpg");
/* harmony import */ var _src_images_popcorn_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_images_popcorn_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/home.css */ "./src/home.css");
/* harmony import */ var _src_home_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_home_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./static/constants */ "./src/static/constants.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ "./src/actions.jsx");
/* harmony import */ var _src_form_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/form.js */ "./src/form.js");
/* harmony import */ var _src_update_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/update.js */ "./src/update.js");
var _jsxFileName = "/Development/movie/src/home.jsx";










class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleCloseAdd = () => {
      this.setState({
        showAdd: false
      });
    };

    this.componentDidMount = () => {
      this.fetchInventories();
    };

    this.addInventory = (movie_title, movie_year, movie_description, movie_casts, movie_director, event) => {
      event.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(_static_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"], {
        "info": {
          "movie_title": movie_title,
          "movie_year": movie_year,
          "movie_description": movie_description
        },
        "crew": {
          "movie_casts": movie_casts,
          "movie_director": movie_description
        }
      }).then(response => {
        this.setState({
          showAdd: false
        });
        this.fetchInventories();
      }).catch(error => {
        console.log(error);
      });
    };

    this.editInventory = (movie_title, movie_year, movie_description, movie_casts, movie_director, id) => {
      console.log(this.state.id);
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.put(_static_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + this.state.id, {
        "info": {
          "movie_title": movie_title,
          "movie_year": movie_year,
          "movie_description": movie_description
        },
        "crew": {
          "movie_casts": movie_casts,
          "movie_director": movie_description
        }
      }).then(response => {
        this.setState({
          showUpdate: false
        });
        this.fetchInventories();
      }).catch(error => {
        console.log(error);
      });
    };

    this.deleteInventory = event => {
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.delete(_static_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + event.target.value).then(() => {
        this.fetchInventories();
      }).catch(err => {
        console.log(err);
      });
    };

    this.handleCloseUpdate = this.handleCloseUpdate.bind(this);
    this.handleCloseAdd = this.handleCloseAdd.bind(this);
    this.state = {
      columns: [{
        label: 'Movie Title',
        field: 'movie_title',
        sort: 'asc'
      }, {
        label: 'Date Released',
        field: 'movie_year',
        sort: 'asc'
      }, {
        label: 'Movie Description',
        field: 'movie_description',
        sort: 'asc'
      }, {
        label: 'Casts',
        field: 'movie_casts',
        sort: 'asc'
      }, {
        label: 'Director',
        field: 'movie_director',
        sort: 'asc'
      }],
      rows: [],
      showUpdate: false,
      showAdd: false
    };
  }

  handleShowUpdate(index, id) {
    this.setState({
      showUpdate: true,
      index: index,
      id: id
    });
  }

  handleShowAdd() {
    this.setState({
      showAdd: true
    });
  }

  handleCloseUpdate() {
    this.setState({
      showUpdate: false
    });
  }

  fetchInventories() {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(_static_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"]).then(res => {
      const resp = res.data.map((data, index) => {
        return {
          movie_title: data.info.movie_title,
          movie_year: data.info.movie_year,
          movie_description: data.info.movie_description,
          movie_casts: data.crew.movie_casts,
          movie_director: data.crew.movie_director,
          action: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_actions__WEBPACK_IMPORTED_MODULE_6__["DeleteButton"], {
            id: data.id,
            delete: event => this.deleteInventory(event),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateButton"], {
            id: data.id,
            openModal: () => this.handleShowUpdate(index, data.id),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          })]
        };
      });
      const newState = Object.assign({}, this.state, {
        rows: resp
      });
      document.getElementsByClassName('dataTable')[0].children[2].remove();
      document.querySelector('.dataTables_filter').style.cssText = " display: block; float: right; margin: 10px auto; position: relative; top: 0px;";
      document.querySelector('.dataTables_length').style.cssText = " float: left;";
      this.setState(newState);
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "homePage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _src_images_popcorn_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
      width: "50",
      alt: "popcorn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      width: "8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, "Movie Search"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "table-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_actions__WEBPACK_IMPORTED_MODULE_6__["AddButton"], {
      addModal: this.handleShowAdd.bind(this),
      handleAdd: event => this.addInventory(event),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_update_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: this.state.id,
      showUpdate: this.state.showUpdate,
      handleCloseUpdate: this.handleCloseUpdate,
      handleUpdate: this.editInventory,
      data: this.state.rows[this.state.index],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_form_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      showAdd: this.state.showAdd,
      handleCloseAdd: this.handleCloseAdd,
      handleAdd: this.addInventory,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBDataTable"], {
      data: this.state,
      key: this.state.rows.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/images/popcorn.jpg":
/*!********************************!*\
  !*** ./src/images/popcorn.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/popcorn.fe996fe3.jpg";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-css-only/css/bootstrap.min.css */ "./node_modules/bootstrap-css-only/css/bootstrap.min.css");
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mdbreact/dist/css/mdb.css */ "./node_modules/mdbreact/dist/css/mdb.css");
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Development/movie/src/index.js";








react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/static/constants.js":
/*!*********************************!*\
  !*** ./src/static/constants.js ***!
  \*********************************/
/*! exports provided: BASE_URL, API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
const BASE_URL = "http://localhost:8080";
const API_URL = "".concat(BASE_URL, "/api/v1/movies/");

/***/ }),

/***/ "./src/update.js":
/*!***********************!*\
  !*** ./src/update.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Development/movie/src/update.js";



class ModalComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.updateTitle = event => {
      this.setState({
        movie_title: event.target.value
      });
    };

    this.updateYear = event => {
      this.setState({
        movie_year: event.target.value
      });
    };

    this.updateDescription = event => {
      this.setState({
        movie_description: event.target.value
      });
    };

    this.updateCasts = event => {
      this.setState({
        movie_casts: event.target.value
      });
    };

    this.updateDirector = event => {
      this.setState({
        movie_director: event.target.value
      });
    };

    this.state = {
      movie_title: '',
      movie_year: '',
      movie_description: '',
      movie_casts: '',
      movie_director: '',
      id: 0
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      this.setState({
        movie_title: this.props.data.movie_title,
        movie_year: this.props.data.movie_year,
        movie_description: this.props.data.movie_description,
        movie_casts: this.props.data.movie_casts,
        movie_director: this.props.data.movie_director,
        id: this.props.id
      });
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      show: this.props.showUpdate,
      onHide: this.props.handleCloseUpdate,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
      closeButton: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, this.props.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      controlId: "formTitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Movie Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "text",
      placeholder: "Title",
      value: this.state.movie_title,
      onChange: event => this.updateTitle(event),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      controlId: "formYear",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Movie Year"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "text",
      placeholder: "Year",
      value: this.state.movie_year,
      onChange: event => this.updateYear(event),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      controlId: "formDescription",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Movie Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "text",
      placeholder: "Description",
      value: this.state.movie_description,
      onChange: event => this.updateDescription(event),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      controlId: "formCasts",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Movie Casts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "text",
      placeholder: "Casts",
      value: this.state.movie_casts,
      onChange: event => this.updateCasts(event),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      controlId: "formDirector",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Movie Director"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "text",
      placeholder: "Director",
      value: this.state.movie_director,
      onChange: event => this.updateDirector(event),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "secondary",
      onClick: this.props.handleCloseUpdate,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Close"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "primary",
      onClick: () => this.props.handleUpdate(this.state.movie_title, this.state.movie_year, this.state.movie_description, this.state.movie_casts, this.state.movie_director, this.props.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "Update"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ModalComponent);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Development/movie/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Development/movie/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map