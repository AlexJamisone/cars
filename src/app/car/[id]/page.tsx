'use client';
import { api } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';

const CarDitailsPage = ({ params }: { params: { id: string } }) => {
	const { data: car } = useQuery({
		queryKey: ['car'],
		queryFn: async () => {
			const response = await api.get(`/car/${params.id}`);
			return response.data;
		},
	});
	console.log(car);
	return <></>;
};
export default CarDitailsPage;
