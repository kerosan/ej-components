import './FooterPanel.scss';
import * as React from 'react';
import { Text } from './Text';
import { Link } from './Link';
import { ILink, ILinks } from '../types';
import { DropdownList } from 'react-widgets';

export interface IFooterPanelProps {
	className?: string;
	links?: ILinks;
	switcher?: JSX.Element;
}

export interface IFooterPanelStates {
}

export class FooterPanel extends React.Component<IFooterPanelProps, IFooterPanelStates> {

	constructor(props: IFooterPanelProps) {
		super(props);
	}

	public render(): any {
		let classNames: string[] = ['ej-footer-panel'];

		if (this.props.className) {
			classNames.push(this.props.className);
		}
		let menu = [];
		let links = this.props.links || [
			{href: '/about', title: 'О проекте'},
			{href: '/privacy', title: 'Конфиденциальность'},
			{href: '/terms', title: 'Условия использования'}
		];
		menu = links.map((link: ILink, key) => {
			if (link.href === document.location.href) {
				return <li className='active' key={key}><Link href={link.href}>{link.title}</Link></li>;
			}
			return <li key={key}><Link type='primary' href={link.href}>{link.title}</Link></li>;
		});
		let langSwitcher = this.props.switcher || <DropdownList
            dropUp
            value={{title: 'Русский'}}
            textField='title'
            data={[{title: 'Русский'}, {title: 'Украинский'}]}
            onChange={(e) => {
				console.log(e)
			}}/>;
		return (
			<div className={classNames.join(' ')}>
				<Text>&copy; EJournal 2016</Text>
				<ul className='list-inline'>
					{menu}
				</ul>
				{langSwitcher}
			</div>
		);
	}
}
