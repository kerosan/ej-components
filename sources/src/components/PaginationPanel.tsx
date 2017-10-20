import './PaginationPanel.scss';

import * as React from 'react';
import { Pagination } from 'react-bootstrap';

export interface IPaginationPanelProps {
	className?: string;
	pageCount: number;
	currentPage: number;
	onChange: (page: number) => void;
}

export interface IPaginationPanelStates {
}

export class PaginationPanel extends React.Component<IPaginationPanelProps, IPaginationPanelStates> {

	constructor(props: IPaginationPanelProps) {
		super(props);
	}

	public render(): any {
		let classNames: string[] = ['ej-components__pagination-panel'];

		if (this.props.className) {
			classNames.push(this.props.className);
		}

		return (
			<Pagination
				bsStyle='ej'
				prev={<span>&lt;&lt;</span>}
				next={<span>&gt;&gt;</span>}
				ellipsis={false}
				boundaryLinks
				className={classNames.join(' ')}
				first={<span>|&lt;</span>}
				last={<span>&gt;|</span>}
				items={this.props.pageCount}
				maxButtons={5}
				activePage={this.props.currentPage}
				onSelect={this.onSelect.bind(this)}
			/>
		);
	}

	private onSelect(page): void {
		if (this.props.onChange) {
			this.props.onChange(page);
		}
	}
}
