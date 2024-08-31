import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { MemberRole } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const profile = await currentProfile();
    const serverId = searchParams.get("serverId");
    const { name: channelName, type: channelType } = await req.json();

    if (!profile) return new NextResponse("Unauthorized", { status: 401 });
    if (!serverId)
      return new NextResponse("Missing server id", { status: 400 });
    if (!channelName)
      return new NextResponse("Missing channel name", { status: 400 });
    if (channelName === "general" || channelName === "General")
      return new NextResponse("Channel name cannot be 'general' or 'General'", {
        status: 400,
      });
    if (!channelType)
      return new NextResponse("Missing channel type", { status: 400 });

    const server = await db.server.update({
      where: {
        id: serverId,
        members: {
          some: {
            profileId: profile.id,
            role: {
              in: [MemberRole.ADMIN, MemberRole.MODERATOR],
            },
          },
        },
      },
      data: {
        channels: {
          create: {
            profileId: profile.id,
            name: channelName,
            type: channelType,
          },
        },
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log("[CHANNEL_API_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}