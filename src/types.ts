export type Car = {
    id: string
	image: string;
	brand: string;
	description: string;
	model: string;
	colors: string[];
	price: number;
	year: number;
	type: 'benz' | 'dizel' | 'electro';
	transmission: 'manual' | 'auto' | 'robot'; //just for type benz | dizel,
	power: number; // just for electro
};
