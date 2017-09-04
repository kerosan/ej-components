import './TextArea.scss';

import * as React from 'react';

export interface ITextAreaProps {
	placeholder?: string;
	required?: boolean;
	value?: string;
	className?: string;

	onChange?: () => void;
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
		this.state = {value: this.props.value || ""}
	}

	public render(): any {
		let classNames: string[] = ['ej-components__TextArea'];

		if (this.props.className) {
			classNames.push(this.props.className);
		}

		if (this.props.required) {
			classNames.push('required');
		}

		return <div className={classNames.join(' ')}><textarea  value={this.state.value} placeholder={this._placeholder} onChange={this.onChange}/></div>;
	}

	private onChange(e): void {
		this.setState({value: e.target.value});
		if (this.props.onChange) {
			this.props.onChange();
		}
	}
}
