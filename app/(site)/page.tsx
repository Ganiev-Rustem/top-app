'use client';
import { Button, Htag, P, Tag, Rating, Rating2 } from '@/components';
import { useState } from 'react';
import type { JSX } from 'react/jsx-runtime';


export default function Home(): JSX.Element {
	const [rating, setRating] =useState<number>(0);

	return (
		<div>
			главная
			<Htag tag='h1'>123</Htag>
			<Button appereance='primary' arrow='right' >+1</Button>
			<Button appereance='ghost' arrow='down' >-1</Button>
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
			<Rating rating={rating} isEditable setRating={setRating}/>
			<Rating2 rating={4} isEditable/>
		</div>
	);
}
