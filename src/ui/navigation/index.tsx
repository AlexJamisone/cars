'use client';
import { UserButton, useAuth } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
	const { isSignedIn } = useAuth();
	return (
		<header className="flex justify-center">
			<nav className="flex items-center gap-7">
				<Link href="/">
					<Image
						className="pointer-events-none"
						src="/logo.png"
						width={149}
						height={149}
						alt="logo"
					/>
				</Link>
				{isSignedIn ? (
					<UserButton />
				) : (
					<Link href="/sign-in">Вход</Link>
				)}
			</nav>
		</header>
	);
};
export default Navigation;
