import { CopyButton } from "@/app/(dashboard)/u/[username]/keys/_components/copy-button";
import { Input } from "@/components/ui/input";

interface IUrlCard {
  value: string | null;
}
export const UrlCard = ({ value }: IUrlCard) => {
  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center gap-x-10">
        <p className="font-semibold shrink-0">Server URL</p>
        <div className="space-y-2 w-full">
          <div className="flex items-center w-full gap-x-2">
            <Input value={value || ""} disabled placeholder="Server URL" />
            <CopyButton value={value || ""} />
          </div>
        </div>
      </div>
    </div>
  );
};
