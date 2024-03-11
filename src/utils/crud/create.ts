import { Car } from '@/types';
import { v4 as uuid } from 'uuid';
import read from './read';
import { save } from './save';
export default async function create(newCar: Omit<Car, 'id'>) {
	try {
		const cars: Car[] = (await read()) ?? [];
		const newCarWithId: Car = { ...newCar, id: uuid() };
		cars.push(newCarWithId);
		save(cars);
	} catch (err) {
		console.log(err);
	}
}
