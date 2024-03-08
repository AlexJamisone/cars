import { useDeletMode } from '@/store/useDeletMode';
import { api } from '@/utils/api';
import { Link } from '@chakra-ui/next-js';
import {
	MenuButton,
	Menu,
	MenuList,
	MenuItem,
	Icon,
	Button,
	IconButton,
	Stack,
	useToast,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IoMdTrash } from 'react-icons/io';
import { IoAdd, IoTrashOutline } from 'react-icons/io5';
const DropMenu = () => {
	const toast = useToast();
	const queryClient = useQueryClient();
	const clear = useDeletMode((state) => state.setClear);
	const { mutate: deletCars, isPending } = useMutation({
		mutationKey: ['delet-cars'],
		mutationFn: async (ids: string[]) => {
			const response = await api.post('/cars/delete', ids);
			return response.data;
		},
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ['cars'] });
			clear();
			toast({
				description: 'Выбранные машины успешно удалены',
				status: 'success',
			});
		},
		onError: ({ message }) => {
			toast({
				description: message,
				status: 'error',
			});
		},
	});
	const setMode = useDeletMode((state) => state.setMode);
	const ids = useDeletMode((state) => state.ids);
	return (
		<Menu>
			<Stack direction="row" alignItems="center">
				<MenuButton w="fit-content" as={Button}>
					Действия
				</MenuButton>
				{ids.length !== 0 && (
					<IconButton
						isLoading={isPending}
						onClick={() => deletCars(ids)}
						aria-label="remove-cars"
						icon={<Icon as={IoMdTrash} />}
						colorScheme="red"
						rounded="full"
						size="sm"
					/>
				)}
			</Stack>
			<MenuList>
				<MenuItem
					icon={<Icon as={IoAdd} boxSize={5} />}
					as={Link}
					href={'car/create'}
					_hover={{
						textDecoration: 'none',
					}}
				>
					Добавить машину
				</MenuItem>
				<MenuItem
					icon={
						<Icon as={IoTrashOutline} boxSize={5} color="red.300" />
					}
					onClick={() => setMode()}
				>
					Режим удаления
				</MenuItem>
			</MenuList>
		</Menu>
	);
};
export default DropMenu;
