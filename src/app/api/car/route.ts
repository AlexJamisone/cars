import { Car } from '@/types';
import create from '@/utils/crud/create';

export async function POST(req: Request) {
	try {
		const car = await req.json();
		await create(car as Omit<Car, 'id'>);
		return Response.json(true);
	} catch (err) {
		console.log(err);
	}
}
