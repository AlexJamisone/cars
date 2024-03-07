import { z } from 'zod';

export const createSchema = z
	.object({
		price: z.number().positive({ message: 'Укажи цену больше 0' }),
		brand: z
			.string()
			.min(1, { message: 'Поле бренд не должно быть пустым' }),
		image: z.string().min(1, { message: 'Загрузи картику' }).url(),
		description: z.string().min(1, { message: 'Заполни описание машины' }),
		model: z.string().min(1, { message: 'Укажи модель' }),
		year: z.number().min(4, { message: 'Укажите год, формата 1999' }),
		type: z.enum(['benz', 'dizel', 'electro']),
		transmission: z.enum(['manual', 'auto', 'robot']).nullable(),
		power: z.number().nullable(),
	})
	.transform((obj) => {
		if (obj.type === 'electro') {
			return {
				...obj,
				transmission: null,
			};
		} else {
			return {
				...obj,
				power: null,
			};
		}
	});

export function parsingError(
	error: string,
): { message: string; path: string }[] {
	const parse = JSON.parse(error);
	return parse.map((item: { message: string; path: string[] }) => ({
		message: item?.message,
		path: item?.path.join(' - '),
	}));
}
