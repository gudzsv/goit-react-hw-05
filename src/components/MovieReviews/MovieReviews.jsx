import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReview } from 'api/movies';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import MovieReviewCard from 'components/MovieReviewCard/MovieReviewCard';

const MovieReviews = () => {
	const { movieId } = useParams();
	const [reviews, setReviews] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const handleMovieReview = async () => {
			try {
				if (!movieId) return;
				setIsLoading(true);
				setIsError(false);
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

	if (reviews?.length === 0) {
		return <div>Unfortunately, there are no reviews for this movie</div>;
	}

	if (reviews?.length > 0) {
		return <MovieReviewCard reviews={reviews} />;
	}

	return (
		<div>
			{isLoading && reviews === null && <Loader />}
			{isError && <ErrorMessage />}
		</div>
	);
};

export default MovieReviews;
