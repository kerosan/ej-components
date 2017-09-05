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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./List.scss");
var React = require("react");
var ListItem_1 = require("./ListItem");
var GeminiScrollbar = require("react-gemini-scrollbar");
var NUMBER_OF_LIST_ITEMS_WITH_SCROLL = 5;
var List = (function (_super) {
    __extends(List, _super);
    function List(props) {
        return _super.call(this, props) || this;
    }
    List.prototype.render = function () {
        var classNames = ['ej-components__List'];
        console.log(this.props.children);
        var items;
        if (this.props.className) {
            classNames.push(this.props.className);
        }
        if (!this.props.children) {
            if (this.props.items === undefined || this.props.items.length === 0) {
                return React.createElement("div", { className: classNames.concat(['no_scroll']).join(' ') },
                    React.createElement("ul", null,
                        React.createElement(ListItem_1.ListItem, { empty: true, text: this.props.emptyTitle || "Empty list" })));
            }
            items = this.props.items.map(function (props, key) {
                return React.createElement(ListItem_1.ListItem, __assign({ key: key }, props));
            });
            if (this.props.items.length <= NUMBER_OF_LIST_ITEMS_WITH_SCROLL) {
                return React.createElement("div", { className: classNames.concat(['no_scroll']).join(' ') },
                    React.createElement("ul", null, items));
            }
        }
        else {
            if (this.props.children === undefined || this.props.children['length'] === 0) {
                return React.createElement("ul", null,
                    React.createElement(ListItem_1.ListItem, { empty: true, text: this.props.emptyTitle || "Empty list" }));
            }
            if (this.props.children['length'] <= NUMBER_OF_LIST_ITEMS_WITH_SCROLL) {
                return React.createElement("div", { className: classNames.concat(['no_scroll']).join(' ') },
                    React.createElement("ul", null, this.props.children));
            }
        }
        return (React.createElement(GeminiScrollbar, { forceGemini: true, className: classNames.join(' '), style: { width: '100%', minWidth: 300, maxHeight: 166, minHeight: 33 } },
            React.createElement("ul", null, (items ? items : this.props.children))));
    };
    return List;
}(React.Component));
exports.List = List;
