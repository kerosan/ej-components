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
require("./CheckPanel.scss");
var React = require("react");
var CheckPanel = (function (_super) {
    __extends(CheckPanel, _super);
    function CheckPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.getInitState();
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    CheckPanel.prototype.getInitState = function () {
        return {
            checked: !!this.props.checked,
        };
    };
    CheckPanel.prototype.componentWillUpdate = function (nextProps, nextState) {
        if (this.props.checked !== nextProps.checked) {
            nextState.checked = nextProps.checked;
        }
    };
    CheckPanel.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.checked !== undefined && this.state.checked !== nextProps.checked) {
            this.setState(__assign({}, this.state, { checked: nextProps.checked }));
        }
    };
    CheckPanel.prototype.render = function () {
        var spanClassNames = ['ej-components__CheckPanel',], labelClassNames = [], spanElement;
        if (this.props.className) {
            spanClassNames.push(this.props.className);
        }
        if (this.props.disabled) {
            labelClassNames.push('disabled');
        }
        if (this.state.checked) {
            labelClassNames.push('checked');
            spanElement = React.createElement("span", { className: 'glyphicon glyphicon-ok ej-components__CheckPanel-icon__checked' });
        }
        else {
            spanElement = React.createElement("span", { className: 'ej-components__CheckPanel-icon__unchecked' });
            var index = labelClassNames.indexOf('checked');
            if (index > -1) {
                labelClassNames.splice(index, 1);
            }
        }
        return (React.createElement("div", { className: spanClassNames.join(' ') },
            React.createElement("label", { className: labelClassNames.join(' '), onClick: this.onClick },
                spanElement,
                React.createElement("div", { className: 'ej-components__CheckPanel-label' }, this.props.label ? this.props.label : this.props.children))));
    };
    CheckPanel.prototype.onClick = function (e) {
        if (this.props.clickCapture) {
            e.stopPropagation();
        }
        if (this.props.disabled) {
            return;
        }
        if (this.props.onChange) {
            this.props.onChange(!this.state.checked, this.props.name);
        }
        this.setState(__assign({}, this.state, { checked: !this.state.checked }));
    };
    return CheckPanel;
}(React.Component));
exports.CheckPanel = CheckPanel;
