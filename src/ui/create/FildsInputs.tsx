import { filds } from '@/constants/inputs';
import { CreateState, useCreateCar } from '@/store/useCreateCare';
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	InputGroup,
	InputLeftAddon,
	Stack,
	Textarea,
} from '@chakra-ui/react';
import { FormEvent } from 'react';

const FildsInputs = () => {
	const motor = useCreateCar((state) => state.motor);
	const [inputs, setFilds, error, reset] = useCreateCar((state) => [
		state.inputs,
		state.setFilds,
		state.error,
		state.reset,
	]);

	const handlFilds = (e: FormEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;
		if (error?.isError) {
			reset();
		}
		setFilds({
			[name]: name === ('price' || 'year' || 'power') ? +value : value,
		} as CreateState['inputs']);
	};

	return (
		<Stack>
			{filds.map((item) => (
				<FormControl
					key={item.id}
					isInvalid={
						error?.isError &&
						error.type.findIndex(
							(err) => err.path === item.name,
						) !== -1
					}
				>
					<FormLabel htmlFor={item.name}>{item.label}</FormLabel>
					<InputGroup>
						{item.addons && (
							<InputLeftAddon
								pointerEvents="none"
								userSelect="none"
							>
								{item.addons}
							</InputLeftAddon>
						)}
						<Input
							as={item.isTextArea ? Textarea : undefined}
							placeholder={item.placeholder}
							name={item.name}
							onInput={handlFilds}
							id={item.name}
							value={inputs[item.name]}
							onChange={handlFilds}
							maxLength={item.maxLength}
							isDisabled={
								item.name === 'power' && !(motor === 'electro')
							}
						/>
					</InputGroup>
					<FormErrorMessage>
						{
							error?.type.find((err) => err.path === item.name)
								?.message
						}
					</FormErrorMessage>
				</FormControl>
			))}
		</Stack>
	);
};
export default FildsInputs;
