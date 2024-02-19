import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";

export const getRecommended = async () => {
  let userId: string | undefined;

  try {
    const user = await getSelf();
    userId = user.id;
  } catch (e) {
    console.error(e);
  }

  let users = [];

  if (userId) {
    console.log("userId", userId);
    users = await db.user.findMany({
      where: {
        NOT: [
          {
            id: userId,
          },
          {
            followedBy: {
              some: {
                followerId: userId,
              },
            },
          },
          {
            blocking: {
              some: {
                blockedId: userId,
              },
            },
          },
        ],
      },

      orderBy: [
        {
          createdAt: "desc",
        },
      ],
    });
  } else {
    users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return users;
};
