import './Title.scss';
import * as React from 'react';
export interface ITitleProps {
    text?: string;
    bold?: boolean;
    small?: boolean;
    grey?: boolean;
    inline?: boolean;
    className?: string;
}
export interface ITitleStates {
}
export declare class Title extends React.Component<ITitleProps, ITitleStates> {
    constructor(props: ITitleProps);
    render(): any;
}
