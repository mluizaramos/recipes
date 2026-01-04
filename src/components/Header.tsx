import { ChefHat, Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { recipes } from "../data/recipes";
import { useState } from "react";

type HeaderProps = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export function Header({ search, setSearch }: HeaderProps) {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    const suggestions = recipes
        .filter((recipe) =>
            recipe.title.toLowerCase().includes(search.toLowerCase())
        )
        .slice(0, 5);


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!search.trim()) return;

        navigate(`/recipes?search=${encodeURIComponent(search)}`);
    }

    return (
        <header className="shadow-sm relative z-20">

            {/* logo */}
            <div className="bg-mainOrange py-1">
                <Link
                    to="/"
                    className=""
                >

                    <p className="flex items-center justify-center gap-2 text-lg font-title font-semibold text-white text-center">
                        <ChefHat size={18} />
                        Receitas da Rita
                    </p>

                </Link>
            </div>

            <div className="bg-white py-3 px-4 flex items-center gap-2">
                <form
                    onSubmit={handleSubmit}
                    className="flex items-center gap-2 w-full"
                >
                    <div className="relative flex-1">
                        <Search
                            size={16}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setShowDropdown(true);
                            }}
                            onFocus={() => search && setShowDropdown(true)}
                            onBlur={() => {
                                setTimeout(() => setShowDropdown(false), 150);
                            }}
                            className="bg-mainGray rounded-full px-4 py-2 w-full pl-10 shadow-sm outline-none text-zinc-900 text-sm"
                            placeholder="Pesquise..."
                        />

                        {showDropdown && search && suggestions.length > 0 && (
                            <ul className="
                        
                                absolute
                                top-full
                                mt-2
                                w-full
                                bg-white
                                bg-opacity-90
                                rounded-md
                                shadow-lg
                                z-50
                                overflow-hidden
                                text-start
                            ">
                                {suggestions.map((recipe) => (
                                    <li
                                        key={recipe.id}
                                        onMouseDown={() => {
                                            navigate(`/recipes/${recipe.id}`);
                                            setShowDropdown(false);
                                        }}
                                        className="
                                            px-4
                                            py-2
                                            cursor-pointer
                                            text-sm
                                            text-zinc-700
                                            hover:bg-mainGray
                                            "
                                    >
                                        {recipe.title}
                                    </li>
                                ))}
                            </ul>
                        )}

                    </div>

                    <ChefHat className="text-mainOrange" size={24} />
                    <Menu className="text-mainOrange" size={24} />
                </form>
            </div>
        </header>
    )
}