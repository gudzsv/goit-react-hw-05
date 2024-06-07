import axios from 'axios';
import { API_PATH } from 'constants/api';

const ACCESS_KEY =
	'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmRkOTliNzdjODhmOTE3ZThlNjFiOTFmNjdmMDdhYyIsInN1YiI6IjY2NWY4MDk2Y2ZkNDlkMDE5ZTY4ZDZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H-s8sIml0Y5eHAm6CGhJNyXuS8zi94nHpJtlmrDuHa8';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers = {
	Authorization: `Bearer ${ACCESS_KEY}`,
	accept: 'application/json',
};
// axios.defaults.params = {
// 	language: 'en-US',
// };

export const fetchTrendMovies = async () => {
	const response = await axios.get(API_PATH.trend, {});
	return response.data;
};

export const fetchSearchMovie = async (query, page) => {
	const response = await axios.get(API_PATH.search, {
		params: {
			query,
			page,
		},
	});

	return response.data;
};

export const fetchMovieById = async (id) => {
	const response = await axios.get(API_PATH.movie + id + '?');
	return response.data;
};

export const fetchMovieCredits = async (id) => {
	const response = await axios.get(API_PATH.movie + id + '/credits?');
	return response.data;
};

export const fetchMovieReview = async (id) => {
	const response = await axios.get(API_PATH.movie + id + '/reviews?');
	return response.data;
};
