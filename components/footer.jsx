import style from "./footer.module.css";
import Image from "next/image";

import { Fragment } from "react";
import { useRouter } from "next/router";
import { Text } from "@chakra-ui/react";

function PageFooter() {
	const currentYear = new Date().getFullYear();
	const router = useRouter();
	return (
		<footer className={style.wrapper}>
			<div className={style.sitemap}>
				<div>
					<Text>Website & App</Text>
					<Text>The App</Text>
					<Text>Create an Account</Text>
					<Text>Development</Text>
					<Text>Our Technologies</Text>
				</div>
				<div>
					<Text>Website & App</Text>
					<Text>The App</Text>
					<Text>Create an Account</Text>
					<Text>Development</Text>
					<Text>Our Technologies</Text>
				</div>
				<div>
					<Text fontSize="18.51px" color="white">
						Get In Touch
					</Text>
					<Text>Contact Us</Text>
					<Text>School Registeration</Text>
					<Text>Create an Account</Text>
					<Text>Development</Text>
				</div>
			</div>
			<div className={style.bottomText}>
				<div>
					<Text onClick={() => window.open("https://facebook.com/medimun", "_blank")}>FaceBook</Text>
					<Text onClick={() => window.open("https://instagram.com/medimun.cy", "_blank")}>Instagram</Text>
					<Text onClick={() => window.open("https://www.youtube.com/@medimun8808", "_blank")}>YouTube</Text>
					<Text onClick={() => window.open("#", "_blank")}>Twitter</Text>
				</div>
				<div className={style.logo}>
					<Image src="/attributes/logos/ES-LOGO-WHITE.svg" fill />
				</div>
				<div>© 1900 - {currentYear} The English School. All Rights reserved.</div>
			</div>
		</footer>
	);
}

const logo = {};

const sitemapSection = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column",
};

export default PageFooter;
