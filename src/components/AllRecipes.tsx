import { useNavigate, useSearchParams } from "react-router-dom";
import { recipes } from "../data/recipes";

type AllRecipesProps = {
  search: string;
};

export function AllRecipes({ search }: AllRecipesProps) {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const categoryFromUrl = params.get("category");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = categoryFromUrl
      ? recipe.category === categoryFromUrl
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="px-5 py-6 bg-mainGray">
      <h1 className="mb-4 text-mainOrange font- text-start">
        {categoryFromUrl ? categoryFromUrl : "Todas as receitas"}
      </h1>

      <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {filteredRecipes.map((recipe) => (
          <li
            key={recipe.id}
            onClick={() => navigate(`/recipes/${recipe.id}`)}
            className="
              bg-zinc-50 rounded-lg border-2 border-zinc-50
              shadow-sm cursor-pointer
              transition-all duration-200
              hover:shadow-lg hover:-translate-y-1
              active:scale-95
            "
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-32 w-full object-cover"
            />

            <div className="p-2">
              <h2 className="text-base font-medium text-zinc-800 leading-tight">
                {recipe.title}
              </h2>

              <span className="text-xs text-zinc-400">
                {recipe.category} • {recipe.time}
              </span>

              <span className="text-sm text-yellow-500 block">
                {recipe.rating}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
