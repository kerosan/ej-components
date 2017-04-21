import * as assert from 'assert';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {Checkbox} from '../../src/components/Checkbox';

type R = renderer.ReactTestRendererJSON;

describe('Checkbox', () => {

	it('Simple usage', () => {
		const component: renderer.Renderer = renderer.create(
			<Checkbox />
		);

		let actual: renderer.ReactTestRendererJSON = component.toJSON(),
			expected: renderer.ReactTestRendererJSON = {
				type: 'span',
				props: {
					className: 'ej-components__checkbox form-group',
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
								props: {},
								children: null,
							}
						]
					}
				],
			};

		assert.equal(JSON.stringify(actual, null, 4), JSON.stringify(expected, null, 4));
	});

	it('Advanced usage', () => {
		const component: renderer.Renderer = renderer.create(
			<Checkbox name={'my-name'}
					  label={'Some text'}
					  checked={true}
					  className={'my-class'}
					  disabled={true}
					  inline={true}
					  clickCapture={true} />
		);

		let actual: renderer.ReactTestRendererJSON = component.toJSON(),
			expected: renderer.ReactTestRendererJSON = {
				type: 'span',
				props: {
					className: 'ej-components__checkbox form-group my-class',
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
								props: {},
								children: [
									'Some text',
								],
							}
						]
					}
				],
			};

		assert.equal(JSON.stringify(actual, null, 4), JSON.stringify(expected, null, 4));
	});

	it('Check onChange event', () => {
		let actual: boolean = false,
			actualName: string,
			actualIconClassName: string,
			expectedName: string = 'my-name',
			expectedCheckedIconClassName: string = 'glyphicon glyphicon-ok ej-components__checkbox-icon__checked',
			expectedUncheckedIconClassName: string = 'ej-components__checkbox-icon__unchecked';

		const onChange: (checked: boolean, name: string) => void = (checked: boolean, name: string) => {
				actual = checked;
				actualName = name;
			},
			component: renderer.Renderer = renderer.create(
				<Checkbox onChange={onChange} name={expectedName} />
			);

		let tree: renderer.ReactTestRendererJSON = component.toJSON();
		actualIconClassName = ((tree.children[0] as R).children[0] as R).props.className;
		assert.equal(actualIconClassName, expectedUncheckedIconClassName, 'Wrong class name for unchecked icon');

		((tree.children[0] as R).props.onClick as any)();
		assert.equal(actual, true, 'Wrong value received in change event');
		assert.equal(actualName, expectedName, 'Wrong name');

		tree = component.toJSON();
		actualIconClassName = ((tree.children[0] as R).children[0] as R).props.className;
		assert.equal(actualIconClassName, expectedCheckedIconClassName, 'Wrong class name for checked icon');

		((tree.children[0] as R).props.onClick as any)();
		assert.equal(actual, false, 'Wrong value received in change event');

		tree = component.toJSON();
		actualIconClassName = ((tree.children[0] as R).children[0] as R).props.className;
		assert.equal(actualIconClassName, expectedUncheckedIconClassName, 'Wrong class name for unchecked icon');
	});

	it('Skip onChange event if disabled', () => {
		let actual: boolean = false,
			actualIconClassName: string,
			expectedCheckedIconClassName: string = 'glyphicon glyphicon-ok ej-components__checkbox-icon__checked';

		const onChange: (checked: boolean, name: string) => void = (checked: boolean, name: string) => {
				actual = true;
			},
			component: renderer.Renderer = renderer.create(
				<Checkbox onChange={onChange} checked={true} disabled={true} />
			);

		let tree: renderer.ReactTestRendererJSON = component.toJSON();
		actualIconClassName = ((tree.children[0] as R).children[0] as R).props.className;
		assert.equal(actualIconClassName, expectedCheckedIconClassName, 'Wrong class name for checked icon');

		((tree.children[0] as R).props.onClick as any)();
		assert.equal(actual, false, 'onChange event fired');

		tree = component.toJSON();
		actualIconClassName = ((tree.children[0] as R).children[0] as R).props.className;
		assert.equal(actualIconClassName, expectedCheckedIconClassName, 'Wrong class name for checked icon');
	});
});
