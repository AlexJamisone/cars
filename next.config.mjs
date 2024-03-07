/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
			},
			{
				hostname: 'utfs.io',
				protocol: 'https',
			},
		],
	},
};

export default nextConfig;
