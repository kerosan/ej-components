"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Button_1 = require("./components/Button");
var Checkbox_1 = require("./components/Checkbox");
var btn = (React.createElement(Button_1.Button, { text: 'Button', onClick: function () { return alert('on click 0'); } }));
var btnToolbar = (React.createElement("div", { className: 'btn-toolbar' },
    React.createElement(Button_1.Button, { text: 'Button', onClick: function () { return alert('on click 1'); } }),
    React.createElement(Button_1.Button, { text: 'Button', disabled: true, onClick: function () { return alert('on click 2'); } })));
var checkbox = (React.createElement("div", null,
    React.createElement(Checkbox_1.Checkbox, { checked: true }),
    React.createElement(Checkbox_1.Checkbox, { disabled: true }),
    React.createElement(Checkbox_1.Checkbox, { label: 'Checkbox' })));
window.addEventListener('load', function (e) {
    ReactDOM.render(btn, document.getElementById('Button'));
    ReactDOM.render(btnToolbar, document.getElementById('ButtonToolbar'));
    ReactDOM.render(checkbox, document.getElementById('Checkbox'));
});
