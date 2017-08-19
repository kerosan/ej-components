import './Button.scss';
import * as React from 'react';
export interface IButtonProps {
    text?: string;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
}
export interface IButtonStates {
}
export declare class Button extends React.Component<IButtonProps, IButtonStates> {
    constructor(props: IButtonProps);
    render(): any;
    private onClick();
}
