'use client';
import { Car } from '@/types';
import { api } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function Home() {
	const { data: cars, isLoading } = useQuery({
		queryKey: ['cars'],
		queryFn: async () => {
			const response = await api.get<Car[]>('/cars');
			return response.data;
		},
	}); // work
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{cars?.map((car) => (
				<Link key={car.id} href={`/car/${car.id}`}>
					{car.brand}
				</Link>
			))}
		</main>
	);
}
