'use client';
import { Car } from '@/types';
import CarCard from '@/ui/card';
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
		<main className="">
			{cars?.map((car) => (
				<Link key={car.id} href={`/car/${car.id}`}>
					<CarCard car={car} />
				</Link>
			))}
		</main>
	);
}
