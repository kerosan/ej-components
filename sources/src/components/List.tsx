import './List.scss';

import * as React from 'react';
import { IListItemProps, ListItem } from './ListItem';
import * as  GeminiScrollbar from "react-gemini-scrollbar";

export interface IListProps {
	items?: IListItemProps[];
	className?: string;
	emptyTitle?: string;
	selectedIndex?: number;
}

export interface IListStates {
}

const NUMBER_OF_LIST_ITEMS_WITH_SCROLL = 5;

export class List extends React.Component<IListProps, IListStates> {

	constructor(props: IListProps) {
		super(props);
	}

	public render(): any {
		let classNames: string[] = ['ej-components__list'];
		console.log(this.props.children);
		let items: any[];
		if (this.props.className) {
			classNames.push(this.props.className);
		}
		if (!this.props.children) {
			if (this.props.items === undefined || this.props.items.length === 0) {
				return <div className={[...classNames, 'no_scroll'].join(' ')}>
					<ul><ListItem empty text={this.props.emptyTitle || "Empty list"}/></ul>
				</div>;
			}
			items = this.props.items.map((props: IListItemProps, key) => {
				return <ListItem key={key} {...props}/>;
			});
			if (this.props.items.length <= NUMBER_OF_LIST_ITEMS_WITH_SCROLL) {
				return <div className={[...classNames, 'no_scroll'].join(' ')}>
					<ul>{items}</ul>
				</div>;
			}
		} else {
			if (this.props.children === undefined || this.props.children['length'] === 0) {
				return <ul><ListItem empty text={this.props.emptyTitle || "Empty list"}/></ul>;
			}
			if (this.props.children['length'] <= NUMBER_OF_LIST_ITEMS_WITH_SCROLL) {
				return <div className={[...classNames, 'no_scroll'].join(' ')}>
					<ul>{this.props.children}</ul>
				</div>;
			}
		}

		return (
			<GeminiScrollbar forceGemini className={classNames.join(' ')} style={{width: '100%', minWidth: 300, maxHeight: 166, minHeight: 33}}>
				<ul>
					{(items ? items : this.props.children)}
				</ul>
			</GeminiScrollbar>
		);
	}
}
