'use client';
import { Car } from '@/types';
import CarCard from '@/ui/card';
import DropMenu from '@/ui/menu';
import { api } from '@/utils/api';
import { Stack } from '@chakra-ui/react';
import { useAuth } from '@clerk/nextjs';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
	const { isSignedIn } = useAuth();
	const { data: cars, isLoading } = useQuery({
		queryKey: ['cars'],
		queryFn: async () => {
			const response = await api.get<Car[]>('/cars');
			return response.data;
		},
	}); // work
	return (
		<Stack as="main" alignItems="center">
			{isSignedIn && <DropMenu />}
			<Stack
				direction="row"
				flexWrap="wrap"
				gap={5}
				justifyContent="center"
			>
				{cars?.map((car) => <CarCard key={car.id} car={car} />)}
			</Stack>
		</Stack>
	);
}
