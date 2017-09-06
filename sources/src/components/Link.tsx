import './Link.scss';

import * as React from 'react';
import { LinkTarget } from '../types/index';

export interface ILinkProps {
	text?: string;
	type?: "default" | "primary";
	href?: string;
	target?: LinkTarget;
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
		let classNames: string[] = ['ej-components__link'],
			target = this.props.target || "_self";

		if (this.props.type === "primary") {
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
		if (this.props.onClick) {
			target = null;
		}
		return (
			<a href={this._href} target={target} className={classNames.join(' ')} onClick={this.onClick}>
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
