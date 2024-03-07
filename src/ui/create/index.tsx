import { Stack } from '@chakra-ui/react';
import FildsInputs from './FildsInputs';
import Selectors from './Selectors';
import Action from './Action';
import ImageUpload from './ImageUpload';

const Create = () => {
	return (
		<Stack my={5} gap={5}>
			<ImageUpload />
			<Stack direction="row" gap={10} alignItems="center">
				<FildsInputs />
				<Selectors />
			</Stack>
			<Action />
		</Stack>
	);
};
export default Create;
