"use client";

import { useState } from "react";

import { ShowButton } from "@/app/(dashboard)/u/[username]/keys/_components/show-button";
import { Input } from "@/components/ui/input";

import { CopyButton } from "./copy-button";

interface KeyCardProps {
  value: string | null;
}

export const KeyCard = ({ value }: KeyCardProps) => {
  const [show, setShow] = useState(false);

  const onClick = () => setShow((prev) => !prev);

  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-start gap-x-10">
        <p className="font-semibold shrink-0">Stream Key</p>
        <div className="space-y-2 w-full">
          <div className="w-full flex items-center gap-x-2">
            <Input
              value={value || ""}
              type={show ? "text" : "password"}
              disabled
              placeholder="Stream key"
            />
            <div className="flex items-center">
              <ShowButton show={show} onClick={onClick} disabled={!value} />
              <CopyButton value={value || ""} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
