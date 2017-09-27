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
	value?: string;

	topButtonDisabled?: boolean;
	bottomButtonDisabled?: boolean;

	frameVisible?: boolean;
	isInput?: boolean;

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
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.onClick = this.onClick.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onBlur = this.onBlur.bind(this);

		this.state = this.getInitState();
	}

	private getInitState(): INumberFieldState {
		return {
			value: '',
			topButtonDisabled: false,
			bottomButtonDisabled: false,

			frameVisible: false,
			isInput: false,

			touchStart: null,
		};
	}

	public componentWillReceiveProps(newProps: INumberFieldProps): void {
		if (newProps.value.toString() !== this.state.value) {
			this.setState({
				...this.state,
				value: newProps.value.toString(),
			});
		}
	}

	public render(): any {
		let classNames: string[] = ['ej-components__number-field'],
			fieldClassNames: string[] = [],
			topClassNames: string[] = [],
			bottomClassNames: string[] = [],

			value: string = this.state.value,

			field: JSX.Element = null;

		if (!this.state.isInput) {
			let numValue: number = +value,

				minValue: number = this.props.minValue,
				maxValue: number = this.props.maxValue;

			if (!minValue) {
				minValue = 0;
			}

			if (!maxValue) {
				maxValue = Math.pow(10, this.props.maxLength - 1);
			}

			if (this.props.zerofill) {
				while (value.length < this.props.maxLength) {
					value = '0' + value;
				}
			}

			if (numValue === minValue && !this.props.cycle) {
				bottomClassNames.push('disabled');
			} else if (numValue === maxValue && !this.props.cycle) {
				topClassNames.push('disabled');
			}
		}

		if (this.state.isInput) {
			field = <input onChange={this.onChange}
						   onBlur={this.onBlur}
						   value={value}/>
		} else {
			if (this.state.frameVisible) {
				fieldClassNames.push('framed');
			}

			field = <div className={fieldClassNames.join(' ')}
						 onMouseEnter={this.onMouseEnter}
						 onMouseLeave={this.onMouseLeave}
						 onClick={this.onClick}>
				{value}
				</div>
		}

		return (
			<div className={classNames.join(' ')}
				 onTouchStart={this.onTouchStart}
				 onTouchEnd={this.onTouchEnd}>

				<a className={topClassNames.join(' ')}
				   onClick={this.onTopButtonClick}>
					<Glyphicon glyph={'menu-up'}/>
				</a>

				{field}

				<a className={bottomClassNames.join(' ')}
				   onClick={this.onBottomButtonClick}>
					<Glyphicon glyph={'menu-down'}/>
				</a>
			</div>);
	}

	private onChange(e: React.ChangeEvent<HTMLInputElement>): void {
		let value: string = e.target['value'],
			regExp: RegExp = /^\-?[0-9]+$/;

		if (!value || regExp.test(value) || value === '-') {
			this.setState({
				...this.state,
				value: value,
			});
		}
	}

	private onBlur(): void {
		let value: string = this.state.value,
			numValue: number = parseInt(value, 10);

		if (isNaN(numValue)) {
			value = this.props.value.toString();
		} else {
			let minValue: number = this.props.minValue,
				maxValue: number = this.props.maxValue;

			if (!minValue) {
				minValue = 0;
			}
			if (!maxValue) {
				maxValue = Math.pow(10, this.props.maxLength - 1);
			}

			if (numValue < minValue) {
				value = minValue.toString();
			} else if (maxValue < numValue || numValue.toString().length > this.props.maxLength) {
				value = maxValue.toString();
			}
		}

		this.setState({
			...this.state,
			value: value,
			isInput: false,
		});

		if (this.props.onChange && +value !== this.props.value) {
			this.props.onChange(+value);
		}
	}

	private onClick(): void {
		if (!this.state.isInput) {
			this.setState({
				...this.state,
				isInput: true,
				frameVisible: false,
			});
		}
	}

	private onMouseLeave(): void {
		if (!this.state.isInput) {
			this.setState({
				...this.state,
				frameVisible: false,
			});
		}
	}

	private onMouseEnter(): void {
		if (!this.state.isInput) {
			this.setState({
				...this.state,
				frameVisible: true,
			});
		}
	}

	private onTopButtonClick(): void {
		this.incrementValue();
	}

	private onBottomButtonClick(): void {
		this.decrementValue();
	}

	private onTouchStart(e: React.TouchEvent<any>): void {
		let touchStart: number = e.changedTouches[0].clientY;

		this.setState({
			...this.state,
			touchStart: touchStart,
		});
	}

	private onTouchEnd(e: React.TouchEvent<any>): void {
		let touchEnd: number = e.changedTouches[0].clientY,
			touchStart: number = this.state.touchStart;

		if (touchStart > touchEnd + 5) {
			this.incrementValue();
		} else if (touchStart < touchEnd - 5) {
			this.decrementValue();
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
			value: number = +this.state.value,
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
				value: value.toString(),
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
				value: value.toString(),
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
			value: number = +this.state.value,
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
				value: value.toString(),
				bottomButtonDisabled: bottomButtonDisabled,
			});

			if (this.props.onChange) {
				this.props.onChange(value);
			}
		} else if (this.props.cycle) {
			value = this.props.maxValue;

			if (value.toString().length > this.props.maxLength) {
				while (value.toString().length > this.props.maxLength) {
					value--;
				}
			}

			if (!value) {
				value = Math.pow(10, this.props.maxLength - 1);
			}

			this.setState({
				...this.state,
				value: value.toString(),
			});

			if (this.props.onChange) {
				this.props.onChange(value);
			}
		}
	}
}
