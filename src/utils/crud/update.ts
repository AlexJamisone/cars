import fs from 'fs';
import { Car } from '@/types';
import read, { filePath } from './read';

export default function update(id: number, updateCar: Partial<Car>): boolean {
	try {
		const cars: Car[] | null = read();
		if (cars === null) {
			return false;
		}
		const idx = cars.findIndex((car) => car.id);
		if (idx === -1) {
			console.error(`Cars with this ${id} not found`);
			return false;
		}
		const updatedCarData: Car = { ...cars[idx], ...updateCar };
		cars[idx] = updatedCarData;
		fs.writeFileSync(filePath, JSON.stringify(cars, null, 2), 'utf8');
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}
