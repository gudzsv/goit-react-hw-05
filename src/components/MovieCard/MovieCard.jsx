import { IMG_DEFAULT_URL } from 'constants/api';
import styles from './MovieCard.module.css';
import { IMG_URL } from 'constants/api';

const MovieCard = ({ data: { poster_path, title, release_date } }) => {
	return (
		<div className={styles.cardWrapper}>
			<img
				className={styles.cardImg}
				src={poster_path ? IMG_URL + poster_path : IMG_DEFAULT_URL}
				alt={title}
				loading='lazy'
			/>
			<p className={styles.cardTitle}> {title}</p>
			<p className={styles.cardDate}> {release_date}</p>
		</div>
	);
};

export default MovieCard;
