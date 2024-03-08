'use client';
import Layout from '@/components/Layout';
import { Car } from '@/types';
import CarCard from '@/ui/card';
import Filter from '@/ui/filter';
import DropMenu from '@/ui/menu';
import { api } from '@/utils/api';
import { Button, Stack } from '@chakra-ui/react';
import { useAuth } from '@clerk/nextjs';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

export default function Home({
	searchParams,
}: {
	searchParams?: { page?: string; limit?: string };
}) {
	const page = Number(searchParams?.page) || 1;
	const limit = Number(searchParams?.limit) || 10;
	const params = useSearchParams();

	const fetchCar = async (page: number) => {
		const row = `/cars/?page=${page}&${params.toString()}`;
		const url = !params.toString() ? row.replace('&', '') : row;
		const response = await api.get<Car[]>(url);
		return response.data;
	};

	const { data, hasNextPage, fetchNextPage, status } = useInfiniteQuery({
		queryKey: ['cars'],
		queryFn: ({ pageParam }) => fetchCar(pageParam),
		initialPageParam: page,
		getNextPageParam: (lastPage, _, lastPageParam) => {
			if (lastPage.length < limit) {
				return undefined;
			}
			return lastPageParam + 1;
		},
	});
	return (
		<Stack as="main" mx={10} direction="row" position="relative">
			<Filter />
			<Layout mt={130} alignItems="center" ml={[362, 350]}>
				{data?.pages.map((page, idx) => (
					<Stack
						key={idx}
						direction="row"
						flexWrap="wrap"
						gap={5}
						justifyContent="center"
					>
						{page.map((car) => (
							<CarCard key={car.id} car={car} />
						))}
					</Stack>
				))}
				{hasNextPage && (
					<Button onClick={() => fetchNextPage()}>
						Загрузить больше
					</Button>
				)}
			</Layout>
		</Stack>
	);
}
