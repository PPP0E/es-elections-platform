import style from "@/styles/voting.module.css";
import { Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Page() {
	return (
		<div className={style.page}>
			<Head>
				<title>Voting Procedure | ES Student Elections</title>
			</Head>
			<Text fontSize={25} className={style.outer}>
				The <strong>Voting Procedure</strong> and <strong>Rules</strong> for the Student Elections
			</Text>
		</div>
	);
}
