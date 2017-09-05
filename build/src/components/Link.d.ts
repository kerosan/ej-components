import './Link.scss';
import * as React from 'react';
export interface ILinkProps {
    text?: string;
    bold?: boolean;
    href?: string;
    className?: string;
    onClick?: () => void;
}
export interface ILinkStates {
}
export declare class Link extends React.Component<ILinkProps, ILinkStates> {
    private _href;
    constructor(props: ILinkProps);
    render(): any;
    private onClick();
}
