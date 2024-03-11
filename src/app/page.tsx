'use client';
import Layout from '@/components/Layout';
import NoData from '@/components/NoData';
import Placeholders from '@/components/Placeholders';
import CarCard from '@/ui/card';
import Filter from '@/ui/filter';
import { fetchCars } from '@/utils/api';
import { Button, Stack } from '@chakra-ui/react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function Home({
	searchParams,
}: {
	searchParams?: { page?: string; limit?: string };
}) {
	const page = Number(searchParams?.page) || 1;
	const limit = Number(searchParams?.limit) || 10;
	const params = useSearchParams();

	const { data, hasNextPage, fetchNextPage, isPending, isFetching } =
		useInfiniteQuery({
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
		<Stack as="main" mx={10} position="relative" mb={10}>
			<Filter />
			<Layout
				mt={130}
				justifyContent="center"
				ml={[355]}
				direction="row"
				flexWrap="wrap"
				gap={5}
			>
				{data?.pages.map((page, idx) => (
					<React.Fragment key={idx}>
						{page.length === 0 && (
							<NoData message="Машины не найдены" />
						)}
						{page.map((car, idx) => (
							<CarCard key={car.id} car={car} idx={idx} />
						))}
					</React.Fragment>
				))}
				{hasNextPage && (
					<Button
						onClick={() => fetchNextPage()}
						isLoading={isFetching}
						rounded="full"
						size="xs"
						p={5}
						colorScheme="blue"
					>
						Загрузить
						<br /> больше
					</Button>
				)}
				{isPending && (
					<Placeholders count={6} w={290} h={318} rounded="xl" />
				)}
			</Layout>
		</Stack>
	);
}
