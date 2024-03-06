'use client';
import { ChakraProvider } from '@chakra-ui/react';
const CSSProvider = ({ children }: React.PropsWithChildren) => {
	return <ChakraProvider>{children}</ChakraProvider>;
};
export default CSSProvider;
