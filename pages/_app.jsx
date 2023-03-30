import Layout from "@/components/layout";
import "@/styles/globals.css";
import { SSRProvider } from "@react-aria/ssr";
import { ChakraProvider } from "@chakra-ui/react";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
	return (
		<SSRProvider>
			<ChakraProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</SSRProvider>
	);
}

export default MyApp;
