import './ComboBox.scss';

import * as React from 'react';
import { Glyphicon } from 'react-bootstrap';

export interface IComboBoxProps {
	value: string;
	values: {[key: string]: string};
	cycle?: boolean;
	width: number; // @todo component width not in use now

	onChange?: (key: string, value: string) => void;
}

interface IComboBoxState {
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
			isTopButtonDisabled: false,
			isBottomButtonDisabled: false,
			isStandardComboBox: false,
			isFrameVisible: false,

			touchStart: null,
		};
	}

	public render(): any {
		let classNames: string[] = ['ej-components__combo-box'],
			topClassNames: string[] = [],
			bottomClassNames: string[] = [],
			fieldClassNames: string[] = [],

			key: string = this.props.value,
			values: {[key: string]: string} = this.props.values,

			field: JSX.Element = null;

		if (this.state.isStandardComboBox) {
			let options: JSX.Element[] = [];

			for (let key in values) {
				options.push(<option selected={key === this.props.value} value={key}>
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
			<div className={classNames.join(' ')}
				 onTouchStart={this.onTouchStart}
				 onTouchEnd={this.onTouchEnd}>
				<a className={topClassNames.join(' ')}
				   onClick={this.onTopButtonClick}>
					<Glyphicon glyph={'menu-up'}/>
				</a>

				<div>
					{field}
				</div>

				<a className={bottomClassNames.join(' ')}
				   onClick={this.onBottomButtonClick}>
					<Glyphicon glyph={'menu-down'}/>
				</a>
			</div>);
	}

	private onChange(e: React.ChangeEvent<HTMLSelectElement>): void {
		let key: string = e.target['value'];

		if (this.props.onChange && (key !== this.props.value)) {
			this.props.onChange(key, this.props.values[key]);
		}
	}

	private onBlur(e: React.FormEvent<any>): void {
		this.setState({
			...this.state,
			isStandardComboBox: false,
		});
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
		if (!this.state.isStandardComboBox) {
			this.nextValue();
		}
	}

	private onBottomButtonClick(): void {
		if (!this.state.isStandardComboBox) {
			this.previousValue();
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
			this.nextValue();
		} else if (touchStart < touchEnd - 5) {
			this.previousValue();
		}

		this.setState({
			...this.state,
			touchStart: null,
		});
	}

	private nextValue(): void {
		let key: string = this.props.value,
			keys: string[] = this.getKeys(),

			cycle: boolean = this.props.cycle,
			isTopButtonDisabled: boolean = false;

		if (keys.indexOf(key) === keys.length - 1) {
			if (cycle) {
				key = keys[0];
			} else {
				isTopButtonDisabled = true;
			}
		} else {
			key = keys[keys.indexOf(key) + 1];
		}

		this.setState({
			...this.state,
			isTopButtonDisabled: isTopButtonDisabled,
		});

		if (this.props.onChange && key !== this.props.value) {
			this.props.onChange(key, this.props.values[key]);
		}
	}

	private previousValue(): void {
		let key: string = this.props.value,
			keys: string[] = this.getKeys(),

			cycle: boolean = this.props.cycle,
			isBottomButtonDisabled: boolean = false;

		if (keys.indexOf(key) === 0) {
			if (cycle) {
				key = keys[keys.length - 1];
			} else {
				isBottomButtonDisabled = true;
			}
		} else {
			key = keys[keys.indexOf(key) - 1];
		}

		this.setState({
			...this.state,
			isBottomButtonDisabled: isBottomButtonDisabled,
		});

		if (this.props.onChange && key !== this.props.value) {
			this.props.onChange(key, this.props.values[key]);
		}
	}

	private getKeys(): string[] {
		let keys: string[] = [];

		for (let key in this.props.values) {
			keys.push(key);
		}

		return keys;
	}
}
