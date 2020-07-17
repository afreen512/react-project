webpackHotUpdate("static\\development\\pages\\register.js",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/alerts */ "./helpers/alerts.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/auth */ "./helpers/auth.js");





var _this = undefined,
    _jsxFileName = "C:\\Users\\Afreen Hussain'\\Desktop\\aws-pro\\client\\pages\\register.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var Register = function Register() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: 'afreen',
    email: 'afreenhussain@gmail.com',
    password: '123SD',
    error: '',
    success: '',
    buttonText: 'Register',
    loadedCategories: [],
    categories: []
  }),
      state = _useState[0],
      setState = _useState[1];

  var name = state.name,
      email = state.email,
      password = state.password,
      error = state.error,
      success = state.success,
      buttonText = state.buttonText,
      loadedCategories = state.loadedCategories,
      categories = state.categories;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_10__["isAuth"])() && next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
  }, []); // load categories when component mounts using useEffect

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    loadCategories();
  }, []);

  var loadCategories = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_9__["API"], "/categories"));

            case 2:
              response = _context.sent;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loadedCategories: response.data
              }));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadCategories() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleToggle = function handleToggle(c) {
    return function () {
      // return the first index or -1
      var clickedCategory = categories.indexOf(c);

      var all = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(categories);

      if (clickedCategory === -1) {
        all.push(c);
      } else {
        all.splice(clickedCategory, 1);
      }

      console.log('all >> categories', all);
      setState(_objectSpread(_objectSpread({}, state), {}, {
        categories: all,
        success: '',
        error: ''
      }));
    };
  }; // show categories > checkbox


  var showCategories = function showCategories() {
    return loadedCategories && loadedCategories.map(function (c, i) {
      return __jsx("li", {
        className: "list-unstyled",
        key: c._id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }, __jsx("input", {
        type: "checkbox",
        onChange: handleToggle(c._id),
        className: "mr-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }
      }), __jsx("label", {
        className: "form-check-label",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }
      }, c.name));
    });
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      setState(_objectSpread(_objectSpread({}, state), {}, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, name, e.target.value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "error", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "success", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "buttonText", 'Register'), _objectSpread2)));
    };
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              console.table({
                name: name,
                email: email,
                password: password,
                categories: categories
              });
              setState(_objectSpread(_objectSpread({}, state), {}, {
                buttonText: 'Registering'
              }));
              _context2.prev = 3;
              _context2.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("".concat(_config__WEBPACK_IMPORTED_MODULE_9__["API"], "/register"), {
                name: name,
                email: email,
                password: password,
                categories: categories
              });

            case 6:
              response = _context2.sent;
              console.log(response);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                name: '',
                email: '',
                password: '',
                buttonText: 'Submitted',
                success: response.data.message
              }));
              _context2.next = 15;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](3);
              console.log(_context2.t0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                buttonText: 'Register',
                error: _context2.t0.response.data.error
              }));

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 11]]);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // const handleSubmit = e => {
  //     e.preventDefault();
  //     setState({ ...state, buttonText: 'Registering' });
  //     // console.table({ name, email, password });
  //     axios
  //         .post(`http://localhost:8000/api/register`, {
  //             name,
  //             email,
  //             password
  //         })
  //         .then(response => {
  //             console.log(response);
  //             setState({
  //                 ...state,
  //                 name: '',
  //                 email: '',
  //                 password: '',
  //                 buttonText: 'Submitted',
  //                 success: response.data.message
  //             });
  //         })
  //         .catch(error => {
  //             console.log(error);
  //             setState({ ...state, buttonText: 'Register', error: error.response.data.error });
  //         });
  // };


  var registerForm = function registerForm() {
    return __jsx("form", {
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }
    }, __jsx("input", {
      value: name,
      onChange: handleChange('name'),
      type: "text",
      className: "form-control",
      placeholder: "Type your name",
      required: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }
    }, __jsx("input", {
      value: email,
      onChange: handleChange('email'),
      type: "email",
      className: "form-control",
      placeholder: "Type your email",
      required: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }
    }, __jsx("input", {
      value: password,
      onChange: handleChange('password'),
      type: "password",
      className: "form-control",
      placeholder: "Type your password",
      required: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 13
      }
    }, __jsx("label", {
      className: "text-muted ml-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }
    }, "Category"), __jsx("ul", {
      style: {
        maxHeight: '100px',
        overflowY: 'scroll'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 17
      }
    }, showCategories())), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 13
      }
    }, __jsx("button", {
      className: "btn btn-outline-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }
    }, buttonText)));
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-6 offset-md-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }, "Register"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }), success && Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_8__["showSuccessMessage"])(success), error && Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_8__["showErrorMessage"])(error), registerForm()));
};

