import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import withReadme from 'storybook-readme/with-readme'; // tslint:disable-line
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { BreadCrumbsPanel } from "../sources/src/components/BreadCrumbsPanel";
import * as MD from '../docs/BreadCrumbsPanel.md';


storiesOf('BreadCrumbsPanel', module)
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
			<BreadCrumbsPanel
				items={[
					{id: 0, href: '/', title: 'Home'},
					{href: 'http://google.com', title: 'My Page'},
					{id: 2, href: 'http://i.ua', title: 'My Site'},
					{title: 'Settings'}
				]}
				onClick={action('Click on BreadCrumb')}
				currentId={2}
			/>
		));
