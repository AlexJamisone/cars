import { api } from '@/utils/api';
import { Stack, Tag, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

const Colors = () => {
	const { data: colors } = useQuery({
		queryKey: ['colors'],
		queryFn: async () => {
			const response = await api.get<string[]>('filter/colors');
			return response.data;
		},
	});
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
						border="1px solid"
						borderColor="blackAlpha.100"
					/>
				))}
			</Stack>
		</Stack>
	);
};
export default Colors;
