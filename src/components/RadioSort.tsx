import { HStack, Icon, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { PiSortAscendingLight, PiSortDescendingLight } from 'react-icons/pi';

type RadioSortProps = {
	handlRadio: (value: string, name: string) => void;
	label: string;
	value: string;
	name: string;
	isDisabel: boolean;
};

const RadioSort = ({
	label,
	handlRadio,
	value,
	name,
	isDisabel,
}: RadioSortProps) => {
	return (
		<RadioGroup
			onChange={(value) => handlRadio(value, name)}
			value={value}
			name={name}
			isDisabled={isDisabel}
		>
			<Text as="span" fontWeight={600} textColor="blackAlpha.800">
				{label}
			</Text>
			<Stack>
				<HStack>
					<Radio value="desc">По убыванию</Radio>
					<Icon as={PiSortDescendingLight} />
				</HStack>
				<HStack>
					<Radio value="asc">По возрастанию</Radio>
					<Icon as={PiSortAscendingLight} />
				</HStack>
			</Stack>
		</RadioGroup>
	);
};
export default RadioSort;
