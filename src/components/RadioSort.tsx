import {
	Button,
	ButtonGroup,
	Icon,
	IconButton,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItemOption,
	MenuList,
	MenuOptionGroup,
} from '@chakra-ui/react';
import { GrPowerReset } from 'react-icons/gr';

type RadioSortProps = {
	handlRadio: (value: string | string[], name: string) => void;
	name: string[];
	value: string[];
	reset: () => void;
};
const RadioSort = ({ handlRadio, name, value, reset }: RadioSortProps) => {
	return (
		<Menu>
			<ButtonGroup variant="outline" isAttached>
				<MenuButton w="full" as={Button}>
					Сортировка
				</MenuButton>
				{(value[0] || value[1]) && (
					<IconButton
						onClick={reset}
						aria-label="reset"
						icon={<Icon as={GrPowerReset} />}
					/>
				)}
			</ButtonGroup>
			<MenuList>
				<MenuOptionGroup
					title="По цене"
					type="radio"
					value={value[0]}
					onChange={(value) => handlRadio(value, name[0])}
				>
					<MenuItemOption value="asc">По возрастанию</MenuItemOption>
					<MenuItemOption value="desc">По убыванию</MenuItemOption>
				</MenuOptionGroup>
				<MenuDivider />
				<MenuOptionGroup
					value={value[1]}
					type="radio"
					title="По году"
					onChange={(value) => handlRadio(value, name[1])}
				>
					<MenuItemOption value="asc">По возрастанию</MenuItemOption>
					<MenuItemOption value="desc">По убыванию</MenuItemOption>
				</MenuOptionGroup>
			</MenuList>
		</Menu>
	);
};
export default RadioSort;
