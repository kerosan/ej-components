import './Alert.scss';

import * as React from 'react';
import { Alert as BSAlert } from "react-bootstrap";

export interface IAlertProps {
	className?: string;
	bsStyle?: "success" | "warning" | "danger" | "info";

	onClose?: (e) => void;
	onClick?: (e) => void;
}

export interface IAlertStates {
}

export class Alert extends React.Component<IAlertProps, IAlertStates> {

	constructor(props: IAlertProps) {
		super(props);
		if (this.props.onClose) {
			this.onClose = this.onClose.bind(this);
		} else {
			this.onClose = null;
		}
		this.onClick = this.onClick.bind(this);
	}

	public render(): JSX.Element {
		let classNames: string[] = ['ej-components__alert'];

		if (this.props.className) {
			classNames.push(this.props.className);
		}

		return (
			<BSAlert bsStyle={this.props.bsStyle || 'info'} className={classNames.join(' ')}
					 onDismiss={this.onClose}
					 onClick={this.onClick}>
				{this.props.children}
			</BSAlert>
		);
	}

	private onClick(e): void {
		if (this.props.onClick) {
			this.props.onClick(e);
		}
	}

	private onClose(e): void {
		e.stopPropagation();
		if (this.props.onClose) {
			this.props.onClose(e);
		}
	}
}
