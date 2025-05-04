"use server";

import { ISession, auth, signIn, signOut } from "@/auth";

export const login = async (provider: string): Promise<void> => {
  await signIn(provider, { redirectTo: "/" });
};

export const logout = async (): Promise<void> => {
  await signOut({ redirectTo: "/" });
};

export const getUserAccessToken = async () => {
  const session = (await auth()) as ISession;
  return session.accessToken;
};
