import * as assert from 'assert';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {Checkbox} from '../../src/components/Checkbox';

type R = renderer.ReactTestRendererJSON;

describe('Checkbox', () => {

	it('Simple usage', () => {
		const component: renderer.ReactTestInstance = renderer.create(
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

	it('Advanced usage', () => {
		const component: renderer.ReactTestInstance = renderer.create(
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
			component: renderer.ReactTestInstance = renderer.create(
				<Checkbox onChange={onChange} name={expectedName} />
			);

		let tree: renderer.ReactTestRendererJSON = component.toJSON();
		actualIconClassName = ((tree.children[0] as R).children[0] as R).props.className;
		expect(actualIconClassName).toBe(expectedUncheckedIconClassName);

		((tree.children[0] as R).props.onClick as any)();
		expect(actual).toBe(true);
		expect(actualName).toBe(expectedName);

		tree = component.toJSON();
		actualIconClassName = ((tree.children[0] as R).children[0] as R).props.className;
		expect(actualIconClassName).toBe(expectedCheckedIconClassName);

		((tree.children[0] as R).props.onClick as any)();
		expect(actual).toBe(false);

		tree = component.toJSON();
		actualIconClassName = ((tree.children[0] as R).children[0] as R).props.className;
		expect(actualIconClassName).toBe(expectedUncheckedIconClassName);
	});

	it('Skip onChange event if disabled', () => {
		let actual: boolean = false,
			actualIconClassName: string,
			expectedCheckedIconClassName: string = 'glyphicon glyphicon-ok ej-components__checkbox-icon__checked';

		const onChange: (checked: boolean, name: string) => void = (checked: boolean, name: string) => {
				actual = true;
			},
			component: renderer.ReactTestInstance = renderer.create(
				<Checkbox onChange={onChange} checked={true} disabled={true} />
			);

		let tree: renderer.ReactTestRendererJSON = component.toJSON();
		actualIconClassName = ((tree.children[0] as R).children[0] as R).props.className;
		expect(actualIconClassName).toBe(expectedCheckedIconClassName);

		((tree.children[0] as R).props.onClick as any)();
		expect(actual).toBe(false);

		tree = component.toJSON();
		actualIconClassName = ((tree.children[0] as R).children[0] as R).props.className;
		expect(actualIconClassName).toBe(expectedCheckedIconClassName);
	});
});
