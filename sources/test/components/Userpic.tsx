import * as assert from 'assert';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {Userpic} from '../../src/components/Userpic';

describe('Userpic', () => {

	it('Simple usage', () => {
		const component: renderer.Renderer = renderer.create(
			<Userpic size={'40x40'} />
		);

		let actual: renderer.ReactTestRendererJSON = component.toJSON(),
			expected: renderer.ReactTestRendererJSON = {
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
							src: '/path/to/image/40x40.png',
						},
						children: null,
					}
				],
			};

		assert.equal(JSON.stringify(actual, null, 4), JSON.stringify(expected, null, 4));
	});

	it('Advanced usage', () => {
		const component: renderer.Renderer = renderer.create(
			<Userpic size={'40x40'}
					 href={'http://example.com/'}
					 target={'_self'}
					 alt={'Alt text'}
					 src={'/path/to/my/image.png'}
					 className={'example-class-name'} />
		);

		let actual: renderer.ReactTestRendererJSON = component.toJSON(),
			expected: renderer.ReactTestRendererJSON = {
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

	it('Check onClick event', () => {
		let actualUserId: number,
			expectedUserId: number = 5;
		const onClick: (userId) => void = (userId: number) => {
				actualUserId = userId;
			},
			component: renderer.Renderer = renderer.create(
				<Userpic size={'40x40'} userId={expectedUserId} onClick={onClick} />
			);

		let tree: renderer.ReactTestRendererJSON = component.toJSON();

		(tree.props.onClick as any)();

		assert.equal(actualUserId, expectedUserId);
	});

	it('Throw error if size don\'t passed', () => {
		let actual: boolean = false;
		try {
			renderer.create(<Userpic />);
		} catch (e) {
			actual = true;
		}

		assert.equal(actual, true);
	});
});
