import style from "@/styles/voting.module.css";
import { Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Page() {
	return (
		<div className={style.page}>
			<Head>
				<title>Voting Procedure | ES Student Elections</title>
			</Head>
			<Text fontSize={25} className={style.outer}>
				The <strong>Voting Procedure</strong> and <strong>Rules</strong> for the Student Elections
			</Text>
			<Text className={style.outer}>The voting will take place during form tutor period, 7th of April 2023 with the results being announced on the same day.</Text>
			<Text className={style.outer}>During voting each registered Year 3, 4, 5 & 6 Student will receive an email with a unique link to vote. Each Link can be used once and you can not change your vote after submitting. You should not share your link with anyone.</Text>
			<Text className={style.outer}>Some students may receive their voting emails earlier than others as the system is only able to send a specified amount of emails each minute.</Text>
			<Text className={style.outer}>Please contact your form tutor if you encounter an issue while voting.</Text>
		</div>
	);
}
