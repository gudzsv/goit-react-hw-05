import { Link } from 'react-router-dom';
import styles from './MovieList.module.css';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieList = ({ data }) => {
	return (
		<ul className={styles.cardList}>
			{data.map(({ id, ...rest }) => (
				<Link key={id} to={'/movies/' + id}>
					<li className={styles.cardItem}>
						<MovieCard data={rest} />
					</li>{' '}
				</Link>
			))}
		</ul>
	);
};

export default MovieList;
