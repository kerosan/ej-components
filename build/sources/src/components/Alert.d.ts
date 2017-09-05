import './Alert.scss';
import * as React from 'react';
export interface IAlertProps {
    className?: string;
    bsStyle?: "success" | "warning" | "danger" | "info";
    onDismiss?: Function;
    onClick?: () => void;
}
export interface IAlertStates {
}
export declare class Alert extends React.Component<IAlertProps, IAlertStates> {
    constructor(props: IAlertProps);
    render(): any;
    private onClick();
}
