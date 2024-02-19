"use client";

import { CheckCheck, Copy } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface ICopyButton {
  value?: string;
}
export const CopyButton = ({ value }: ICopyButton) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!value) return;
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const Icon = copied ? CheckCheck : Copy;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleCopy}
      disabled={!value || copied}
    >
      <Icon className="h-4 w-4" />
    </Button>
  );
};
