import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
	publicRoutes: [
		'/',
		'/api/cars',
		'/api/filter',
		'/api/filter/colors',
		/^\/car\/(?!create$)(.+)$/,
		'/api/car/(.*)',
		'/sign-in',
		'/sign-up',
		'/api/uploadthing',
	],
});
export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
