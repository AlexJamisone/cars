import { Car } from '@/types';
import fs from 'fs';
import path from 'path';

export const filePath = path.join(__dirname, 'cars.json');

export default function read(offset: number = 0, limit?: number): Car[] | null {
	try {
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
