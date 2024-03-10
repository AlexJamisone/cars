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
): Promise<Car[] | null> {
	try {
		const cars: Car[] | null = await read({ filter });
		if (cars === null) {
			return null;
		}
		const start = (page - 1) * limit;
		const point = cars.slice(start, start + limit);
		if (point.length === 0) {
			throw new Error('Cars not found');
		}
		return point;
	} catch (err) {
		console.log(err);
		return null;
	}
}