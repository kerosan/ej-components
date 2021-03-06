import './Button.scss';

import * as React from 'react';
import { Glyphicon } from 'react-bootstrap';

export interface IButtonProps {
	text?: string | JSX.Element;
	disabled?: boolean;
	className?: string;
	type?: "default" | "primary" | "secondary";
	icon?: string;
	iconAlign?: "left" | "right";

	onClick?: (e) => void;
}

export interface IButtonStates {
}

export class Button extends React.Component<IButtonProps, IButtonStates> {

	constructor(props: IButtonProps) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	public render(): any {
		let classNames: string[] = ['ej-components__button'],
			leftIcon: JSX.Element = null,
			rightIcon: JSX.Element = null;

		if (this.props.disabled) {
			classNames.push('disabled');
		}

		if (this.props.icon && this.props.iconAlign) {
			if (this.props.iconAlign === "left") {
				leftIcon = <Glyphicon glyph={this.props.icon} className={'left'}/>;
			} else {
				rightIcon = <Glyphicon glyph={this.props.icon} className={'right'}/>;
			}
		}

		if (this.props.type) {
			classNames.push(this.props.type);
		}

		if (this.props.className) {
			classNames.push(this.props.className);
		}

		return (
			<a className={classNames.join(' ')}
			   onClick={this.onClick}>
				{leftIcon}
				{(this.props.text ? this.props.text : this.props.children)}
				{rightIcon}
			</a>
		);
	}

	private onClick(e): void {
		if (this.props.onClick && !this.props.disabled) {
			this.props.onClick(e);
		}
	}
}
