import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
	return clsx(styles.link, isActive && styles.active);
};

const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<NavLink to='/' className={buildLinkClass}>
				Home
			</NavLink>
			<NavLink to='/movies' className={buildLinkClass}>
				Movies
			</NavLink>
		</nav>
	);
};

export default Navigation;
