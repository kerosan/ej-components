import './DateField.scss';

import * as React from 'react';
import {ComboBox} from './ComboBox';
import {NumberField} from './NumberField';

export interface IDateFieldProps {
	locale: string;
	value: string;
	minValue: string;
	maxValue: string;
	cycle?: boolean;

	onChange?: (value: string) => void;
}

interface IDateFieldState {
	dayValue?: number;
	monthKey?: string;
	yearValue?: number;
}

export class DateField extends React.Component<IDateFieldProps, IDateFieldState> {
	private _monthsEn: {[key: string]: string} = {
		'1': 'January', '2': 'February', '3': 'March', '4': 'April', '5': 'May', '6': 'June',
		'7': 'July', '8': 'August', '9': 'September', '10': 'October', '11': 'November', '12': 'December'
	};

	private _monthsRu: {[key: string]: string} = {
		'1': 'января', '2': 'февраля', '3': 'марта', '4': 'апреля', '5': 'мая', '6': 'июня',
		'7': 'июля', '8': 'августа', '9': 'сентября', '10': 'октября', '11': 'ноября', '12': 'декабря'
	};

	private _monthsUk: {[key: string]: string} = {
		'1': 'січня', '2': 'лютого', '3': 'березня', '4': 'квітня', '5': 'травня', '6': 'червня',
		'7': 'липня', '8': 'серпня', '9': 'вересня', '10': 'жовтня', '11': 'листопаду', '12': 'грудня'
	};

	constructor(public props: IDateFieldProps) {
		super(props);

		this.changeDay = this.changeDay.bind(this);
		this.changeMonth = this.changeMonth.bind(this);
		this.changeYear = this.changeYear.bind(this);

		this.state = this.getInitState();
	}

	private getInitState(): IDateFieldState {
		return {
			dayValue: 1,
			monthKey: '1',
			yearValue: 0,
		};
	}

	public componentWillReceiveProps(newProps: IDateFieldProps): void {
		let day: number = this.getDay(newProps.value),
			month: number = this.getMonth(newProps.value),
			year: number = this.getYear(newProps.value);

		if (this.state.dayValue !== day
			|| this.state.monthKey !== month.toString()
			|| this.state.yearValue !== year) {
			this.setState({
				...this.state,
				dayValue: day,
				monthKey: month.toString(),
				yearValue: year,
			});
		}
	}

	public render(): JSX.Element {
		let months: {[key: string]: string} = this.getMonthValues(),

			dayField: JSX.Element = <NumberField maxLength={2}
												 minValue={this.getDayMinValue()}
												 maxValue={this.getDayMaxValue()}
												 value={this.state.dayValue}
												 onChange={this.changeDay}/>,
			monthField: JSX.Element = 	<ComboBox value={this.state.monthKey}
												  values={months}
												  width={0}
												  onChange={this.changeMonth}/>,
			firstElement: JSX.Element,
			secondElement: JSX.Element;

		switch (this.props.locale) {
			case 'ru':
			case 'ua':
				firstElement = dayField;
				secondElement = monthField;
				break;

			default:
				firstElement = monthField;
				secondElement = dayField;
				break;
		}

		return <div>
			{firstElement}
			{secondElement}
			<NumberField maxLength={4}
						 value={this.state.yearValue}
						 minValue={this.getYear(this.props.minValue)}
						 maxValue={this.getYear(this.props.maxValue)}
						 onChange={this.changeYear}/>
		</div>
	}

	private getDayMinValue(): number {
		let minYear: number = this.getYear(this.props.minValue),
			minMonth: number = this.getMonth(this.props.minValue),

			currentYear: number = this.state.yearValue,
			currentMonth: number = +this.state.monthKey;

		if (!this.props.cycle && minYear === currentYear && minMonth === currentMonth) {
			return this.getDay(this.props.minValue);
		} else {
			return 1;
		}
	}

	private getDayMaxValue(): number {
		let maxYear: number = this.getYear(this.props.maxValue),
			maxMonth: number = this.getMonth(this.props.maxValue),

			currentYear: number = this.state.yearValue,
			currentMonth: number = +this.state.monthKey;

		if (!this.props.cycle && maxYear === currentYear && maxMonth === currentMonth) {
			return this.getDay(this.props.maxValue);
		} else {
			return this.getDaysInMonthCount(currentYear, currentMonth);
		}
	}

	private getDay(date: string): number {
		let regExp: RegExp = /^\d{4}/,
			dayString: string = regExp.exec(date)[1];

		return parseInt(dayString, 10);
	}

	private getMonth(date: string): number {
		let regExp: RegExp = /^\d{4}/,
			monthString: string = regExp.exec(date)[0];

		return parseInt(monthString, 10);
	}

	private getYear(date: string): number {
		let regExp: RegExp = /^\d{4}/,
			yearString: string = regExp.exec(date)[0];

		return parseInt(yearString, 10);
	}

	private getDaysInMonthCount(year: number, month: number): number {
		let array: number[],
			leapYearDayInMonth: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
			usualYearDayInMonth: number[] = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
			array = leapYearDayInMonth;
		} else {
			array = usualYearDayInMonth;
		}

