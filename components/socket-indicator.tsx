"use client";

import { useEffect, useState } from "react";
import { useSocket } from "./providers/socket-provider";
import { Badge } from "./ui/badge";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge variant="outline" className="bg-orange-600 text-white border-0">
        🛰 Waiting for connection...
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className="bg-emerald-600 text-white border-0">
      Connection is established 👍
    </Badge>
  );
};
