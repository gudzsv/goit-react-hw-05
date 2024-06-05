import { Link, Outlet } from 'react-router-dom';

const MovieDetailsPage = () => {
	return (
		<section>
			MovieDetailsPage
			<h1 className='hidden'></h1>
			<nav>
				<p>Additional information</p>
				<ul>
					<li>
						<Link to='cast'>Cast</Link>
					</li>
					<li>
						<Link to='reviews'>Reviews</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</section>
	);
};

export default MovieDetailsPage;
