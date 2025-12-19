import { useNavigate } from "react-router-dom";
import { recipes } from "../data/recipes";

export function AllRecipes() {
    const navigate = useNavigate();

    return (
        <section className="px-5 py-6 bg-mainGray">
            <div className="">
                <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {recipes.map((recipe) => (
                        <li
                            key={recipe.id}
                            onClick={() => navigate(`/recipes/${recipe.id}`)}
                            className="
                                mb-1    
                                bg-zinc-50
                                rounded-md
                                shadow-md
                                cursor-pointer
                                hover:shadow-lg
                                transition
                                "
                        >
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="h-32 w-full object-cover"
                            />

                            <div className="p-2">
                                <h2 className="text-sm font-medium text-zinc-800 leading-tight">
                                    {recipe.title}
                                </h2>
                                <span className="text-sm text-zinc-500">
                                    {recipe.category} • {recipe.time}
                                </span>

                                <span className="mb-2 text-sm text-yellow-500 mt-1 block">
                                    {recipe.rating}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}