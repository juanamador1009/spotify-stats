import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { auth } from "@/auth";

const UserMenu = async () => {
  const session = await auth();
  return (
    <div className="flex gap-2">
      <Avatar className="shadow">
        <AvatarImage
          src={session?.user?.image || "/assets/images/profile-pic.jpg"}
        />
        <AvatarFallback>CG</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm font-semibold">
          {session?.user?.name || "Juan Amador"}
        </span>
        <Link
          href="http://www.spotify.com/"
          className="text-xs font-medium text-muted-foreground"
        >
          @<span className="underline">spotistat</span>
        </Link>
      </div>
    </div>
  );
};

export default UserMenu;
