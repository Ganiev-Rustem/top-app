'use client';
import type { JSX } from 'react/jsx-runtime';
import type { Rating2Props } from './Rating2.porps';
import styles from './Rating2.module.css';
import cn from 'classnames';
import StarIcon from '../../public/star.svg';
import { useState } from 'react';




export const Rating2 = ({ isEditable=false, rating, ...props}:Rating2Props):JSX.Element => {
	const [currentRating, setCurrentRating] = useState(rating);
	const [hoverRating, setHoverRating] = useState(0);

	return (
		<div className={styles.wrapper} {...props}>
			{new Array(5).fill(null).map((_, i) => {
				const starNumber = i + 1;
				return (
					<span 
						className={styles.star_span}
						key={i}
						onMouseEnter={() => {
							if (isEditable) {
								setHoverRating(starNumber);
							}
						}}
						onMouseLeave={() => {
							if (isEditable) {
								setHoverRating(0);
							}
						}}
						onClick={() => {
							if (isEditable) {
								setCurrentRating(starNumber);
							}
						}}
						>
						<StarIcon
							className={cn(styles.star, {
								[styles.filled]:
									hoverRating
										? starNumber <= hoverRating
										: starNumber <= currentRating,
								[styles.editable]: isEditable
							})}
						/>
					</span>
				);
			})}
		</div>
	);
};