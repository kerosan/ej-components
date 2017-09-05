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
require("./Userpic.scss");
var React = require("react");
var Userpic = (function (_super) {
    __extends(Userpic, _super);
    function Userpic(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    Userpic.prototype.render = function () {
        var href = this.props.href || 'javascript:void(0);', target = this.props.target || '_blank', alt = this.props.alt || '', src = this.props.src || '/chat/static/userpic/photo' + this.props.size + '.png', classNames = [
            'ej-components__userpic-' + this.props.size,
        ];
        if (!this.props.size) {
            throw new Error('The "size" is mandatory property!');
        }
        if (this.props.className) {
            classNames.push(this.props.className);
        }
        return (React.createElement("a", { href: href, target: target, className: classNames.join(' '), onClick: this.onClick },
            React.createElement("img", { alt: alt, src: src })));
    };
    Userpic.prototype.onClick = function () {
        if (this.props.onClick) {
            this.props.onClick(this.props.userId);
        }
    };
    return Userpic;
}(React.Component));
exports.Userpic = Userpic;
