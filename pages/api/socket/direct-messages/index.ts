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
    const { conversationId } = req.query;

    if (!content) {
      if (!fileUrl)
        return res.status(400).json({ error: "req.body.content is missing" });
    }

    if (!fileUrl) {
      if (!content)
        return res.status(400).json({ error: "req.body.fielUrl is missing" });
    }

    if (!conversationId)
      return res
        .status(400)
        .json({ error: "req.query.conversationId is missing" });

    const conversation = await db.conversation.findFirst({
      where: {
        id: conversationId as string,
        OR: [
          {
            memberOne: {
              profileId: profile.id,
            },
          },
          {
            memberTwo: {
              profileId: profile.id,
            },
          },
        ],
      },
      include: {
        memberOne: {
          include: {
            profile: true,
          },
        },
        memberTwo: {
          include: {
            profile: true,
          },
        },
      },
    });

    if (!conversation)
      return res.status(404).json({ error: "Converastion is not found" });

    const member =
      conversation.memberOneId === profile.id
        ? conversation.memberOne
        : conversation.memberTwo;

    if (!member)
      return res.status(404).json({ message: "Member is not found" });

    const message = await db.directMessage.create({
      data: {
        content: content || "",
        fileUrl: fileUrl || "",
        conversationId: conversationId as string,
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

    const channelKey = `chat:${conversationId}:messages`;

    res?.socket?.server?.io?.emit(channelKey);

    return res.status(200).json(message);
  } catch (err) {
    console.log("[SOCKET_DIRECT_MESSAGES_API]", err);
    return res.status(500).json({ message: "Internal Error" });
  }
}
