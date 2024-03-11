import fs from 'fs';
import { Car } from '@/types';
import read, { filePath } from './read';
import { UTApi } from 'uploadthing/server';

export default async function deletById(
	ids: string | string[],
): Promise<boolean> {
	try {
		const cars: Car[] | null = await read();
		if (cars === null) {
			return false;
		}
		const idsArray: string[] = Array.isArray(ids) ? ids : [ids];
		const utapi = new UTApi();
		const filtering: Car[] = cars.filter(
			(car) => !idsArray.includes(car.id),
		);
		await utapi.deleteFiles(filtering.map((car) => car.image));
		fs.writeFileSync(filePath, JSON.stringify(filtering, null, 2), 'utf8');
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}
