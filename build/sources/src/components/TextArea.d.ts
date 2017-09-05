import './TextArea.scss';
import * as React from 'react';
export interface ITextAreaProps {
    placeholder?: string;
    required?: boolean;
    value?: string;
    className?: string;
    onChange?: () => void;
}
export interface ITextAreaStates {
    value?: string;
}
export declare class TextArea extends React.Component<ITextAreaProps, ITextAreaStates> {
    private _placeholder;
    constructor(props: ITextAreaProps);
    render(): any;
    private onChange(e);
}
