import type { JSX } from 'react/jsx-runtime';
import type { TagProps } from './Tag.porps';
import styles from './Tag.module.css';
import cn from 'classnames';



export const Tag = ({children, size='m', className, color='ghost', href, ...props}:TagProps):JSX.Element => {
	return(
		<div 
			className={cn(styles.tag, className, {
				[styles.m]: size === 'm',
				[styles.s]: size === 's',
				[styles.ghost]: color === 'ghost',
				[styles.red]: color === 'red',
				[styles.gray]: color === 'gray',
				[styles.green]: color === 'green',
				[styles.primary]: color === 'primary',
			})}
			{...props}
			>{
				href
					? <a href={href} {...props}>{children}</a>
					: <>{children}</>
			}

		</div>
	);
};