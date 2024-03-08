import { Stack, StackProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Layout = ({ children, ...props }: StackProps) => {
	return (
		<Stack
			alignItems="center"
			as={motion.div}
			initial={{ opacity: 0, y: -100 }}
			animate={{
				opacity: 1,
				y: 0,
				transition: {
					type: 'spring',
					duration: 0.3,
					delay: 0.2,
				},
			}}
			{...props}
		>
			{children}
		</Stack>
	);
};
export default Layout;
