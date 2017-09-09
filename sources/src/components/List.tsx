import './List.scss';

import * as React from 'react';
import { ReactElement } from 'react';
import { IListItemProps, ListItem } from './ListItem';
import * as  GeminiScrollbar from "react-gemini-scrollbar";

export interface IListProps {
	className?: string;
	emptyTitle?: string;
	selectedIndex?: number;
	minItemsCount?: number;
}

export interface IListStates {
	selectedIndex?: number;
}

const NUMBER_OF_LIST_ITEMS_WITH_SCROLL = 5;

export class List extends React.Component<IListProps, IListStates> {

	private childrenList = null;

	constructor(props: IListProps) {
		super(props);
		this.state = {selectedIndex: this.props.selectedIndex};
		this.onClick = this.onClick.bind(this);
	}

	public render(): any {
		if (!this.childrenList) {
			this.childrenList = React.Children.toArray(this.props.children);
		}
		let newChildrenList = this.childrenList.map((child: ReactElement<ListItem>, key) => {
			let newProps: IListItemProps = {...child.props as IListItemProps, index: key};
			if (this.state.selectedIndex) {
				newProps.selected = ((key + 1) === this.state.selectedIndex);
			}
			return React.cloneElement(child, newProps);
		});

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

		if (this.props.children === undefined || React.Children.count(this.props.children) === 0) {
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
					<ul onClick={this.onClick}>{newChildrenList}</ul>
				</div>
			);
		}

		return (
			<GeminiScrollbar forceGemini className={classNames.join(' ')} style={{width: '100%', minWidth: 300, maxHeight: maxHeight, minHeight: minHeight}}>
				<ul onClick={this.onClick}>
					{newChildrenList}
				</ul>
			</GeminiScrollbar>
		);
	}

	public onClick(e): void {
		let item = null;
		if (e.target.tagName === 'LI') {
			item = e.target;
		} else if (e.target.parentElement.tagName === 'LI') {
			item = e.target.parentElement;
		}
		if (item && !item.classList.contains('disabled')) {
			this.setState({selectedIndex: Number(item.dataset.index) + 1});
		}
	}
}
