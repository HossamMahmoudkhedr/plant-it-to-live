import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';

export async function fetchApi(url, method, data) {
	let response = await axios(`${BASE_URL}/${url}`, {
		method: method,
		data: data,
	});

	return response.data;
}
