import { parseUrls } from '@/helpers/parseUrls';
import { utapi } from '../../uploadthing/core';
export async function POST(req: Request) {
	try {
		const body = await req.json();
		const id = parseUrls(body);
		const response = await utapi.deleteFiles(id);
		return Response.json(response.success);
	} catch (err) {
		console.log(err);
	}
}
