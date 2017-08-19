"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var renderer = require("react-test-renderer");
var Button_1 = require("../../src/components/Button");
describe('Button', function () {
    it('Simple usage', function () {
        var component = renderer.create(React.createElement(Button_1.Button, null));
        var actual = component.toJSON(), expected = {
            type: 'a',
            props: {
                className: 'ej-components__button',
            },
            children: null,
        };
        expect(JSON.stringify(actual, null, 4)).toBe(JSON.stringify(expected, null, 4));
    });
    it('Advanced usage', function () {
        var component = renderer.create(React.createElement(Button_1.Button, { text: "Some text", disabled: true, className: 'my-class' }));
        var actual = component.toJSON(), expected = {
            type: 'a',
            props: {
                className: 'ej-components__button disabled my-class',
            },
            children: [
                'Some text'
            ],
        };
        expect(JSON.stringify(actual, null, 4)).toBe(JSON.stringify(expected, null, 4));
    });
    it('Check onClick event', function () {
        var actual = false;
        var onClick = function () {
            actual = true;
        }, component = renderer.create(React.createElement(Button_1.Button, { onClick: onClick }));
        var tree = component.toJSON();
        tree.props.onClick();
        expect(actual).toBe(true);
    });
    it('Skip onClick event if disabled', function () {
        var actual = false;
        var onClick = function () {
            actual = true;
        }, component = renderer.create(React.createElement(Button_1.Button, { onClick: onClick, disabled: true }));
        var tree = component.toJSON();
        tree.props.onClick();
        expect(actual).toBe(false);
    });
});
