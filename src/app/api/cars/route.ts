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

