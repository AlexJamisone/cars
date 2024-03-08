import { useDeletMode } from '@/store/useDeletMode';
import { Car } from '@/types';
import { Link } from '@chakra-ui/next-js';
import {
	Card,
	CardBody,
	CardHeader,
	Checkbox,
	Stack,
	Text,
} from '@chakra-ui/react';
import Image from 'next/image';

const CarCard = ({ car }: { car: Car }) => {
	const { brand, model, image, price, year, id } = car;
	const [ids, onDelet, setIds] = useDeletMode((state) => [
		state.ids,
		state.onDelet,
		state.setIds,
	]);
	return (
		<Card
			width="fit-content"
			as={onDelet ? undefined : Link}
			href={`/car/${id}`}
			className="flex flex-col items-center p-5 shadow-md w-fit rounded-md gap-3"
			_hover={{ textDecoration: 'none' }}
			position="relative"
            transition='all .3s ease'
			bgColor={ids.includes(id) ? 'red.100' : undefined}
			onClick={() => (onDelet ? setIds(id) : undefined)}
		>
			{onDelet && (
				<Checkbox
					position="absolute"
					bottom={3}
					left={3}
					colorScheme="red"
					value={id}
					isChecked={ids.includes(id)}
					onChange={() => setIds(id)}
				/>
			)}
			<CardHeader>
				<Image
					quality={100}
					height={150}
					width={250}
					objectFit="cover"
					src={image}
					alt={brand + model}
					style={{
						maxHeight: '150px',
						objectFit: 'cover',
					}}
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
