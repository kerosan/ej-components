import './Text.scss';

import * as React from 'react';

export interface ITextProps {
	text?: string | JSX.Element;
	type?: "default" | "primary" | "label";
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

		if (this.props.type) {
			classNames.push(this.props.type);
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
