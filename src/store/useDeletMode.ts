import { create } from 'zustand';

type DeletState = {
	onDelet: boolean;
	ids: string[];
};
type DeletAction = {
	setMode: () => void;
	setIds: (id: string) => void;
	setClear: () => void;
};
type DeletMode = DeletState & DeletAction;
const initial: DeletState = {
	onDelet: false,
	ids: [],
};
export const useDeletMode = create<DeletMode>((set) => ({
	...initial,
	setIds: (id) =>
		set((state) => ({
			...state,
			ids: state.ids.includes(id)
				? state.ids.filter((item) => item !== id)
				: [...state.ids, id],
		})),
	setMode: () => set((state) => ({ ...state, onDelet: !state.onDelet })),
	setClear: () => set(initial),
}));
