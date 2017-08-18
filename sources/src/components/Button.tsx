import './Button.scss';

import * as React from 'react';

export interface IButtonProps {
	text?: string;
	disabled?: boolean;
	className?: string;

	onClick?: () => void;
}

export interface IButtonStates {
}

export class Button extends React.Component<IButtonProps, IButtonStates> {

	constructor(props: IButtonProps) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	public render(): any {
		let classNames: string[] = ['ej-components__button'];

		if (this.props.disabled) {
			classNames.push('disabled');
		}

		if (this.props.className) {
			classNames.push(this.props.className);
		}

		return (
			<a className={classNames.join(' ')}
			   onClick={this.onClick} >
				{(this.props.text ? this.props.text : this.props.children)}
			</a>
		);
	}

	private onClick(): void {
		if (this.props.onClick && !this.props.disabled) {
			this.props.onClick();
		}
	}
}
