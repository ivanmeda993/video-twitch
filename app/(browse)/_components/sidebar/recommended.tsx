"use client";

import { UserItemSkeleton } from "@/app/(browse)/_components/sidebar/user-item";
import { useSidebar } from "@/store/useSidebar";

import { User } from ".prisma/client";

interface IRecommended {
  data: User[];
}
export const Recommended = ({ data }: IRecommended) => {
  const collapsed = useSidebar((state) => state.collapsed);
  console.log("USERS =>", data);

  const showLabel = !collapsed && data.length > 0;
  return (
    <div>
      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Recommended</p>
        </div>
      )}
    </div>
  );
};

export const RecommendedSkeleton = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5].map((_, i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  );
};
