"use client";

import { Label } from "@radix-ui/react-label";
import { useTransition } from "react";
import { toast } from "sonner";

import { updateStream } from "@/actions/stream";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";
interface IToggleCard {
  field: FieldTypes;
  label: string;
  value: boolean;
}
export const ToggleCard = ({ label, value = false, field }: IToggleCard) => {
  const [isPending, startTransition] = useTransition();

  const onChange = () => {
    startTransition(() => {
      updateStream({ [field]: !value })
        .then(() => toast.success("Chat settings updated!"))
        .catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center justify-between">
        <p className="font-semibold shrink-0">{label}</p>
        <div className="flex items-center gap-2">
          <Switch
            disabled={isPending}
            onCheckedChange={onChange}
            checked={value}
            className="bg-red-500"
            id={field}
          />
        </div>
      </div>
    </div>
  );
};

export const ToggleCardSkeleton = () => {
  return <Skeleton className="rounded-xl p-10 w-full" />;
};
