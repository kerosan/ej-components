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
require("./Alert.scss");
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var Alert = (function (_super) {
    __extends(Alert, _super);
    function Alert(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    Alert.prototype.render = function () {
        var classNames = ['ej-components__Alert'];
        if (this.props.className) {
            classNames.push(this.props.className);
        }
        return (React.createElement(react_bootstrap_1.Alert, { bsStyle: this.props.bsStyle, className: classNames.join(' '), onDismiss: this.props.onDismiss, onClick: this.onClick }, this.props.children));
    };
    Alert.prototype.onClick = function () {
        if (this.props.onClick) {
            this.props.onClick();
        }
    };
    return Alert;
}(React.Component));
exports.Alert = Alert;
