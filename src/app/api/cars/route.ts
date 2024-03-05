import { Car } from '@/types';
import create from '@/utils/crud/create';
import read from '@/utils/crud/read';

export async function GET() {
	try {
		const response = await read();
		return Response.json(response);
	} catch (err) {
		console.log(err);
	}
}

export async function POST(req: Request) {
	try {
		const car = await req.json();
		console.log(car);
		await create(car as Omit<Car, 'id'>);
		return Response.json(true);
	} catch (err) {
		console.log(err);
	}
}
