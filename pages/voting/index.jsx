import style from "@/styles/voting.module.css";
import { Text } from "@chakra-ui/react";

export default function Page() {
	return (
		<div className={style.page}>
			<Text fontSize={25} className={style.outer}>
				The <strong>Voting Procedure</strong> and <strong>Rules</strong> for the Student Elections
			</Text>
		</div>
	);
}
