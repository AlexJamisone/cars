import { useCreateCar } from '@/store/useCreateCare';
import { Car } from '@/types';
import { api } from '@/utils/api';
import { Button, Stack, useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const Action = () => {
	const toast = useToast();
	const state = useCreateCar();
	const queryClien = useQueryClient();
	const { mutate: create, isPending } = useMutation({
		mutationKey: ['create'],
		mutationFn: async (car: Omit<Car, 'id'>) => {
			const response = await api.post('/car', car);
			return response.data;
		},
		onSuccess: () => {
			queryClien.invalidateQueries({ queryKey: ['cars'] });
			toast({
				description: `Машина ${state.inputs.model} ${state.inputs.brand} успешно создана`,
				status: 'success',
			});
			state.setClear();
		},
		onError: ({ message }) => {
			console.log(message);
			toast({
				description: message,
				status: 'error',
			});
		},
	});
	return (
		<Stack>
			<Button
				isLoading={isPending}
				onClick={() =>
					create({
						transmission: state.transmission,
						price: state.inputs.price,
						type: state.motor,
						year: state.inputs.year,
						brand: state.inputs.brand,
						image: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
						model: state.inputs.model,
						power: state.inputs.power,
						colors: state.colors,
						description: state.inputs.description,
					})
				}
			>
				Создать
			</Button>
		</Stack>
	);
};
export default Action;
