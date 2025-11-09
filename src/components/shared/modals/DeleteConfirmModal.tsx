"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { ReactNode } from "react";

interface DeleteConfirmModalProps {
  title?: string;
  description?: string;
  onDelete: () => void;
  trigger?: ReactNode;
}

const DeleteConfirmModal = ({
  title = "Delete Item",
  description = "Are you sure you want to delete this item? This action cannot be undone.",
  onDelete,
  trigger,
}: DeleteConfirmModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button
            variant="ghost"
            className="
              transition-all duration-300 ease-linear cursor-pointer
              hover:bg-red-400 hover:text-red-600 p-2 rounded-full
            "
          >
            <X className="w-5 h-5" />
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="max-w-sm sm:max-w-md w-[90%] bg-[#0B111E] text-white border border-gray-800 rounded-xl shadow-[0_0_15px_rgba(151,103,228,0.15)] px-6 py-4 space-y-3 [&>button[aria-label='Close']]:hidden">
        <DialogHeader>
          <DialogTitle className="text-base sm:text-lg font-semibold text-white">
            {title}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-400 leading-relaxed">
            {description}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex justify-end gap-3 pt-2">
          <DialogClose asChild>
            <Button
              variant="ghost"
              className="
                border border-gray-700 text-gray-300
                hover:bg-[#47cfeb]/20 hover:text-white
                transition-all duration-300 ease-in-out
                px-4 py-2 text-sm font-medium
              "
            >
              Cancel
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              onClick={onDelete}
              variant="destructive"
              className="bg-red-600 hover:bg-red-500 text-white font-medium text-sm transition-all duration-300 ease-in-out px-4 py-2 cursor-pointer"
            >
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirmModal;
