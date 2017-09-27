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

	obChange?: (value: string) => void;
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

	public render(): JSX.Element {
		let dayValue: number = this.state.dayValue,
			monthKey: string = this.state.monthKey,
			yearValue: number = this.state.yearValue,

			months: {[key: string]: string} = this.getMonthValues();

		return <div>
			<NumberField maxLength={2}
						 value={dayValue}
						 onChange={this.changeDay}/>

			<ComboBox value={monthKey}
					  values={months}
					  width={0}
					  onChange={this.changeMonth}/>

			<NumberField maxLength={4}
						 value={yearValue}
						 onChange={this.changeYear}/>
		</div>
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

	private changeDay(value: number): void {
		this.setState({
			...this.state,
			dayValue: value,
		});
	}

	private changeMonth(key: string, value: string): void {
		this.setState({
			...this.state,
			monthKey: key,
		});
	}

	private changeYear(value: number): void {
		this.setState({
			...this.state,
			yearValue: value,
		});
	}
}
