import { ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <div className="bg-mainOrange py-1">
      <Link to="/">
        <p className="flex items-center justify-center gap-2 text-lg font-title font-semibold text-white transition-transform transform active:scale-95">
          <ChefHat size={18} />
          Receitas da Rita
        </p>
      </Link>
    </div>
  );
}
