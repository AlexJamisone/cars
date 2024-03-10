import { useCreateCar } from '@/store/useCreateCare';
import { Car } from '@/types';
import { api } from '@/utils/api';
import { createSchema, parsingError } from '@/utils/validation';
import { Button, useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const Action = () => {
	const toast = useToast();
	const state = useCreateCar();
	const queryClien = useQueryClient();
	const { mutate: create, isPending } = useMutation({
		mutationKey: ['create'],
		mutationFn: async (car: Omit<Car, 'id'>) => {
			const validate = createSchema.parse(car);
			const response = await api.post('/car', validate);
			return response.data;
		},
		onSuccess: () => {
			queryClien.invalidateQueries({ queryKey: ['cars'] });
			toast({
				description: `Машина ${state.inputs.brand} ${state.inputs.model} успешно создана`,
				status: 'success',
			});
			state.setClear();
		},

		onError: ({ message }) => {
			const handlError = parsingError(message);
			state.setError({ isError: true, type: handlError });
		},
	});
	return (
		<Button
			w="full"
			colorScheme="teal"
			mb={5}
			isLoading={isPending}
			onClick={() => {
				create({
					transmission: state.transmission,
					price: state.inputs.price,
					type: state.motor,
					year: state.inputs.year,
					brand: state.inputs.brand,
					image: state.image,
					model: state.inputs.model,
					power: state.inputs.power,
					colors: state.color.colors,
					description: state.inputs.description,
				});
			}}
		>
			Создать
		</Button>
	);
};
export default Action;
