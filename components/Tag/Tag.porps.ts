import type {  DetailedHTMLProps, ReactNode, HTMLAttributes } from 'react';


export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	size?: 's' | 'm';
	color?: 'red' |'ghost' | 'gray' | 'green' | 'primary';
	href?: string
}