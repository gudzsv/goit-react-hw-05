import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchSearchMovie } from 'api/movies';

import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import { Heading } from 'components/Heading/Heading';
import NoFoundMessage from 'components/NoFoundMessage/NoFoundMessage';

const MoviesPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const queryValue = searchParams.get('query') ?? '';
	const [search, setSearch] = useState(queryValue);
	const [movies, setMovies] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		if (!queryValue) return;
		const handleSearchMovie1 = async () => {
			setIsLoading(true);
			setIsError(false);
			setMovies(null);
			setSearch('');

			try {
				const { results } = await fetchSearchMovie(queryValue);
				setMovies(results);
			} catch (error) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		};

		handleSearchMovie1();
	}, [queryValue]);

	const handleChange = (searchValue) => {
		setSearch(searchValue);
	};

	const handleSearchMovie = (query) => {
		setSearchParams(query);
	};

	return (
		<section className='container'>
			<Heading title={'Searching movies'} />

			<SearchForm
				handleChange={handleChange}
				handleSearchMovie={handleSearchMovie}
				query={search}
			/>

			{movies && <MovieList data={movies} />}

			{movies && movies.length === 0 && (
				<NoFoundMessage text={'Movies with search criteria not found'} />
			)}

			{isLoading && <Loader />}

			{isError && <ErrorMessage />}
		</section>
	);
};

export default MoviesPage;
