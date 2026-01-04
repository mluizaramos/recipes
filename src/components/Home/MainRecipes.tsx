import { useNavigate } from "react-router-dom";
import { recipes } from "../../data/recipes";

export function MainRecipes() {
    const navigate = useNavigate();

    const mainRecipes = recipes.slice(0, 5);

    return (
       <section className="px-5 mt-10 md:flex md:flex-col md:items-center md:py-10">
            <p className="text-mainOrange text-base font-medium py-3 text-start md:text-lg md:py-6">
                Principais Receitas
            </p>

            <div className="overflow-x-auto">
                <ul className="flex gap-3 overflow-x-auto
    md:grid md:grid-cols-5 md:gap-6
    md:overflow-visible
    md:justify-center">
                    {mainRecipes.map((recipe) => (
                        <li key={recipe.id}>
                            <button
                                onClick={() => navigate(`/recipes/${recipe.id}`)}
                                className="
                                    mb-1
    min-w-[110px]
    bg-white rounded-md
    border border-zinc-100
    shadow-sm overflow-hidden
    transition-all duration-200
    hover:shadow-md hover:-translate-y-1
    active:scale-95
    text-center

    md:w-[220px]
    md:h-[260px]
    md:flex
    md:flex-col
                                    "
                            >
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    className="h-20 w-full object-cover md:h-40"
                                />

                                <div className="p-2">
                                    <h2 className="
                                        text-sm
                                        font-medium
                                        text-zinc-800
                                        leading-tight
                                        line-clamp-2
                                        min-h-[2.5em]
                                        md:text-base
                                        ">
                                        {recipe.title}
                                    </h2>


                                    <span className="text-sm text-yellow-500 mt-1 block md:text-base">
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
