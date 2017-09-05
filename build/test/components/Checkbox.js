"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var renderer = require("react-test-renderer");
var Checkbox_1 = require("../../src/components/Checkbox");
describe('Checkbox', function () {
    it('Simple usage', function () {
        var component = renderer.create(React.createElement(Checkbox_1.Checkbox, null));
        var actual = component.toJSON(), expected = {
            type: 'span',
            props: {
                className: 'ej-components__checkbox',
            },
            children: [
                {
                    type: 'label',
                    props: {
                        className: '',
                    },
                    children: [
                        {
                            type: 'span',
                            props: {
                                className: 'ej-components__checkbox-icon__unchecked',
                            },
                            children: null,
                        },
                        {
                            type: 'span',
                            props: {
                                'className': 'ej-components__checkbox-label',
                            },
                            children: null,
                        }
                    ]
                }
            ],
        };
        expect(JSON.stringify(actual, null, 4)).toBe(JSON.stringify(expected, null, 4));
    });
    it('Advanced usage', function () {
        var component = renderer.create(React.createElement(Checkbox_1.Checkbox, { name: 'my-name', label: 'Some text', checked: true, className: 'my-class', disabled: true, inline: true, clickCapture: true }));
        var actual = component.toJSON(), expected = {
            type: 'span',
            props: {
                className: 'ej-components__checkbox my-class',
            },
            children: [
                {
                    type: 'label',
                    props: {
                        className: 'checkbox-inline disabled',
                    },
                    children: [
                        {
                            type: 'span',
                            props: {
                                className: 'glyphicon glyphicon-ok ej-components__checkbox-icon__checked',
                            },
                            children: null,
                        },
                        {
                            type: 'span',
                            props: {
                                'className': 'ej-components__checkbox-label',
                            },
                            children: [
                                'Some text',
                            ],
                        }
                    ]
                }
            ],
        };
        expect(JSON.stringify(actual, null, 4)).toBe(JSON.stringify(expected, null, 4));
    });
    it('Check onChange event', function () {
        var actual = false, actualName, actualIconClassName, expectedName = 'my-name', expectedCheckedIconClassName = 'glyphicon glyphicon-ok ej-components__checkbox-icon__checked', expectedUncheckedIconClassName = 'ej-components__checkbox-icon__unchecked';
        var onChange = function (checked, name) {
            actual = checked;
            actualName = name;
        }, component = renderer.create(React.createElement(Checkbox_1.Checkbox, { onChange: onChange, name: expectedName }));
        var tree = component.toJSON();
        actualIconClassName = tree.children[0].children[0].props.className;
        expect(actualIconClassName).toBe(expectedUncheckedIconClassName);
        tree.children[0].props.onClick();
        expect(actual).toBe(true);
        expect(actualName).toBe(expectedName);
        tree = component.toJSON();
        actualIconClassName = tree.children[0].children[0].props.className;
        expect(actualIconClassName).toBe(expectedCheckedIconClassName);
        tree.children[0].props.onClick();
        expect(actual).toBe(false);
        tree = component.toJSON();
        actualIconClassName = tree.children[0].children[0].props.className;
        expect(actualIconClassName).toBe(expectedUncheckedIconClassName);
    });
    it('Skip onChange event if disabled', function () {
        var actual = false, actualIconClassName, expectedCheckedIconClassName = 'glyphicon glyphicon-ok ej-components__checkbox-icon__checked';
        var onChange = function (checked, name) {
            actual = true;
        }, component = renderer.create(React.createElement(Checkbox_1.Checkbox, { onChange: onChange, checked: true, disabled: true }));
        var tree = component.toJSON();
        actualIconClassName = tree.children[0].children[0].props.className;
        expect(actualIconClassName).toBe(expectedCheckedIconClassName);
        tree.children[0].props.onClick();
        expect(actual).toBe(false);
        tree = component.toJSON();
        actualIconClassName = tree.children[0].children[0].props.className;
        expect(actualIconClassName).toBe(expectedCheckedIconClassName);
    });
});
