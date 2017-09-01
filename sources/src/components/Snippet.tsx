import './Snippet.scss';

import * as React from 'react';

export interface ISnippetProps {
	text?: string;
	bold?: boolean;
	grey?: boolean;
	className?: string;
}

export interface ISnippetStates {
}

export class Snippet extends React.Component<ISnippetProps, ISnippetStates> {

	constructor(props: ISnippetProps) {
		super(props);
	}

	public render(): any {
		let classNames: string[] = ['ej-components__Snippet'];


		if (this.props.grey) {
			classNames.push('grey');
		} else {
			classNames.push('black');
		}
		if (this.props.bold) {
			classNames.push('bold');
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
