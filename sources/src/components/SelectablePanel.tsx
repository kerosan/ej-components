import './SelectablePanel.scss';

import * as React from 'react';

export interface ISelectablePanelProps {
	name?: string;
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	clickCapture?: boolean;

	onChange?: (checked: boolean, name?: string) => void;
}

export interface ISelectablePanelState {
	checked?: boolean;
}

export class SelectablePanel extends React.Component<ISelectablePanelProps, ISelectablePanelState> {

	constructor(props: ISelectablePanelProps) {
		super(props);

		this.state = this.getInitState();

		this.onClick = this.onClick.bind(this);
	}

	protected getInitState(): ISelectablePanelState {
		return {
			checked: !!this.props.checked,
		};
	}

	public componentWillUpdate(nextProps: ISelectablePanelProps, nextState: ISelectablePanelState): void {
		if (this.props.checked !== nextProps.checked) {
			nextState.checked = nextProps.checked;
		}
	}

	public componentWillReceiveProps(nextProps: ISelectablePanelProps): void {
		if (nextProps.checked !== undefined && this.state.checked !== nextProps.checked) {
			this.setState({
				...this.state,
				checked: nextProps.checked,
			});
		}
	}

	public render(): JSX.Element {
		let spanClassNames: string[] = ['ej-components__selectable-panel'],
			labelClassNames: string[] = [],
			spanElement: JSX.Element;

		if (this.props.className) {
			spanClassNames.push(this.props.className);
		}

		if (this.props.disabled) {
			labelClassNames.push('disabled');
		}

		if (this.state.checked) {
			labelClassNames.push('checked');
			spanElement = <span className='glyphicon glyphicon-ok ej-components__selectable-panel-icon__checked' />;
		} else {
			spanElement = <span className='ej-components__selectable-panel-icon__unchecked' />;
			let index = labelClassNames.indexOf('checked');
			if (index > -1) {
				labelClassNames.splice(index, 1);
			}
		}

		return (
			<div className={spanClassNames.join(' ')} >
				<label className={labelClassNames.join(' ')} onClick={this.onClick}>
					{spanElement}
					<div className='ej-components__selectable-panel-label'>{this.props.children}</div>
				</label>
			</div>
		);
	}

	protected onClick(e: React.MouseEvent<HTMLLabelElement>): void {
		if (this.props.clickCapture) {
			e.stopPropagation();
		}

		if (this.props.disabled) {
			return;
		}

		if (this.props.onChange) {
			this.props.onChange(!this.state.checked, this.props.name);
		}

		this.setState({
			...this.state,
			checked: !this.state.checked,
		});
	}
}
