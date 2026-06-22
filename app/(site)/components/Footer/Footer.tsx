import type { JSX } from 'react/jsx-runtime';
import type { FooterProps } from './Footer.props';


export const Footer = ({children, ...props}: FooterProps): JSX.Element => {

	return (
		<div {...props}>
			Footer
			{children}
		</div>
	);
};
