import type { JSX } from 'react/jsx-runtime';
import type { FooterProps } from './Footer.props';
import cn from 'classnames';
import styles from './Footer.module.css';
import { format } from 'date-fns';


export const Footer = ({className, ...props}: FooterProps): JSX.Element => {

	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<p className={styles.copyright}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</p>
			<a className={styles.agree} href="#">Пользовательское соглашение</a>
			<a className={styles.privacy} href="#">Политика конфиденциальности</a> 
		</footer>
	);
};
