import type { JSX } from 'react/jsx-runtime';

export default function AboutTemplate({
	children,
}: Readonly<{
	children: React.ReactNode;
}>):JSX.Element {
	return (
		<div style={{border: '1px solid blue'}}>
			{children}
		</div>
	);
}