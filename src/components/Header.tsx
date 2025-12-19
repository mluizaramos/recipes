import { ChefHat, Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="shadow-sm">

            {/* logo */}
            <div className="bg-mainOrange py-1">
                <Link
                    to="/"
                    className=""
                >
                    <p className="text-xl font-semibold text-white text-center">
                        Receitas da Rita
                    </p>
                </Link>
            </div>

            <div className="bg-white py-3 px-4 flex items-center justify-center gap-2">
                {/* search */}
                <div className="relative flex-1">
                    <Search
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                    />
                    <input
                        type="text"
                        className="bg-mainGray rounded-xl px-4 placeholder:text-sm py-1 w-full pl-10 outline-none text-zinc-400 text-sm"
                        placeholder="Pesquise..."
                    />
                </div>

                {/* Login */}
                <ChefHat className="text-mainOrange" size={24} />

                {/* Ícone menu */}
                <Menu className="text-mainOrange" size={24} />
            </div>
        </header>
    )
}