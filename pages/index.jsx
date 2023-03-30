import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { Fragment } from "react";
import style from "@/styles/index.module.css";
import { useRouter } from "next/router";

export default function page() {
	const router = useRouter();
	return (
		<div className={style.page}>
			<div className={style.everyone}>
				<Image src="/attributes/images/everyone.jpg" width={2048} height={1536} />
			</div>
			<Button onClick={() => router.push("/candidates")} colorScheme="blue">
				See Candidates 🚀
			</Button>
		</div>
	);
}
