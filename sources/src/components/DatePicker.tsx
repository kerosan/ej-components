import './DatePicker.scss';

import * as React from 'react';
import { ToggleType, PopoverPosition } from './enum';
import { Calendar } from 'react-widgets';
import * as moment from 'moment';
import * as momentLocalizer from 'react-widgets-moment';
import {
	Popover,
	OverlayTrigger,
	Form,
	FormGroup,
	Glyphicon,
	InputGroup,
	FormControl
} from 'react-bootstrap';

export interface IDatePickerProps {
	locale: string;
	className?: string;

	value?: Date;
	minValue?: Date;
	maxValue?: Date;
	defaultValue?: Date | string;

	type?: ToggleType;
	position?: PopoverPosition;

	prevBtnText?: string;
	nextBtnText?: string;

	onChange?: (e: Date) => void;
}

export interface IDatePickerState {
	value: Date;

	prevBtnText?: string;
	nextBtnText?: string;
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

	public componentDidMount(): void {
		moment.locale(this.props.locale);
		momentLocalizer();
	}

	public getInitState(): IDatePickerState {
		let prevBtnText: string = this.props.prevBtnText,
			nextBtnText: string = this.props.nextBtnText;

		if (!prevBtnText) {
			prevBtnText = 'Previous';
		}
		if (!nextBtnText) {
			nextBtnText = 'Next';
		}

		if (this.props.value) {
			return {
				value: this.props.value,
				prevBtnText: prevBtnText,
				nextBtnText: nextBtnText,
			};
		}
		if (this.props.defaultValue) {
			if (this.props.defaultValue instanceof Date) {
				return {
					value: this.props.defaultValue as Date,
					prevBtnText: prevBtnText,
					nextBtnText: nextBtnText,
				};
			}
			if (new Date(this.props.defaultValue).toString() !== 'Invalid Date') {
				return {
					value: new Date(this.props.defaultValue),
					prevBtnText: prevBtnText,
					nextBtnText: nextBtnText,
				};
			}
		}
		return {
			value: null,
			prevBtnText: prevBtnText,
			nextBtnText: nextBtnText,
		};
	}

	public componentWillReceiveProps(nextProps: IDatePickerProps): void {
		if ((this.props.value !== nextProps.value)
			|| (this.props.value && nextProps.value && (this.props.value.valueOf() !== nextProps.value.valueOf()))) {
			this.setState({ value: nextProps.value });
		}
	}

	public render(): JSX.Element {
		if (this.props.locale !== moment.locale()) {
			moment.locale(this.props.locale);
			momentLocalizer();
		}

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
			case ToggleType.Link:
				toggleComponent = (<a href='javascript://' className={this.componentClassName}>{value}<span className='caret' /></a>);;
				break;
			case ToggleType.Option:
				toggleComponent = (<Glyphicon glyph='option-vertical' className={this.componentClassName} />);;
				break;
			case ToggleType.Input:
			default:
				toggleComponent = (
					<InputGroup className={this.componentClassName}>
						<FormControl type='text' value={value} />
						<InputGroup.Button>
							<button className="btn btn-default" type="button">
								<Glyphicon glyph='calendar' />
							</button>
						</InputGroup.Button>
					</InputGroup >
				);
				break;
		}
		//  trigger="click" placement="bottom"

		let prevBtnText: string = this.state.prevBtnText,
			nextBtnText: string = this.state.nextBtnText;

		let calendarProps: any = {
			value: this.state.value,
			onChange: this.onChangeDatePicker.bind(this),
			headerFormat: (d) => {
				return moment(d).format('MMMM').toUpperCase() + ' ' + d.getFullYear();
			},
			footer: false,
			messages: {
				moveBack: {prevBtnText},
				moveForward: {nextBtnText},
			}
		};
		if (this.props.minValue instanceof Date) {
			calendarProps = {
				...calendarProps,
				minValue: this.props.minValue
			};
		}
		if (this.props.maxValue instanceof Date) {
			calendarProps = {
				...calendarProps,
				maxValue: this.props.maxValue
			};
		}
		let popoverBottom = (
			<Popover id='popover-positioned-bottom' className='ejDatePicker--Popover'>
				<Calendar {...calendarProps} />
			</Popover>
		);
		return (
			<Form inline className='ejDatePicker'>
				<FormGroup>
					<OverlayTrigger container={this} ref={(overlay) => {
						this._overlay = overlay;
					}} overlay={popoverBottom} trigger='click'
						placement={"bottom"} rootClose>
						{toggleComponent}
					</OverlayTrigger>
				</FormGroup>
			</Form>
		);
	}

	private onChangeDatePicker(e: Date): void {
		this.setState({ value: e });
		if (this.props.onChange) {
			this.props.onChange(e);
		}
		(this._overlay as OverlayTrigger).setState({ show: false });
	}
}
