import { X, ChefHat } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { recipes } from "../../data/recipes";

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const navigate = useNavigate();

  const categories = Array.from(
    new Set(recipes.map((recipe) => recipe.category))
  );

  function goTo(path: string) {
    navigate(path);
    onClose();
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40
          bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Menu */}
      <aside
        className={`
          fixed top-0 right-0 z-50
          h-full w-60
          bg-white shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Topo */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <p className="flex items-center gap-2 font-title text-base text-mainOrange">
            <ChefHat size={18} />
            Receitas da Rita
          </p>

          <X
            size={20}
            className="cursor-pointer text-zinc-300"
            onClick={onClose}
          />
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-2 px-4 py-4 text-base">
          <button
            onClick={() => goTo("/recipes")}
            className="text-left py-2 text-zinc-500 hover:text-mainOrange transition"
          >
            Todas as receitas
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                goTo(`/recipes?category=${encodeURIComponent(category)}`)
              }
              className="text-left py-2 text-zinc-500 hover:text-mainOrange transition"
            >
              {category}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
