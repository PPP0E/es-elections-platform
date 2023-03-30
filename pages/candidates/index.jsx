import Card from "@/components/card";
import Layout from "@/components/layout";
import { Badge, Avatar, Flex, Box, Text } from "@chakra-ui/react";
import style from "@/styles/candidates.module.css";
import { Fragment } from "react";

const candidates = [
	{ name: "Berzan Ozejder", type: "b", slug: "berzan" },
	{ name: "Georgios Alexander Tornaritis", type: "b", slug: "tornaritis" },
	{ name: "Philemon Antoniou", type: "b", slug: "philios" },
	{ name: "Marisa Troullidou", type: "g", slug: "marisa" },
	{ name: "Louissa Maria Maroudia", type: "g", slug: "louissa" },
	{ name: "Tatiana Papadopoulou", type: "g", slug: "tatiana" },
];

const girls = candidates.filter((candidate) => candidate.type == "g").sort((a, b) => (a.name > b.name ? 1 : -1));
const boys = candidates.filter((candidate) => candidate.type == "b").sort((a, b) => (a.name > b.name ? 1 : -1));

export default function Candidates() {
	return (
		<div className={style.outer}>
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
