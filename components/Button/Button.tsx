import type { JSX } from 'react/jsx-runtime';
import type { ButtonProps } from './Button.porps';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from '../../public/arrow.svg';



export const Button = ({children, appereance='primary', className, arrow='none', ...props}:ButtonProps):JSX.Element => {
	return(
		<button 
			className={cn(styles.button, className, {
				[styles.primary]: appereance === 'primary',
				[styles.ghost]: appereance === 'ghost',
			})} 
			{...props}
		>
			{children}
			{arrow !== 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow === 'down',
				[styles.right]: arrow === 'right'
			})}> <ArrowIcon/> </span>}
		</button>
	);
};