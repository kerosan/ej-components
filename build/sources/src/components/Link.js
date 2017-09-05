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
require("./Link.scss");
var React = require("react");
var Link = (function (_super) {
    __extends(Link, _super);
    function Link(props) {
        var _this = _super.call(this, props) || this;
        _this._href = 'javascript://';
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    Link.prototype.render = function () {
        var classNames = ['ej-components__Link'];
        if (this.props.bold) {
            classNames.push('bold');
        }
        if (this.props.href) {
            this._href = this.props.href;
            this.onClick = function () { return void (0); };
        }
        if (this.props.className) {
            classNames.push(this.props.className);
        }
        return (React.createElement("a", { href: this._href, className: classNames.join(' '), onClick: this.onClick }, (this.props.text ? this.props.text : this.props.children)));
    };
    Link.prototype.onClick = function () {
        if (this.props.onClick) {
            this.props.onClick();
        }
    };
    return Link;
}(React.Component));
exports.Link = Link;
