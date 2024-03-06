import { CreateState } from '@/store/useCreateCare';
import { HTMLInputTypeAttribute } from 'react';
import { v4 as uuid } from 'uuid';
type InputsProps = {
	id: string;
	label: string;
	name: keyof CreateState['inputs'];
	value?: CreateState['transmission'] | CreateState['motor'];
	placeholder: string;
	type?: HTMLInputTypeAttribute;
	isTextArea?: boolean;
	addons?: string;
	maxLength?: number;
};
export const filds: InputsProps[] = [
	{
		id: uuid(),
		label: 'Бренд',
		placeholder: 'Укажите бренд',
		type: 'text',
		name: 'brand',
	},
	{
		id: uuid(),
		label: 'Модель',
		name: 'model',
		placeholder: 'Укажите модель',
		type: 'text',
	},
	{
		id: uuid(),
		label: 'Описание',
		name: 'description',
		placeholder: 'Введите описание, особенности модели',
		type: 'text',
		isTextArea: true,
	},
	{
		id: uuid(),
		label: 'Цена',
		name: 'price',
		placeholder: 'Введи цену за единицу',
		type: 'number',
		addons: '$',
	},
	{
		id: uuid(),
		label: 'Год выпуска',
		name: 'year',
		placeholder: 'Укажи год выпуска машины',
		type: 'number',
		maxLength: 4,
	},
	{
		id: uuid(),
		label: 'Запас хода',
		name: 'power',
		placeholder: 'Укажи запас хода',
		type: 'number',
		addons: 'км',
		maxLength: 4,
	},
];
export const motors: Omit<InputsProps, 'name'>[] = [
	{
		id: uuid(),
		label: 'Бензиновый',
		placeholder: 'Бензиновый',
		type: 'checkbox',
		value: 'benz',
	},
	{
		id: uuid(),
		label: 'Дизель',
		value: 'dizel',
		placeholder: 'Дизель',
		type: 'checkbox',
	},
	{
		id: uuid(),
		label: 'Электро',
		value: 'electro',
		placeholder: 'Электро',
		type: 'checkbox',
	},
];
export const transmition: Omit<InputsProps, 'name'>[] = [
	{
		id: uuid(),
		label: 'Ручная',
		value: 'manual',
		placeholder: 'Ручная',
		type: 'checkbox',
	},
	{
		id: uuid(),
		label: 'Автоматическая',
		value: 'auto',
		placeholder: 'Авто',
		type: 'checkbox',
	},
	{
		id: uuid(),
		label: 'Робот',
		value: 'robot',
		placeholder: 'Робот',
		type: 'checkbox',
	},
];
