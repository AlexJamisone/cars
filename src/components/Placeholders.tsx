import { Skeleton, SkeletonProps, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface PlaceholdersProps extends SkeletonProps {
	count: number;
}
const Placeholders = ({ count, ...props }: PlaceholdersProps) => {
	const placeholders = new Array(count).fill(0).map((_, index) => index + 1);
	return (
		<Stack direction="row" flexWrap="wrap" justifyContent="center">
			{placeholders.map((_, idx) => (
				<Skeleton as={motion.div} layout key={idx} {...props} />
			))}
		</Stack>
	);
};
export default Placeholders;
