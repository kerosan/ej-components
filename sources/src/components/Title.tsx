import './Title.scss';

import * as React from 'react';

export interface ITitleProps {
	text?: string | JSX.Element;
	type?: "h1" | "h2" | "h3" | "h4";
	className?: string;
}

export interface ITitleStates {
}

export class Title extends React.Component<ITitleProps, ITitleStates> {

	constructor(props: ITitleProps) {
		super(props);
	}

	public render(): any {
		let classNames: string[] = ['ej-components__title'];

		if (this.props.type) {
			classNames.push('ej-components__title_' + this.props.type);
		} else {
			classNames.push('ej-components__title_h1');
		}

		if (this.props.className) {
			classNames.push(this.props.className);
		}

		return (
			<div className={classNames.join(' ')}>
				{(this.props.text ? this.props.text : this.props.children)}
			</div>
		);
	}
}
