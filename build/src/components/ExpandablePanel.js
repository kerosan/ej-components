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
require("./ExpandablePanel.scss");
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var ExpandablePanel = (function (_super) {
    __extends(ExpandablePanel, _super);
    function ExpandablePanel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.getInitState();
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    ExpandablePanel.prototype.getInitState = function () {
        return { expanded: this.props.defaultExpanded };
    };
    ExpandablePanel.prototype.render = function () {
        var glyph = this.state.expanded ? 'circle-arrow-up' : 'circle-arrow-down', panelHeader = (React.createElement("div", { className: 'ej-components__expandable-panel-header' },
            React.createElement("div", { className: 'panel-header', onClick: this.onClick },
                this.props.header ? this.props.header : React.createElement("span", null),
                React.createElement(react_bootstrap_1.Glyphicon, { glyph: glyph, className: "ej-components__expandable-panel-header-icon" }))));
        return (React.createElement("div", { className: 'ej-components__expandable-panel' },
            React.createElement(react_bootstrap_1.Panel, { collapsible: true, defaultExpanded: this.props.defaultExpanded, expanded: this.state.expanded, header: panelHeader }, this.props.children)));
    };
    ExpandablePanel.prototype.onClick = function () {
        if (this.props.onExpandToggle) {
            this.props.onExpandToggle(!this.state.expanded);
        }
        this.setState(__assign({}, this.state, { expanded: !this.state.expanded }));
    };
    return ExpandablePanel;
}(React.Component));
exports.ExpandablePanel = ExpandablePanel;
