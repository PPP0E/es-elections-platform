import Card from "@/components/card";
import Layout from "@/components/layout";
import { Badge, Avatar, Flex, Box, Text } from "@chakra-ui/react";
import style from "@/styles/candidates.module.css";
import { Fragment } from "react";

const candidates = [
	{ name: "Berzan Ozejder", type: "b", img: "https://bit.ly/sage-adebayo", slug: "berzan" },
	{ name: "George-Alexander Tornaritis", type: "b", img: "https://bit.ly/sage-adebayo", slug: "tornaritis" },
	{ name: "Philemon Antoniou", type: "b", img: "https://bit.ly/sage-adebayo", slug: "philios" },
	{ name: "Marisa Troulllidou", type: "g", img: "https://bit.ly/sage-adebayo", slug: "marisa" },
	{ name: "Louissa Maria Maroudia", type: "g", img: "https://bit.ly/sage-adebayo", slug: "louissa" },
	{ name: "Tatiana Papadopoulou", type: "g", img: "https://bit.ly/sage-adebayo", slug: "tatiana" },
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
				<Text ml={3} fontWeight="700" fontSize="20px" color="black">
					Head Girl Candidates
				</Text>
				{girls.map((candidate) => {
					return <Card name={candidate.name} type={candidate.type} img={candidate.img} slug={candidate.slug} />;
				})}
			</div>
			<div className={style.page2}>
				<Text ml={3} fontWeight="700" fontSize="20px" color="black">
					Head Boy Candidates
				</Text>
				{boys.map((candidate) => {
					return <Card name={candidate.name} type={candidate.type} img={candidate.img} slug={candidate.slug} />;
				})}
			</div>
		</div>
	);
}
