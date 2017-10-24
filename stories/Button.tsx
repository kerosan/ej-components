import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import withReadme from 'storybook-readme/with-readme'; // tslint:disable-line
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Button } from "../sources/src/components/Button";
import { ButtonToolbar } from 'react-bootstrap';
import * as MD from '../docs/Button.md';


storiesOf('Button', module)
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
			<Button
				text='Button'
				onClick={action('Click on Button')}
			/>
		))
	.add('Primary',
		withInfo()(() =>
			<Button
				text='Button'
				type='primary'
				onClick={action('Click on Button')}
			/>
		))
	.add('Secondary',
		withInfo()(() =>
			<Button
				text='Button'
				type='secondary'
				icon={'chevron-right'}
				iconAlign={'right'}
				onClick={action('Click on Button')}
			/>
		))
	.add('Button Toolbar',
		withInfo()(() =>
			<ButtonToolbar>
				<Button
					text='Prev'
					type='secondary'
					icon={'chevron-left'}
					iconAlign={'left'}
					onClick={action('Click on Prev Button')}
				/>
				<Button
					text='Next'
					type='secondary'
					icon={'chevron-right'}
					iconAlign={'right'}
					onClick={action('Click on Next Button')}
				/>
			</ButtonToolbar>
		));
