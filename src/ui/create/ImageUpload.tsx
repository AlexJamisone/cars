import { useCreateCar } from '@/store/useCreateCare';
import { UploadDropzone } from '@/utils/uploadthing';
import { Icon, IconButton, Stack, useToast } from '@chakra-ui/react';
import { IoCloseCircle } from 'react-icons/io5';
import '@uploadthing/react/styles.css';
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';
import { api } from '@/utils/api';

const ImageUpload = () => {
	const [image, setImage] = useCreateCar((state) => [
		state.image,
		state.setImage,
	]);
	const toast = useToast();

	const { mutate: deletImage, isPending } = useMutation({
		mutationKey: ['delet-img'],
		mutationFn: async (url: string) => {
			const response = await api.post('/car/image', url);
			return response.data;
		},
		onSuccess: () => {
			setImage('');
			toast({
				description: 'Картинка успешно удалена',
				status: 'info',
				isClosable: true,
			});
		},
		onError: ({ message }) => {
			toast({
				description: message,
				status: 'error',
			});
		},
	});
	return (
		<Stack alignItems="center">
			{!image && (
				<UploadDropzone
					endpoint="imageUploader"
					onClientUploadComplete={(res) => {
						setImage(res[0].url);
						toast({
							description: 'Картинка успешно загружена',
							status: 'info',
							isClosable: true,
						});
					}}
					onUploadError={({ message }) => {
						toast({
							description: message,
							status: 'error',
							isClosable: true,
						});
					}}
				/>
			)}
			{image && (
				<Stack position="relative" width="fit-content">
					<IconButton
						icon={
							<Icon
								as={IoCloseCircle}
								fill="red.400"
								boxSize={7}
							/>
						}
						aria-label="delet-image"
						position="absolute"
						onClick={() => deletImage(image)}
						isLoading={isPending}
						top={-3}
						right={-3}
						rounded="full"
						size="sm"
						variant="ghost"
						colorScheme="red"
					/>
					<Image
						src={image}
						alt="car-image"
						quality={100}
						width={150}
						height={150}
					/>
				</Stack>
			)}
		</Stack>
	);
};
export default ImageUpload;
