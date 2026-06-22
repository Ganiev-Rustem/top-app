import type {  DetailedHTMLProps, HTMLAttributes } from 'react';


export interface Rating2Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isEditable?: boolean;	 
	rating: number;
}