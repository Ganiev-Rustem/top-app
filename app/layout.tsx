import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import type { JSX } from 'react/jsx-runtime';

const notoSans = Noto_Sans({
	subsets: ['latin', 'cyrillic'],
});



export const metadata: Metadata = {
		title: 'Проект top app',
		description: 'Создано с помощью next js',	
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>):JSX.Element {
	return (
		<html lang="ru" className={notoSans.className}>
			<body>{children}</body>
		</html>
	);
}
