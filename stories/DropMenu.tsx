import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import withReadme from 'storybook-readme/with-readme'; // tslint:disable-line
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { DropMenu } from "../sources/src/components/DropMenu";
import * as MD from '../docs/DropMenu.md';


storiesOf('DropMenu', module)
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
			<div style={{textAlign: 'center', paddingTop: 120}}>Menu:
				<DropMenu
					id={'123'}
					dropup={boolean('dropup', false)}
					pullRight={boolean('pullRight', false)}
					currentId={3}
					listProps={{
						minItemsCount: 5
					}}
					items={[
						{
							id: 0,
							title: 'MenuItem 0'
						},
						{
							id: 1,
							title: 'MenuItem Long 1'
						},
						{
							id: 3,
							title: 'Menu'
						}
					]}
					onChange={action('click drop menu')}
				/>
			</div>
		))
	.add('with scroll',
		withInfo()(() =>
			<div style={{textAlign: 'center', paddingTop: 120}}>Menu:
				<DropMenu
					id={'123'}
					dropup={boolean('dropup', false)}
					pullRight={boolean('pullRight', false)}
					currentId={3}
					listProps={{
						minItemsCount: 5
					}}
					items={[
						{
							id: 0,
							title: 'MenuItem 0'
						},
						{
							id: 1,
							title: 'MenuItem Long 1'
						},
						{
							id: 3,
							title: 'Menu'
						},
						{
							id: 4,
							title: 'MenuItem 0'
						},
						{
							id: 5,
							title: 'MenuItem LongLongLongLong 1'
						},
						{
							id: 6,
							title: 'Menu'
						},
						{
							id: 7,
							title: 'MenuItem 0'
						},
						{
							id: 8,
							title: 'MenuItem Long 1'
						},
						{
							id: 9,
							title: 'Menu'
						},
					]}
					onChange={action('click drop menu')}
				/>
			</div>
		));
