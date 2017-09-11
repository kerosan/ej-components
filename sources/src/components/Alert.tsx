import './Alert.scss';

import * as React from 'react';
import { Alert as BSAlert } from "react-bootstrap";

export interface IAlertProps {
	className?: string;
	bsStyle?: "success" | "warning" | "danger" | "info";

	onClose?: () => void;
	onClick?: () => void;
}

export interface IAlertStates {
}

export class Alert extends React.Component<IAlertProps, IAlertStates> {

	constructor(props: IAlertProps) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	public render(): any {
		let classNames: string[] = ['ej-components__alert'];

		if (this.props.className) {
			classNames.push(this.props.className);
		}

		return (
			<BSAlert bsStyle={this.props.bsStyle || 'info'} className={classNames.join(' ')}
					 onDismiss={this.props.onClose}
					 onClick={this.onClick}>
				{this.props.children}
			</BSAlert>
		);
	}

	private onClick(): void {
		if (this.props.onClick) {
			this.props.onClick();
		}
	}
}
