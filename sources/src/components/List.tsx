import './List.scss';

import * as React from 'react';
import { ReactChild, ReactElement } from 'react';
import { ListItem } from './ListItem';
import * as  GeminiScrollbar from "react-gemini-scrollbar";

export interface IListProps {
	className?: string;
	emptyTitle?: string;
	selectedIndex?: number;
	minItemsCount?: number;
}

export interface IListStates {
}

const NUMBER_OF_LIST_ITEMS_WITH_SCROLL = 5;

export class List extends React.Component<IListProps, IListStates> {

	constructor(props: IListProps) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	public render(): any {
		console.log(React.Children.count(this.props.children));

		// let itemList = React.Children.toArray(this.props.children);
		// console.log(itemList);
		// console.log(itemList[0]['key']);
		// (itemList[0] as ReactElement<ListItem>).props.set('selected', true);

		let classNames: string[] = ['ej-components__list'],
			minItemsCount: number = NUMBER_OF_LIST_ITEMS_WITH_SCROLL,
			minHeight: number = 33,
			maxHeight: number = 166;

		if (this.props.minItemsCount > NUMBER_OF_LIST_ITEMS_WITH_SCROLL) {
			minItemsCount = this.props.minItemsCount;
			maxHeight = 1 + minItemsCount * minHeight;
		}

		if (this.props.className) {
			classNames.push(this.props.className);
		}

		if (this.props.children === undefined || this.props.children['length'] === 0) {
			return (
				<div className={[...classNames, 'ej-components__list-no_scroll'].join(' ')}>
					<ul>
						<ListItem empty text={this.props.emptyTitle || "Empty list"}/>
					</ul>
				</div>
			);
		}
		if (this.props.children['length'] <= minItemsCount) {
			return (
				<div className={[...classNames, 'ej-components__list-no_scroll'].join(' ')}>
					<ul>{this.props.children}</ul>
				</div>
			);
		}

		return (
			<GeminiScrollbar forceGemini className={classNames.join(' ')} style={{width: '100%', minWidth: 300, maxHeight: maxHeight, minHeight: minHeight}}>
				<ul onClick={this.onClick}>
					{this.props.children}
				</ul>
			</GeminiScrollbar>
		);
	}

	public onClick(e): void {
		console.log(e);
		console.log(e.target);
	}
}
