'use client';
import { api } from '@/utils/api';
import { Stack, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { Select } from 'chakra-react-select';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useId } from 'react';

const Brands = () => {
	const id = useId();
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname();
	const { data: brands } = useQuery({
		queryKey: ['brands'],
		queryFn: async () => {
			const response = await api.get<string[]>('/filter');
			return response.data;
		},
	});
	const handBrands = (brand: string) => {
		const pararms = new URLSearchParams(searchParams);
		if (brand) {
			pararms.append('brand', brand);
		} else {
			pararms.delete('brand');
		}
		replace(`${pathname}?${pararms.toString()}`);
	};
	return (
		<Stack w="full">
			<Text fontWeight={600} textColor="blackAlpha.800">
				Бренд
			</Text>
			<Select
				instanceId={id}
				isMulti
				size="md"
				name="brands"
				options={[
					{
						label: 'Бренды',
						options: brands?.map((brand) => ({
							label: brand,
							value: brand,
						})),
					},
				]}
				onChange={(value) => {
					const option = value[value.length - 1];
					handBrands(option?.label);
				}}
				placeholder="Выбери бренд"
			/>
		</Stack>
	);
};
export default Brands;
