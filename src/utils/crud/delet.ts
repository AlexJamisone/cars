import fs from 'fs';
import { Car } from '@/types';
import read, { filePath } from './read';
import { utapi } from '@/app/api/uploadthing/core';
import { parseUrls } from '@/helpers/parseUrls';
import { save } from './save';

export default async function deletById(
	ids: string | string[],
): Promise<boolean> {
	try {
		const cars: Car[] | null = await read();
		if (cars === null) {
			return false;
		}
		const idsArray: string[] = Array.isArray(ids) ? ids : [ids];
		const filtering: Car[] = cars.filter(
			(car) => !idsArray.includes(car.id),
		);
		const findCars = cars.filter((car) => ids.includes(car.id));
		const imageIds = parseUrls(findCars.map((car) => car.image));
		await utapi.deleteFiles(imageIds);
		save(filtering);
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}
