import { Car } from '@/types';
import fs from 'fs';
import path from 'path';
import { holdon } from '../holdon';

export const filePath = path.join(process.cwd(), 'src', 'cars.json');

export default async function read(
	offset: number = 0,
	limit?: number,
): Promise<Car[] | null> {
	try {
		await holdon(2000);
		const json = fs.readFileSync(filePath, 'utf8');
		const data: Car[] = JSON.parse(json);
		let resultData: Car[] = data;
		if (offset || limit) {
			if (offset < data.length) {
				resultData = data.slice(
					offset,
					limit ? offset + limit : undefined,
				);
			} else {
				console.warn(`Offset ${offset} more then file length`);
				resultData = [];
			}
		}
		return resultData;
	} catch (err) {
		console.log(err);
		return null;
	}
}
