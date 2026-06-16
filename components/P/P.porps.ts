import type {  DetailedHTMLProps, ReactNode, HTMLAttributes } from 'react';


export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	children: ReactNode;
	size?: 's' | 'm' | 'l' ;
	
	
}