import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import Loader from 'components/Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
	import('pages/MovieDetailsPage/MovieDetailsPage')
);
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const AppRoutes = () => (
	<Suspense fallback={<Loader />}>
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/movies' element={<MoviesPage />} />

			<Route path='/movies/:movieId' element={<MovieDetailsPage />}>
				<Route path='cast' element={<Cast />} />
				<Route path='reviews' element={<Reviews />} />
			</Route>

			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	</Suspense>
);

export default AppRoutes;
