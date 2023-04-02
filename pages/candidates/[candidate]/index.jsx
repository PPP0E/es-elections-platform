import style from "@/styles/candidate.module.css";
import { useRouter } from "next/router";
import { Image } from "next/image";
import { Spacer } from "@nextui-org/react";
import { Avatar, Button, Text, Badge } from "@chakra-ui/react";
import prisma from "@/prisma/client";
import Head from "next/head";
import { Fragment } from "react";

export default function page(props) {
	const router = useRouter();
	const { candidate } = router.query;
	return (
		<div className={style.outer}>
			<div onClick={() => router.push("/candidates")} className={style.back}>
				← All Candidates
			</div>
			<Head>
				<title>{props.candidate.name} | ES Student Elections</title>
			</Head>
			<div className={style.box1}>
				<Avatar className={style.picture} width={185} height={185} src={`/attributes/candidates/${candidate}.jpg`} />
				<Text className={style.name}>{props.candidate.name ?? "Name Surname"}</Text>
				{props.candidate.type == "boy" ? (
					<Badge ml="50px" colorScheme="green">
						HEAD BOY CANDIDATE
					</Badge>
				) : (
					<Badge ml="50px" colorScheme="yellow">
						HEAD GIRL CANDIDATE
					</Badge>
				)}
				<Text className={style.bio} ml="50px" mt="30px">
					{props.candidate.bio}
				</Text>
			</div>
			<div className={style.box2}></div>
		</div>
	);
}

export async function getServerSideProps(context) {
	const candidate = context.query.candidate;

	const candidateInfo = await prisma.candidate.findFirst({
		where: {
			slug: candidate,
		},
	});

	return {
		props: {
			candidate: {
				type: candidateInfo.type,
				name: candidateInfo.name,
				bio: candidateInfo.bio,

				speech: candidateInfo.speech,
				video: candidateInfo.video,

				website: candidateInfo.website,
				instagram: candidateInfo.instagram,
				facebook: candidateInfo.facebook,
			},
		},
	};
}
