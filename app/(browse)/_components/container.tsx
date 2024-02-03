"use client";

import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";

interface IContainer {
  children: React.ReactNode;
}
export const Container = ({ children }: IContainer) => {
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);

  const match = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    if (match) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [match, onCollapse, onExpand]);

  return (
    <div
      className={cn(
        "flex-1 transition-all duration-300 ease-in-out",
        collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60",
      )}
    >
      {children}
    </div>
  );
};
