import { IMG_URL } from 'constants/api';
import { IMG_DEFAULT_URL } from 'constants/api';

import styles from './MovieCastCard.module.css';

const MovieCastCard = ({ data: { profile_path, name, character } }) => {
	return (
		<>
			<img
				className={styles.avatarImg}
				src={profile_path ? IMG_URL + profile_path : IMG_DEFAULT_URL}
				alt={'avatar ' + name}
				loading='lazy'
			/>

			<div className={styles.cardContent}>
				<hr className={styles.hr} />
				<p className={styles.cardTitle}>{name}</p>
				<p className={styles.cardDescription}>{character}</p>
			</div>
		</>
	);
};

export default MovieCastCard;
