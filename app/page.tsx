import { Button, Htag } from '@/components';
import type { JSX } from 'react/jsx-runtime';


export default function Home(): JSX.Element {


	return (
		<div>
			<Htag tag='h1'>Текст</Htag>
			<Button appereance='primary'>Текст</Button>
			<Button appereance='ghost'>Текст</Button>
		</div>
	);
}
