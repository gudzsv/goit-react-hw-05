import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
	return (
		<section className='container'>
			<div className={styles.contentWrapper}>
				<h1 className={styles.title}>404</h1>
				<p className={styles.text}>
					Page not found
					<span className={styles.link}>
						<Link to='/'>Go To Home Page</Link>
					</span>
				</p>
			</div>
		</section>
	);
};

export default NotFoundPage;
