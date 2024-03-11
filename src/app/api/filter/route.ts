import { getBrands } from '@/helpers/getUniq';
import read from '@/utils/crud/read';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
	try {
		const cars = await read();
		const { brands } = getBrands(cars ?? []);
		return NextResponse.json(brands);
	} catch (err) {
		console.log(err);
	}
}
export async function POST(req: NextRequest) {}
