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

	touchStart?: number;
}

export class NumberField extends React.Component<INumberFieldProps, INumberFieldState> {

	constructor(public props: INumberFieldProps) {
		super(props);

		this.incrementValue = this.incrementValue.bind(this);
		this.decrementValue = this.decrementValue.bind(this)

		this.onTopButtonClick = this.onTopButtonClick.bind(this);
		this.onBottomButtonClick = this.onBottomButtonClick.bind(this);
		this.onTouchStart = this.onTouchStart.bind(this);
		this.onTouchEnd = this.onTouchEnd.bind(this);

		this.state = this.getInitState();
	}

	private getInitState(): INumberFieldState {
		return {
			value: 0,
			topButtonDisabled: false,
			bottomButtonDisabled: false,

			touchStart: null,
		};
	}

	public componentWillReceiveProps(newProps: INumberFieldProps): void {
		if (newProps.value !== this.state.value) {
			this.setState({
				...this.state,
				value: newProps.value,
			});
		}
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
			<div className={classNames.join(' ')} onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd}>
				<a className={topClassNames.join(' ')} onClick={this.onTopButtonClick}>
					<Glyphicon glyph={'menu-up'}/>
				</a>

				<div>
					{value}
				</div>

				<a className={bottomClassNames.join(' ')} onClick={this.onBottomButtonClick}>
					<Glyphicon glyph={'menu-down'}/>
				</a>
			</div>);
	}

	private onTopButtonClick(): void {
		this.incrementValue();
	}

	private onBottomButtonClick(): void {
		this.decrementValue();
	}

	private onTouchStart(e: React.TouchEvent<any>): void {
		let touchStart: number = e.touches[0].clientY;

		this.setState({
			...this.state,
			touchStart: touchStart,
		});
	}

	private onTouchEnd(e: React.TouchEvent<any>): void {
		let touchEnd: number = e.touches[0].clientY,
			touchStart: number = this.state.touchStart;

		if (touchStart > touchEnd + 5){
			this.decrementValue();
		} else if (touchStart < touchEnd - 5) {
			this.incrementValue();
		}

		this.setState({
			...this.state,
			touchStart: null,
		});
	}

	private incrementValue(): void {
		if (this.state.topButtonDisabled) {
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

	private decrementValue(): void {
		if (this.state.bottomButtonDisabled) {
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
