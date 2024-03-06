'use client';
import { Car } from '@/types';
import CarCard from '@/ui/card';
import Menu from '@/ui/menu';
import { api } from '@/utils/api';
import { useAuth } from '@clerk/nextjs';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

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
		<main className="flex flex-col gap-5 justify-center items-center">
			{isSignedIn && <Menu />}
			{cars?.map((car) => <CarCard key={car.id} car={car} />)}
		</main>
	);
}
