import { useEffect, useState } from 'react';

import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import MovieList from 'components/MovieList/MovieList';

import styles from './HomePage.module.css';
import { fetchTrendMovies } from 'api/movies';

const HomePage = () => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const handleTrendMovies = async () => {
			try {
				setIsLoading(true);
				setIsError(false);
				const { results } = await fetchTrendMovies();

				setMovies(results);
			} catch (error) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		};
		handleTrendMovies();
	}, []);

	return (
		<section className='container'>
			<h1 className={styles.title}>Trending today</h1>
			{movies.length > 0 && !isLoading && <MovieList data={movies} />}
			{isLoading && <Loader />}
			{isError && <ErrorMessage />}
		</section>
	);
};

export default HomePage;
