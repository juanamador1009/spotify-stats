"use client";

import { getUserAccessToken, logout } from "@/actions/_auth";
import { getCurrentUserTopArtist } from "@/actions/spotify";
import { getCurrentUserTopTracks } from "@/actions/spotify";
import { dumbData } from "@/data/dumbdata";
import { ITopArtists } from "@/types/spotify/top-artists";
import { ITopTracks } from "@/types/spotify/top-tracks";
import { useSession } from "next-auth/react";
import {
  createContext,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";

interface SpotifyContext {
  datos: ITopTracks | ITopArtists;
  setDatos: React.Dispatch<React.SetStateAction<ITopTracks | ITopArtists>>;
  filterType: "tracks" | "artists";
  setFilterType: React.Dispatch<React.SetStateAction<"tracks" | "artists">>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  dateRange: "short_term" | "medium_term" | "long_term";
  setDateRange: React.Dispatch<
    React.SetStateAction<"short_term" | "medium_term" | "long_term">
  >;
}

export const SpotifyContext = createContext<SpotifyContext>({
  datos: dumbData,
  setDatos: () => {},
  filterType: "tracks",
  setFilterType: () => {},
  loading: false,
  setLoading: () => {},
  dateRange: "short_term",
  setDateRange: () => {},
});

export const SpotifyContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [datos, setDatos] = useState<ITopTracks | ITopArtists>(dumbData);
  const [filterType, setFilterType] = useState<"tracks" | "artists">("tracks");
  const [loading, setLoading] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState<
    "short_term" | "medium_term" | "long_term"
  >("short_term");
  const { status } = useSession();

  const fetchDatos = useCallback(async () => {
    if (status !== "authenticated") return;
    try {
      setLoading(true);
      const accessToken = await getUserAccessToken();
      if (!accessToken) {
        throw new Error("Access token is undefined");
      }
      try {
        const data =
          filterType === "tracks"
            ? await getCurrentUserTopTracks(accessToken, dateRange)
            : await getCurrentUserTopArtist(accessToken, dateRange);
        if (data && "items" in data) {
          setDatos(data);
        } else {
          console.log("Invalid data structure");
          setDatos(dumbData);
        }
      } catch (fetchError) {
        console.log(
          fetchError instanceof Error ? fetchError.message : "Uknown Error"
        );
        await logout();
      }
    } catch (tokenError) {
      console.log(tokenError);
    } finally {
      setLoading(false);
    }
  }, [filterType, status, dateRange]);

  useEffect(() => {
    fetchDatos();
  }, [fetchDatos]);

  const contextValue = useMemo(
    () => ({
      datos,
      setDatos,
      filterType,
      setFilterType,
      loading,
      setLoading,
      dateRange,
      setDateRange,
    }),
    [datos, filterType, loading, dateRange]
  );

  return (
    <SpotifyContext.Provider value={contextValue}>
      {children}
    </SpotifyContext.Provider>
  );
};
