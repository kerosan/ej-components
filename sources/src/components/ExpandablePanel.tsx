import './ExpandablePanel.scss';

import * as React from 'react';
import {Panel, Glyphicon} from 'react-bootstrap';

export interface IExpandablePanelProps {
	header?: JSX.Element;
	defaultExpanded?: boolean;
	onExpandToggle?: (expanded: boolean) => void;
}

export interface IExpandablePanelState {
	expanded?: boolean;
}

export class ExpandablePanel extends React.Component<IExpandablePanelProps, IExpandablePanelState> {


	constructor(props: IExpandablePanelProps) {
		super(props);

		this.state = this.getInitState();

		this.onClick = this.onClick.bind(this);
	}

	public getInitState(): IExpandablePanelState {
		return { expanded: this.props.defaultExpanded };
	}

	public render(): JSX.Element {
		let glyph: string = this.state.expanded ? 'circle-arrow-up' : 'circle-arrow-down',
			panelHeader: JSX.Element = (
				<div className='ej-components__expandable-panel-header' >
					<div className='panel-header' onClick={this.onClick} >
						{
							this.props.header ? this.props.header : <span />
						}
						<Glyphicon glyph={glyph}
								   className="ej-components__expandable-panel-header-icon" />
					</div>
				</div>
			);

		return (
			<div className='ej-components__expandable-panel'>
				<Panel collapsible={true}
					   defaultExpanded={this.props.defaultExpanded}
					   expanded={this.state.expanded}
					   header={panelHeader}>
					{this.props.children}
				</Panel>
			</div>
		);
	}

	private onClick(): void {
		if (this.props.onExpandToggle) {
			this.props.onExpandToggle(!this.state.expanded);
		}

		this.setState({
			...this.state,
			expanded: !this.state.expanded,
		});
	}
}
