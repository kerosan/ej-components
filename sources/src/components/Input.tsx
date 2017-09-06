import './Input.scss';

import * as React from 'react';

export interface IInputProps {
	type?: string;
	placeholder?: string;
	value?: string;
	className?: string;
	message?: string;
	error?: boolean;
	warning?: boolean;

	onChange?: (event) => void;
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
		this.state = {value: this.props.value || ""}
	}

	public render(): any {
		let classNames: string[] = ['ej-components__input'];

		if (this.props.className) {
			classNames.push(this.props.className);
		}

		if (this.props.error) {
			classNames.push('ej-components__input-validation-error');
		}

		if (this.props.warning) {
			classNames.push('ej-components__input-validation-warning');
		}
		return <div className={classNames.join(' ')}>
			<input value={this.state.value} type={this._type} placeholder={this._placeholder} onChange={this.onChange}/>
			<div>{this.props.message}</div>
		</div>;
	}

	private onChange(event): void {
		this.setState({value: event.target.value});
		if (this.props.onChange) {
			this.props.onChange(event);
		}
	}
}
