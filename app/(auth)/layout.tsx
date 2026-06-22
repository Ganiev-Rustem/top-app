import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import type { JSX } from 'react/jsx-runtime';
import '../(site)/globals.css';


const notoSans = Noto_Sans({
	subsets: ['latin', 'cyrillic'],
});



export const metadata: Metadata = {
		title: 'Авторизация',
			
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>):JSX.Element {
	return (
		<html lang="ru" className={notoSans.className}>
			<body>
				<div>Авторизация</div>
				{children}
				</body>
		</html>
	);
}
 
