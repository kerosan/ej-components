import './Checkbox.scss';

import * as React from 'react';

export interface ICheckboxProps {
	name?: string;
	label?: string | JSX.Element;
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	inline?: boolean;
	clickCapture?: boolean;

	onChange?: (checked: boolean, name?: string) => void;
}

export interface ICheckboxState {
	checked?: boolean;
}

export class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {

	constructor(props: ICheckboxProps) {
		super(props);

		this.state = this.getInitState();

		this.onClick = this.onClick.bind(this);
	}

	protected getInitState(): ICheckboxState {
		return {
			checked: !!this.props.checked,
		};
	}

	public componentWillUpdate(nextProps: ICheckboxProps, nextState: ICheckboxState): void {
		if (this.props.checked !== nextProps.checked) {
			nextState.checked = nextProps.checked;
		}
	}

	public componentWillReceiveProps(nextProps: ICheckboxProps): void {
		if (nextProps.checked !== undefined && this.state.checked !== nextProps.checked) {
			this.setState({
				...this.state,
				checked: nextProps.checked,
			});
		}
	}

	public render(): JSX.Element {
		let spanClassNames: string[] = ['ej-components__checkbox', 'form-group'],
			labelClassNames: string[] = [],
			spanElement: JSX.Element;

		if (this.props.className) {
			spanClassNames.push(this.props.className);
		}

		if (this.props.inline) {
			labelClassNames.push('checkbox-inline');
		}

		if (this.props.disabled) {
			labelClassNames.push('disabled');
		}

		if (this.state.checked) {
			spanElement = <span className='glyphicon glyphicon-ok ej-components__checkbox-icon__checked' />;
		} else {
			spanElement = <span className='ej-components__checkbox-icon__unchecked' />;
		}

		return (
			<span className={spanClassNames.join(' ')} >
				<label className={labelClassNames.join(' ')} onClick={this.onClick}>
					{spanElement}
					<span className='ej-components__checkbox-label'>{this.props.label ? this.props.label : this.props.children}</span>
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
