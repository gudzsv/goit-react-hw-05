import { fetchSearchMovie } from 'api/movies';
import MovieList from 'components/MovieList/MovieList';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
	const [movies, setMovies] = useState(null);
	const [page, setPage] = useState(1);

	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get('query') || '';

	const handleChange = (event) => {
		setSearchParams({ query: event.target.value });
	};
	const handleSearchMovie = async (e) => {
		e.preventDefault();
		const { results } = await fetchSearchMovie(query, page);
		setMovies(results);
	};

	return (
		<section>
			<h1>Searching movies</h1>
			<form onSubmit={handleSearchMovie}>
				<input
					className=''
					onChange={handleChange}
					type='search'
					value={query}
				/>
				<button
					className=''
					// onClick={handleSearchMovie}
					type='submit'
					aria-label='search button'
				>
					Search
				</button>
			</form>
			{movies && <MovieList data={movies} />}
		</section>
	);
};

export default MoviesPage;
