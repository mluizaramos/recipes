import { Menu } from "lucide-react";

type Props = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function MenuAction({ setIsMenuOpen }: Props) {
  return (
    <Menu
      className="text-mainOrange cursor-pointer"
      size={24}
      onClick={() => setIsMenuOpen(true)}
    />
  );
}
