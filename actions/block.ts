"use server";

import { revalidatePath } from "next/cache";

import { getSelf } from "@/lib/auth-service";
import { blockUser, unblockUser } from "@/lib/block-service";

export const onBlock = async (id: string) => {
  const self = await getSelf();

  let blockedUser;

  blockedUser = await blockUser(id);
  revalidatePath("/");
  revalidatePath(`/${blockedUser.blocked.username}`);

  return blockedUser;
};

export const onUnblock = async (id: string) => {
  const self = await getSelf();
  const unblockedUser = await unblockUser(id);

  revalidatePath("/");
  revalidatePath(`/${unblockedUser.blocked.username}`);

  return unblockedUser;
};
