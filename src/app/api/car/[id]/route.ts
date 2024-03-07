import deletById from '@/utils/crud/delet';
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
export async function DELETE(
	req: Request,
	{ params }: { params: { id: string } },
) {
	try {
		// const { userId } = auth();
		// if (!userId) {
		// 	return new Response('Unauthorized', { status: 401 });
		// }
		const id = params.id;
		const response = await deletById(id);
		return Response.json(response);
	} catch (err) {
		console.log(err);
	}
}
