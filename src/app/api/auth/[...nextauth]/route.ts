import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions: AuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_OAUTH_ID || "",
            clientSecret: process.env.GOOGLE_OAUTH_SECRET || "",
        }),
        // ...add more providers here
    ],
}

const handler = NextAuth(authOptions);

export { authOptions, handler as GET, handler as POST };
