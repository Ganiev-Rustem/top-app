import type { JSX } from 'react/jsx-runtime';
import type { SidebarProps } from './Sidebar.props';


export const Sidebar = ({children, ...props}: SidebarProps): JSX.Element => {
	return (
		<div {...props}>
			Sidebar
			{children}
		</div>
	);
};
