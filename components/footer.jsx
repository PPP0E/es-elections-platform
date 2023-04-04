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
					<Text>Home Page</Text>
					<Text>All Candidates</Text>
					<Text>Form TutorLogin</Text>
					<Text>All Speeches</Text>
				</div>
				<div>
					<Text>The School</Text>
					<Text>Elections</Text>
					<Text>History</Text>
					<Text>Information</Text>
					<Text>Contact Us</Text>
				</div>
				<div>
					<Text fontSize="18.51px" color="white">
						Other Services
					</Text>
					<Text onClick={() => window.open("https://englishschool.ac.cy", "_blank")}>School Website</Text>
					<Text onClick={() => window.open("https://app.weduc.co.uk", "_blank")}>Weduc Portal</Text>
					<Text onClick={() => window.open("https://login.microsoftonline.com/?whr=englishschool.ac.cy", "_blank")}>Microsoft 365</Text>
					<Text onClick={() => window.open("https://medimun.org", "_blank")}>MEDIMUN</Text>
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
