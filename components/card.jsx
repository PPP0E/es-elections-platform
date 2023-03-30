import { Flex, Avatar, Box, Text, Badge, Button } from "@chakra-ui/react";
import style from "./card.module.css";
import { useRouter } from "next/router";

export default function Card(props) {
	const router = useRouter();
	if (props.type == "b") {
		return (
			<Flex className={style.card}>
				<Avatar width="60px" height="60px" src={`/attributes/candidates/${props.slug}.jpg`} />
				<Box ml="3">
					<Text fontWeight="bold">{props.name || "Name Surname"}</Text>
					<Badge colorScheme="green">HEAD BOY CANDIDATE</Badge>
				</Box>
				<Button className={style.button} onClick={() => router.push(`/candidates/${props.slug}`)} mt="auto" mb="auto" ml="auto">
					Explore
				</Button>
			</Flex>
		);
	}
	if (props.type == "g") {
		return (
			<Flex className={style.card}>
				<Avatar width="60px" height="60px" src={`/attributes/candidates/${props.slug}.jpg`} />
				<Box ml="3">
					<Text fontWeight="bold">{props.name || "Name Surname"}</Text>
					<Badge colorScheme="yellow">HEAD GIRL CANDIDATE</Badge>
				</Box>
				<Button className={style.button} onClick={() => router.push(`/candidates/${props.slug}`)} mt="auto" mb="auto" ml="auto">
					Explore
				</Button>
			</Flex>
		);
	}
}
