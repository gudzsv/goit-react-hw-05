import MovieCast from 'components/MovieCast/MovieCast';
import MovieReviews from 'components/MovieReviews/MovieReviews';
import HomePage from 'pages/HomePage/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => (
	<Routes>
		<Route path='/' element={<HomePage />} />
		<Route path='/movies' element={<MoviesPage />} />

		<Route path='/movies/:movieId' element={<MovieDetailsPage />}>
			<Route path='/movies/:movieId/cast' element={<MovieCast />} />
			<Route path='/movies/:movieId/reviews' element={<MovieReviews />} />
		</Route>

		<Route path='*' element={<NotFoundPage />} />
	</Routes>
);

export default AppRoutes;
