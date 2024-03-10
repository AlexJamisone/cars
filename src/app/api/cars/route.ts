import cursor from '@/utils/crud/cursor';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams;
		const page = Number(searchParams.get('page')) || 1;
		const limit = Number(searchParams.get('limit')) || 10;
		const brand = searchParams.getAll('brand');
		const color = searchParams.getAll('color');
		const price = searchParams.get('price') || undefined;
		const year = searchParams.get('year') || undefined;
		const filter = {
			brand,
			color,
			sortBy: {
				price,
				year,
			},
		};

		const response = await cursor(page, limit, filter);
		return NextResponse.json(response);
	} catch (err) {
		console.log(err);
	}
}
