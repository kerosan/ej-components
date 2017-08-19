import './Userpic.scss';
import * as React from 'react';
import { LinkTarget, UserpicSize } from '../types/index';
export { LinkTarget, UserpicSize };
export interface IUserpicProps {
    alt?: string;
    size?: UserpicSize;
    userId?: number;
    className?: string;
    href?: string;
    src?: string;
    target?: LinkTarget;
    onClick?: (userId?: number) => void;
}
export interface IUserpicState {
}
export declare class Userpic extends React.Component<IUserpicProps, IUserpicState> {
    constructor(props: any);
    render(): JSX.Element;
    private onClick();
}
