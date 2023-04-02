import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { Fragment } from "react";
import style from "@/styles/index.module.css";
import { useRouter } from "next/router";
import { Spacer } from "@nextui-org/react";
import Head from "next/head";

export default function page() {
	const router = useRouter();
	return (
		<div className={style.page}>
			<Head>
				<title>ES Student Elections</title>
			</Head>
			<div className={style.everyone}>
				<Image alt="Photograph of all candidates together" src="/attributes/images/everyone.jpg" width={2048} height={1536} />
			</div>
			<Spacer y={1} />
			<Button onClick={() => router.push("/candidates")} colorScheme="blue">
				See Candidates 🚀
			</Button>
		</div>
	);
}
