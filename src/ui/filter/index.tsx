import Brands from './Brands';
import Colors from './Colors';
import Layout from '@/components/Layout';
import Sort from './Sort';

const Filter = () => {
	return (
		<Layout
			as="aside"
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
			<Sort />
		</Layout>
	);
};
export default Filter;
