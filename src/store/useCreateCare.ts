import { create } from 'zustand';

export type CreateState = {
	inputs: {
		brand: string;
		price: number;
		year: number;
		power: number;
		description: string;
		model: string;
	};
	colors: string[];
	image: string;
	motor: 'benz' | 'dizel' | 'electro';
	transmission: 'auto' | 'manual' | 'robot';
};

type CreateAction = {
	setFilds: (filds: CreateState['inputs']) => void;
	setImage: (image: string) => void;
	setColor: (color: string) => void;
	setMotor: (motor: CreateState['motor']) => void;
	setTransmition: (tr: CreateState['transmission']) => void;
	setClear: () => void;
};
type Create = CreateState & CreateAction;
const initial: CreateState = {
	inputs: {
		power: 0,
		brand: '',
		model: '',
		year: 0,
		description: '',
		price: 0,
	},
	colors: [],
	transmission: 'manual',
	image: '',
	motor: 'benz',
};

export const useCreateCar = create<Create>((set) => ({
	...initial,
	setFilds: (filds) =>
		set((state) => ({ ...state, inputs: { ...state.inputs, ...filds } })),
	setImage: (img) => set((state) => ({ ...state, image: img })),
	setMotor: (motor) => set((state) => ({ ...state, motor })),
	setTransmition: (transmission) =>
		set((state) => ({ ...state, transmission })),
	setColor: (color) =>
		set((state) => ({ ...state, colors: [...state.colors, color] })),
	setClear: () => set(initial),
}));
