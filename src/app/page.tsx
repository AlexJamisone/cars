'use client';
import Layout from '@/components/Layout';
import Placeholders from '@/components/Placeholders';
import CarCard from '@/ui/card';
import Filter from '@/ui/filter';
import { fetchCars } from '@/utils/api';
import { Button, Stack } from '@chakra-ui/react';
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

	const { data, hasNextPage, fetchNextPage, isPending } = useInfiniteQuery({
		queryKey: ['cars'],
		queryFn: ({ pageParam }) => fetchCars(pageParam, params.toString()),
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
				{isPending && (
					<Placeholders count={6} w={290} h={318} rounded="xl" />
				)}
			</Layout>
		</Stack>
	);
}
