import './BreadCrumbsPanel.scss';

import * as React from 'react';
import {ILink, ILinks} from '../types';
import {Link} from './Link';
import {Text} from './Text';
import {Breadcrumb, BreadcrumbItem} from 'react-bootstrap';


export interface IBreadCrumbsPanelProps {
	items: ILinks;
	onClick?: (id: number) => void;
	currentId?: number;
	currentHref?: string;
}

export interface IBreadCrumbsPanelStates {
}

export class BreadCrumbsPanel extends React.Component<IBreadCrumbsPanelProps, IBreadCrumbsPanelStates> {

	constructor(props: IBreadCrumbsPanelProps) {
		super(props);
	}

	public render(): JSX.Element {
		if (!this.props.items) {
			throw new Error('Props items is required!');
		}
		let classNames: string[] = ['ej-components__breadcrumbs'];
		let items = this.props.items.map((item: ILink, key: number, items: ILinks) => {
			let textNode: JSX.Element = <span>{item.title}</span>,
				selectedHref: string = this.props.currentHref || document.location.href;
			if (Number.isInteger(this.props.currentId) && this.props.currentId === item.id) {
				textNode = <u>{textNode}</u>;
			} else if (!Number.isInteger(this.props.currentId) && selectedHref === item.href) {
				textNode = <u>{textNode}</u>;
			}
			if (items.length !== key + 1) {
				if (item.id === undefined && item.href === undefined) {
					throw new Error('BreadCrumbsPanel: props.item "id" and "href" is undefined! Must be defined one of this at last.');
				}
				if (item.id && this.props.onClick === undefined) {
					throw new Error('BreadCrumbsPanel: props "onClick" is undefined! Handler must be defined!');
				}

				return (
					<span key={key} className='ej-components__breadcrumb-item' onClick={this.onClick.bind(this, item)}>
						<Link href={item.href}>{textNode}</Link>
						<span className='ej-components__breadcrumbs-delimiter'>/</span>
					</span>
				);
			} else {
				return (
					<Text key={key} className='ej-components__breadcrumb-item'>
						{textNode}
					</Text>
				);
			}
		});

		return (
			<div className={classNames.join(' ')}>
				{items}
			</div>

		);
	}

	private onClick(item, e): void {
		if (undefined === item.id) {
			return;
		} else {
			e.preventDefault();
		}
		if (this.props.onClick) {
			this.props.onClick(item.id);
		}
	}
}
