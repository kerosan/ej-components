import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import withReadme from 'storybook-readme/with-readme'; // tslint:disable-line
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Link } from "../sources/src/components/Link";
import * as MD from '../docs/Link.md';


storiesOf('Link', module)
	.addDecorator(withKnobs)
	.addDecorator(withReadme(MD))
	.addDecorator((story =>
			<div>
				<style>{`
				.ej-component {
					display: block;
					padding: 20px;
					border: 1px dashed grey;
					min-width: 360px;
				}`}</style>
				<div className='ej-component'>
					{story()}
				</div>
			</div>
	))
	.add('default',
		withInfo()(() =>
			<Link onClick={action('Click on Link')}>Link</Link>
		));
