import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IHint {
  label: string;
  children: React.ReactNode;
  asChild?: boolean;
  side?: "left" | "right" | "top" | "bottom";
  align?: "start" | "center" | "end";
}
export const Hint = ({ children, side, asChild, label, align }: IHint) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
        <TooltipContent
          className="text-black bg-white"
          align={align}
          side={side}
        >
          <p className="font-semibold">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
