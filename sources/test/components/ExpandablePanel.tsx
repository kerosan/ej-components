import * as assert from 'assert';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {ExpandablePanel} from '../../src/components/ExpandablePanel';

type R = renderer.ReactTestRendererJSON;

describe('ExpandablePanel', () => {

	it('Simple usage', () => {
		const component: renderer.Renderer = renderer.create(
			<ExpandablePanel />
		);

		let actual: renderer.ReactTestRendererJSON = component.toJSON(),
			expected: Object = {
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

	it('Advanced usage', () => {
		const header: JSX.Element = (
				<span>
					Some text
				</span>
			),
			component: renderer.Renderer = renderer.create(
				<ExpandablePanel header={header} defaultExpanded={true} />
			);

		let actual: renderer.ReactTestRendererJSON = component.toJSON(),
			expected: Object = {
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

	xit('Check expand/collapse', () => {
		const component: renderer.Renderer = renderer.create(
				<ExpandablePanel defaultExpanded={true} />
			);

		let tree: R = component.toJSON();

		((((((tree.children[0] as R).children[0] as R).children[0] as R).children[0] as R).children[0] as R).props.onClick as any)();
	});
});
