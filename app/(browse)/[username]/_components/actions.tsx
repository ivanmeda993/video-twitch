"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { onBlock, onUnblock } from "@/actions/block";
import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";

interface IActionsProps {
  isFollowing: boolean;
  isBlocked: boolean;
  userId: string;
}
export const Actions = ({ isFollowing, isBlocked, userId }: IActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) =>
          toast.success(`You are now following ${data.following.username}`),
        )
        .catch(() => toast.error("Failed to follow user"));
    });
  };

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) =>
          toast.success(
            `You are no longer following ${data.following.username}`,
          ),
        )
        .catch(() => toast.error("Failed to unfollow user"));
    });
  };

  const onClick = () => (isFollowing ? handleUnfollow() : handleFollow());

  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId)
        .then((data) =>
          toast.success(`You have blocked ${data?.blocked.username}`),
        )
        .catch(() => toast.error("Failed to block user"));
    });
  };

  const handleUnblock = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((data) =>
          toast.success(`You have unblocked ${data?.blocked.username}`),
        )
        .catch(() => toast.error("Failed to unblock user"));
    });
  };

  const blockAction = isBlocked ? handleUnblock : handleBlock;

  return (
    <>
      <Button variant="primary" onClick={onClick} disabled={isPending}>
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>

      <Button variant="secondary" onClick={handleUnblock} disabled={isPending}>
        {isBlocked ? "Unblock" : "Block"}
      </Button>
    </>
  );
};
