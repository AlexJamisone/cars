import { Icon, Stack, Text } from '@chakra-ui/react';
import { IoCarSportSharp } from 'react-icons/io5';

type NoDataProps = {
	message: string;
};
const NoData = ({ message }: NoDataProps) => {
	return (
		<Stack
			direction="row"
			alignItems="center"
			textColor="blackAlpha.500"
			pt={100}
		>
			<Icon as={IoCarSportSharp} fontSize="45px" />
			<Text fontSize="3xl">{message}</Text>
		</Stack>
	);
};
export default NoData;
