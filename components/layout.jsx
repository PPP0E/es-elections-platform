import style from "./layout.module.css";
import { Navbar, Button, Link, Text, Spacer, Collapse } from "@nextui-org/react";
import { Text as TextChakra, Button as ButtonChakra } from "@chakra-ui/react";
import Image from "next/image";
import PageFooter from "@/components/footer";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Layout({ children }) {
	const [isCandidate, setIsCandidate] = useState(false);
	const [isVoting, setIsVoting] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const currentUrl = window.location.href;
		setIsCandidate(currentUrl.includes("candidates"));
		setIsVoting(currentUrl.includes("voting"));
	}, [router]);

	return (
		<Fragment>
			<div className={style.layout}>
				<Navbar
					css={{
						/* 					color: "white",
						 */ backgroundColor: "white",
						$$navbarBackgroundColor: "transparent",
						$$navbarBlurBackgroundColor: "transparent",
					}}
					maxWidth="fluid"
					isCompact>
					<Navbar.Brand css={{ cursor: "pointer" }}>
						<div className={style.logo}>
							<Link
								onClick={() => {
									router.push("/");
								}}>
								<Image alt="The English School logo" src="/attributes/logos/ES-LOGO.svg" fill />
							</Link>
						</div>
						<Spacer x={0.5} />
						<TextChakra boxShadow="0 0 4px rgba(0, 0, 0, 0.75) inset" backgroundColor="#FFFFFF" padding={1} pl={3} pr={3} borderRadius="50px" color="black" h3>
							Student Elections
						</TextChakra>
					</Navbar.Brand>
					<Navbar.Content hideIn="xs" variant="underline">
						<Navbar.Link isActive={isCandidate} css={{ cursor: "pointer" }} onPress={() => router.push("/candidates")}>
							Candidates
						</Navbar.Link>
						<Navbar.Link isActive={isVoting} css={{ cursor: "pointer" }} onPress={() => router.push("/voting")}>
							Voting Procedure
						</Navbar.Link>
					</Navbar.Content>
					<Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
					<Navbar.Collapse>
						<Navbar.CollapseItem>
							<Link css={{ cursor: "pointer" }} onPress={() => router.push("/candidates")}>
								Candidates
							</Link>
						</Navbar.CollapseItem>
						<Navbar.CollapseItem>
							<Link css={{ cursor: "pointer" }} onPress={() => router.push("/voting")}>
								Voting Procedure
							</Link>
						</Navbar.CollapseItem>
					</Navbar.Collapse>
				</Navbar>
				{children}
			</div>
			<PageFooter />
		</Fragment>
	);
}
