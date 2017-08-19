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
require("./Button.scss");
var React = require("react");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    Button.prototype.render = function () {
        var classNames = ['ej-components__button'];
        if (this.props.disabled) {
            classNames.push('disabled');
        }
        if (this.props.className) {
            classNames.push(this.props.className);
        }
        return (React.createElement("a", { className: classNames.join(' '), onClick: this.onClick }, (this.props.text ? this.props.text : this.props.children)));
    };
    Button.prototype.onClick = function () {
        if (this.props.onClick && !this.props.disabled) {
            this.props.onClick();
        }
    };
    return Button;
}(React.Component));
exports.Button = Button;