		return array[month - 1];
	}

	private getMonthValues(): {[key: string]: string} {
		switch (this.props.locale) {
			case 'en':
				return this._monthsEn;

			case 'ru':
				return this._monthsRu;

			case 'uk':
				return this._monthsUk;

			default:
				console.error('Unsupported locale! Locale: ' + this.props.locale);
				return this._monthsEn;
		}
	}

	private checkDay(dayValue: number): string {
		let monthKey: number = +this.state.monthKey,
			yearValue: number = this.state.yearValue,
			daysInCurrentMonth: number = this.getDaysInMonthCount(yearValue, monthKey);

		if (dayValue < daysInCurrentMonth) {
			monthKey += 1;
			dayValue = 1;

			if (monthKey === 13) {
				yearValue += 1;
				monthKey = 1;
			}
		} else if (dayValue === 0) {
			monthKey -= 1;

			if (monthKey === 0) {
				monthKey = 12;
				yearValue -= 1;
			}

			dayValue = this.getDaysInMonthCount(yearValue, monthKey);
		}

		return this.checkDates(dayValue, monthKey, yearValue);
	}

	private checkMonth(monthKey: number): string {
		let dayValue: number = this.state.dayValue,
			yearValue: number = this.state.yearValue,
			daysInCurrentMonth: number;

		if (monthKey === 13) {
			yearValue += 1;
			monthKey = 1;
		} else if (monthKey === 0) {
			yearValue -= 1;
			monthKey = 12;
		}

		daysInCurrentMonth = this.getDaysInMonthCount(yearValue, monthKey);

		if (dayValue > daysInCurrentMonth) {
			dayValue = daysInCurrentMonth;
		}

		return this.checkDates(dayValue, monthKey, yearValue);
	}

	private checkYear(yearValue: number): string {
		let dayValue: number = this.state.dayValue,
			monthKey: number = +this.state.monthKey,
			daysInCurrentMonth: number = this.getDaysInMonthCount(yearValue, monthKey);

		if (dayValue > daysInCurrentMonth) {
			dayValue = daysInCurrentMonth;
		}

		return this.checkDates(dayValue, monthKey, yearValue);
	}

	private checkDates(dayValue: number, monthKey: number, yearValue: number): string {
		let maxValid: boolean = this.checkMaxDate(dayValue, monthKey, yearValue),
			minValid: boolean = this.checkMinDate(dayValue, monthKey, yearValue);

		if (maxValid && minValid) {
			return this.getDateString(yearValue, monthKey, dayValue);
		} else if (!this.props.cycle) {
			return this.getDateString(this.state.yearValue, +this.state.monthKey, this.state.dayValue);
		} else if (maxValid) {
			return this.props.maxValue;
		} else {
			return this.props.minValue;
		}
	}

	private checkMaxDate(dayValue: number, monthKey: number, yearValue: number): boolean {
		let maxDay: number = this.getDay(this.props.maxValue),
			maxMonth: number = this.getMonth(this.props.maxValue),
			maxYear: number = this.getYear(this.props.maxValue);

		if (maxYear > yearValue) {
			return true;
		} else if (maxYear < yearValue) {
			return false;
		} else if (monthKey < maxMonth) {
			return true;
		} else if (monthKey > maxMonth) {
			return false;
		} else if (dayValue < maxDay) {
			return true;
		}

		return false;
	}

	private checkMinDate(dayValue: number, monthKey: number, yearValue: number): boolean {
		let minDay: number = this.getDay(this.props.minValue),
			minMonth: number = this.getMonth(this.props.minValue),
			minYear: number = this.getYear(this.props.minValue);

		if (minYear < yearValue) {
			return true;
		} else if (minYear > yearValue) {
			return false;
		} else if (monthKey > minMonth) {
			return true;
		} else if (monthKey < minMonth) {
			return false;
		} else if (dayValue > minDay) {
			return true;
		}

		return false;
	}

	private getDateString(yearValue: number, monthKey: number, dayValue: number): string {
		if (yearValue === null) {
			yearValue = this.state.yearValue;
		}
		if (monthKey === null) {
			monthKey = +this.state.monthKey;
		}
		if (dayValue === null) {
			dayValue = this.state.dayValue;
		}

		return yearValue + '-' + monthKey + '-' + dayValue;
	}

	private changeDay(dayValue: number): void {
		this.changeState(this.checkDay(dayValue));
	}

	private changeMonth(monthKey: string, value: string): void {
		this.changeState(this.checkMonth(+monthKey));
	}

	private changeYear(yearValue: number): void {
		this.changeState(this.checkYear(yearValue));
	}

	private changeState(dateString: string): void {
		let day: number = this.getDay(dateString),
			month: number = this.getMonth(dateString),
			year: number = this.getYear(dateString);

		this.setState({
			...this.state,
			dayValue: day,
			monthKey: month.toString(),
			yearValue: year,
		});

		this.onChange();
	}

	private onChange(): void {
		if (this.props.onChange) {
			let value: string = this.getDateString(null, null, null);

			this.props.onChange(value);
		}
	}
}