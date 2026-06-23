import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import type { JSX } from 'react/jsx-runtime';
import styles from './page.module.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Sidebar } from './components/Sidebar/Sidebar';



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
			<body>
				<div className={styles.wrapper}>
				<Header className={styles.header}/>
				<Sidebar className={styles.sidebar}/>
				<div className={styles.body}>
					{children}
				</div>
				<Footer className={styles.footer}/>
				</div>
			</body>
		</html>
	);
}
 