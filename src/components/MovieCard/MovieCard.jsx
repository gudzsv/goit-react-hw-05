import { DEFAULT_IMG_URL } from 'constants/api';
import styles from './MovieCard.module.css';
import { IMG_URL } from 'constants/api';
import { DEFAULT_TITLE } from 'constants/api';
import { DEFAULT_DATE } from 'constants/api';

const MovieCard = ({ data: { poster_path, title, release_date } }) => {
	return (
		<>
			<img
				className={styles.avatarImg}
				src={poster_path ? IMG_URL + poster_path : DEFAULT_IMG_URL}
				alt={'avatar ' + title || DEFAULT_TITLE}
				loading='lazy'
			/>
			<div className={styles.cardContent}>
				<hr className={styles.hr} />
				<p className={styles.cardTitle}>{title || DEFAULT_TITLE}</p>
				<p className={styles.cardDate}>{release_date || DEFAULT_DATE}</p>
			</div>
		</>
	);
};

export default MovieCard;
