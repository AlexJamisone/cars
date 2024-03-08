import { Car } from '@/types';
import fs from 'fs';
import path from 'path';
import { holdon } from '../holdon';

export const filePath = path.join(process.cwd(), 'src', 'cars.json');

export default async function read(): Promise<Car[] | null> {
	try {
		await holdon(2000);
		const json = fs.readFileSync(filePath, 'utf8');
		const cars: Car[] = JSON.parse(json);
		return cars;
	} catch (err) {
		console.log(err);
		return null;
	}
}
