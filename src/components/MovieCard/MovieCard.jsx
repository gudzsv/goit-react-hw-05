import styles from './MovieCard.module.css';
import { IMG_URL } from 'constants/api';

const MovieCard = ({ data: { poster_path, original_title, release_date } }) => {
	return (
		<div className={styles.cardWrapper}>
			<img
				className={styles.cardImg}
				src={IMG_URL + poster_path}
				alt={original_title}
				loading='lazy'
			/>
			<p className={styles.cardTitle}> {original_title}</p>
			<p className={styles.cardDate}> {release_date}</p>
		</div>
	);
};

export default MovieCard;
