import { Car } from '@/types';
import fs from 'fs';
import path from 'path';
import { holdon } from '../holdon';

export const filePath = path.join(process.cwd(), 'cars.json');
export default async function read({
	sleep = true,
	filter,
}: {
	sleep?: boolean;
	filter?: {
		brand: string[];
		color: string[];
		sortBy: {
			price?: string;
			year?: string;
		};
	};
} = {}) {
	try {
		if (sleep) {
			await holdon(1500);
		}
		const json = fs.readFileSync(filePath, 'utf8');
		let cars: Car[] = JSON.parse(json) ?? [];
		// Filter
		if (filter && filter.brand.length !== 0) {
			cars = cars.filter((car) => filter.brand.includes(car.brand));
		}
		if (filter && filter.color.length !== 0) {
			cars = cars.filter((car) => {
				return car.colors.some((color) => filter.color.includes(color));
			});
		}
		// Sort
		if (filter && filter.sortBy)
			if (
				(filter && filter.sortBy && filter.sortBy.price === 'asc') ||
				(filter && filter.sortBy && filter.sortBy.price === 'desc')
			) {
				cars.sort((a, b) => {
					if (filter.sortBy.price === 'desc') {
						return a.price - b.price;
					} else {
						return b.price - a.price;
					}
				});
			}
		if (
			(filter && filter.sortBy && filter.sortBy.year === 'asc') ||
			(filter && filter.sortBy && filter.sortBy.year === 'desc')
		) {
			cars.sort((a, b) => {
				if (filter.sortBy.year === 'desc') {
					return a.year - b.year;
				} else {
					return b.year - a.year;
				}
			});
		}
		return cars.reverse();
	} catch (err) {
		console.log(err);
		return null;
	}
}
