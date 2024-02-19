import { ToggleCard } from "@/app/(dashboard)/u/[username]/chat/_components/toggle-card";
import { getSelf } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/stream-service";

const ChatPage = async () => {
  const self = await getSelf();
  const stream = await getStreamByUserId(self.id);

  if (!stream) throw new Error("Stream not found");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Chat settings</h1>
      <div className="space-y-4">
        <ToggleCard
          field="isChatEnabled"
          label="Chat enabled"
          value={stream.isChatEnabled}
        />
        <ToggleCard
          field="isChatDelayed"
          label="Delay chat"
          value={stream.isChatDelayed}
        />
        <ToggleCard
          field="isChatFollowersOnly"
          label="Must be a follower to chat"
          value={stream.isChatFollowersOnly}
        />
      </div>
    </div>
  );
};

export default ChatPage;
