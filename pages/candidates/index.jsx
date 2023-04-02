import Card from "@/components/card";
import Layout from "@/components/layout";
import { Badge, Avatar, Flex, Box, Text } from "@chakra-ui/react";
import style from "@/styles/candidates.module.css";
import { Fragment } from "react";
import Head from "next/head";

const candidates = [
	{ name: "Berzan Ozejder", type: "boy", slug: "berzan" },
	{ name: "Georgios Alexander Tornaritis", type: "boy", slug: "george" },
	{ name: "Philemon Antoniou", type: "boy", slug: "philemon" },
	{ name: "Marisa Troullidou", type: "girl", slug: "marisa" },
	{ name: "Louissa Maria Maroudia", type: "girl", slug: "louissa" },
	{ name: "Tatiana Papadopoulou", type: "girl", slug: "tatiana" },
];

const girls = candidates.filter((candidate) => candidate.type == "girl").sort((a, b) => (a.name.split(" ").slice(-1).join(" ") > b.name.split(" ").slice(-1).join(" ") ? 1 : -1));
const boys = candidates.filter((candidate) => candidate.type == "boy").sort((a, b) => (a.name.split(" ").slice(-1).join(" ") > b.name.split(" ").slice(-1).join(" ") ? 1 : -1));

export default function Candidates() {
	return (
		<div className={style.outer}>
			<Head>
				<title>All Candidates | ES Student Elections</title>
			</Head>
			<Text>
				<strong>All Candidates</strong> in Alphabetical order
			</Text>
			<div className={style.page1}>
				<Text ml={4} fontWeight="400" fontSize="20px" color="black">
					HEAD GIRL CANDIDATES
				</Text>
				{girls.map((candidate) => {
					return <Card key={candidate.slug} name={candidate.name} type={candidate.type} img={candidate.img} slug={candidate.slug} />;
				})}
				<Text ml={4} fontWeight="400" fontSize="20px" color="black">
					HEAD BOY CANDIDATES
				</Text>
				{boys.map((candidate) => {
					return <Card key={candidate.slug} name={candidate.name} type={candidate.type} img={candidate.img} slug={candidate.slug} />;
				})}
			</div>
		</div>
	);
}
