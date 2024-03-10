import cursor from '@/utils/crud/cursor';

export async function GET(req: Request) {
	try {
		const url = new URL(req.url);
		const page = Number(url.searchParams.get('page')) || 1;
		const limit = Number(url.searchParams.get('limit')) || 10;
		const brand = url.searchParams.getAll('brand');
		const color = url.searchParams.getAll('color');

		const filter = {
			brand,
			color,
		};

		const response = await cursor(page, limit, filter);
		if (!response) {
			return new Response('Not found', { status: 500 });
		}
		return Response.json(response);
	} catch (err) {
		console.log(err);
	}
}
