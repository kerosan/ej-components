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

	public componentDidMount(): void {
		let regExp: RegExp = /^\d{4}-\d{2}-\d{2}$/,
			value: string = this.props.value,
			minValue: string = this.props.minValue,
			maxValue: string = this.props.maxValue,

			failed: boolean = false;

		if (!regExp.test(value)) {
			console.error('Value prop has wrong format! YYYY-MM-DD format is required');
			failed = true;
		}
		if (!regExp.test(minValue)) {
			console.error('MinValue prop has wrong format! YYYY-MM-DD format is required');
			failed = true;
		}
		if (!regExp.test(maxValue)) {
			console.error('MaxValue prop has wrong format! YYYY-MM-DD format is required');
			failed = true;
		}

		if (!failed) {
			let minYear: number = this.getYear(minValue),
				minMonth: number = this.getMonth(minValue),
				minDay: number = this.getDay(minValue),

				maxYear: number = this.getYear(maxValue),
				maxMonth: number = this.getMonth(maxValue),
				maxDay: number = this.getDay(maxValue),

				currentYear: number = this.getYear(value),
				currentMonth: number = this.getMonth(value),
				currentDay: number = this.getDay(value);

			if (minYear > maxYear
				|| (minYear === maxYear && minMonth > maxMonth)
				|| (minYear === maxYear && minMonth === maxMonth && minDay > maxDay)) {
				console.error('MinValue and MaxValue prop are wrong and MinValue prop is bigger than MaxValue prop!');
			}

			if (currentYear > maxYear
				|| (currentYear === maxYear && currentMonth > maxMonth)
				|| (currentYear === maxYear && currentMonth === maxMonth && currentDay > maxDay)) {
				console.error('Value prop is wrong and bigger than MaxValue prop!');
			} else if (currentYear < minYear
				|| (currentYear === minYear && currentMonth < minMonth)
				|| (currentYear === minYear && currentMonth === minMonth && currentDay < minDay)) {
				console.error('Value prop is wrong and lesser than MinValue prop!');
			}
		}
	}

	public componentWillReceiveProps(newProps: IDateFieldProps): void {
		let day: number = this.getDay(newProps.value),
			month: number = this.getMonth(newProps.value),
			year: number = this.getYear(newProps.value);

		if (this.state.dayValue !== day	|| this.state.monthKey !== month.toString()	|| this.state.yearValue !== year) {
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
												 minValue={0}
												 maxValue={32}
												 value={this.state.dayValue}
												 zerofill={true}
												 onChange={this.changeDay}/>,
			monthField: JSX.Element = 	<ComboBox value={this.state.monthKey}
												  values={months}
												  cycle={true}
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

	private getDay(date: string): number {
		let regExp: RegExp = /-\d{2}$/,
			dayString: string = regExp.exec(date)[0];

		dayString = dayString.charAt(1) + dayString.charAt(2);

		console.error('getDay: ' + dayString);

		return parseInt(dayString, 10);
	}

	private getMonth(date: string): number {
		let regExp: RegExp = /-\d{2}/,
			monthString: string = regExp.exec(date)[0];

		monthString = monthString.charAt(1) + monthString.charAt(2);

		console.error('getMoth: ' + monthString);

		return parseInt(monthString, 10);
	}

	private getYear(date: string): number {
		let regExp: RegExp = /^\d{4}/,
			yearString: string = regExp.exec(date)[0];

		console.error('getYear: ' + yearString);

		return parseInt(yearString, 10);
	}

	private getDaysInMonthCount(year: number, month: number): number {
		let array: number[],
			usualYearDayInMonth: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
			leapYearDayInMonth: number[] = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

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

		if (dayValue > daysInCurrentMonth) {
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

		if (monthKey === 1 && this.state.monthKey === '12') {
			yearValue += 1;
			monthKey = 1;
		} else if (monthKey === 12 && this.state.monthKey === '1') {
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
		} else if (dayValue <= maxDay) {
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
		} else if (dayValue >= minDay) {
			return true;
		}

		return false;
	}

	private getDateString(yearValue: number, monthKey: number, dayValue: number): string {
		let year: string = yearValue !== null ? yearValue.toString() : this.state.yearValue.toString(),
			month: string = monthKey !== null ? monthKey.toString() : this.state.monthKey,
			day: string = dayValue !== null ? dayValue.toString() : this.state.dayValue.toString();

		while (year.length < 4) {
			year = '0' + year;
		}
		if (month.length === 1) {
			month = '0' + month;
		}
		if (day.length === 1) {
			day = '0' + day;
		}

		return year + '-' + month + '-' + day;
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

		if (this.props.onChange) {
			let value: string = this.getDateString(year, month, day);

			this.props.onChange(value);
		}
	}
}
