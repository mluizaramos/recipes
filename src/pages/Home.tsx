import { recipes } from "../data/recipes";

export function Home() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">
        Receitas
      </h1>

      <ul className="grid grid-cols-1 gap-4">
        {recipes.map((recipe) => (
          <li
            key={recipe.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-40 w-full object-cover"
            />

            <div className="p-3">
              <h2 className="font-semibold">
                {recipe.title}
              </h2>
              <span className="text-sm text-zinc-500">
                ⏱ {recipe.time}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
