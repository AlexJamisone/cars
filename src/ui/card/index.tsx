import { Car } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const CarCard = ({ car }: { car: Car }) => {
	const { brand, model, image, price, year, id } = car;
	return (
		<Link
			href={`/car/${id}`}
			className="flex flex-col items-center p-5 shadow-md w-fit rounded-md gap-3"
		>
			<Image width={250} height={250} src={image} alt={brand + model} />
			<p>
				{brand} {model}
			</p>
			<p>{year} года</p>
			<p>{price.toLocaleString('ru-RU')} $</p>
		</Link>
	);
};
export default CarCard;
