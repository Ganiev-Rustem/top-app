import type { JSX } from 'react/jsx-runtime';
import type { ButtonProps } from './Button.porps';
import styles from './Button.module.css';
import cn from 'classnames';



export const Button = ({children, appereance='primary', className, ...props}:ButtonProps):JSX.Element => {
	return(
		<button 
			className={cn(styles.button, className, {
				[styles.primary]: appereance === 'primary',
				[styles.ghost]: appereance === 'ghost',
			})} 
			{...props}
		>
			{children}
		</button>
	);
};