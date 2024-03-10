import RadioSort from '@/components/RadioSort';
import { Button, Stack, Text } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Sort = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const queryClient = useQueryClient();
	const price = searchParams.get('price') || '';
	const year = searchParams.get('year') || '';

	const handlRadio = (value: string, name: string) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', '1');
		if (value) {
			params.set(name, value);
		} else {
			params.delete(name);
		}
		replace(`${pathname}?${params.toString()}`);
		queryClient.removeQueries({ queryKey: ['cars'] });
	};
	const handlReset = () => {
		replace(`${pathname}`);
		queryClient.removeQueries({ queryKey: ['cars'] });
	};

	return (
		<Stack alignSelf="start" w="full">
			<Text
				textAlign="center"
				fontWeight={600}
				textColor="blackAlpha.800"
			>
				Сортировка
			</Text>
			<RadioSort
				label="По цене"
				value={price}
				name="price"
				handlRadio={handlRadio}
				isDisabel={!!year}
			/>
			<RadioSort
				label="По году"
				value={year}
				name="year"
				handlRadio={handlRadio}
				isDisabel={!!price}
			/>
			{(!!price || !!year) && (
				<Button size="xs" colorScheme="blue" onClick={handlReset}>
					Сбросить сортировку
				</Button>
			)}
		</Stack>
	);
};
export default Sort;
