import React from "react";
import NextImage, { type ImageProps } from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function Image(props: ImageProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="mt-6 rounded-lg overflow-hidden">
          <NextImage {...props} />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[calc(100vw-2rem)] w-fit">
        <div
          className={cn(
            "max-w-[calc(100vw-5rem)] max-h-[calc(100vh-5rem)] overflow-y-auto rounded-lg",
            props.className
          )}
        >
          <NextImage {...props} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
