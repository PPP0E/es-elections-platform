import { Avatar, Button } from "@chakra-ui/react";
import Image from "next/image";
import { Fragment } from "react";
import style from "@/styles/index.module.css";
import { useRouter } from "next/router";
import { Spacer } from "@nextui-org/react";
import Head from "next/head";
import { Text } from "@chakra-ui/react";

export default function page() {
	function winner(name, image, position) {
		return (
			<div className={style.winner}>
				<div style={{ backgroundImage: `url(/attributes/candidates/${image}.jpg)` }} className={style.left}></div>
				<div className={style.right}>
					<Text fontSize="20px" fontWeight="400">
						{position}
					</Text>
					<Text fontSize="20px" fontWeight="600">
						{name}
					</Text>
				</div>
			</div>
		);
	}

	const router = useRouter();
	return (
		<Fragment>
			<Head>
				<title>ES Student Elections</title>
			</Head>
			<div className={style.page}>
				<div className={style.winners}>
					<Text fontSize="20px" fontWeight="600">
						Winners
					</Text>
					{winner("Marisa Troullidou", "marisa", "Head Girl")}
					{winner("Philemon Antoniou", "philemon", "Head Boy")}
					{winner("Louissa Maria Maroudia", "louissa", "Deputy Head Girl")}
					{winner("George Alexander Tornaritis", "george", "Deputy Head Boy")}

					<Button onClick={() => router.push("/candidates")} colorScheme="blue">
						See All Candidates 🚀
					</Button>
				</div>
			</div>
		</Fragment>
	);
}
