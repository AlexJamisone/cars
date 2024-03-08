import cursor from '@/utils/crud/cursor';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams;
		const page = Number(searchParams.get('page')) || 1;
		const limit = Number(searchParams.get('limit')) || 10;
		const response = await cursor(page, limit);
		if (!response) {
			return new Response('Not found', { status: 500 });
		}
		return Response.json(response);
	} catch (err) {
		console.log(err);
	}
}
