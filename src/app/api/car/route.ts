import { Car } from '@/types';
import create from '@/utils/crud/create';
import { auth } from '@clerk/nextjs';

export async function POST(req: Request) {
	try {
		const { userId } = auth();
		if (!userId) {
			return new Response('Unauthorized', { status: 401 });
		}
		const car = await req.json();
		await create(car as Omit<Car, 'id'>);
		return Response.json(true);
	} catch (err) {
		console.log(err);
	}
}
