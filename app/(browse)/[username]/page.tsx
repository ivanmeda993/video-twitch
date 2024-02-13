import { notFound } from "next/navigation";

import { Actions } from "@/app/(browse)/[username]/_components/actions";
import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";

interface IUserPageProps {
  params: {
    username: string;
  };
}
const UserPage = async ({ params: { username } }: IUserPageProps) => {
  const user = await getUserByUsername(username);

  if (!user) notFound();

  const isFollowing = await isFollowingUser(user.id);

  return (
    <div className="flex flex-col gap-4">
      <h1> Username: {user.username}</h1>
      <p> User ID: {user.id}</p>
      <p> Is following: {`${isFollowing}`}</p>
      <Actions isFollowing={isFollowing} userId={user.id} />
    </div>
  );
};

export default UserPage;
