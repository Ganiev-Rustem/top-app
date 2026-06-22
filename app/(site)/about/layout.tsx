import type { JSX } from 'react/jsx-runtime';

export default function AboutLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>):JSX.Element {
	return (
		<div style={{border: '1px solid red'}}>
			{children}
		</div>
	);
}