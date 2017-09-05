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
require("./RadioButton.scss");
var React = require("react");
var Checkbox_1 = require("./Checkbox");
var RadioButton = (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.getInitState();
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    RadioButton.prototype.getInitState = function () {
        return {
            checked: !!this.props.checked,
        };
    };
    RadioButton.prototype.componentWillUpdate = function (nextProps, nextState) {
        if (this.props.checked !== nextProps.checked) {
            nextState.checked = nextProps.checked;
        }
    };
    RadioButton.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.checked !== undefined && this.state.checked !== nextProps.checked) {
            this.setState(__assign({}, this.state, { checked: nextProps.checked }));
        }
    };
    RadioButton.prototype.render = function () {
        var spanClassNames = ['ej-components__radiobutton',], labelClassNames = [], spanElement;
        if (this.props.className) {
            spanClassNames.push(this.props.className);
        }
        if (this.props.disabled) {
            labelClassNames.push('disabled');
        }
        if (this.state.checked) {
            spanElement = React.createElement("span", { className: 'glyphicon glyphicon-ok ej-components__radiobutton-icon__checked' });
        }
        else {
            spanElement = React.createElement("span", { className: 'ej-components__radiobutton-icon__unchecked' });
        }
        return (React.createElement("span", { className: spanClassNames.join(' ') },
            React.createElement("label", { className: labelClassNames.join(' '), onClick: this.onClick },
                spanElement,
                React.createElement("span", { className: 'ej-components__radiobutton-label' }, this.props.label ? this.props.label : this.props.children))));
    };
    RadioButton.prototype.onClick = function (e) {
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
    return RadioButton;
}(Checkbox_1.Checkbox));
exports.RadioButton = RadioButton;
