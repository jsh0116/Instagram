import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import {addUser} from "@/services/UserService";

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || "",
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/auth/signin'
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ user: { id, name, image, email } }) {
      if (!email) {
        return false;
      }
      await addUser({
        id,
        name: name || '',
        image,
        email,
        username: email.split('@')[0]
      });
      return true;
    },
    async session({ session}) {
      // Send properties to the client, like an access_token and user id from a provider.
      // session.accessToken = token.accessToken
      // session.user.id = token.id
      const user = session?.user;
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split('@')[0] || ''
        }
      }
      return session;
    }
  }
}

const handler = NextAuth(authOptions);

export { authOptions, handler as GET, handler as POST };
