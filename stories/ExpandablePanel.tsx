import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import withReadme from 'storybook-readme/with-readme'; // tslint:disable-line
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { ExpandablePanel } from "../sources/src/components/ExpandablePanel";
import * as MD from '../docs/ExpandablePanel.md';


storiesOf('ExpandablePanel', module)
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
			<ExpandablePanel
				header={'header'}
				onExpandToggle={action('toggle')}
			>
				<div style={{background: 'bisque'}}>childs</div>
			</ExpandablePanel>
		));
