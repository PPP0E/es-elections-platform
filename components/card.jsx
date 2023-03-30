import { Flex, Avatar, Box, Text, Badge } from "@chakra-ui/react";
import style from "./card.module.css";

export default function Card(props) {
	if (props.type == "b") {
		return (
			<Flex className={style.card}>
				<Avatar width="60px" height="60px" src="https://bit.ly/sage-adebayo" />
				<Box ml="3">
					<Text fontWeight="bold">{props.name || "Name Surname"}</Text>
					<Badge colorScheme="blue">HEAD BOY CANDIDATE</Badge>
				</Box>
			</Flex>
		);
	}
	if (props.type == "g") {
		return (
			<Flex className={style.card}>
				<Avatar width="60px" height="60px" src="https://bit.ly/sage-adebayo" />
				<Box ml="3">
					<Text fontWeight="bold">{props.name || "Name Surname"}</Text>
					<Badge colorScheme="pink">HEAD GIRL CANDIDATE</Badge>
				</Box>
			</Flex>
		);
	}
}
