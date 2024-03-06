'use client';
import { api } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
	const { data: cars, isLoading } = useQuery({
		queryKey: ['cars'],
		queryFn: async () => {
			const response = await api.get('/cars');
			return response.data;
		},
	}); // work
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			hi
		</main>
	);
}
