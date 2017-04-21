import * as assert from 'assert';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {Button} from '../../src/components/Button';

describe('Button', () => {

	it('Simple usage', () => {
		const component: renderer.Renderer = renderer.create(
			<Button />
		);

		let actual: renderer.ReactTestRendererJSON = component.toJSON(),
			expected: renderer.ReactTestRendererJSON = {
				type: 'a',
				props: {
					className: 'ej-components__button btn btn-primary',
				},
				children: null,
			};

		assert.equal(JSON.stringify(actual, null, 4), JSON.stringify(expected, null, 4));
	});

	it('Advanced usage', () => {
		const component: renderer.Renderer = renderer.create(
			<Button text={"Some text"} disabled={true} className={'my-class'} />
		);

		let actual: renderer.ReactTestRendererJSON = component.toJSON(),
			expected: renderer.ReactTestRendererJSON = {
				type: 'a',
				props: {
					className: 'ej-components__button btn btn-primary disabled my-class',
				},
				children: [
					'Some text'
				],
			};

		assert.equal(JSON.stringify(actual, null, 4), JSON.stringify(expected, null, 4));
	});

	it('Check onClick event', () => {
		let actual: boolean = false;

		const onClick: () => void = () => {
				actual = true;
			},
			component: renderer.Renderer = renderer.create(
				<Button onClick={onClick} />
			);

		let tree: renderer.ReactTestRendererJSON = component.toJSON();

		(tree.props.onClick as any)();

		assert.equal(actual, true);
	});

	it('Skip onClick event if disabled', () => {
		let actual: boolean = false;

		const onClick: () => void = () => {
				actual = true;
			},
			component: renderer.Renderer = renderer.create(
				<Button onClick={onClick} disabled={true} />
			);

		let tree: renderer.ReactTestRendererJSON = component.toJSON();

		(tree.props.onClick as any)();

		assert.equal(actual, false);
	});
});
