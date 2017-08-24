import './RadioButton.scss';

import * as React from 'react';
import { Checkbox, ICheckboxProps, ICheckboxState } from './Checkbox';

export interface IRadioButtonProps extends ICheckboxProps{
}

export interface IRadioButtonState extends ICheckboxState {
	checked?: boolean;
}

export class RadioButton extends Checkbox/*<ICheckboxProps, ICheckboxState>*/ {

	constructor(props: IRadioButtonProps) {
		super(props);

		this.state = this.getInitState();

		this.onClick = this.onClick.bind(this);
	}

	protected getInitState(): IRadioButtonState {
		return {
			checked: !!this.props.checked,
		};
	}

	public componentWillUpdate(nextProps: IRadioButtonProps, nextState: IRadioButtonState): void {
		if (this.props.checked !== nextProps.checked) {
			nextState.checked = nextProps.checked;
		}
	}

	public componentWillReceiveProps(nextProps: IRadioButtonProps): void {
		if (nextProps.checked !== undefined && this.state.checked !== nextProps.checked) {
			this.setState({
				...this.state,
				checked: nextProps.checked,
			});
		}
	}

	public render(): JSX.Element {
		let spanClassNames: string[] = ['ej-components__radiobutton', /*'form-group'*/],
			labelClassNames: string[] = [],
			spanElement: JSX.Element;

		if (this.props.className) {
			spanClassNames.push(this.props.className);
		}

		// if (this.props.inline) {
		// 	labelClassNames.push('checkbox-inline');
		// }

		if (this.props.disabled) {
			labelClassNames.push('disabled');
		}

		if (this.state.checked) {
			spanElement = <span className='glyphicon glyphicon-ok ej-components__radiobutton-icon__checked' />;
		} else {
			spanElement = <span className='ej-components__radiobutton-icon__unchecked' />;
		}

		return (
			<span className={spanClassNames.join(' ')} >
				<label className={labelClassNames.join(' ')} onClick={this.onClick}>
					{spanElement}
					<span className='ej-components__radiobutton-label'>{this.props.label ? this.props.label : this.props.children}</span>
				</label>
			</span>
		);
	}

	protected onClick(e: React.MouseEvent<HTMLLabelElement>): void {
		if (this.props.clickCapture) {
			e.stopPropagation();
		}

		if (this.props.disabled) {
			return;
		}

		if (this.props.onChange) {
			this.props.onChange(!this.state.checked, this.props.name);
		}

		this.setState({
			...this.state,
			checked: !this.state.checked,
		});
	}
}
