import { Car } from '@/types';
import fs from 'fs';
import { filePath } from './read';

export function save(cars: Car[]): Promise<void> {
	return new Promise((res, rej) => {
		const toJson: string = JSON.stringify(cars, null, 2);
		fs.writeFile(filePath, toJson, 'utf8', (err) => {
			if (err) {
				console.error('Error to write file', err.message);
				rej();
			} else {
				res();
			}
		});
	});
}
