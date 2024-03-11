import { getColors } from '@/helpers/getUniq';
import read from '@/utils/crud/read';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
	try {
		const cars = await read({ sleep: false });
		const { colors } = getColors(cars ?? []);
		return NextResponse.json(colors);
	} catch (err) {
		console.log(err);
	}
}
export async function POST(req: NextRequest) {}
