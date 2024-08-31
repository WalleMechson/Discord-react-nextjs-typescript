"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useModal } from "../../hooks/use-modal-store";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DialogDescription } from "@radix-ui/react-dialog";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import queryString from "query-string";

export const DeleteMessageModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  const params = useParams();

  const isModalOpen = isOpen && type === "deleteMessage";
  const { apiUrl, query } = data;

  const [isLoading, setIsLoading] = useState(false);

  const onClickPrimary = async () => {
    try {
      setIsLoading(true);
      const url = queryString.stringifyUrl({
        url: apiUrl || "",
        query,
      });
      await axios.delete(url);
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Delete Message
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Are you sure you want to permanently delete the message?
          </DialogDescription>
        </DialogHeader>
        <DialogDescription className="bg-gray-100 px-6 py-4">
          <div className="flex items-center justify-between w-full">
            <Button onClick={onClose} variant="ghost" disabled={isLoading}>
              Cancel
            </Button>
            <Button
              onClick={onClickPrimary}
              variant="primary"
              disabled={isLoading}
            >
              Confirm
            </Button>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
