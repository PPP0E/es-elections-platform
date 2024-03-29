import style from "@/styles/candidate.module.css";
import { useRouter } from "next/router";
import { Image } from "next/image";
import { Spacer } from "@nextui-org/react";
import { Avatar, Button, Text, Badge } from "@chakra-ui/react";
import prisma from "@/prisma/client";
import Head from "next/head";
import { Fragment } from "react";
import { GrTextAlignFull } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";

export default function page(props) {
	const router = useRouter();
	const { candidate } = router.query;
	return (
		<div className={style.outer}>
			<div onClick={() => router.push("/candidates")} className={style.back}>
				← All Candidates
			</div>
			<div onClick={() => router.push("/candidates")} className={style.backMobile}>
				←
			</div>
			<Head>
				<title>{`${props.candidate.name} | ES Student Elections`}</title>
			</Head>
			<div className={style.box1}>
				<Avatar className={style.picture} width={185} height={185} src={`/attributes/candidates/${candidate}.jpg`} />
				<Text className={style.name}>{props.candidate.name ?? "Name Surname"}</Text>
				{props.candidate.type == "boy" ? (
					<Badge className={style.label} ml="50px" colorScheme="green">
						HEAD BOY CANDIDATE
					</Badge>
				) : (
					<Badge className={style.label} ml="50px" colorScheme="yellow">
						HEAD GIRL CANDIDATE
					</Badge>
				)}
				<Text className={style.bio} ml="50px" mt="20px">
					{props.candidate.bio}
				</Text>
			</div>
			<div className={style.divider}></div>
			<div className={style.box2}>
				<div className={style.instagram}>
					<AiOutlineInstagram color="white" className={style.InstaIcon} />
					<div>
						<strong>Instagram</strong>
						<br />@{props.candidate.instagram}
					</div>
					<br />
					<Button as={Link} target="_blank" href={`https://instagram.com/${props.candidate.instagram}`}>
						Follow
					</Button>
				</div>
				<div className={style.application}>
					<GrTextAlignFull className={style.textIcon} />
					Read my application
					<Button onClick={() => router.push(`/applications/${candidate}.pdf`)} ml="auto">
						Read
					</Button>
				</div>

				{props.candidate.speech && <iframe allowFullScreen className={style.speech} src={`https://www.youtube.com/embed/${props.candidate.speech}?modestbranding=1&rel=0&showinfo=0`} title="YouTube video player1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
				{!props.candidate.speech && (
					<div className={style.speech}>
						<Text height="100%" borderRadius="15px" color="white" background="black" padding="5px">
							We are working on making the speeches available soon.
							<br />
							Please check back later in a few hours.
						</Text>
					</div>
				)}
				{props.candidate.website && (
					<div className={style.website}>
						<TbWorld className={style.textIcon} />
						Visit my website
						<Button target="_blank" href={props.candidate.website} as={Link} ml="auto">
							Visit
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}

export async function getStaticProps({ params }) {
	const candidate = params.candidate;

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
		revalidate: 1200,
	};
}

export async function getStaticPaths() {
	return {
		paths: [{ params: { candidate: "berzan" } }, { params: { candidate: "marisa" } }, { params: { candidate: "louissa" } }, { params: { candidate: "tatiana" } }, { params: { candidate: "george" } }, { params: { candidate: "philemon" } }],
		fallback: false, // can also be true or 'blocking'
	};
}
