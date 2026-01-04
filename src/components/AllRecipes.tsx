import { useNavigate } from "react-router-dom";
import { recipes } from "../data/recipes";

type AllRecipesProps = {
    search: string;
};

export function AllRecipes({ search }: AllRecipesProps) {
    const navigate = useNavigate();

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="px-5 py-6 bg-mainGray">
            <h1 className="mb-4 text-mainOrange text-start font-light">Todas as receitas</h1>

            <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {filteredRecipes.map((recipe) => (
                    <li
                        key={recipe.id}
                        onClick={() => navigate(`/recipes/${recipe.id}`)}
                        className="
                            bg-zinc-50
                            rounded-lg
                            border-2
                            border-zinc-50
                            shadow-sm
                            cursor-pointer
                            transition-all
                            duration-200
                            hover:shadow-lg
                            hover:-translate-y-1
                            active:scale-95
                            "
                    >
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="h-32 w-full object-cover"
                        />

                        <div className="p-2">
                            <h2 className="mt-1 text-base font-medium text-zinc-800 leading-tight">
                                {recipe.title}
                            </h2>
                            <span className="text-xs text-zinc-400">
                                {recipe.category} • {recipe.time}
                            </span>

                            <span className="mb-1 text-sm text-yellow-500 block">
                                {recipe.rating}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}