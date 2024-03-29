'use client';
import Layout from '@/components/Layout';
import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
	return (
		<Layout pt={150}>
			<SignIn signUpUrl="/sign-up" afterSignInUrl="/" />
		</Layout>
	);
};
export default SignInPage;