_s(Register, "Sx8YUpO14CuS+1WWxehQZB+q8A0=");

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsInN1Y2Nlc3MiLCJidXR0b25UZXh0IiwibG9hZGVkQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiaXNBdXRoIiwiUm91dGVyIiwicHVzaCIsImxvYWRDYXRlZ29yaWVzIiwiYXhpb3MiLCJnZXQiLCJBUEkiLCJyZXNwb25zZSIsImRhdGEiLCJoYW5kbGVUb2dnbGUiLCJjIiwiY2xpY2tlZENhdGVnb3J5IiwiaW5kZXhPZiIsImFsbCIsInNwbGljZSIsImNvbnNvbGUiLCJsb2ciLCJzaG93Q2F0ZWdvcmllcyIsIm1hcCIsImkiLCJfaWQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInRhYmxlIiwicG9zdCIsIm1lc3NhZ2UiLCJyZWdpc3RlckZvcm0iLCJtYXhIZWlnaHQiLCJvdmVyZmxvd1kiLCJzaG93U3VjY2Vzc01lc3NhZ2UiLCJzaG93RXJyb3JNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQUM7QUFDL0JDLFFBQUksRUFBRSxRQUR5QjtBQUUvQkMsU0FBSyxFQUFFLHlCQUZ3QjtBQUcvQkMsWUFBUSxFQUFFLE9BSHFCO0FBSS9CQyxTQUFLLEVBQUUsRUFKd0I7QUFLL0JDLFdBQU8sRUFBRSxFQUxzQjtBQU0vQkMsY0FBVSxFQUFFLFVBTm1CO0FBTy9CQyxvQkFBZ0IsRUFBRSxFQVBhO0FBUS9CQyxj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QURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0tELE9BQU8sSUFBSXdDLDBFQUFrQixDQUFDeEMsT0FBRCxDQUhsQyxFQUlLRCxLQUFLLElBQUkwQyx3RUFBZ0IsQ0FBQzFDLEtBQUQsQ0FKOUIsRUFLS3NDLFlBQVksRUFMakIsQ0FESixDQURKO0FBV0gsQ0E1S0Q7O0dBQU0zQyxROztLQUFBQSxRO0FBOEtTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccmVnaXN0ZXIuanMuMWZkZDBkYjY3MTZiYTgxMjk4NmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHNob3dTdWNjZXNzTWVzc2FnZSwgc2hvd0Vycm9yTWVzc2FnZSB9IGZyb20gJy4uL2hlbHBlcnMvYWxlcnRzJztcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBpc0F1dGggfSBmcm9tICcuLi9oZWxwZXJzL2F1dGgnO1xuXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbmFtZTogJ2FmcmVlbicsXG4gICAgICAgIGVtYWlsOiAnYWZyZWVuaHVzc2FpbkBnbWFpbC5jb20nLFxuICAgICAgICBwYXNzd29yZDogJzEyM1NEJyxcbiAgICAgICAgZXJyb3I6ICcnLFxuICAgICAgICBzdWNjZXNzOiAnJyxcbiAgICAgICAgYnV0dG9uVGV4dDogJ1JlZ2lzdGVyJyxcbiAgICAgICAgbG9hZGVkQ2F0ZWdvcmllczogW10sXG4gICAgICAgIGNhdGVnb3JpZXM6IFtdXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIHN1Y2Nlc3MsIGJ1dHRvblRleHQsIGxvYWRlZENhdGVnb3JpZXMsIGNhdGVnb3JpZXMgfSA9IHN0YXRlO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaXNBdXRoKCkgJiYgUm91dGVyLnB1c2goJy8nKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBsb2FkIGNhdGVnb3JpZXMgd2hlbiBjb21wb25lbnQgbW91bnRzIHVzaW5nIHVzZUVmZmVjdFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxvYWRDYXRlZ29yaWVzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgbG9hZENhdGVnb3JpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSX0vY2F0ZWdvcmllc2ApO1xuICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBsb2FkZWRDYXRlZ29yaWVzOiByZXNwb25zZS5kYXRhIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSBjID0+ICgpID0+IHtcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBmaXJzdCBpbmRleCBvciAtMVxuICAgICAgICBjb25zdCBjbGlja2VkQ2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmluZGV4T2YoYyk7XG4gICAgICAgIGNvbnN0IGFsbCA9IFsuLi5jYXRlZ29yaWVzXTtcblxuICAgICAgICBpZiAoY2xpY2tlZENhdGVnb3J5ID09PSAtMSkge1xuICAgICAgICAgICAgYWxsLnB1c2goYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGwuc3BsaWNlKGNsaWNrZWRDYXRlZ29yeSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2FsbCA+PiBjYXRlZ29yaWVzJywgYWxsKTtcbiAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgY2F0ZWdvcmllczogYWxsLCBzdWNjZXNzOiAnJywgZXJyb3I6ICcnIH0pO1xuICAgIH07XG5cbiAgICAvLyBzaG93IGNhdGVnb3JpZXMgPiBjaGVja2JveFxuICAgIGNvbnN0IHNob3dDYXRlZ29yaWVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbG9hZGVkQ2F0ZWdvcmllcyAmJlxuICAgICAgICAgICAgbG9hZGVkQ2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiIGtleT17Yy5faWR9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e2hhbmRsZVRvZ2dsZShjLl9pZCl9IGNsYXNzTmFtZT1cIm1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPntjLm5hbWV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHtcbiAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW25hbWVdOiBlLnRhcmdldC52YWx1ZSwgZXJyb3I6ICcnLCBzdWNjZXNzOiAnJywgYnV0dG9uVGV4dDogJ1JlZ2lzdGVyJyB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS50YWJsZSh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgIGNhdGVnb3JpZXNcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGJ1dHRvblRleHQ6ICdSZWdpc3RlcmluZycgfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QVBJfS9yZWdpc3RlcmAsIHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogJ1N1Ym1pdHRlZCcsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGJ1dHRvblRleHQ6ICdSZWdpc3RlcicsIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGJ1dHRvblRleHQ6ICdSZWdpc3RlcmluZycgfSk7XG4gICAgLy8gICAgIC8vIGNvbnNvbGUudGFibGUoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gICAgLy8gICAgIGF4aW9zXG4gICAgLy8gICAgICAgICAucG9zdChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9yZWdpc3RlcmAsIHtcbiAgICAvLyAgICAgICAgICAgICBuYW1lLFxuICAgIC8vICAgICAgICAgICAgIGVtYWlsLFxuICAgIC8vICAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAvLyAgICAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgIC8vICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgIC8vICAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgLy8gICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6ICdTdWJtaXR0ZWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyAgICAgICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBidXR0b25UZXh0OiAnUmVnaXN0ZXInLCBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvciB9KTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vIH07XG5cbiAgICBjb25zdCByZWdpc3RlckZvcm0gPSAoKSA9PiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCduYW1lJyl9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnZW1haWwnKX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG1sLTRcIj5DYXRlZ29yeTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IG1heEhlaWdodDogJzEwMHB4Jywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT57c2hvd0NhdGVnb3JpZXMoKX08L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXdhcm5pbmdcIj57YnV0dG9uVGV4dH08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XG4gICAgICAgICAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICB7c3VjY2VzcyAmJiBzaG93U3VjY2Vzc01lc3NhZ2Uoc3VjY2Vzcyl9XG4gICAgICAgICAgICAgICAge2Vycm9yICYmIHNob3dFcnJvck1lc3NhZ2UoZXJyb3IpfVxuICAgICAgICAgICAgICAgIHtyZWdpc3RlckZvcm0oKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9