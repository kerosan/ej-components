import './Link.scss';

import * as React from 'react';

export interface ILinkProps {
	text?: string;
	bold?: boolean;
	href?: string;
	className?: string;

	onClick?: () => void;
}

export interface ILinkStates {
}

export class Link extends React.Component<ILinkProps, ILinkStates> {

	private _text: string = '';
	private _href: string = 'javascript://';

	constructor(props: ILinkProps) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	public render(): any {
		let classNames: string[] = ['ej-components__Link'];

		if (this.props.text) {
			this._text = this.props.text;
		} else {
			this._text = this.props.children.toString();
		}
		if (this.props.bold) {
			classNames.push('bold');
		}
		if (this.props.href) {
			this._href = this.props.href;
			this.onClick = () => void(0);
		}

		if (this.props.className) {
			classNames.push(this.props.className);
		}
		return <a href={this._href} className={classNames.join(' ')} onClick={this.onClick}>{this._text}</a>
	}

	private onClick(): void {
		if (this.props.onClick) {
			this.props.onClick();
		}
	}
}
