import { IMG_URL } from 'constants/api';
import { DEFAULT_IMG_URL } from 'constants/api';

import styles from './CastCard.module.css';

const CastCard = ({ data: { profile_path, name, character } }) => {
	return (
		<>
			<img
				className={styles.avatarImg}
				src={profile_path ? IMG_URL + profile_path : DEFAULT_IMG_URL}
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

export default CastCard;
