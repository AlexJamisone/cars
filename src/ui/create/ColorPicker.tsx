import { useCreateCar } from '@/store/useCreateCare';
import { Icon, IconButton, Input, Stack, Tag, Text } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { IoMdCheckmark, IoMdTrash } from 'react-icons/io';

const ColorPicker = () => {
	const [color, setColor, add, remove, edit, error, reset] = useCreateCar(
		(state) => [
			state.color,
			state.setColor,
			state.addColor,
			state.removeColor,
			state.editColor,
			state.error,
			state.reset,
		],
	);
	const handlColor = (e: ChangeEvent<HTMLInputElement>) => {
		setColor(e.target.value);
	};
	const isEdit = color.editIdx !== undefined;
	const pathError = error?.type.find((item) => item.path === 'colors');
	const isError = error?.isError && pathError;
	return (
		<Stack
			p={3}
			boxShadow="lg"
			rounded="xl"
			border={isError ? '1px solid red' : undefined}
		>
			<Text fontWeight={600}>Цвета</Text>
			<Stack direction="row">
				{color.colors.map((item, idx) => (
					<Tag
						key={item}
						bgColor={item}
						cursor="pointer"
						onClick={() => edit(idx, item)}
					/>
				))}
			</Stack>
			{!(color.colors.length > 4) && (
				<Stack direction="row" alignItems="center">
					<Input
						w={100}
						type="color"
						onChange={handlColor}
						value={color.targetColor}
					/>
					{color.targetColor && (
						<Stack direction="row">
							<IconButton
								aria-label="confirm"
								icon={<Icon as={IoMdCheckmark} />}
								colorScheme={isEdit ? 'blue' : 'green'}
								rounded="full"
								size="xs"
								onClick={() => {
									if (error?.isError) {
										reset();
									}
									add();
								}}
							/>
							{isEdit && (
								<IconButton
									aria-label="delet-color"
									icon={<Icon as={IoMdTrash} />}
									size="xs"
									rounded="full"
									colorScheme="red"
									onClick={() => remove()}
								/>
							)}
						</Stack>
					)}
				</Stack>
			)}
			{isError && (
				<Text textColor="red.400" fontSize="small">
					{pathError.message}
				</Text>
			)}
		</Stack>
	);
};
export default ColorPicker;
