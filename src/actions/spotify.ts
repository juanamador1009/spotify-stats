"use server";

import axios from "axios";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";
const SPOTIFY_ENDPOINT = "https://api.spotify.com/v1";

export interface AccessTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export const getSpotifyToken = async (): Promise<AccessTokenResponse> => {
  const response = await axios.post(
    SPOTIFY_TOKEN_URL,
    {
      grant_type: "client-credentials",
      client_id: process.env.SPOTIFY_CLIENT_ID,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return response.data;
};

export const getCurrentUserTopTracks = async (
  access_token: string,
  time_range?: "short_term" | "medium_term" | "long_term"
) => {
  const response = await axios.get(
    `${SPOTIFY_ENDPOINT}/me/top/tracks?time_range=${time_range}&limit=50`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return response.data;
};

export const getCurrentUserTopArtist = async (
  access_token: string,
  time_range?: "short_term" | "medium_term" | "long_term"
) => {
  const response = await axios.get(
    `${SPOTIFY_ENDPOINT}/me/top/artists?time_range=${time_range}&limit=20`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  return response.data;
};
