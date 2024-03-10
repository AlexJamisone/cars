import Placeholders from '@/components/Placeholders';
import { api } from '@/utils/api';
import { Stack, Tag, Text } from '@chakra-ui/react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Colors = () => {
	const pathname = usePathname();
	const { replace } = useRouter();
	const searchParams = useSearchParams();
	const paramsColor = searchParams.getAll('color');
	const queryClient = useQueryClient();
	const { data: colors, isLoading } = useQuery({
		queryKey: ['colors'],
		queryFn: async () => {
			const response = await api.get<string[]>('filter/colors');
			return response.data;
		},
	});

	const handlColor = (color: string) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', '1');
		if (color) {
			if (paramsColor.includes(color)) {
				params.delete('color', color);
			} else {
				params.append('color', color);
			}
		}
		replace(`${pathname}?${params.toString()}`);
		queryClient.removeQueries({ queryKey: ['cars'] });
	};

	return (
		<Stack>
			<Text fontWeight={600} textColor="blackAlpha.800">
				Палитра
			</Text>
			<Stack direction="row" flexWrap="wrap" justifyContent="center">
				{colors?.map((color) => (
					<Tag
						key={color}
						bgColor={color}
						rounded="full"
						border={
							paramsColor.includes(color)
								? '4px solid'
								: '1px solid'
						}
						borderColor={
							paramsColor.includes(color)
								? 'telegram.500'
								: 'blackAlpha.100'
						}
						cursor="pointer"
						onClick={() => handlColor(color)}
					/>
				))}
				{isLoading && (
					<Placeholders count={12} w="24px" h="24px" rounded="full" />
				)}
			</Stack>
		</Stack>
	);
};
export default Colors;
