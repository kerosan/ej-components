import './Input.scss';

import * as React from 'react';

export interface IInputProps {
	type?: string;
	placeholder?: string;
	value?: string;
	className?: string;
	message?: string;
	validation?: "warning" | "error";

	onChange?: (event) => void;

	onKeyUp?: (event) => void;
	onKeyPress?: (event) => void;
	onKeyDown?: (event) => void;
}

export interface IInputStates {
	value?: string;
}

export class Input extends React.Component<IInputProps, IInputStates> {
	private _type: string = "text";
	private _placeholder: string = "";

	constructor(props: IInputProps) {
		super(props);
		if (this.props.type) {
			this._type = this.props.type;
			this._placeholder = this.props.type;
		}
		if (this.props.placeholder) {
			this._placeholder = this.props.placeholder;
		}

		this.onChange = this.onChange.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
		this.onKeyUp = this.onKeyUp.bind(this);
		this.onKeyPress = this.onKeyPress.bind(this);

		this.state = {value: this.props.value || ""}
	}

	public render(): any {
		let classNames: string[] = ['ej-components__input'],
			messageClass: string = '';

		if (this.props.className) {
			classNames.push(this.props.className);
		}

		if (this.props.validation) {
			classNames.push('ej-components__input-validation-' + this.props.validation);
		} else {
			messageClass = "hidden";
		}

		return (
			<div className={classNames.join(' ')}>
				<input value={this.state.value}
					   type={this._type}
					   placeholder={this._placeholder}
					   onChange={this.onChange}
					   onKeyUp={this.onKeyUp}
					   onKeyPress={this.onKeyPress}
					   onKeyDown={this.onKeyDown}/>
				<div className={messageClass}>{this.props.message}</div>
			</div>
		);
	}

	private onKeyPress(event: React.KeyboardEvent<HTMLInputElement>): void {
		if (this.props.onKeyPress) {
			this.props.onKeyPress(event);
		}
	}

	private onKeyUp(event: React.KeyboardEvent<HTMLInputElement>): void {
		if (this.props.onKeyUp) {
			this.props.onKeyUp(event);
		}
	}

	private onKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
		if (this.props.onKeyDown) {
			this.props.onKeyDown(event);
		}
	}

	private onChange(event: React.FormEvent<HTMLInputElement>): void {
		this.setState({value: event.target['value']});
		if (this.props.onChange) {
			this.props.onChange(event);
		}
	}
}
