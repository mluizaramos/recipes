import { recipes } from "../data/recipes";

//mostrar só 4

export function CandyRecipes() {
    return (
        <section className="px-5 mb-8">
            <div>
                <p className="text-mainOrange text-base font-medium py-3 text-start">Doces Deliciosos</p>
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

                            <div className="p-3">
                                <h2 className="text-base font-medium text-center">
                                    {recipe.title}
                                </h2>
                                <span className="text-sm text-zinc-500">
                                    {recipe.category} • {recipe.time}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}