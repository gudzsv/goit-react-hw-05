import fetchMovies from 'api/movies';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';

import styles from './HomePage.module.css';

const HomePage = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const handleTrendMovies = async () => {
			try {
				const { results } = await fetchMovies('/trending/movie/day?');

				setMovies(results);
			} catch (error) {
				console.log(error);
			}
		};
		handleTrendMovies();
	}, []);

	return (
		<section className='container'>
			<h1 className={styles.title}>Trending today</h1>
			{movies.length > 0 && <MovieList data={movies} />}
		</section>
	);
};

export default HomePage;
