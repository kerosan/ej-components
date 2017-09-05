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
require("./Snippet.scss");
var React = require("react");
var Snippet = (function (_super) {
    __extends(Snippet, _super);
    function Snippet(props) {
        return _super.call(this, props) || this;
    }
    Snippet.prototype.render = function () {
        var classNames = ['ej-components__Snippet'];
        if (this.props.grey) {
            classNames.push('grey');
        }
        else {
            classNames.push('black');
        }
        if (this.props.bold) {
            classNames.push('bold');
        }
        if (this.props.className) {
            classNames.push(this.props.className);
        }
        return (React.createElement("span", { className: classNames.join(' ') }, (this.props.text ? this.props.text : this.props.children)));
    };
    return Snippet;
}(React.Component));
exports.Snippet = Snippet;
