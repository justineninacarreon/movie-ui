webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.1e5d57ee1fedc7e810cf.hot-update.js.map