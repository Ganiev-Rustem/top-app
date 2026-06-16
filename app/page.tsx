import { Button, Htag, P, Tag } from '@/components';
import type { JSX } from 'react/jsx-runtime';


export default function Home(): JSX.Element {


	return (
		<div>
			<Htag tag='h1'>Текст</Htag>
			<Button appereance='primary' arrow='right'>Текст</Button>
			<Button appereance='ghost' arrow='down'>Текст</Button>
			<P size='l'>Текст1</P>
			<P size='m'>Текст2</P>
			<P size='s'>Текст3</P>
			<P>Текст3</P>
			<Tag size='s'>Small</Tag>
			<Tag size='m'>Medium</Tag>
			<Tag color='ghost'>ghost</Tag>
			<Tag color='gray'>gray</Tag>
			<Tag color='primary'>primary</Tag>
			<Tag color='red'>red</Tag>
			<Tag color='green'>green</Tag>
		</div>
	);
}
