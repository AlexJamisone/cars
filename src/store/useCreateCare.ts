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
	color: {
		colors: string[];
		targetColor: string;
		editIdx?: number;
	};
	image: string;
	motor: 'benz' | 'dizel' | 'electro';
	transmission: 'auto' | 'manual' | 'robot';
	error?: {
		isError: boolean;
		type: {
			message: string;
			path: string;
		}[];
	};
};

type CreateAction = {
	setFilds: (filds: CreateState['inputs']) => void;
	setImage: (image: string) => void;
	setColor: (color: string) => void;
	addColor: () => void;
	editColor: (idx: number, color: string) => void;
	removeColor: () => void;
	setMotor: (motor: CreateState['motor']) => void;
	setTransmition: (tr: CreateState['transmission']) => void;
	setError: (error: CreateState['error']) => void;
	reset: () => void;
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
	color: {
		colors: [],
		targetColor: '',
	},
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
		set((state) => ({
			...state,
			color: {
				...state.color,
				targetColor: color,
			},
		})),
	addColor: () =>
		set((state) => {
			if (state.color.editIdx !== undefined) {
				const newColors = [...state.color.colors];
				newColors[state.color.editIdx] = state.color.targetColor;
				return {
					...state,
					color: {
						...state.color,
						colors: newColors,
						targetColor: '',
						editIdx: undefined,
					},
				};
			} else {
				return {
					...state,
					color: {
						...state.color,
						colors: [
							...state.color.colors,
							state.color.targetColor,
						],
						targetColor: '',
					},
				};
			}
		}),
	editColor: (idx, color) =>
		set((state) => ({
			...state,
			color: { ...state.color, editIdx: idx, targetColor: color },
		})),
	removeColor: () =>
		set((state) => ({
			...state,
			color: {
				colors: state.color.colors.filter(
					(_, i) => i !== state.color.editIdx,
				),
				targetColor: '',
				editIdx: undefined,
			},
		})),
	setError: (error) => set((state) => ({ ...state, error })),
	reset: () => set((state) => ({ ...state, error: undefined })),
	setClear: () => set({ ...initial, transmission: 'manual', motor: 'benz' }),
}));
