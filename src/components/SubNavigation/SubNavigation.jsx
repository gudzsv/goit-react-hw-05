import { NavLink } from 'react-router-dom';
import styles from './SubNavigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
	return clsx(styles.link, isActive && styles.active);
};

const SubNavigation = () => {
	return (
		<nav className={styles.nav}>
			<NavLink to='cast' className={buildLinkClass}>
				Cast
			</NavLink>
			<NavLink to='reviews' className={buildLinkClass}>
				Reviews
			</NavLink>
		</nav>
	);
};

export default SubNavigation;
