import { useNavigate } from "react-router-dom";
import { recipes } from "../../data/recipes";

export function MainRecipes() {
  const navigate = useNavigate();

  const mainRecipes = recipes.slice(0, 5);

  return (
    <section className="px-5 mt-10">
      <p className="text-mainOrange text-base font-medium py-3 text-start">
        Principais Receitas
      </p>

      <div className="overflow-x-auto">
        <ul className="flex gap-3">
          {mainRecipes.map((recipe) => (
            <li key={recipe.id}>
              <button
                onClick={() => navigate(`/recipes/${recipe.id}`)}
                className="
                  mb-1 min-w-[110px]
                  bg-white rounded-md
                  border
                border-zinc-100
                  shadow-sm overflow-hidden
                  transition-all duration-200
                  hover:shadow-md hover:-translate-y-1
                  active:scale-95
                  text-center
                "
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="h-20 w-full object-cover"
                />

                <div className="p-2">
                  <h2 className="text-sm font-medium text-zinc-800 leading-tight line-clamp-2">
                    {recipe.title}
                  </h2>

                  <span className="text-sm text-yellow-500 mt-1 block">
                    {recipe.rating}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
