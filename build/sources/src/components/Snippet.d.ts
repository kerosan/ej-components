import './Snippet.scss';
import * as React from 'react';
export interface ISnippetProps {
    text?: string;
    bold?: boolean;
    grey?: boolean;
    className?: string;
}
export interface ISnippetStates {
}
export declare class Snippet extends React.Component<ISnippetProps, ISnippetStates> {
    constructor(props: ISnippetProps);
    render(): any;
}
