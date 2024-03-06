import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
	publicRoutes: [
		'/',
		'/api/cars',
		'/car/(.*)',
		'/api/car/(.*)',
		'/sign-in',
		'/sign-up',
	],
});
export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
