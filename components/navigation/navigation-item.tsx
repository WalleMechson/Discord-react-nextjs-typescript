"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { ActionTooltip } from "../action-tooltip";
import { blurDataImageUrl } from "@/lib/blur-data-img";

interface NavigationItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const NavigationItem = ({ id, name, imageUrl }: NavigationItemProps) => {
  const params = useParams();
  const router = useRouter();
  const onClick = () => {
    router.push(`/servers/${id}`);
  }
  return (
    <ActionTooltip align="center" side="right" label={name}>
      <button onClick={onClick} className="group relative flex items-center">
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
            params?.serverId !== id && "group-hover:h-[20px]",
            params?.serverId === id ? "h-[36px]" : "h-[8px]"
          )}
        />
        <div className={cn(
            "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
            params?.serverId === id && "bg-primary/10 text-primary rounded-[16px]"
        )}>
            <Image
                fill
                src={imageUrl}
                alt={`Image of ${name} channel`}
                blurDataURL={blurDataImageUrl}
                placeholder="blur"
            />
        </div>
      </button>
    </ActionTooltip>
  );
};
