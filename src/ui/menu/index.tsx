import { useDeletMode } from '@/store/useDeletMode';
import { api } from '@/utils/api';
import { Link } from '@chakra-ui/next-js';
import { HiDotsVertical } from 'react-icons/hi';
import {
	MenuButton,
	Menu,
	MenuList,
	MenuItem,
	Icon,
	IconButton,
	Stack,
	useToast,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IoMdTrash } from 'react-icons/io';
import { IoAdd, IoTrashOutline, IoCarSportSharp } from 'react-icons/io5';
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
			await queryClient.invalidateQueries({
				queryKey: ['cars', 'brands', 'colors'],
			});
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
	const onDelet = useDeletMode((state) => state.onDelet);
	const ids = useDeletMode((state) => state.ids);
	return (
		<Menu>
			{({ isOpen }) => (
				<>
					<Stack direction="row" alignItems="center">
						<MenuButton
							w="fit-content"
							as={IconButton}
							aria-label="menu"
							icon={
								<Icon
									as={HiDotsVertical}
									color="blackAlpha.800"
								/>
							}
							transform={isOpen ? 'rotate(90deg)' : undefined}
							variant="outline"
							rounded="full"
							size="sm"
						/>
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
					<MenuList position="relative" zIndex={100}>
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
								<Icon
									as={
										onDelet
											? IoCarSportSharp
											: IoTrashOutline
									}
									boxSize={5}
									color={
										onDelet ? 'blackAlpha.700' : 'red.300'
									}
								/>
							}
							onClick={() => setMode()}
						>
							{onDelet ? 'Обычный режим' : 'Режим удаления'}
						</MenuItem>
					</MenuList>
				</>
			)}
		</Menu>
	);
};
export default DropMenu;
