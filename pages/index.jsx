import { Avatar, Button } from "@chakra-ui/react";
import Image from "next/image";
import { Fragment, useEffect } from "react";
import style from "@/styles/index.module.css";
import { useRouter } from "next/router";
import { Spacer } from "@nextui-org/react";
import Head from "next/head";
import { Text } from "@chakra-ui/react";
import Confetti from "react-confetti";
import useWindowDimensions from "@/hooks/useWindowDimension";

export default function page() {
	const { width, height } = useWindowDimensions();

	function winner(name, image, position) {
		return (
			<div className={style.winner}>
				<div style={{ backgroundImage: `url(/attributes/candidates/${image}.jpg)` }} className={style.left}></div>
				<div className={style.right}>
					<Text fontSize="17px" fontWeight="400">
						{position}
					</Text>
					<Text fontSize="17px" fontWeight="600">
						{name}
					</Text>
				</div>
			</div>
		);
	}

	const router = useRouter();

	return (
		<Fragment>
			{width && <Confetti width={width} height={height} />}

			<Head>
				<title>ES Student Elections</title>
			</Head>
			<div className={style.page}>
				<div className={style.winners}>
					<Text fontSize="20px" fontWeight="600">
						Winners of the 2023 Elections
					</Text>
					{winner("Marisa Troullidou", "marisa", "Head Girl")}
					{winner("Philemon Antoniou", "philemon", "Head Boy")}
					{winner("Louissa Maria Maroudia", "louissa", "Deputy Head Girl")}
					{winner("George Alexander Tornaritis", "george", "Deputy Head Boy")}
					<Spacer y={1} />
					<Button onClick={() => router.push("/candidates")} colorScheme="blue">
						See All Candidates
					</Button>
				</div>
			</div>
		</Fragment>
	);
}
