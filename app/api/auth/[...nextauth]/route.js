import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connectDB from "@/config/database";
import { isPasswordValid } from "@/utils/hash";

const handler = NextAuth({
  pages: {
    signIn: "/dashboard",
    signOut: "/dashboard/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "username",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "username",
        },
      },
      async authorize(credentials) {
        try {
          await connectDB();

          const { username, password } = credentials;

          const user = await User.findOne({
            username,
          });

          if (!user) {
            throw new Error("No user found");
          }

          const isPasswordCorrect = await isPasswordValid(
            password,
            user.password
          );

          if (!isPasswordCorrect) {
            throw new Error("Password is incorrect");
          }

          return {
            id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            verified: user.verified,
          };
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.username = user.username;
        token.verified = user.verified;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.username = token.username;
      session.user.verified = token.verified;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
