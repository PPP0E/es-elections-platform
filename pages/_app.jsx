import Layout from "@/components/layout";
import "@/styles/globals.css";
import { SSRProvider } from "@react-aria/ssr";
import { ChakraProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<SSRProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SSRProvider>
		</ChakraProvider>
	);
}

export default MyApp;
