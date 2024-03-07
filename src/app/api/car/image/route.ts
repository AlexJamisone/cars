import { parseUrl } from '@/helpers/parseUrl';
import { UTApi } from 'uploadthing/server';
export async function POST(req: Request) {
	try {
		const body = await req.json();
		console.log(body);
		const id = parseUrl(body);
		const utapi = new UTApi();
		const response = await utapi.deleteFiles(id);
		return Response.json(response.success);
	} catch (err) {
		console.log(err);
	}
}
