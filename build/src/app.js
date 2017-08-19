"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Button_1 = require("./components/Button");
var btn = (React.createElement(Button_1.Button, { text: 'Button', onClick: function () {
        alert('on click');
    } }));
var btnToolbar = (React.createElement("div", { className: 'btn-toolbar' },
    React.createElement(Button_1.Button, { text: 'Button', onClick: function () {
            alert('on click');
        } }),
    React.createElement(Button_1.Button, { text: 'Button', disabled: true, onClick: function () {
            alert('on click');
        } })));
window.addEventListener('load', function (e) {
    ReactDOM.render(btn, document.getElementById('Button'));
    ReactDOM.render(btnToolbar, document.getElementById('ButtonToolbar'));
});
