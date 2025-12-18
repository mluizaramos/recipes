import { recipes } from "../data/recipes";

export function CandyRecipes() {
    return (
        <section className="px-5">
            <div>
                <p className="text-base font-medium py-3 text-start">Doces Deliciosos</p>
            </div>
            <div>
                <ul className="grid grid-cols-2 gap-3">
                    {recipes.map((recipe) => (
                        <li
                            key={recipe.id}
                            className="bg-white rounded-md shadow-sm overflow-hidden"
                        >
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="h-40 w-full object-cover" />

                            <div className="p-4">
                                <h2 className="text-base font-medium text-start">
                                    {recipe.title}
                                </h2>
                                <span className="text-start text-base text-zinc-500">
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