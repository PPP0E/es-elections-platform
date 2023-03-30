import style from "@/styles/candidate.module.css";
import { useRouter } from "next/router";
import { Image } from "next/image";
import { Spacer } from "@nextui-org/react";
import { Avatar, Button } from "@chakra-ui/react";

export default function page() {
	const router = useRouter();
	const { candidate } = router.query;
	return (
		<div className={style.outer}>
			<div>
				<Avatar width={250} height={250} src={`/attributes/candidates/${candidate}.jpg`} />
			</div>
		</div>
	);
}
