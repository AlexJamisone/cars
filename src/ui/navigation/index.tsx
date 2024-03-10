'use client';
import { Stack } from '@chakra-ui/react';
import { UserButton, useAuth } from '@clerk/nextjs';
import { Link, Image } from '@chakra-ui/next-js';
import DropMenu from '../menu';
import { useQueryClient } from '@tanstack/react-query';
const Navigation = () => {
	const { isSignedIn } = useAuth();
	const queryClient = useQueryClient();
	return (
		<Stack
			as="header"
			alignItems="center"
			w="full"
			position="fixed"
			zIndex={20}
			bgColor="white"
		>
			<Stack as="nav" alignItems="center" gap={10} direction="row">
				<Link
					href={'/'}
					onClick={() =>
						queryClient.removeQueries({ queryKey: ['cars'] })
					}
				>
					<Image
						pointerEvents="none"
						src="/logo.png"
						width={125}
						height={125}
						alt="logo"
					/>
				</Link>
				{isSignedIn ? (
					<Stack direction="row" gap={5}>
						<UserButton />
						<DropMenu />
					</Stack>
				) : (
					<Link href="/sign-in" _hover={{ textDecoration: 'none' }}>
						Вход
					</Link>
				)}
			</Stack>
		</Stack>
	);
};
export default Navigation;
