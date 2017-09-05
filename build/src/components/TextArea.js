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
require("./TextArea.scss");
var React = require("react");
var TextArea = (function (_super) {
    __extends(TextArea, _super);
    function TextArea(props) {
        var _this = _super.call(this, props) || this;
        _this._placeholder = "";
        if (_this.props.placeholder) {
            _this._placeholder = _this.props.placeholder;
        }
        _this.onChange = _this.onChange.bind(_this);
        _this.state = { value: _this.props.value || "" };
        return _this;
    }
    TextArea.prototype.render = function () {
        var classNames = ['ej-components__TextArea'];
        if (this.props.className) {
            classNames.push(this.props.className);
        }
        if (this.props.required) {
            classNames.push('required');
        }
        return React.createElement("div", { className: classNames.join(' ') },
            React.createElement("textarea", { value: this.state.value, placeholder: this._placeholder, onChange: this.onChange }));
    };
    TextArea.prototype.onChange = function (e) {
        this.setState({ value: e.target.value });
        if (this.props.onChange) {
            this.props.onChange();
        }
    };
    return TextArea;
}(React.Component));
exports.TextArea = TextArea;
