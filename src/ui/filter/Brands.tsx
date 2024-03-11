'use client';
import { api } from '@/utils/api';
import { Stack, Text } from '@chakra-ui/react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Select } from 'chakra-react-select';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useId } from 'react';

const Brands = () => {
	const id = useId();
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname();
	const paramsBrand = searchParams.getAll('brand') || [];
	const queryClient = useQueryClient();
	const { data: brands } = useQuery({
		queryKey: ['brands'],
		queryFn: async () => {
			const response = await api.get<string[]>('/filter');
			return response.data;
		},
	});
	const handlBrands = (brands: { value: string }[]) => {
		const pararms = new URLSearchParams(searchParams);
		pararms.delete('brand');
		if (brands.length > 0) {
			brands.forEach((brand) => pararms.append('brand', brand.value));
		}
		replace(`${pathname}?${pararms.toString()}`);
		queryClient.removeQueries({ queryKey: ['cars'] });
	};
	const valueBrand: readonly { label: string; value: string }[] =
		paramsBrand.map((item) => ({
			label: item,
			value: item,
		}));
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
				value={valueBrand}
				options={[
					{
						label: 'Бренды',
						options:
							brands?.map((brand) => ({
								label: brand,
								value: brand,
							})) ?? [],
					},
				]}
				onChange={(value) =>
					handlBrands(value.map((item) => ({ value: item.value })))
				}
				placeholder="Выбери бренд"
			/>
		</Stack>
	);
};
export default Brands;
