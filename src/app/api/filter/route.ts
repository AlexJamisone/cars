import { getBrands } from '@/helpers/getUniq';
import read from '@/utils/crud/read';

export async function GET() {
	try {
		const cars = await read();
		const { brands } = getBrands(cars ?? []);
		return Response.json(brands);
	} catch (err) {
		console.log(err);
	}
}
