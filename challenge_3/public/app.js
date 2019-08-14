"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      page: 0,
      webpage: '',
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      homestate: '',
      zipcode: '',
      phoneNumber: '',
      ccNumber: '',
      expDate: '',
      cvv: '',
      billZip: ''
    };
    _this.inputFormChange = _this.inputFormChange.bind(_assertThisInitialized(_this)); //  this.renderf1Page = this.renderf1Page.bind(this);

    _this.submitInputFormData = _this.submitInputFormData.bind(_assertThisInitialized(_this));
    _this.nextPage = _this.nextPage.bind(_assertThisInitialized(_this));
    /*
    ==========
    handler function binds
    ==========
    */

    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.homePage();
    }
    /*
    ==========
    render pages
    ==========
    */

  }, {
    key: "nextPage",
    value: function nextPage() {
      // console.log(this.state.page);
      this.setState(function (state) {
        return {
          page: state.page + 1
        };
      });
    }
    /*
    ==========
    home page
    ==========
    */

  }, {
    key: "homePage",
    value: function homePage() {
      this.setState({
        webpage: React.createElement("button", {
          onClick: this.nextPage,
          id: "checkout"
        }, "Checkout")
      });
    } // renderf1Page() {
    //   this.setState({
    //     webpage: this.f1
    //   })
    // }

    /*
    ==========
    f1 page
    ==========
    */

  }, {
    key: "inputFormChange",
    value: function inputFormChange(event) {
      this.setState(_defineProperty({}, event.target.id, event.target.value));
    }
  }, {
    key: "submitInputFormData",
    value: function submitInputFormData(event) {
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var webpageDOM;

      if (this.state.page === 0) {
        webpageDOM = React.createElement("button", {
          onClick: this.nextPage,
          id: "checkout"
        }, "Checkout");
      } else if (this.state.page === 1) {
        webpageDOM = React.createElement("div", null, React.createElement("form", null, React.createElement("label", null, "Name:", React.createElement("input", {
          type: "text",
          id: "name",
          onChange: this.inputFormChange,
          value: this.state.name
        })), React.createElement("br", null), React.createElement("label", null, "Email:", React.createElement("input", {
          type: "text",
          id: "email",
          onChange: this.inputFormChange,
          value: this.state.email
        })), React.createElement("br", null), React.createElement("label", null, "Password:", React.createElement("input", {
          type: "text",
          id: "password",
          onChange: this.inputFormChange,
          value: this.state.password
        })), React.createElement("br", null), React.createElement("input", {
          type: "submit",
          onClick: this.submitInputFormData
        })), React.createElement("button", {
          onClick: this.nextPage
        }, "Next"));
      } else if (this.state.page === 2) {
        webpageDOM = React.createElement("div", null, React.createElement("form", null, React.createElement("label", null, "Address Line 1", React.createElement("input", {
          type: "text",
          id: "address1",
          onChange: this.inputFormChange,
          value: this.state.address1
        })), React.createElement("br", null), React.createElement("label", null, "Address Line 2", React.createElement("input", {
          type: "text",
          id: "address2",
          onChange: this.inputFormChange,
          value: this.state.address2
        })), React.createElement("br", null), React.createElement("label", null, "City", React.createElement("input", {
          type: "text",
          id: "city",
          onChange: this.inputFormChange,
          value: this.state.city
        })), React.createElement("br", null), React.createElement("label", null, "State", React.createElement("input", {
          type: "text",
          id: "homestate",
          onChange: this.inputFormChange,
          value: this.state.homestate
        })), React.createElement("br", null), React.createElement("label", null, "Zip Code", React.createElement("input", {
          type: "text",
          id: "zipcode",
          onChange: this.inputFormChange,
          value: this.state.zipcode
        })), React.createElement("br", null), React.createElement("label", null, "Phone Number", React.createElement("input", {
          type: "text",
          id: "phoneNumber",
          onChange: this.inputFormChange,
          value: this.state.phoneNumber
        })), React.createElement("br", null), React.createElement("input", {
          type: "submit",
          onClick: this.submitInputFormData
        })), React.createElement("button", {
          onClick: this.nextPage
        }, "Next"));
      } else if (this.state.page === 3) {
        webpageDOM = React.createElement("div", null, React.createElement("form", null, React.createElement("label", null, "Credit Card Number:", React.createElement("input", {
          type: "text",
          id: "ccNumber",
          onChange: this.inputFormChange,
          value: this.state.ccNumber
        })), React.createElement("br", null), React.createElement("label", null, "Expiration Date:", React.createElement("input", {
          type: "text",
          id: "expDate",
          onChange: this.inputFormChange,
          value: this.state.expDate
        })), React.createElement("br", null), React.createElement("label", null, "CVV:", React.createElement("input", {
          type: "text",
          id: "cvv",
          onChange: this.inputFormChange,
          value: this.state.cvv
        })), React.createElement("br", null), React.createElement("label", null, "Billing Zip Code:", React.createElement("input", {
          type: "text",
          id: "billZip",
          onChange: this.inputFormChange,
          value: this.state.billZip
        })), React.createElement("br", null), React.createElement("input", {
          type: "submit",
          onClick: this.submitInputFormData
        })), React.createElement("button", {
          onClick: this.nextPage
        }, "Next"));
      }

      return React.createElement("div", null, React.createElement("header", null, "The Complete Checkout Experience"), webpageDOM);
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));