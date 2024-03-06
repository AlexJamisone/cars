import { motors, transmition } from '@/constants/inputs';
import { CreateState, useCreateCar } from '@/store/useCreateCare';
import { Select, Stack, Text } from '@chakra-ui/react';

const Selectors = () => {
	const [motor, setMotor] = useCreateCar((state) => [
		state.motor,
		state.setMotor,
	]);
	const [transmission, setTransmition] = useCreateCar((state) => [
		state.transmission,
		state.setTransmition,
	]);
	return (
		<Stack>
			<Text fontWeight={600}>Тип двигателя</Text>
			<Select
				defaultValue={motor}
				onChange={(e) =>
					setMotor(e.target.value as CreateState['motor'])
				}
			>
				{motors.map((item) => (
					<option key={item.id} value={item.value}>
						{item.label}
					</option>
				))}
			</Select>
			<Text fontWeight={600}>Тип трансмиссии</Text>
			<Select
				defaultValue={transmission}
				onChange={(e) =>
					setTransmition(
						e.target.value as CreateState['transmission'],
					)
				}
				isDisabled={motor === 'electro'}
			>
				{transmition.map((item) => (
					<option key={item.id} value={item.value}>
						{item.label}
					</option>
				))}
			</Select>
		</Stack>
	);
};
export default Selectors;
