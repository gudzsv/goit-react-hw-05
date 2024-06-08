import styles from './NoFoundMessage.module.css';

const NoFoundMessage = ({ text }) => {
	return <div className={styles.noResult}>{text}</div>;
};

export default NoFoundMessage;
