import { type FC } from "react";
import { CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

interface Props {
  image: string;
  name: string;
  ranking: number;
  additionalInfo: string;
}

const SpotifyCard: FC<Props> = ({ image, name, ranking, additionalInfo }) => {
  return (
    <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
      <div className="p-0">
        <Card className="group space-y-4 border-none shadow-none">
          <CardContent className="p-0 rounded-3xl">
            <div className="flex flex-col gap-6 sm:gap-4 pb-5">
              <span className="text-md text-center text-muted-foreground font-bold capitalize">
                {ranking}
              </span>
              <div className="flex justify-center items-center overflow-hidden aspect-square relative">
                <div className="absolute w-full border-2 h-full translate-x-0 z-10 duration-300 transition-all md:group-hover:-translate-x-1/2">
                  <Image
                    src={image}
                    alt="vynil cover"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <Image
                  src="/assets/images/disc-vinyl.webp"
                  className="p-2 md:group-hover:animate-spinDisc "
                  alt="vinyl disc"
                  fill
                />
              </div>
              <div className="w-full h-full flex flex-col gap-1 items-center justify-center text-center px-2">
                <span className="text-lg sm:text-sm text-foreground font-semibold">
                  {name}
                </span>
                <span className="text-sm text-muted-foreground capitalize">
                  {additionalInfo}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

export default SpotifyCard;
