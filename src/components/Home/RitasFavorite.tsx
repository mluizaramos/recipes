import { Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { recipes } from "../../data/recipes";

export function RitasFavorite() {
  const navigate = useNavigate();

  const favoriteRecipes = recipes
    .filter((recipe) => recipe.favorite)
    .slice(0, 3);

  if (favoriteRecipes.length === 0) return null;

  return (
    <section className="px-6 py-2">
    
      <div className="mt-8 mb-4 flex items-center justify-between">
        <p className="text-mainOrange text-base font-medium">
          Favoritas da Rita
        </p>

        <Link
          to="/recipes"
          className="text-xs text-mainOrange/70 hover:underline"
        >
          Ver todas
        </Link>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {favoriteRecipes.map((recipe) => (
          <button
            key={recipe.id}
            onClick={() => navigate(`/recipes/${recipe.id}`)}
            className="
              min-w-[340px]
              bg-white rounded-xl
              shadow-sm overflow-hidden
              text-left
              transition-all duration-200
              hover:shadow-md hover:-translate-y-1
              active:scale-95
            "
          >
            {/* Imagem */}
            <div className="relative">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-42 w-full object-cover"
              />

              <div className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full">
                <Heart
                  size={16}
                  className="text-mainOrange fill-mainOrange"
                />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-3">
              <p className="text-lg font-normal text-zinc-800 leading-tight">
                {recipe.title}
              </p>

              <p className="text-sm font-light text-zinc-400">
                {recipe.category} • {recipe.time}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
