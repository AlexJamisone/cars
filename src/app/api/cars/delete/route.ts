import deletById from '@/utils/crud/delet';
import { auth } from '@clerk/nextjs';

export async function POST(req: Request) {
	try {
		const { userId } = auth();
		if (!userId) {
			return new Response('Unauthorized', { status: 401 });
		}

		const ids = await req.json();
		const response = await deletById(ids as string[]);
		return Response.json(response);
	} catch (err) {
		console.log(err);
	}
}
