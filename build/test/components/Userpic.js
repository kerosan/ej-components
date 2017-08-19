"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var React = require("react");
var renderer = require("react-test-renderer");
var Userpic_1 = require("../../src/components/Userpic");
describe('Userpic', function () {
    it('Simple usage', function () {
        var component = renderer.create(React.createElement(Userpic_1.Userpic, { size: '40x40' }));
        var actual = component.toJSON(), expected = {
            type: 'a',
            props: {
                href: 'javascript:void(0);',
                target: '_blank',
                className: 'ej-components__userpic-40x40',
            },
            children: [
                {
                    type: 'img',
                    props: {
                        alt: '',
                        src: '/chat/static/userpic/photo40x40.png',
                    },
                    children: null,
                }
            ],
        };
        expect(JSON.stringify(actual, null, 4)).toBe(JSON.stringify(expected, null, 4));
    });
    it('Advanced usage', function () {
        var component = renderer.create(React.createElement(Userpic_1.Userpic, { size: '40x40', href: 'http://example.com/', target: '_self', alt: 'Alt text', src: '/path/to/my/image.png', className: 'example-class-name' }));
        var actual = component.toJSON(), expected = {
            type: 'a',
            props: {
                href: 'http://example.com/',
                target: '_self',
                className: 'ej-components__userpic-40x40 example-class-name',
            },
            children: [
                {
                    type: 'img',
                    props: {
                        alt: 'Alt text',
                        src: '/path/to/my/image.png',
                    },
                    children: null,
                }
            ],
        };
        assert.equal(JSON.stringify(actual, null, 4), JSON.stringify(expected, null, 4));
    });
    it('Check onClick event', function () {
        var actualUserId, expectedUserId = 5;
        var onClick = function (userId) {
            actualUserId = userId;
        }, component = renderer.create(React.createElement(Userpic_1.Userpic, { size: '40x40', userId: expectedUserId, onClick: onClick }));
        var tree = component.toJSON();
        tree.props.onClick();
        assert.equal(actualUserId, expectedUserId);
    });
    it('Throw error if size don\'t passed', function () {
        var actual = false;
        try {
            renderer.create(React.createElement(Userpic_1.Userpic, null));
        }
        catch (e) {
            actual = true;
        }
        assert.equal(actual, true);
    });
});
