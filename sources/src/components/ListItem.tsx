import './ListItem.scss';

import * as React from 'react';

export interface IListItemProps {
	text?: string | JSX.Element;
	selected?: boolean;
	empty?: boolean;
	disabled?: boolean;
	className?: string;
	index?: number;

	onClick?: (event: React.MouseEvent<HTMLElement>, selected: boolean, index: number) => void;
}

export interface IListItemStates {
}

export class ListItem extends React.Component<IListItemProps, IListItemStates> {

	constructor(props: IListItemProps) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	public render(): any {
		let classNames: string[] = ['ej-components__list-item'];

		if (this.props.selected) {
			classNames.push('selected');
		}
		if (this.props.disabled) {
			classNames.push('disabled');
		}
		if (this.props.empty) {
			classNames.push('empty');
		}

		if (this.props.className) {
			classNames.push(this.props.className);
		}

		return (
			<li className={classNames.join(' ')} data-index={this.props.index} onClick={this.onClick}>
				{(this.props.text ? this.props.text : this.props.children)}
			</li>
		);
	}

	public onClick(event: React.MouseEvent<HTMLElement>): void {
		if (this.props.onClick && !this.props.disabled) {
			this.props.onClick(event, this.props.selected, this.props.index);
		}
	}
}
