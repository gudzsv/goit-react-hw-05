import styles from './SearchForm.module.css';

const SearchForm = ({ handleSearchMovie, handleChange, query }) => {
	const onHandleChange = (event) => {
		handleChange(event.target.value);
	};

	const onHandleSubmit = (event) => {
		event.preventDefault();
		handleSearchMovie({ query: event.target.elements.query.value });
	};

	return (
		<form className={styles.searchForm} onSubmit={onHandleSubmit}>
			<input
				className={styles.searchInput}
				onChange={onHandleChange}
				type='search'
				name='query'
				value={query}
				required
			/>
			<button
				className={styles.searchButton}
				type='submit'
				aria-label='search button'
			>
				Search
			</button>
		</form>
	);
};

export default SearchForm;
