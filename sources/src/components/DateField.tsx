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
	day?: number;
	month?: string;
	year?: number;
}

export class DateField extends React.Component<IDateFieldProps, IDateFieldState> {
	constructor(public props: IDateFieldProps) {
		super(props);

		this.changeDay = this.changeDay.bind(this);
		this.changeMonth = this.changeMonth.bind(this);
		this.changeYear = this.changeYear.bind(this);

		this.state = this.getInitState();
	}

	private getInitState(): IDateFieldState {
		return {
			day: 0,
			month: '',
			year: 0,
		};
	}

	public render(): JSX.Element {
		let dayValue: number = this.state.day,
			monthValue: string = this.state.month,
			yearValue: number = this.state.year;

		return <div>
			<NumberField maxLength={2}
						 value={dayValue}
						 onChange={this.changeDay}/>

			<ComboBox value={monthValue}
					  values={null}
					  width={0}
					  onChange={this.changeMonth}/>

			<NumberField maxLength={4}
						 value={yearValue}
						 onChange={this.changeYear}/>
		</div>
	}

	private changeDay(value: number): void {
		this.setState({
			...this.state,
			day: value,
		});
	}

	private changeMonth(key: string, value: string): void {
		this.setState({
			...this.state,
			month: key,
		});
	}

	private changeYear(value: number): void {
		this.setState({
			...this.state,
			year: value,
		});
	}
}
