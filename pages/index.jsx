import { Avatar, Button } from "@chakra-ui/react";
import Image from "next/image";
import { Fragment, useEffect } from "react";
import style from "@/styles/index.module.css";
import { useRouter } from "next/router";
import { Spacer } from "@nextui-org/react";
import Head from "next/head";
import { Text } from "@chakra-ui/react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { useState } from "react";

export default function page() {
	const [screensize, setScreensize] = useState({ width: 1920, height: 1080 });
	console.log(screensize);

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

	useEffect(() => {
		const width = window.innerWidth;
		const height = window.innerHeight;
		if (width == "Infinity" || height == "Infinity") setScreensize({ width: 1920, height: 1080 });
		else {
			setScreensize({ width: window.innerWidth, height: window.innerHeight });
		}
	}, []);

	const router = useRouter();

	return (
		<Fragment>
			<Confetti width={screensize.width} height={screensize.height} />

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
