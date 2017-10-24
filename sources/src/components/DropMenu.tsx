import './DropMenu.scss';

import * as React from 'react';
import { Dropdown } from 'react-bootstrap';
import { ILink, ILinks } from '../types';
import { findDOMNode } from 'react-dom';
import { ListItem } from './ListItem';
import { IListProps, List } from './List';

export interface IDropMenuProps {
	id: string;
	className?: string;
	items: ILinks;
	value?: ILink;
	disabled?: boolean;
	currentId?: number;
	defaultValue?: ILink;
	dropup?: boolean;
	pullRight?: boolean;
	onChange?: (e) => void;
	listProps?: IListProps;
}

export interface IDropMenuState {
	value?: ILink;
	show?: boolean;
	arrowOffsetLeft?: number | string;
	arrowOffsetRight?: number | string;
	pullRight?: boolean;
}

export class DropMenu extends React.Component<IDropMenuProps, IDropMenuState> {

	public props: IDropMenuProps;
	public state: IDropMenuState;

	private _toggle;
	private _menu;

	constructor(props: IDropMenuProps) {
		super(props);
		if (!this.props.id) {
			throw new Error('DatePicker: Props \'id\' is required!');
		}
		this.state = this.getInitState();

		this.onHide = this.onHide.bind(this);
		this.onToggleClick = this.onToggleClick.bind(this);
	}

	public componentWillUpdate(): void {
		let i = 0, items = findDOMNode(this._menu).childNodes.item(0).childNodes;
		let newWidth = findDOMNode(this._toggle).clientWidth;
		while (i !== items.length) {
			(items[i] as HTMLLIElement).style.minWidth = `${newWidth + 15}px`;
			i++;
		}
	}

	public getInitState(): IDropMenuState {

		if (this.props.value) {
			return {
				value: this.props.value,
				pullRight: this.props.pullRight,
				show: false
			};
		} else if (this.props.defaultValue) {
			return {
				value: this.props.defaultValue,
				pullRight: this.props.pullRight,
				show: false
			};
		}
		let item = this.props.items.filter((item) => (item.id === this.props.currentId));
		return {
			value: item[0],
			pullRight: this.props.pullRight,
			show: false
		};
	}

	public componentWillReceiveProps(nextProps: IDropMenuProps): void {
		let newState: IDropMenuState = {};
		if ((this.props.value !== nextProps.value)
			|| (this.props.value && nextProps.value && (this.props.value.valueOf() !== nextProps.value.valueOf()))) {
			newState = {...newState, value: nextProps.value};
		}
		let item = this.props.items.filter((item) => (item.id === nextProps.currentId));

		if (this.props.currentId !== nextProps.currentId) {
			newState = {...newState, value: item[0]}
		}
		if (!nextProps.pullRight) {
			newState = {...newState, arrowOffsetLeft: findDOMNode(this._toggle).clientWidth - 3, arrowOffsetRight: 'auto'}
		} else {
			newState = {...newState, arrowOffsetLeft: 'auto', arrowOffsetRight: 9};
		}
		if (this.props.items.length >= 5) {
			newState = {...newState, arrowOffsetLeft: 'auto', arrowOffsetRight: 9, pullRight: true}
		}
		this.setState(newState);

	}

	public render(): JSX.Element {
		let classNames: string[] = ['ej-components__drop-menu'];
		if (this.props.className) {
			classNames.push(this.props.className);
		}

		let items: JSX.Element[] = this.props.items.map((item: ILink, key) => (
			<ListItem key={key} onClick={this.onClick.bind(this, item.id)}>
				{item.title}
			</ListItem>
		));

		return (
			<div className={classNames.join(' ')}>
				<Dropdown id={`dropmenu-${this.props.id}`}
						  open={this.state.show}
						  disabled={this.props.disabled}
						  dropup={this.props.dropup}
						  pullRight={!!this.state.pullRight}
						  onToggle={this.onHide}>
					<Dropdown.Toggle bsStyle={`link`} ref={(r) => {
						this._toggle = r;
					}} onClick={this.onToggleClick}>
						{this.state.value.title}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<div className='arrow' style={{left: this.state.arrowOffsetLeft, right: this.state.arrowOffsetRight}}/>
						<List {...this.props.listProps}
							  ref={(r) => {
								  this._menu = r;
							  }}>
							{items}
						</List>
					</Dropdown.Menu>
				</Dropdown>
			</div>

		);
	}

	private onHide(e): void {
		if (this.state.show) {
			this.setState({show: false});
		}
	}

	private onToggleClick(e): void {
		let newState: IDropMenuState = {...this.state, show: true};
		if (!this.state.pullRight) {
			newState = {...newState, arrowOffsetLeft: findDOMNode(this._toggle).clientWidth - 3, arrowOffsetRight: 'auto'}
		} else {
			newState = {...newState, arrowOffsetLeft: 'auto', arrowOffsetRight: 9}
		}
		if (this.props.items.length >= 5) {
			newState = {...newState, arrowOffsetLeft: 'auto', arrowOffsetRight: 9, pullRight: true}
		}

		this.setState(newState);

	}

	private onClick(id, e): void {
		let item = this.props.items.filter((item) => (item.id === id));
		this.setState({value: item[0]});
		if (this.props.onChange) {
			this.props.onChange(id);
		}

		this.setState({show: false});
	}
}
