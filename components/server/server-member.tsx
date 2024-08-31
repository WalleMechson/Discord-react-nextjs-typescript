"use client";

import { cn } from "@/lib/utils";
import { Member, MemberRole, Profile } from "@prisma/client";
import { Server } from "@prisma/client";
import { ShieldAlert, ShieldCheck } from "lucide-react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { UserAvatar } from "../user-avatar";

interface ServerMemberProps {
  member: Member & { profile: Profile };
  server: Server;
}

const roleIconStore = {
  [MemberRole.ADMIN]: <ShieldAlert className="h-4 w-4 text-rose-500 ml-auto" />,
  [MemberRole.GUEST]: null,
  [MemberRole.MODERATOR]: <ShieldCheck className="h-4 w-4 text-zinc-500 ml-auto" />,
};

export const ServerMember = ({ member, server }: ServerMemberProps) => {
  const params = useParams();
  const router = useRouter();

  const icon = roleIconStore[member?.role];

  const onClick = () => {
    router.push(`/servers/${server.id}/conversations/${member.id}`);
  }

  return (
    <button
    onClick={onClick}
      className={cn(
        "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1",
        params?.memberId === member.id && "bg-zinc-700/20 dark:bg-zinc-700"
      )}
    >
        <UserAvatar 
            src={member.profile.imageUrl}
            className="w-8 h-8 md:w-8 md:h-8"
        />
        <p className={cn(
            "font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition",
            params?.memberId === member.id && 'text-primary dark:text-zinc-200 dark:group-hover:text-white'
        )}>
            {member.profile.name}
        </p>
      {icon}
    </button>
  );
};
