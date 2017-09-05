import './Text.scss';

import * as React from 'react';

export interface ITextProps {
	text?: string | JSX.Element;
	type?: "primary" | "secondary" | "label";
	className?: string;
}

export interface ITextStates {
}

export class Text extends React.Component<ITextProps, ITextStates> {

	constructor(props: ITextProps) {
		super(props);
	}

	public render(): any {
		let classNames: string[] = ['ej-components__text'];

		switch (this.props.type) {
			case 'primary':
				classNames.push('black');
				break;
			case 'secondary':
				classNames.push('grey');
				break;
			case 'label':
				classNames.push('black');
				classNames.push('bold');
				break;
			default:
				classNames.push('black');
				break;
		}
		if (this.props.className) {
			classNames.push(this.props.className);
		}
		return (
			<span className={classNames.join(' ')}>
				{(this.props.text ? this.props.text : this.props.children)}
			</span>
		);
	}
}
