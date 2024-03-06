'use client';
import { Stack } from '@chakra-ui/react';
import { UserButton, useAuth } from '@clerk/nextjs';
import { Link, Image } from '@chakra-ui/next-js';
const Navigation = () => {
	const { isSignedIn } = useAuth();
	return (
		<Stack as="header" alignItems="center">
			<Stack as="nav" alignItems="center" gap={10} direction="row">
				<Link href="/">
					<Image
						pointerEvents="none"
						src="/logo.png"
						width={149}
						height={149}
						alt="logo"
					/>
				</Link>
				{isSignedIn ? (
					<UserButton />
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
