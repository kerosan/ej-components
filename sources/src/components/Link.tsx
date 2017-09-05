import './Link.scss';

import * as React from 'react';

export interface ILinkProps {
	text?: string;
	type?: "primary" | "bold";
	href?: string;
	className?: string;

	onClick?: () => void;
}

export interface ILinkStates {
}

export class Link extends React.Component<ILinkProps, ILinkStates> {

	private _href: string = "javascript://";

	constructor(props: ILinkProps) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	public render(): any {
		let classNames: string[] = ['ej-components__link'];

		if (this.props.type === "bold") {
			classNames.push('bold');
		}
		if (this.props.onClick) {
			this._href = "javascript://";
		} else if (this.props.href) {
			this._href = this.props.href;
		}

		if (this.props.className) {
			classNames.push(this.props.className);
		}
		return (
			<a href={this._href} className={classNames.join(' ')} onClick={this.onClick}>
				{(this.props.text ? this.props.text : this.props.children)}
			</a>
		);
	}

	private onClick(): void {
		if (this.props.onClick) {
			this.props.onClick();
		}
	}
}
