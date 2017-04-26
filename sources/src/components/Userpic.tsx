import './Userpic.scss';

import * as React from 'react';

import {LinkTarget, UserpicSize} from '../types/index';

export {LinkTarget, UserpicSize};

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

export class Userpic extends React.Component<IUserpicProps, IUserpicState> {

	constructor(props: any) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	public render(): JSX.Element {
		let href: string = this.props.href || 'javascript:void(0);',
			target: string = this.props.target || '_blank',
			alt: string = this.props.alt || '',
			src: string = this.props.src || '/chat/static/userpic/photo' + this.props.size + '.png',
			classNames: string[] = [
				'ej-components__userpic-' + this.props.size,
			];

		if (!this.props.size) {
			throw new Error('The "size" is mandatory property!');
		}

		if (this.props.className) {
			classNames.push(this.props.className);
		}
		
		return (
			<a href={href} target={target} className={classNames.join(' ')} onClick={this.onClick}>
				<img alt={alt} src={src} />
			</a>
		);
	}

	private onClick(): void {
		if (this.props.onClick) {
			this.props.onClick(this.props.userId);
		}
	}
}
