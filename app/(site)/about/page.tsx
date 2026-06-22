import type { Metadata } from 'next';
import type { JSX } from 'react/jsx-runtime';

export const metadata: Metadata = {
		title: 'About',	
};


export default function About(): JSX.Element {

	return (
		<div >
			About
		</div>
	);
}
