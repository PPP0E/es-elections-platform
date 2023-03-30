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
						Other Services
					</Text>
					<Text>School Website</Text>
					<Text>Weduc Portal</Text>
					<Text>Microsoft 365</Text>
					<Text>MEDIMUN</Text>
				</div>
			</div>
			<div className={style.bottomText}>
				<div>
					<Text onClick={() => window.open("https://www.facebook.com/TheEnglishSchoolNicosia/", "_blank")}>FaceBook</Text>
					<Text onClick={() => window.open("https://www.instagram.com/the_english_school_es/", "_blank")}>Instagram</Text>
					<Text onClick={() => window.open("https://www.youtube.com/channel/UCpSVVX__wHimCxyWA9_8WhA", "_blank")}>YouTube</Text>
					<Text onClick={() => window.open("https://twitter.com/escyprus", "_blank")}>Twitter</Text>
				</div>
				<div className={style.logo}>
					<Image alt="The English School logo" src="/attributes/logos/ES-LOGO-WHITE.svg" fill />
				</div>
				<div>© 1900 - {currentYear} The English School</div>
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
