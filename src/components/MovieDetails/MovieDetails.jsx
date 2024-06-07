import { IMG_URL } from 'constants/api';
import styles from './MovieDetails.module.css';
import { IMG_DEFAULT_URL } from 'constants/api';

const MovieDetails = ({
	movieDetail: { backdrop_path, title, overview },
	genres,
	score,
}) => {
	return (
		<div className={styles.contentWrapper}>
			<img
				className={styles.posterImg}
				src={backdrop_path ? IMG_URL + backdrop_path : IMG_DEFAULT_URL}
				alt={title}
			/>
			<div className={styles.content}>
				<p className={styles.contentTitle}>{title}</p>
				<span className={styles.score}>User Score: {score}%</span>
				<span className={styles.overviewTitle}>Overview</span>
				<p className={styles.overviewText}>{overview}</p>
				<span className={styles.genresTitle}>Genres</span>
				<p className={styles.genresText}>{genres}</p>
			</div>
		</div>
	);
};

export default MovieDetails;
