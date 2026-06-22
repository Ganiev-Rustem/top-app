import type { JSX } from 'react/jsx-runtime';
import type { HeaderProps } from './Header.props';


export const Header = ({children, ...props}: HeaderProps): JSX.Element => {
	return (
		<div {...props}>
			Header
			{children}
		</div>
	);
};
