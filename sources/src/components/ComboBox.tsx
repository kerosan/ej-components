import './ComboBox.scss';

import * as React from 'react';
import { Glyphicon } from 'react-bootstrap';

export interface IComboBoxProps {
	value: string;
	values: {[key: string]: string};
	cycle?: boolean;
	width: number;

	onChange?: (key: string, value: string) => void;
}

export interface IComboBoxState {
	key?: string;

	isTopButtonDisabled?: boolean;
	isBottomButtonDisabled?: boolean;
	isStandardComboBox?: boolean;
	isFrameVisible?: boolean;

	touchStart?: number;
}

export class ComboBox extends React.Component<IComboBoxProps, IComboBoxState> {

	constructor(public props: IComboBoxProps) {
		super(props);

		this.nextValue = this.nextValue.bind(this);
		this.previousValue = this.previousValue.bind(this);

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

	private getInitState(): IComboBoxState {
		return {
			key: '',

			isTopButtonDisabled: false,
			isBottomButtonDisabled: false,
			isStandardComboBox: false,
			isFrameVisible: false,

			touchStart: null,
		};
	}

	public componentWillReceiveProps(newProps: IComboBoxProps): void {
		if (newProps.value !== this.state.key) {
			this.setState({
				...this.state,
				key: newProps.value,
			});
		}
	}

	public render(): any {
		let classNames: string[] = ['ej-components__combo-box'],
			topClassNames: string[] = [],
			bottomClassNames: string[] = [],
			fieldClassNames: string[] = [],

			key: string = this.state.key,
			values: {[key: string]: string} = this.props.values,

			field: JSX.Element = null;

		if (this.state.isStandardComboBox) {
			let options: JSX.Element[] = [];

			for (let key in values) {
				options.push(<option value={key}>
					{values[key]}
				</option>)
			}

			field = <select onChange={this.onChange}
						   	onBlur={this.onBlur}
						   	multiple={false}
						  	autoFocus={true}>
						{options}
					</select>;
		} else {
			if (this.state.isFrameVisible) {
				fieldClassNames.push('framed');
			}

			field = <div className={fieldClassNames.join(' ')}
						 onMouseEnter={this.onMouseEnter}
						 onMouseLeave={this.onMouseLeave}
						 onClick={this.onClick}>
				{values[key]}
			</div>
		}

		return (
			<div className={classNames.join(' ')} onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd}>
				<a className={topClassNames.join(' ')} onClick={this.onTopButtonClick}>
					<Glyphicon glyph={'menu-up'}/>
				</a>

				<div>
					{field}
				</div>

				<a className={bottomClassNames.join(' ')} onClick={this.onBottomButtonClick}>
					<Glyphicon glyph={'menu-down'}/>
				</a>
			</div>);
	}

	private onChange(e: React.ChangeEvent<HTMLSelectElement>): void {
		let key: string = e.target['value'];

		this.setState({
			...this.state,
			key: key,
		});
	}

	private onBlur(e: React.FormEvent<any>): void {
		e.stopPropagation();

		let key: string = this.state.key;

		this.setState({
			...this.state,
			key: key,
			isStandardComboBox: false,
		});

		if (this.props.onChange && (key !== this.props.value)) {
			this.props.onChange(key, this.props.values['key']);
		}
	}

	private onClick(): void {
		if (!this.state.isStandardComboBox) {
			this.setState({
				...this.state,
				isStandardComboBox: true,
				isFrameVisible: false,
			});
		}
	}

	private onMouseLeave(): void {
		if (!this.state.isStandardComboBox) {
			this.setState({
				...this.state,
				isFrameVisible: false,
			});
		}
	}

	private onMouseEnter(): void {
		if (!this.state.isStandardComboBox) {
			this.setState({
				...this.state,
				isFrameVisible: true,
			});
		}
	}

	private onTopButtonClick(): void {
		this.nextValue();
	}

	private onBottomButtonClick(): void {
		this.previousValue();
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
			this.previousValue();
		} else if (touchStart < touchEnd - 5) {
			this.nextValue();
		}

		this.setState({
			...this.state,
			touchStart: null,
		});
	}

	private nextValue(): void {
		let key: string = this.state.key,
			values: {[key: string]: string} = this.props.values,

			isNext: boolean = false;

		for (let k in values) {
			if (isNext) {
				key = k;
				break;
			}

			if (k === key) {
				isNext = true;
			}
		}

		if (key === this.state.key) {
			return;
		}

		this.setState({
			...this.state,
			key: key,
		});

		if (this.props.onChange) {
			this.props.onChange(key, this.props.values[key]);
		}
	}

	private previousValue(): void {
		let key: string = this.state.key,
			previousKey: string,
			values: {[key: string]: string} = this.props.values,

			isNext: boolean = false;

		for (let k in values) {
			previousKey = k;

			if (isNext) {
				key = previousKey;
				break;
			}

			if (k === key) {
				isNext = true;
			}
		}

		if (key === this.state.key) {
			return;
		}

		this.setState({
			...this.state,
			key: key,
		});

		if (this.props.onChange) {
			this.props.onChange(key, this.props.values[key]);
		}
	}
}
