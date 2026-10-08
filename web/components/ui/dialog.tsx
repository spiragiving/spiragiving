"use client";
import * as Primitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ReactNode } from "react";
export const Dialog = Primitive.Root;
export const DialogTrigger = Primitive.Trigger;
export function DialogContent({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <Primitive.Portal>
      <Primitive.Overlay className="modal-overlay" />
      <Primitive.Content className="modal">
        <Primitive.Title>{title}</Primitive.Title>
        <Primitive.Description>{description}</Primitive.Description>
        {children}
        <Primitive.Close className="modal-close" aria-label="Close dialog">
          <X size={20} />
        </Primitive.Close>
      </Primitive.Content>
    </Primitive.Portal>
  );
}
