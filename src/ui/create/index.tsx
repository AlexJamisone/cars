import { Stack } from '@chakra-ui/react';
import FildsInputs from './FildsInputs';
import Selectors from './Selectors';
import Action from './Action';
import ImageUpload from './ImageUpload';
import ColorPicker from './ColorPicker';
import Layout from '@/components/Layout';

const Create = () => {
	return (
		<Layout gap={5} pt={135}>
			<ImageUpload />
			<Stack direction="row" gap={10} alignItems="center">
				<FildsInputs />
				<Stack gap={7}>
					<ColorPicker />
					<Selectors />
				</Stack>
			</Stack>
			<Action />
		</Layout>
	);
};
export default Create;
