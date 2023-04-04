import style from "./layout.module.css";
import { Navbar, Button, Link, Text, Spacer, Collapse } from "@nextui-org/react";
import { Text as TextChakra, Button as ButtonChakra } from "@chakra-ui/react";
import Image from "next/image";
import PageFooter from "@/components/footer";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSession, signOut, useSession } from "next-auth/react";

export default function Layout({ children }) {
	const [isCandidate, setIsCandidate] = useState(false);
	const [isVoting, setIsVoting] = useState(false);
	const router = useRouter();
	const { data: session, status } = useSession();

	useEffect(() => {
		const currentUrl = window.location.href;
		setIsCandidate(currentUrl.includes("candidates"));
		setIsVoting(currentUrl.includes("voting"));
	}, [router]);

	console.log(session);

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
					<Navbar.Brand>
						<div className={style.logo}>
							<Link
								onClick={() => {
									router.push("/");
								}}>
								<Image alt="The English School logo" src="/attributes/logos/ES-LOGO.svg" fill />
							</Link>
						</div>
						<Spacer x={0.5} />
						<TextChakra className={style.title} h3>
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
						{!session ? <ButtonChakra onClick={() => router.push("/login")}>Form Tutor Login</ButtonChakra> : <ButtonChakra onClick={() => signOut()}>Log Out</ButtonChakra>}
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
						<Navbar.CollapseItem>{!session ? <ButtonChakra onClick={() => router.push("/login")}>Form Tutor Login</ButtonChakra> : <ButtonChakra onClick={() => signOut()}>Log Out</ButtonChakra>}</Navbar.CollapseItem>
					</Navbar.Collapse>
				</Navbar>
				{children}
			</div>
			<PageFooter />
		</Fragment>
	);
}
