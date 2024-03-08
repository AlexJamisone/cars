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
		const { type, name, value } = e.currentTarget;
		if (error?.isError) {
			reset();
		}
		setFilds({
			[name]:
				type === 'number'
					? name === 'year'
						? +value.slice(0, 4)
						: +value
					: value,
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
							id={item.name}
							type={item.type}
							value={
								inputs[item.name] === 0 ? '' : inputs[item.name]
							}
							onInput={handlFilds}
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
