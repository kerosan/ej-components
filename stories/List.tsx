import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import withReadme from 'storybook-readme/with-readme'; // tslint:disable-line
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { List } from "../sources/src/components/List";
import * as MD from '../docs/List.md';
import { ListItem } from '../sources/src/components/ListItem';
import { Glyphicon } from 'react-bootstrap';


storiesOf('List', module)
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
			<List><ListItem text={'item'} /></List>
		))
	.add('with scroll',
		withInfo()(() =>
			<List minItemsCount={8} selectedItem={'item4'} onChange={(e, n) => console.log('list change', e, n)}>
				<ListItem name="item1" text='Строка в списке'/>
				<ListItem name="item2" disabled text='Строка в списке'/>
				<ListItem name="item3" text='Строка в списке'/>
				<ListItem name="item4" text='Строка в списке'/>
				<ListItem name="item5" text='Строка в списке'/>
				<ListItem name="item6"><Glyphicon glyph='star'/>{'Строка в списке с иконкой'}</ListItem>
				<ListItem name="item7" text='Строка в списке'/>
				<ListItem name="item8" text='Строка в списке'/>
				<ListItem name="item9" text='Строка в списке'/>
			</List>
		));
