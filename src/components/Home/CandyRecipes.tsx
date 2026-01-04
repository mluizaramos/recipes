import { useNavigate } from "react-router-dom";
import { recipes } from "../../data/recipes";

export function CandyRecipes() {
  const navigate = useNavigate();

  const candyRecipes = recipes
    .filter(
      (recipe) =>
        recipe.category === "Doce" || recipe.category === "Doces"
    )
    .slice(-4);

  if (candyRecipes.length === 0) return null;

  return (
    <section className="px-5 mb-8">
      <p className="text-mainOrange text-base font-medium py-3">
        Doces Deliciosos
      </p>

      <ul className="grid grid-cols-2 gap-3">
        {candyRecipes.map((recipe) => (
          <button
            key={recipe.id}
            onClick={() => navigate(`/recipes/${recipe.id}`)}
            className="
              bg-white rounded-md
              shadow-sm overflow-hidden
              text-left
              transition-all duration-200
              hover:shadow-md hover:-translate-y-1
              active:scale-95
            "
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-40 w-full object-cover"
            />

            <div className="p-3">
              <h2 className="text-base font-medium text-center leading-tight">
                {recipe.title}
              </h2>

              <span className="block text-sm text-zinc-500 text-center mt-1">
                {recipe.category} • {recipe.time}
              </span>
            </div>
          </button>
        ))}
      </ul>
    </section>
  );
}
