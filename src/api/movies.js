import axios from 'axios';

const ACCESS_KEY =
	'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmRkOTliNzdjODhmOTE3ZThlNjFiOTFmNjdmMDdhYyIsInN1YiI6IjY2NWY4MDk2Y2ZkNDlkMDE5ZTY4ZDZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H-s8sIml0Y5eHAm6CGhJNyXuS8zi94nHpJtlmrDuHa8';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers = {
	Authorization: `Bearer ${ACCESS_KEY}`,
	accept: 'application/json',
};
axios.defaults.params = {
	language: 'en-US',
};

const fetchMovies = async (url, query, page) => {
	const response = await axios.get(url, {
		params: {
			query,
			page,
		},
	});

	return response.data;
};

export default fetchMovies;
