import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { ruRU } from '@clerk/localizations';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/ui/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Cars Store',
	description: 'Choose youre car',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider localization={ruRU}>
			<html lang="en">
				<body className={inter.className}>
					<Navigation />
					<ReactQueryProvider>{children}</ReactQueryProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
