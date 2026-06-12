import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import type { JSX } from 'react/jsx-runtime';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
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
		<html lang="ru" className={`${geistSans.variable} ${geistMono.variable}`}>
			<body>{children}</body>
		</html>
	);
}
