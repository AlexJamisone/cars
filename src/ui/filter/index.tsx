import Brands from './Brands';
import Colors from './Colors';
import Layout from '@/components/Layout';

const Filter = () => {
	return (
		<Layout
			maxW={350}
			p={3}
			boxShadow="md"
			position="fixed"
			h="fit-content"
			rounded="lg"
			mt={130}
		>
			<Brands />
			<Colors />
		</Layout>
	);
};
export default Filter;
