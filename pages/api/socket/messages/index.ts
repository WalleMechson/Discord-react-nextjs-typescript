import { currentProfilePages } from "@/lib/current-profile-pages";
import { db } from "@/lib/db";
import { NextApiResponseServerIo } from "@/types";
import { NextApiRequest } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIo
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: `Method ${req.method} not allowed!` });

  try {
    const profile = await currentProfilePages(req);
    if (!profile) return res.status(401).json({ error: "Unauthorized access" });

    const { content, fileUrl } = req.body;
    const { serverId, channelId } = req.query;

    if (!content) {
      if (!fileUrl)
        return res.status(400).json({ error: "req.body.content is missing" });
    }
    
    if (!fileUrl) {
      if (!content)
        return res.status(400).json({ error: "req.body.fielUrl is missing" });
    }

    if (!serverId)
      return res.status(400).json({ error: "req.query.serverId is missing" });
    if (!channelId)
      return res.status(400).json({ error: "req.query.channelId is missing " });

    const server = await db.server.findFirst({
      where: {
        id: serverId as string,
        members: {
          some: {
            profileId: profile.id,
          },
        },
      },
      include: {
        members: true,
      },
    });

    if (!server) return res.status(404).json({ message: "Server not found" });

    const channel = await db.channel.findFirst({
      where: {
        id: channelId as string,
        serverId: server.id,
      },
    });

    if (!channel)
      return res.status(404).json({ message: "Channel is not found" });

    const member = server.members.find(
      (member) => member.profileId === profile.id
    );

    if (!member)
      return res.status(404).json({ message: "Member is not found" });
    const message = await db.message.create({
      data: {
        content: content || "",
        fileUrl: fileUrl || "",
        channelId: channelId as string,
        memberId: member.id,
      },
      include: {
        member: {
          include: {
            profile: true,
          },
        },
      },
    });

    const channelKey = `chat:${channelId}:messages`;

    res?.socket?.server?.io?.emit(channelKey);

    return res.status(200).json(message);
  } catch (err) {
    console.log("[SOCKET_MESSAGES_API]", err);
    return res.status(500).json({ message: "Internal Error" });
  }
}
