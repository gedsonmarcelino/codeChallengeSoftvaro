import axios from "axios";

export const api = axios.create({
	baseURL: 'https://newsapi.org/v2/everything',
	timeout: 1000,
});