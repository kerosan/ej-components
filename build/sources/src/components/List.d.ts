import './List.scss';
import * as React from 'react';
import { IListItemProps } from './ListItem';
export interface IListProps {
    items?: IListItemProps[];
    className?: string;
    emptyTitle?: string;
}
export interface IListStates {
}
export declare class List extends React.Component<IListProps, IListStates> {
    constructor(props: IListProps);
    render(): any;
}
