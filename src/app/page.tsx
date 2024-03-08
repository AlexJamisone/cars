'use client';
import { Car } from '@/types';
import CarCard from '@/ui/card';
import DropMenu from '@/ui/menu';
import { api } from '@/utils/api';
import { Button, Stack } from '@chakra-ui/react';
import { useAuth } from '@clerk/nextjs';
import { useInfiniteQuery } from '@tanstack/react-query';

export default function Home({
	searchParams,
}: {
	searchParams?: { page?: string; limit?: string };
}) {
	const { isSignedIn } = useAuth();
	const page = Number(searchParams?.page) || 1;
	const limit = Number(searchParams?.limit) || 10;

	const fetchCar = async (page: number) => {
		const response = await api.get<Car[]>(
			`/cars/?page=${page}&limit=${limit}`,
		);
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
	console.log(status);
	return (
		<Stack as="main" alignItems="center" direction="row">
			<Stack alignItems="center" justifyContent="center">
				{isSignedIn && <DropMenu />}
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
			</Stack>
		</Stack>
	);
}
