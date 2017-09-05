import './CheckPanel.scss';
import * as React from 'react';
export interface ICheckPanelProps {
    name?: string;
    label?: string | JSX.Element;
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    clickCapture?: boolean;
    onChange?: (checked: boolean, name?: string) => void;
}
export interface ICheckPanelState {
    checked?: boolean;
}
export declare class CheckPanel extends React.Component<ICheckPanelProps, ICheckPanelState> {
    constructor(props: ICheckPanelProps);
    protected getInitState(): ICheckPanelState;
    componentWillUpdate(nextProps: ICheckPanelProps, nextState: ICheckPanelState): void;
    componentWillReceiveProps(nextProps: ICheckPanelProps): void;
    render(): JSX.Element;
    protected onClick(e: React.MouseEvent<HTMLLabelElement>): void;
}
