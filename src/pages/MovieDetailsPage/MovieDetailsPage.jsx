import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import styles from './MovieDetailsPage.module.css';

import { fetchMovieById } from 'api/movies';
import { DEFAULT_MOVIE_LINK } from 'constants/api';

import MovieDetails from 'components/MovieDetails/MovieDetails';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import SubNavigation from 'components/SubNavigation/SubNavigation';
import { Heading } from 'components/Heading/Heading';

const MovieDetailsPage = () => {
	const { movieId } = useParams();
	const [movieDetail, setMovieDetail] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const location = useLocation();
	const refLocation = useRef(location.state);

	useEffect(() => {
		if (!movieId) return;
		const handleMovieById = async () => {
			setIsLoading(true);
			setIsError(false);

			try {
				const data = await fetchMovieById(movieId);
				setMovieDetail(data);
			} catch (error) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		};
		handleMovieById();
	}, [movieId]);

	const score = useMemo(() => {
		if (!movieDetail.vote_average || !movieDetail.vote_count) return 0;
		return ((movieDetail.vote_average / movieDetail.vote_count) * 100).toFixed(
			0
		);
	}, [movieDetail.vote_average, movieDetail.vote_count]);

	const genres = useMemo(() => {
		if (!movieDetail.genres) return;
		const genresOfMovie =
			movieDetail.genres.length > 0 &&
			movieDetail.genres.map((genre) => genre.name).join(' ');
		return genresOfMovie;
	}, [movieDetail.genres]);

	return (
		<section className='container'>
			<Heading title={'Detail info'} />

			<Link to={refLocation.current || DEFAULT_MOVIE_LINK}>
				<button
					className={styles.goBackBtn}
					type='button'
					aria-label='go to home page'
				>
					GoBack
				</button>
			</Link>

			{movieId && !isLoading && (
				<MovieDetails movieDetail={movieDetail} score={score} genres={genres} />
			)}

			{isLoading && <Loader />}

			{isError && <ErrorMessage />}

			<h2 className={styles.additionalTitle}>Additional information</h2>

			<SubNavigation />

			<Outlet />
		</section>
	);
};

export default MovieDetailsPage;
