"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var renderer = require("react-test-renderer");
var ExpandablePanel_1 = require("../../src/components/ExpandablePanel");
describe('ExpandablePanel', function () {
    it('Simple usage', function () {
        var component = renderer.create(React.createElement(ExpandablePanel_1.ExpandablePanel, null));
        var actual = component.toJSON(), expected = {
            type: 'div',
            props: {
                className: 'ej-components__expandable-panel',
            },
            children: [
                {
                    type: 'div',
                    props: {
                        className: 'panel panel-default',
                        id: null,
                    },
                    children: [
                        {
                            type: 'div',
                            props: {
                                className: 'panel-heading',
                            },
                            children: [
                                {
                                    type: 'div',
                                    props: {
                                        className: 'ej-components__expandable-panel-header panel-title',
                                    },
                                    children: [
                                        {
                                            type: 'a',
                                            props: {
                                                'aria-expanded': false,
                                                'aria-selected': false,
                                                className: 'collapsed',
                                            },
                                            children: [
                                                {
                                                    type: 'div',
                                                    props: {
                                                        className: 'panel-header',
                                                    },
                                                    children: [
                                                        {
                                                            type: 'span',
                                                            props: {},
                                                            children: null,
                                                        },
                                                        {
                                                            type: 'span',
                                                            props: {
                                                                className: 'ej-components__expandable-panel-header-icon glyphicon glyphicon-circle-arrow-down',
                                                            },
                                                            children: null,
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            type: 'div',
                            props: {
                                className: 'panel-collapse collapse',
                                'aria-hidden': true,
                                'aria-expanded': null,
                            },
                            children: null,
                        },
                    ],
                },
            ],
        };
        expect(JSON.stringify(actual, null, 4)).toBe(JSON.stringify(expected, null, 4));
    });
    it('Advanced usage', function () {
        var header = (React.createElement("span", null, "Some text")), component = renderer.create(React.createElement(ExpandablePanel_1.ExpandablePanel, { header: header, defaultExpanded: true }));
        var actual = component.toJSON(), expected = {
            type: 'div',
            props: {
                className: 'ej-components__expandable-panel',
            },
            children: [
                {
                    type: 'div',
                    props: {
                        className: 'panel panel-default',
                        id: null,
                    },
                    children: [
                        {
                            type: 'div',
                            props: {
                                className: 'panel-heading',
                            },
                            children: [
                                {
                                    type: 'div',
                                    props: {
                                        className: 'ej-components__expandable-panel-header panel-title',
                                    },
                                    children: [
                                        {
                                            type: 'a',
                                            props: {
                                                'aria-expanded': true,
                                                'aria-selected': true,
                                                className: null,
                                            },
                                            children: [
                                                {
                                                    type: 'div',
                                                    props: {
                                                        className: 'panel-header',
                                                    },
                                                    children: [
                                                        {
                                                            type: 'span',
                                                            props: {},
                                                            children: [
                                                                'Some text',
                                                            ],
                                                        },
                                                        {
                                                            type: 'span',
                                                            props: {
                                                                className: 'ej-components__expandable-panel-header-icon glyphicon glyphicon-circle-arrow-up',
                                                            },
                                                            children: null,
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            type: 'div',
                            props: {
                                className: 'panel-collapse collapse in',
                                'aria-hidden': false,
                                'aria-expanded': null,
                            },
                            children: null,
                        },
                    ],
                },
            ],
        };
        expect(JSON.stringify(actual, null, 4)).toBe(JSON.stringify(expected, null, 4));
    });
    xit('Check expand/collapse', function () {
        var component = renderer.create(React.createElement(ExpandablePanel_1.ExpandablePanel, { defaultExpanded: true }));
        var tree = component.toJSON();
        tree.children[0].children[0].children[0].children[0].children[0].props.onClick();
    });
});
