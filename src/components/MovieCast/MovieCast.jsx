import { fetchMovieCredits } from 'api/movies';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Loader from 'components/Loader/Loader';
import MovieCastCard from 'components/MovieCastCard/MovieCastCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieCast.module.css';

const MovieCast = () => {
	const { movieId } = useParams();
	const [cast, setCast] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const handleMovieCredits = async () => {
			try {
				if (!movieId) return;
				setIsLoading(true);
				setIsError(false);
				const { cast } = await fetchMovieCredits(movieId);
				setCast(cast);
			} catch (error) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		};
		handleMovieCredits();
	}, [movieId]);
	return (
		<ul className={styles.cardList}>
			{cast &&
				!isLoading &&
				cast.map(({ id, ...rest }) => {
					return (
						<li className={styles.cardItem} key={id}>
							<MovieCastCard data={rest} />
						</li>
					);
				})}
			{isLoading && <Loader />}
			{isError && <ErrorMessage />}
		</ul>
	);
};

export default MovieCast;
