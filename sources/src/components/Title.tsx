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

		switch (this.props.type) {
			case 'h1':
				classNames.push('bold');
				classNames.push('large');
				break;
			case 'h2':
				classNames.push('normal');
				classNames.push('large');
				break;
			case 'h3':
				classNames.push('small');
				break;
			case 'h4':
				classNames.push('small');
				classNames.push('grey');
				break;
			default:
				classNames.push('bold');
				classNames.push('large');
				break;
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
