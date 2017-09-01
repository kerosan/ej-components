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

	onChange?: () => void;
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
		let classNames: string[] = ['ej-components__Input'];

		if (this.props.className) {
			classNames.push(this.props.className);
		}

		if (this.props.error) {
			classNames.push('validationError');
		}

		if (this.props.warning) {
			classNames.push('validationWarning');
		}
		return <span className={classNames.join(' ')}>
			<input value={this.state.value} type={this._type} placeholder={this._placeholder} onChange={this.onChange}/>
			<div>{this.props.message}</div>
		</span>;
	}

	private onChange(e): void {
		this.setState({value: e.target.value});
		if (this.props.onChange) {
			this.props.onChange();
		}
	}
}
