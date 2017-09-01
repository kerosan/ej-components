import './List.scss';

import * as React from 'react';
import { ListItem } from './ListItem';

export interface IListProps {
	items?: ListItem[];
	className?: string;
}

export interface IListStates {
}

export class List extends React.Component<IListProps, IListStates> {

	constructor(props: IListProps) {
		super(props);
	}

	public render(): any {
		let classNames: string[] = ['ej-components__List'];

		if (this.props.className) {
			classNames.push(this.props.className);
		}

		return (
			<ul className={classNames.join(' ')}>
				{(this.props.items ? this.props.items : this.props.children)}
			</ul>
		);
	}
}
