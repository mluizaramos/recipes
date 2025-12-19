import { ArrowLeft, ChartNoAxesColumnIncreasing, Clock, Utensils } from "lucide-react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useNavigate, useParams } from "react-router-dom";
import { recipes } from "../data/recipes";

export function RecipeDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const recipe = recipes.find(
        (recipe) => recipe.id === Number(id)
    );

    if (!recipe) {
        return <p className="p-6 text-zinc-400">Receita não encontrada</p>
    }

    return (
        <>
            <Header />

            <main className="px-6 py-6 bg-mainGray">
                {/* Voltar */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-sm text-mainOrange mb-4"
                >
                    <ArrowLeft size={16} />
                    Voltar
                </button>

                {/* Imagem */}
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-56 object-cover rounded-xl"
                />

                {/* Conteúdo */}
                <div className="mt-4 text-start">
                    <h1 className="text-xl font-meduim text-zinc-800">
                        {recipe.title}
                    </h1>
                    {/* <p className="text-yellow-500">
                        {recipe.rating}
                    </p> */}
                    <p className="text-base font-light text-zinc-500 mt-2">
                        {recipe.description}
                    </p>

                    <div className="grid grid-cols-3 gap-3 ">
                        <div className="flex flex-col items-start p-3 rounded-2xl shadow-sm mt-4 border-2 border-zinc-100 ">
                            <Clock size={22} className="text-zinc-700" />
                            <p className="mt-4 text-xs font-light text-zinc-500">Tempo</p>
                            <p className="mt-1 text-sm font-medium text-zinc-700">
                                {recipe.time}
                            </p>
                        </div>
                        <div className="flex flex-col items-start p-3 rounded-2xl shadow-sm mt-4 border-2 border-zinc-100">
                            <ChartNoAxesColumnIncreasing size={22} className="text-zinc-700" />
                            <p className="mt-4 text-xs font-light text-zinc-500">
                                Dificuldade
                            </p>
                            <p className="mt-1 text-sm font-medium text-zinc-700">
                                {recipe.level}
                            </p>
                        </div>
                        <div className="flex flex-col items-start p-3 rounded-2xl shadow-sm mt-4 border-2 border-zinc-100">
                            <Utensils size={22} className="text-zinc-700" />
                            <p className="mt-4 text-xs font-light text-zinc-500">Serve</p>
                            <p className="mt-1 text-sm font-medium text-zinc-700">
                                {recipe.serving}
                            </p>
                        </div>
                    </div>
                </div>


                {/* Ingredientes */}
                <div className="mt-8 text-start">
                    <h2 className="text-lg font-light text-zinc-800 mb-4">
                        Ingredientes
                    </h2>

                    <ul className="space-y-2  bg-zinc-50 p-6 rounded-3xl shadow-sm">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2 text-sm font-light text-zinc-500"
                            >
                                <span className="h-2 w-2 rounded-full bg-mainOrange" />
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="h-px bg-zinc-200 mt-8" />


                {/* Modo de preparo */}
                <div className="mt-8 text-start">
                    <h2 className="text-base font-light text-zinc-800 mb-4">
                        Modo de preparo
                    </h2>

                    <ol className="space-y-1 px-4">
                        {recipe.steps.map((step, index) => (
                            <li
                                key={index}
                                className="flex gap-4"
                            >
                                <span className="text-mainOrange font-light">
                                    {index + 1}
                                </span>

                                <p className="text-sm font-light text-zinc-500">
                                    {step}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </main>
            <Footer />
        </>
    )
}