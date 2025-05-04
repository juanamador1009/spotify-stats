"use client";

import { SpotifyContext } from "@/contexts/spotify-context";
import React, { useContext } from "react";
import { Carousel, CarouselContent } from "./ui/carousel";
import { ITopTracks, Item as TrackItem } from "@/types/spotify/top-tracks";
import { ITopArtists, Item as ArtistItem } from "@/types/spotify/top-artists";
import SpotifyCard from "./spotify-card";
import CarouselLoader from "./carousel-loader";

const MusicCardList = () => {
  const { datos, filterType, loading } = useContext(SpotifyContext);

  if (loading) return <CarouselLoader />;

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {filterType === "tracks"
          ? (datos as ITopTracks).items
              .map((item: TrackItem, index: number) => {
                if (
                  !item.album ||
                  !item.album.images ||
                  !item.album.images.length
                )
                  return null;
                return (
                  <SpotifyCard
                    key={item.id}
                    image={item.album.images[0].url}
                    name={item.name}
                    ranking={index + 1}
                    additionalInfo={
                      item.album.artists[0]?.name || "Uknown Artist"
                    }
                  />
                );
              })
              .filter(Boolean)
          : (datos as ITopArtists).items
              .map((item: ArtistItem, index: number) => {
                if (!item.images || !item.images.length) return null;
                return (
                  <SpotifyCard
                    key={item.id}
                    image={item.images[0].url}
                    ranking={index + 1}
                    name={item.name}
                    additionalInfo={item.genres?.join(", ") || ""}
                  />
                );
              })
              .filter(Boolean)}
      </CarouselContent>
    </Carousel>
  );
};

export default MusicCardList;
