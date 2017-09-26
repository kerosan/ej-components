import './NumberField.scss';

import * as React from 'react';
import { Glyphicon } from 'react-bootstrap';

export interface INumberFieldProps {
	maxLength: number;
	value: number;
	step?: number;
	minValue?: number;
	maxValue?: number;
	cycle?: boolean;
	zerofill?: boolean;

	onChange?: (value: number) => void;
}

export interface INumberFieldState {
	value?: number;

	topButtonDisabled?: boolean;
	bottomButtonDisabled?: boolean;
}

export class NumberField extends React.Component<INumberFieldProps, INumberFieldState> {

	constructor(public props: INumberFieldProps) {
		super(props);

		this.onTopButtonClick = this.onTopButtonClick.bind(this);
		this.onBottomButtonClick = this.onBottomButtonClick.bind(this);

		this.state = this.getInitState();
	}

	private getInitState(): INumberFieldState {
		return {
			value: 0,
			topButtonDisabled: false,
			bottomButtonDisabled: false,
		};
	}

	public componentWillReceiveProps(newProps: INumberFieldProps): void {
		this.setState({
			...this.state,
			value: newProps.value,
		});
	}

	public render(): any {
		let classNames: string[] = ['ej-components__number-field'],
			topClassNames: string[] = [],
			bottomClassNames: string[] = [],

			minValue: number = this.props.minValue,
			maxValue: number = this.props.maxValue,

			numValue: number = this.state.value,
			value: string = numValue.toString();

		if (!minValue) {
			minValue = 0;
		}

		if (!maxValue) {
			maxValue = Math.pow(10, this.props.maxLength - 1);
		}

		if (this.props.zerofill) {
			for (let i: number = 0; i < this.props.maxLength; i++) {
				value = '0' + value;
			}
		}

		if (numValue === minValue && !this.props.cycle) {
			bottomClassNames.push('disabled');
		} else if (numValue === maxValue && !this.props.cycle) {
			topClassNames.push('disabled');
		}

		return (
			<div className={classNames.join(' ')}>
				<a className={topClassNames.join(' ')} onClick={this.onTopButtonClick}>
					<Glyphicon glyph={'glyphicon-chevron-up'} className={'top'}/>
				</a>

				<div>
					{value}
				</div>

				<a className={bottomClassNames.join(' ')} onClick={this.onBottomButtonClick}>
					<Glyphicon glyph={'glyphicon-chevron-down'} className={'bottom'}/>
				</a>
			</div>);
	}

	private onTopButtonClick(): void {
		if (!this.state.topButtonDisabled) {
			return;
		}

		let step: number = this.props.step,
			value: number = this.state.value,
			maxValue: number = this.props.maxValue;

		if (!step) {
			step = 1;
		}

		if (!maxValue) {
			maxValue = Math.pow(10, this.props.maxLength - 1);
		}

		value += step;

		if (value <= maxValue && value.toString().length <= this.props.maxLength) {
			let topButtonDisabled: boolean = ((value === maxValue) || (value + step > maxValue))
				&& !this.props.cycle;

			this.setState({
				...this.state,
				value: value,
				topButtonDisabled: topButtonDisabled,
			});

			if (this.props.onChange) {
				this.props.onChange(value);
			}
		} else if (this.props.cycle) {
			value = this.props.minValue;

			if (!value) {
				value = 0;
			}

			this.setState({
				...this.state,
				value: value,
			});

			if (this.props.onChange) {
				this.props.onChange(value);
			}
		}
	}

	private onBottomButtonClick(): void {
		if (!this.state.bottomButtonDisabled) {
			return;
		}

		let step: number = this.props.step,
			value: number = this.state.value,
			minValue: number = this.props.minValue;

		if (!step) {
			step = 1;
		}

		if (!minValue) {
			minValue = 0;
		}

		value -= step;

		if (value >= minValue && value.toString().length <= this.props.maxLength) {
			let bottomButtonDisabled: boolean = ((value === minValue) || (value - step < minValue))
				&& !this.props.cycle;

			this.setState({
				...this.state,
				value: value,
				bottomButtonDisabled: bottomButtonDisabled,
			});

			if (this.props.onChange) {
				this.props.onChange(value);
			}
		} else if (this.props.cycle) {
			value = this.props.maxValue;

			if (!value) {
				value = Math.pow(10, this.props.maxLength - 1);
			}

			this.setState({
				...this.state,
				value: value,
			});

			if (this.props.onChange) {
				this.props.onChange(value);
			}
		}
	}
}
