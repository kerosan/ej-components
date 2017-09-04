import './ListItem.scss';

import * as React from 'react';

export interface IListItemProps {
	text?: string | JSX.Element;
	// href?: string;
	selected?: boolean;
	empty?: boolean;
	disabled?: boolean;
	className?: string;

	onClick?: () => void;
}

export interface IListItemStates {
}

export class ListItem extends React.Component<IListItemProps, IListItemStates> {

	constructor(props: IListItemProps) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	public render(): any {
		let classNames: string[] = ['ej-components__ListItem'];

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
			<li className={classNames.join(' ')}>
				{(this.props.text ? this.props.text : this.props.children)}
			</li>
		);
	}

	private onClick(): void {
		if (this.props.onClick && !this.props.disabled) {
			this.props.onClick();
		}
	}
}
