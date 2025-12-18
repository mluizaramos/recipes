import { recipes } from "../data/recipes";

export function MainRecipes() {
    return (
        <section className="px-5 py-10">
            <div>
                <p className="text-base font-medium py-3 text-start">Principais Receitas</p>
            </div>

            <div>
                <ul className="grid grid-cols-3 gap-3">
                    {recipes.map((recipe) => (
                        <li
                            key={recipe.id}
                            className="bg-white rounded-md shadow-sm overflow-hidden"
                        >
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="h-20 w-full object-cover" />

                            <div className="p-1 px-2">
                                <h2 className="text-sm font-medium text-start">
                                    {recipe.title}
                                </h2>
                                <span className="text-start text-xs text-zinc-500">
                                    ⏱ {recipe.time}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}