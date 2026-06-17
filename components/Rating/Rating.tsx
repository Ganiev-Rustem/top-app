'use client';
import type { JSX } from 'react/jsx-runtime';
import type { RatingProps } from './Rating.porps';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from '../../public/star.svg';
import type { KeyboardEvent } from 'react';
import { useEffect, useState } from 'react';




export const Rating = ({ isEditable=false, rating, setRating, ...props}:RatingProps):JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(()=> {
		// eslint-disable-next-line react-hooks/immutability
		constructRating(rating);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[rating]);


	const constructRating = (curentRating: number) => {
		const updatedArray = ratingArray.map((_, i:number) => {
			return (
				<span 
					className={cn(styles.star, {
						[styles.filled]: i < curentRating,
						[styles.editable]: isEditable
					})} 
					key={i}
					onMouseEnter={()=> changeDisplay(i + 1)}
					onMouseLeave={()=> changeDisplay(rating)}
					onClick={()=> onclick(i + 1)}
				>
					<StarIcon 
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e:KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
				
				/>
				</span>


			);
			
		});
		setRatingArray(updatedArray);
	};

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return;
		}
 		constructRating(i);
	};
	const onclick = (i: number) => {
		if (!isEditable || !setRating) {
			return;
		}
 		setRating(i);
	};
	const handleSpace = (i: number, e:KeyboardEvent<SVGElement>) => {
 		if (e.code != 'Space' || !setRating) {
			return;
		}
		setRating(i);

	};

	return(
		<div {...props}>
			{ratingArray.map((r,i) => (
				<span key={i}>{r}</span>
			))}
		</div>
	);
};