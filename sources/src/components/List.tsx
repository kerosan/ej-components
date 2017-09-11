import './List.scss';

import * as React from 'react';
import { ReactElement } from 'react';
import { IListItemProps, ListItem } from './ListItem';
import * as  GeminiScrollbar from "react-gemini-scrollbar";

export interface IListProps {
	className?: string;
	emptyTitle?: string;
	selectedItem?: string;
	minItemsCount?: number;

	onChange?: (event: React.MouseEvent<HTMLElement>, selectedItem: string) => void;
}

export interface IListStates {
	selectedItem?: string;
}

const NUMBER_OF_LIST_ITEMS_WITHOUT_SCROLL = 5;

export class List extends React.Component<IListProps, IListStates> {

	private childrenList = null;

	constructor(props: IListProps) {
		super(props);
		this.state = {selectedItem: this.props.selectedItem};
		this.onClick = this.onClick.bind(this);
	}

	public render(): any {
		if (!this.childrenList || this.childrenList.length !== React.Children.count(this.props.children)) {
			this.childrenList = React.Children.toArray(this.props.children);
		}
		let newChildrenList = this.childrenList.map((child: ReactElement<ListItem>) => {
			let newProps: IListItemProps = {...child.props as IListItemProps};
			if (this.state.selectedItem) {
				newProps.selected = (newProps.name === this.state.selectedItem);
			}
			return React.cloneElement(child, newProps);
		});

		let classNames: string[] = ['ej-components__list'],
			minItemsCount: number = NUMBER_OF_LIST_ITEMS_WITHOUT_SCROLL,
			minHeight: number = 33,
			maxHeight: number = 166;

		if (this.props.minItemsCount > NUMBER_OF_LIST_ITEMS_WITHOUT_SCROLL) {
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

	public onClick(event: React.MouseEvent<HTMLElement>): void {
		let item = null;
		if (event.target['tagName'] === 'LI') {
			item = event.target;
		} else if (event.target['parentElement'].tagName === 'LI') {
			item = event.target['parentElement'];
		}
		if (item && !item.classList.contains('disabled')) {
			this.setState({selectedItem: item.dataset.name});
		}
		if (this.props.onChange) {
			this.props.onChange(event, item.dataset.name);
		}
	}
}
