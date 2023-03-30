import style from "./layout.module.css";
import { Navbar, Button, Link, Text, Spacer } from "@nextui-org/react";
import Image from "next/image";
import PageFooter from "@/components/footer";
import { Fragment } from "react";

export default function Layout({ children }) {
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
							<Image src="/attributes/logos/ES-LOGO.svg" fill />
						</div>
						<Spacer x={0.5} />
						<Text color="black" h3>
							2023 Student Elections
						</Text>
					</Navbar.Brand>
					<Navbar.Content hideIn="xs" variant="underline">
						<Navbar.Link href="#">Candidates</Navbar.Link>
						<Navbar.Link isActive href="#">
							Voting Procedure
						</Navbar.Link>
						<Navbar.Link isActive href="#">
							FAQ
						</Navbar.Link>
					</Navbar.Content>
				</Navbar>
				{children}
			</div>
			<PageFooter />
		</Fragment>
	);
}
