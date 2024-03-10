'use client';
import Layout from '@/components/Layout';
import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
	return (
		<Layout pt={150}>
			<SignUp signInUrl="/sign-in" afterSignUpUrl="/" />
		</Layout>
	);
};
export default SignUpPage;
