import { ChefHat, Menu, Search } from "lucide-react";

export function Header() {
    return (
        <header className="shadow-sm">

            {/* logo */}
            <div className="bg-white py-1">
                <p className="text-lg font-medium text-mainOrange text-center">
                    Receitas da Rita
                </p>
            </div>

            <div className="bg-mainOrange py-3 px-4 flex items-center justify-center gap-2">
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
                <ChefHat className="text-white" size={24} />

                {/* Ícone menu */}
                <Menu className="text-white" size={24} />
            </div>
        </header>
    )
}