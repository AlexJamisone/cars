import fs from 'fs';
import { Car } from '@/types';
import read, { filePath } from './read';

export default function deletById(ids: string | string[]): boolean {
	try {
		const cars: Car[] | null = read();
		if (cars === null) {
			return false;
		}
		const idsArray: string[] = Array.isArray(ids) ? ids : [ids];
		const filtering: Car[] = cars.filter(
			(car) => !idsArray.includes(car.id),
		);
		fs.writeFileSync(filePath, JSON.stringify(filtering, null, 2), 'utf8');
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}
