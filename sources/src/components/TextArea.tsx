import './TextArea.scss';

import * as React from 'react';

export interface ITextAreaProps {
	maxLength?: number;
	placeholder?: string;
	required?: boolean;
	value?: string;
	className?: string;

	onChange?: (e) => void;
	onKeyDown?: (e) => void;
}

export interface ITextAreaStates {
	value?: string;
}

export class TextArea extends React.Component<ITextAreaProps, ITextAreaStates> {

	private _placeholder: string = "";

	constructor(props: ITextAreaProps) {
		super(props);

		if (this.props.placeholder) {
			this._placeholder = this.props.placeholder;
		}

		this.onChange = this.onChange.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
		this.state = {value: this.props.value || ""}
	}

	public render(): any {
		let classNames: string[] = ['ej-components__textarea'];

		if (this.props.className) {
			classNames.push(this.props.className);
		}

		if (this.props.required) {
			classNames.push('ej-components__textarea-required');
		}

		return (
			<div className={classNames.join(' ')}>
				<textarea maxLength={this.props.maxLength} value={this.state.value} placeholder={this._placeholder} onChange={this.onChange} onKeyDown={this.onKeyDown}/>
			</div>
		);
	}

	private onChange(e): void {
		this.setState({value: e.target.value});
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}
	private onKeyDown(e): void {
		if (this.props.onKeyDown) {
			this.props.onKeyDown(e);
		}
	}
}
