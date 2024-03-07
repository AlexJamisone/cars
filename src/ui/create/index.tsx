import { Stack } from '@chakra-ui/react';
import FildsInputs from './FildsInputs';
import Selectors from './Selectors';
import Action from './Action';
import ImageUpload from './ImageUpload';
import ColorPicker from './ColorPicker';

const Create = () => {
	return (
		<Stack my={5} gap={5}>
			<ImageUpload />
			<Stack direction="row" gap={10} alignItems="center">
				<FildsInputs />
				<Stack gap={7}>
					<ColorPicker />
					<Selectors />
				</Stack>
			</Stack>
			<Action />
		</Stack>
	);
};
export default Create;
