import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Reviews.module.css'
import { fetchMovieReview } from 'api/movies';

import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import ReviewCard from 'components/ReviewCard/ReviewCard';
import NoFoundMessage from 'components/NoFoundMessage/NoFoundMessage';

const Reviews = () => {
	const { movieId } = useParams();
	const [reviews, setReviews] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const handleMovieReview = async () => {
			if (!movieId) return;

			setIsLoading(true);
			setIsError(false);

			try {
				const { results } = await fetchMovieReview(movieId);
				setReviews(results);
			} catch (error) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		};
		handleMovieReview();
	}, [movieId]);

	return (
		<div className={styles.content}>
			{reviews && reviews.length > 0 && <ReviewCard reviews={reviews} />}
			{reviews && reviews.length === 0 && (
				<NoFoundMessage
					text={'Unfortunately, there are no reviews for this movie'}
				/>
			)}
			{isLoading && reviews === null && <Loader />}
			{isError && <ErrorMessage />}
		</div>
	);
};

export default Reviews;
