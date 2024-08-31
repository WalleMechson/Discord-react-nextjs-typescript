import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import Image from "next/image";
import { blurDataImageUrl } from "@/lib/blur-data-img";

interface UserAvatarProps {
  src?: string;
  className?: string;
}

export const UserAvatar = ({ src, className }: UserAvatarProps) => {
  return (
    <Avatar className={cn("h-7 w-7 md:h-10 md:w-10", className)}>
      <AvatarImage src={src} />
      <AvatarFallback>
        <Image
          fill
          src={src!}
          alt="profile avatar"
          blurDataURL={blurDataImageUrl}
          placeholder="blur"
        />
      </AvatarFallback>
    </Avatar>
  );
};
