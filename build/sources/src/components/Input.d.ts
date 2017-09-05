import './Input.scss';
import * as React from 'react';
export interface IInputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    className?: string;
    message?: string;
    error?: boolean;
    warning?: boolean;
    onChange?: () => void;
}
export interface IInputStates {
    value?: string;
}
export declare class Input extends React.Component<IInputProps, IInputStates> {
    private _type;
    private _placeholder;
    constructor(props: IInputProps);
    render(): any;
    private onChange(e);
}
