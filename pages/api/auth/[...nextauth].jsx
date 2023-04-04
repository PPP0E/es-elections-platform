import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../prisma/client";

let current;

export default NextAuth({
	session: {
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
			type: "credentials",
			credentials: {},
			async authorize(credentials, req) {
				let user;

				const { email, password } = credentials;

				if (email && password) {
					user = await prisma.user.findUnique({
						where: {
							email: email,
						},
					});
				} else {
					throw new Error("no email or password");
				}

				if (!user) {
					console.log("user not found");
					throw new Error("no user found");
				}

				if (user.password == password) {
					return user;
				} else {
					throw new Error("incorrect password");
				}
			},
		}),
	],
	pages: { signIn: "/login" },
	secret: "12345678",
});

//TeamMember               TeamMember[]
//Delegate                 Delegate[]
//SchoolMember             SchoolMember[]
//SchoolDirector           SchoolDirector[]
//CommitteeChair           Chair[]
//TeamManager              TeamManager[]
//ProfilePicture           ProfilePicture[]
