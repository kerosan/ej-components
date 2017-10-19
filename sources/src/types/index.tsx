export interface ILink {
	id?: number;
	href?: string;
	title: string;
}

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';
export type UserpicSize = '40x40' | '50x50' | '80x80' | '150x150' | '200x200';
export type ILinks = ILink[];

