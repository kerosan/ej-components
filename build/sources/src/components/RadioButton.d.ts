import './RadioButton.scss';
import * as React from 'react';
import { Checkbox, ICheckboxProps, ICheckboxState } from './Checkbox';
export interface IRadioButtonProps extends ICheckboxProps {
}
export interface IRadioButtonState extends ICheckboxState {
    checked?: boolean;
}
export declare class RadioButton extends Checkbox {
    constructor(props: IRadioButtonProps);
    protected getInitState(): IRadioButtonState;
    componentWillUpdate(nextProps: IRadioButtonProps, nextState: IRadioButtonState): void;
    componentWillReceiveProps(nextProps: IRadioButtonProps): void;
    render(): JSX.Element;
    protected onClick(e: React.MouseEvent<HTMLLabelElement>): void;
}
