import { Car } from '@/types';
import axios from 'axios';
export const api = axios.create({
	baseURL: '/api',
	timeout: 7000,
	headers: {
		'Content-Type': 'application/json',
	},
});
export async function fetchCars(page: number, params: string): Promise<Car[]> {
	const rawUrl = `/cars/?page=${page}&${params}`;
	const url = !params ? rawUrl.replace('&', '') : rawUrl;
	const response = await api.get<Car[]>(url);
	return response.data;
}
