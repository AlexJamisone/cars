import { Car } from '@/types';
import read from './read';

export default async function cursor(
	page: number = 0,
	limit: number = 10,
	filter?: {
		brand: string[];
		color: string[];
		sortBy: { price?: string; year?: string };
	},
): Promise<Car[] | undefined> {
	try {
		const cars: Car[] = (await read({ filter })) ?? [];
		if (cars.length === 0) {
			return [];
		}
		const start = (page - 1) * limit;
		const point = cars.slice(start, start + limit);
		return point;
	} catch (err) {
		console.log(err);
	}
}
