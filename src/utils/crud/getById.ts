import { Car } from '@/types';
import read from './read';

export async function getById(id: string): Promise<Car | null> {
	try {
		const cars: Car[] | null = await read();
		if (cars === null) {
			console.log(`Car not found`);
			return null;
		}
		const found: Car | undefined = cars.find((car) => car.id === id);
		return found || null;
	} catch (err) {
		console.log(err);
		return null;
	}
}
