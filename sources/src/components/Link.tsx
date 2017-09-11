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

	constructor(props: ILinkProps) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	public render(): any {
		let classNames: string[] = ['ej-components__link'],
			target: string = this.props.target || "_self",
			href: string = 'javascript://';

		if (this.props.type) {
			classNames.push(this.props.type);
		}



		if (this.props.className) {
			classNames.push(this.props.className);
		}

		if (this.props.onClick) {
			target = null;
		} else if (this.props.href) {
			href = this.props.href;
		}

		return (
			<a href={href} target={target} className={classNames.join(' ')} onClick={this.onClick}>
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
