import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import withReadme from 'storybook-readme/with-readme'; // tslint:disable-line
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import * as MD from '../docs/Alert.md';
import { Alert } from '../sources/src/components/Alert';

storiesOf('Alert', module)
	.addDecorator(withKnobs)
	.addDecorator(withReadme(MD))
	.addDecorator(story =>
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
	)
	.add('default',
		withInfo()(() =>
			<Alert onClick={action('clicked')}>
				{text('Text', 'Hello Alert')}
			</Alert>
		)
	)
	.add('success',
		withInfo()(() =>
			<Alert bsStyle={'success'} onClick={action('clicked')}>
				{text('Text', 'Hello Alert')}
			</Alert>
		)
	)
	.add('danger',
		withInfo()(() =>
			<Alert bsStyle={'danger'} onClick={action('clicked')}>
				{text('Text', 'Hello Alert')}
			</Alert>
		)
	)
	.add('warning',
		withInfo()(() =>
			<Alert bsStyle={'warning'} onClick={action('clicked')}>
				{text('Text', 'Hello Alert')}
			</Alert>
		)
	)
	.add('with close button',
		withInfo()(() =>
			<Alert onClick={action('clicked')} onClose={action('closed')}>
				{text('Text', 'Hello Alert')}
			</Alert>
		)
	);
