import { Car } from '@/types';
import create from '@/utils/crud/create';
import { getById } from '@/utils/crud/getById';
import { auth } from '@clerk/nextjs';

export async function GET(
	req: Request,
	{ params }: { params: { id: string } },
) {
	try {
		const id = params.id;
		const response = await getById(id);
		return Response.json(response);
	} catch (err) {
		console.log(err);
	}
}

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
