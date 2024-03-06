import { filds } from '@/constants/inputs';
import { CreateState, useCreateCar } from '@/store/useCreateCare';
import {
	FormControl,
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
	const [inputs, setFilds] = useCreateCar((state) => [
		state.inputs,
		state.setFilds,
	]);

	const handlFilds = (e: FormEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;
		setFilds({
			[name]: name === ('price' || 'year' || 'power') ? +value : value,
		} as CreateState['inputs']);
	};

	return (
		<Stack>
			{filds.map((item) => (
				<FormControl key={item.id}>
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
				</FormControl>
			))}
		</Stack>
	);
};
export default FildsInputs;
