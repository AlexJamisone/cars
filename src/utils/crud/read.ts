import { Car } from '@/types';
import fs from 'fs';
import path from 'path';
import { holdon } from '../holdon';

export const filePath = path.join(process.cwd(), 'src', 'cars.json');

export default async function read(
	{
		sleep,
		filter,
	}: {
		sleep?: boolean;
		filter?: { brand: string[]; color: string[] };
	} = { sleep: true },
) {
	try {
		if (sleep) {
			await holdon(2000);
		}
		const json = fs.readFileSync(filePath, 'utf8');
		let cars: Car[] = JSON.parse(json);
		if (filter && filter.brand.length !== 0) {
			cars = cars.filter((car) => filter.brand.includes(car.brand));
		}
		if (filter && filter.color.length !== 0) {
			cars = cars.filter((car) => {
				return car.colors.some((color) => filter.color.includes(color));
			});
		}
		return cars;
	} catch (err) {
		console.log(err);
		return null;
	}
}
