import { Stack } from '@chakra-ui/react';
import FildsInputs from './FildsInputs';
import Selectors from './Selectors';
import Action from './Action';

const Create = () => {
	return (
		<Stack>
			<Stack direction="row" gap={10} alignItems="center">
				<FildsInputs />
				<Selectors />
			</Stack>
			<Action />
		</Stack>
	);
};
export default Create;
