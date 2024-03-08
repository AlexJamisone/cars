import { Car } from '@/types';

export function getBrands(cars: Car[]): { brands: string[] } {
	return { brands: Array.from(new Set(cars.map((car) => car.brand))) };
}
export function getColors(cars: Car[]): { colors: string[] } {
	return { colors: Array.from(new Set(cars.flatMap((car) => car.colors))) };
}
