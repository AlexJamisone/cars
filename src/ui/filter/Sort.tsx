import RadioSort from '@/components/RadioSort';
import { Stack } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Sort = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const queryClient = useQueryClient();
	const price = searchParams.get('price') || '';
	const year = searchParams.get('year') || '';

	const handlSort = (value: string | string[], name: string) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', '1');
		if (value) {
			if (price) {
				params.delete('price');
			}
			if (year) {
				params.delete('year');
			}
			params.set(name, value as string);
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
		<Stack w="full">
			<RadioSort
				value={[price, year]}
				name={['price', 'year']}
				handlRadio={handlSort}
				reset={handlReset}
			/>
		</Stack>
	);
};
export default Sort;
