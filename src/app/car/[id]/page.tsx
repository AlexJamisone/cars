'use client';
import Layout from '@/components/Layout';
import { Car } from '@/types';
import { api } from '@/utils/api';
import { HStack, Heading, Stack, Tag, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

const CarDitailsPage = ({ params }: { params?: { id: string } }) => {
	// Roadmap make better
	const { data: car, isLoading } = useQuery({
		queryKey: [`${params?.id}`],
		queryFn: async () => {
			const response = await api.get<Car>(`/car/${params?.id}`);
			return response.data;
		},
	});
	if (!car) return null;
	if (isLoading) return null;
	return (
		<Layout
			direction="row"
			alignItems="center"
			justifyContent="center"
			mx={20}
			pt={130}
			gap={7}
		>
			<Image alt={car.model} width={700} height={500} src={car.image} />
			<Stack maxW={500} textAlign="center" justifyContent="start" gap={5}>
				<Heading>
					{car.brand} {car.model}
				</Heading>
				<Text>
					Тип мотора:{' '}
					{car.type === 'benz'
						? 'Бензин'
						: car.type === 'dizel'
							? 'Дизель'
							: 'Электро'}
				</Text>
				{car.transmission && (
					<Text>
						Тип коробки:{' '}
						{car.transmission === 'auto'
							? 'Автомат'
							: car.transmission === 'manual'
								? 'Ручная'
								: 'Робот'}
					</Text>
				)}
				{car.power && <Text>Запас хода {car.power} км</Text>}
				<Stack direction="row" justifyContent="center">
					<Text>Доступные цвета: </Text>
					<HStack>
						{car.colors.map((color) => (
							<Tag
								key={color}
								rounded="full"
								border="1px solid"
								borderColor="blackAlpha.400"
								bgColor={color}
							/>
						))}
					</HStack>
				</Stack>
				<Text fontWeight={600}>Описание</Text>
				<Text whiteSpace="pre-wrap">{car.description}</Text>
			</Stack>
		</Layout>
	);
};
export default CarDitailsPage;
