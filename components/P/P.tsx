import type { JSX } from 'react/jsx-runtime';
import type { PProps } from './P.porps';
import styles from './P.module.css';
import cn from 'classnames';



export const P = ({children, size='m', className, ...props}:PProps):JSX.Element => {
	return(
		<p 
		className={cn(styles.p, className, {
			[styles.m]: size === 'm',
			[styles.s]: size === 's',
			[styles.l]: size === 'l',
		})}
		{...props}
		>
			{children}
		</p>
	);
};