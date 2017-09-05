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
require("./Title.scss");
var React = require("react");
var Title = (function (_super) {
    __extends(Title, _super);
    function Title(props) {
        return _super.call(this, props) || this;
    }
    Title.prototype.render = function () {
        var tag, classNames = ['ej-components__Title'];
        if (this.props.bold) {
            classNames.push('bold');
        }
        else {
            classNames.push('normal');
        }
        if (this.props.small) {
            classNames.push('small');
        }
        else {
            classNames.push('large');
        }
        if (this.props.small && this.props.grey) {
            classNames.push('grey');
        }
        else {
            classNames.push('black');
        }
        if (this.props.className) {
            classNames.push(this.props.className);
        }
        if (this.props.inline) {
            tag = React.createElement("span", { className: classNames.join(' ') }, (this.props.text ? this.props.text : this.props.children));
        }
        else {
            tag = React.createElement("div", { className: classNames.join(' ') }, (this.props.text ? this.props.text : this.props.children));
        }
        return tag;
    };
    return Title;
}(React.Component));
exports.Title = Title;
