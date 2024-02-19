"use client";

import { Follow, User } from "@prisma/client";

import {
  UserItem,
  UserItemSkeleton,
} from "@/app/(browse)/_components/sidebar/user-item";
import { useSidebar } from "@/store/useSidebar";

interface IFollowing {
  data: (Follow & { following: User })[];
}
export const Following = ({ data }: IFollowing) => {
  const collapsed = useSidebar((state) => state.collapsed);

  console.log("FOllowing data", data);

  if (!data.length) return null;

  return (
    <div>
      {!collapsed && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Following</p>
        </div>
      )}

      <ul className="space-y-2 px-2">
        {data.map((follow) => (
          <UserItem
            key={follow.following.id}
            username={follow.following.username}
            imageUrl={follow.following.imageUrl}
          />
        ))}
      </ul>
    </div>
  );
};

export const FollowingSkeleton = () => {
  return (
    <ul className="px-2 pt-2 lg:pt-0">
      {[...Array(3)].map((_, i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  );
};
