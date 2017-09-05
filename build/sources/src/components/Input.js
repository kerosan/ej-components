"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("./Input.scss");
var React = require("react");
var Input = (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this._type = "text";
        _this._placeholder = "";
        if (_this.props.type) {
            _this._type = _this.props.type;
            _this._placeholder = _this.props.type;
        }
        if (_this.props.placeholder) {
            _this._placeholder = _this.props.placeholder;
        }
        _this.onChange = _this.onChange.bind(_this);
        _this.state = { value: _this.props.value || "" };
        return _this;
    }
    Input.prototype.render = function () {
        var classNames = ['ej-components__Input'];
        if (this.props.className) {
            classNames.push(this.props.className);
        }
        if (this.props.error) {
            classNames.push('validationError');
        }
        if (this.props.warning) {
            classNames.push('validationWarning');
        }
        return React.createElement("div", { className: classNames.join(' ') },
            React.createElement("input", { value: this.state.value, type: this._type, placeholder: this._placeholder, onChange: this.onChange }),
            React.createElement("div", null, this.props.message));
    };
    Input.prototype.onChange = function (e) {
        this.setState({ value: e.target.value });
        if (this.props.onChange) {
            this.props.onChange();
        }
    };
    return Input;
}(React.Component));
exports.Input = Input;
