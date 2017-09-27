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

interface INumberFieldState {
	value?: string;

	isTopButtonDisabled?: boolean;
	isBottomButtonDisabled?: boolean;
	isFrameVisible?: boolean;
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

			isTopButtonDisabled: false,
			isBottomButtonDisabled: false,
			isFrameVisible: false,
			isInput: false,

			touchStart: null,
		};
	}

	public componentWillReceiveProps(newProps: INumberFieldProps): void {
		let numValue: number = parseInt(this.state.value, 10);

		if (newProps.value !== numValue) {
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

				minValue: number = this.getMinValue(),
				maxValue: number = this.getMaxValue();

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
						   maxLength={this.props.maxLength}
						   value={value}
						   autoFocus={true}/>
		} else {
			if (this.state.isFrameVisible) {
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

	private onBlur(e: React.FormEvent<any>): void {
		e.stopPropagation();
		let value: string = this.state.value,
			numValue: number = parseInt(value, 10);

		if (isNaN(numValue)) {
			value = this.props.value.toString();
		} else {
			let minValue: number = this.getMinValue(),
				maxValue: number = this.getMaxValue();

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

		if (this.props.onChange && (!isNaN(numValue)) && (numValue !== this.props.value)) {
			this.props.onChange(numValue);
		}
	}

	private onClick(): void {
		if (!this.state.isInput) {
			this.setState({
				...this.state,
				isInput: true,
				isFrameVisible: false,
			});
		}
	}

	private onMouseLeave(): void {
		if (!this.state.isInput) {
			this.setState({
				...this.state,
				isFrameVisible: false,
			});
		}
	}

	private onMouseEnter(): void {
		if (!this.state.isInput) {
			this.setState({
				...this.state,
				isFrameVisible: true,
			});
		}
	}

	private onTopButtonClick(): void {
		if (!this.state.isInput) {
			this.incrementValue();
		}
	}

	private onBottomButtonClick(): void {
		if (!this.state.isInput) {
			this.decrementValue();
		}
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
		if (this.state.isTopButtonDisabled) {
			return;
		}

		let step: number = this.getStep(),
			numValue: number = parseInt(this.state.value, 10),
			maxValue: number = this.getMaxValue(),
			maxLength: number = this.props.maxLength,

			isTopButtonDisabled: boolean = false,
			cycle: boolean = this.props.cycle;

		numValue += step;

		if (numValue <= maxValue && numValue.toString().length <= maxLength) {
			isTopButtonDisabled = ((numValue === maxValue) || (numValue + step > maxValue))	&& !cycle;
		} else if (cycle) {
			numValue = this.getMinValue();
		} else {
			return;
		}

		this.setState({
			...this.state,
			value: numValue.toString(),
			isTopButtonDisabled: isTopButtonDisabled,
		});

		if (this.props.onChange) {
			this.props.onChange(numValue);
		}
	}

	private decrementValue(): void {
		if (this.state.isBottomButtonDisabled) {
			return;
		}

		let step: number = this.getStep(),
			numValue: number = parseInt(this.state.value, 10),
			minValue: number = this.getMinValue(),
			maxLength: number = this.props.maxLength,

			isBottomButtonDisabled: boolean = false,
			cycle: boolean = this.props.cycle;

		numValue -= step;

		if (numValue >= minValue && numValue.toString().length <= maxLength) {
			isBottomButtonDisabled = ((numValue === minValue) || (numValue - step < minValue)) && !cycle;
		} else if (cycle) {
			numValue = this.getMaxValue();

			if (numValue.toString().length > maxLength) {
				while (numValue.toString().length > maxLength) {
					numValue--;
				}
			}
		} else {
			return;
		}

		this.setState({
			...this.state,
			value: numValue.toString(),
			isBottomButtonDisabled: isBottomButtonDisabled,
		});

		if (this.props.onChange) {
			this.props.onChange(numValue);
		}
	}

	private getMinValue(): number {
		if (this.props.minValue) {
			return this.props.minValue;
		}

		return 0;
	}

	private getMaxValue(): number {
		if (this.props.maxValue) {
			return this.props.maxValue;
		}

		return Math.pow(10, this.props.maxLength - 1);
	}

	private getStep(): number {
		if (this.props.step) {
			return this.props.step;
		}

		return 1;
	}
}
