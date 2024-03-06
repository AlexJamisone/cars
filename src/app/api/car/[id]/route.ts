import { getById } from '@/utils/crud/getById';

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
