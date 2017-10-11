import './DatePicker.scss';

import * as React from 'react';
import { ToggleType, PopoverPosition } from './enum';
import { Calendar } from 'react-widgets';
import { Glyphicon } from 'react-bootstrap';
import * as moment from 'moment';
import * as momentLocalizer from 'react-widgets-moment';
import { Popover, OverlayTrigger } from 'react-bootstrap';

moment.locale('uk'); // todo setup language i18n ru | uk | en
momentLocalizer();

export interface IDatePickerProps {
	position?: PopoverPosition;
	type?: ToggleType;
	className?: string;
	value?: Date;
	defaultValue?: Date | string;
	onChange?: (e: Date) => void;
	min?: Date;
	max?: Date;
}

export interface IDatePickerState {
	value: Date;
}

export class DatePicker extends React.Component<IDatePickerProps, IDatePickerState> {

	public props: IDatePickerProps;
	public state: IDatePickerState;

	private componentClassName: string = '';
	private _overlay: any;

	constructor(props: IDatePickerProps) {
		super(props);
		this.state = this.getInitState();
	}

	public init(): void {
		// do nothing
	}

	public getInitState(): IDatePickerState {
		if (this.props.value) {
			return {value: this.props.value};
		}
		if (this.props.defaultValue) {
			if (this.props.defaultValue instanceof Date) {
				return {value: this.props.defaultValue as Date};
			}
			if (new Date(this.props.defaultValue).toString() !== 'Invalid Date') {
				return {value: new Date(this.props.defaultValue)};
			}
		}
		return {value: null};
	}

	public componentWillReceiveProps(nextProps: IDatePickerProps): void {
		if ((this.props.value !== nextProps.value)
			|| (this.props.value && nextProps.value && (this.props.value.valueOf() !== nextProps.value.valueOf()))) {
			this.setState({value: nextProps.value});
		}
	}

	public render(): JSX.Element {
		let toggleComponent: JSX.Element;
		let value: string = '';
		if (this.state.value) {
			value = moment(this.state.value).format('L');
		} else if (this.props.defaultValue) {
			if (typeof this.props.defaultValue === 'string') {
				value = this.props.defaultValue as string;
			} else if (this.props.defaultValue instanceof Date) {
				value = moment(this.props.defaultValue as Date).format('L');
			}
		}
		switch (this.props.type) {
			case ToggleType.Input:
				toggleComponent = (
					<input type='text' value={value}/>
				);
				break;
			case ToggleType.Link:
				toggleComponent = (
					<a href='javascript://'>{value}<span className='caret'/></a>
				);
				break;
			case ToggleType.Option:
				toggleComponent = (
					<Glyphicon glyph='option'/>
				);
				break;
			default:
				toggleComponent = (
					<a href='javascript://' className={this.componentClassName}>{value}</a>
				);
				break;
		}
		//  trigger="click" placement="bottom"
		let calendarProps: any = {
			value: this.state.value,
			onChange: this.onChangeDatePicker.bind(this),
			headerFormat: (d) => {
				return moment(d).format('MMMM').toUpperCase() + ' ' + d.getFullYear();
			},
			messages: {
				moveBack: 'Назад', // todo i18n
				moveForward: 'Вперёд', // todo i18n
			}
		};
		if (this.props.min instanceof Date) {
			calendarProps = {
				...calendarProps,
				min: this.props.min
			};
		}
		if (this.props.max instanceof Date) {
			calendarProps = {
				...calendarProps,
				max: this.props.max
			};
		}
		let popoverBottom = (
			<Popover id='popover-positioned-bottom' className='ejDatePicker--Popover'>
				<Calendar {...calendarProps} />
			</Popover>
		);
		return (
			<div className='ejDatePicker'>
				<OverlayTrigger container={this} ref={(overlay) => {
					this._overlay = overlay;
				}} overlay={popoverBottom} trigger='click'
								placement={"bottom"} rootClose>
					<div>{toggleComponent}</div>
				</OverlayTrigger>
			</div>
		);
	}

	private onChangeDatePicker(e: Date): void {
		this.setState({value: e});
		if (this.props.onChange) {
			this.props.onChange(e);
		}
		(this._overlay as OverlayTrigger).setState({show: false});
	}
}
