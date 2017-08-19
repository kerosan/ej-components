import './Checkbox.scss';
import * as React from 'react';
export interface ICheckboxProps {
    name?: string;
    label?: string | JSX.Element;
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    inline?: boolean;
    clickCapture?: boolean;
    onChange?: (checked: boolean, name?: string) => void;
}
export interface ICheckboxState {
    checked?: boolean;
}
export declare class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {
    constructor(props: ICheckboxProps);
    protected getInitState(): ICheckboxState;
    componentWillUpdate(nextProps: ICheckboxProps, nextState: ICheckboxState): void;
    componentWillReceiveProps(nextProps: ICheckboxProps): void;
    render(): JSX.Element;
    protected onClick(e: React.MouseEvent<HTMLLabelElement>): void;
}
