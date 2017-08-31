import './Title.scss';

import * as React from 'react';

export interface ITitleProps {
	text?: string;
	bold?: boolean;
	small?: boolean;
	grey?: boolean;
	inline?: boolean;
	className?: string;
}

export interface ITitleStates {
}

export class Title extends React.Component<ITitleProps, ITitleStates> {

	private _text: string = '';

	constructor(props: ITitleProps) {
		super(props);
	}

	public render(): any {
		let tag: JSX.Element, classNames: string[] = ['ej-components__Title'];

		if (this.props.text) {
			this._text = this.props.text;
		} else {
			this._text = this.props.children.toString();
		}

		if (this.props.bold) {
			classNames.push('bold');
		} else {
			classNames.push('normal');
		}

		if (this.props.small) {
			classNames.push('small');
		} else {
			classNames.push('large');
		}

		if (this.props.small && this.props.grey) {
			classNames.push('grey');
		} else {
			classNames.push('black');
		}

		if (this.props.className) {
			classNames.push(this.props.className);
		}
		if (this.props.inline) {
			tag = <span className={classNames.join(' ')}>{this._text}</span>
		} else {
			tag = <div className={classNames.join(' ')}>{this._text}</div>
		}

		return tag;
	}
}
