import { getColors } from '@/helpers/getUniq';
import read from '@/utils/crud/read';

export async function GET() {
	try {
		const cars = await read({ sleep: false });
		const { colors } = getColors(cars ?? []);
		return Response.json(colors);
	} catch (err) {
		console.log(err);
	}
}
