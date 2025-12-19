import { Heart } from "lucide-react";
import { recipes } from "../data/recipes";
import { Link } from "react-router-dom";

export function RitasFavorite() {
    return (
        <section className="px-6 py-2">
            {/* Título */}
            <div className="mt-8 mb-4 flex items-center justify-between">
                <p className="text-mainOrange text-base font-medium text-start">
                    Favoritas da Rita
                </p>

                <Link
                    to="/recipes"
                    className="text-xs text-mainOrange/70 hover:underline"
                >
                    Ver todas
                </Link>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="
            min-w-[340px]
            bg-white
            rounded-xl
            shadow-sm
            overflow-hidden
            mb-1
          "
                    >
                        {/* Imagem */}
                        <div className="relative">
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="h-42 w-full object-cover"
                            />

                            <button className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full">
                                <Heart
                                    size={16}
                                    className="text-mainOrange fill-mainOrange"
                                />
                            </button>
                        </div>

                        {/* Conteúdo */}
                        <div className="p-3">
                            <p className="text-xl font-normal text-zinc-800">
                                {recipe.title}
                            </p>

                            <p className="text-sm font-light text-zinc-400 p-1">
                                {recipe.category} • {recipe.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
