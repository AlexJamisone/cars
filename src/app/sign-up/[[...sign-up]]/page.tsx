import Layout from '@/components/Layout';
import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
	return (
		<Layout>
			<SignUp signInUrl="/sign-in" afterSignUpUrl="/" />
		</Layout>
	);
};
export default SignUpPage;
