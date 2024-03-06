import { Link } from '@chakra-ui/next-js';
import {
	MenuButton,
	Menu,
	MenuList,
	MenuItem,
	Icon,
	Button,
} from '@chakra-ui/react';
import { IoAdd, IoTrashOutline } from 'react-icons/io5';
const DropMenu = () => {
	return (
		<Menu>
			<MenuButton w="fit-content" as={Button}>
				Действия
			</MenuButton>
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
				>
					Режим удаления
				</MenuItem>
			</MenuList>
		</Menu>
	);
};
export default DropMenu;
