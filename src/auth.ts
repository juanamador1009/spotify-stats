import NextAuth, { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import spotify from "next-auth/providers/spotify";
import { Provider } from "next-auth/providers";

export interface ISession extends Session {
  accessToken?: string;
}

interface IJWT extends JWT {
  accessToken?: string;
}

const providers: Provider[] = [
  spotify({
    clientId: process.env.AUTH_SPOTIFY_ID,
    clientSecret: process.env.AUTH_SPOTIFY_SECRET,
    authorization: {
      url: "https://accounts.spotify.com/authorize",
      params: {
        scope: "user-top-read",
      },
    },
  }),
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  callbacks: {
    jwt: async ({ token, account }) => {
      if (account?.provider === "spotify") {
        return { ...token, accessToken: account.access_token };
      }
      return token;
    },
    async session({ session, token }: { session: ISession; token: IJWT }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
