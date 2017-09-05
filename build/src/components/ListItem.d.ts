import './ListItem.scss';
import * as React from 'react';
export interface IListItemProps {
    text?: string | JSX.Element;
    selected?: boolean;
    empty?: boolean;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
}
export interface IListItemStates {
}
export declare class ListItem extends React.Component<IListItemProps, IListItemStates> {
    constructor(props: IListItemProps);
    render(): any;
    private onClick();
}
