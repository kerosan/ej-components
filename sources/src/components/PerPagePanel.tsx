import './PerPagePanel.scss';

import * as React from 'react';
import { Glyphicon } from 'react-bootstrap';
import { Text } from './Text';
import { Link } from './Link';

export interface IPerPagePanelProps {
	className?: string;
	values: number[];
	value: number;
	label?: string;
	onChange: (value: number) => void;
}

export interface IPerPagePanelStates {
}

export class PerPagePanel extends React.Component<IPerPagePanelProps, IPerPagePanelStates> {

	constructor(props: IPerPagePanelProps) {
		super(props);
	}

	public render(): any {
		let classNames: string[] = ['ej-components__per-page-panel'];

		if (this.props.className) {
			classNames.push(this.props.className);
		}

		let digits = this.props.values.map((value, key) => {
			if (value === this.props.value) {
				return <span key={key}>&nbsp;<u>{value}</u>&nbsp;</span>;
			}
			return <span key={key}>&nbsp;<Link onClick={this.onClick.bind(this, value)}>{value}</Link>&nbsp;</span>;
		});
		return (
			<Text className={classNames.join(' ')}>
				{this.props.label || ""}
				&nbsp;
				{digits}
				&nbsp;
			</Text>
		);
	}

	private onClick(value): void {
		if (this.props.onChange) {
			this.props.onChange(value);
		}
	}
}
