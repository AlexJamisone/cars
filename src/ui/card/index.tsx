import { Car } from '@/types';
import { Link } from '@chakra-ui/next-js';
import { Card, CardBody, CardHeader, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

const CarCard = ({ car }: { car: Car }) => {
	const { brand, model, image, price, year, id } = car;
	return (
		<Card
			width="fit-content"
			as={Link}
			href={`/car/${id}`}
			className="flex flex-col items-center p-5 shadow-md w-fit rounded-md gap-3"
			_hover={{ textDecoration: 'none' }}
		>
			<CardHeader>
				<Image
					width={250}
					height={250}
					src={image}
					alt={brand + model}
				/>
			</CardHeader>
			<CardBody as={Stack} textAlign="center">
				<Text>
					{brand} {model}
				</Text>
				<Text>{year} года</Text>
				<Text>{price.toLocaleString('ru-RU')} $</Text>
			</CardBody>
		</Card>
	);
};
export default CarCard;
