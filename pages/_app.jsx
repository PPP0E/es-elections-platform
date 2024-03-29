import Layout from "@/components/layout";
import "@/styles/globals.css";
import { SSRProvider } from "@react-aria/ssr";
import { ChakraProvider } from "@chakra-ui/react";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
	return (
		<SSRProvider>
			<SessionProvider session={pageProps.session}>
				<ChakraProvider>
					<Layout>
						<Component {...pageProps} />
						<Analytics />
					</Layout>
				</ChakraProvider>
			</SessionProvider>
		</SSRProvider>
	);
}

export default MyApp;
