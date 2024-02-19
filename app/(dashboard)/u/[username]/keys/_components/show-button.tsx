import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";

interface IShowButton {
  show: boolean;
  disabled: boolean;
  onClick: () => void;
}
export const ShowButton = ({ show, onClick, disabled }: IShowButton) => {
  const Icon = show ? EyeOff : Eye;

  return (
    <Button disabled={disabled} onClick={onClick} size="icon" variant="link">
      <Icon className="h-4 w-4" />
    </Button>
  );
};
