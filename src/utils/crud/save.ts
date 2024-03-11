import { Car } from '@/types';
import fs from 'fs';
import { filePath } from './read';

export function save(cars: Car[]) {
	try {
		const toJson: string = JSON.stringify(cars, null, 2);
		fs.writeFileSync(filePath, toJson, 'utf8');
	} catch (err) {
		console.log(err);
	}
}
