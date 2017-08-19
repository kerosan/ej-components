import './ExpandablePanel.scss';
import * as React from 'react';
export interface IExpandablePanelProps {
    header?: JSX.Element;
    defaultExpanded?: boolean;
    onExpandToggle?: (expanded: boolean) => void;
}
export interface IExpandablePanelState {
    expanded?: boolean;
}
export declare class ExpandablePanel extends React.Component<IExpandablePanelProps, IExpandablePanelState> {
    constructor(props: IExpandablePanelProps);
    getInitState(): IExpandablePanelState;
    render(): JSX.Element;
    private onClick();
}
