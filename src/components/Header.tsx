import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { recipes } from "../data/recipes";
import { Logo } from "./Header/Logo";
import { InputSearch } from "./Header/InputSearch";
import { MenuAction } from "./Header/MenuAction";
import { Admin } from "./Header/Admin";
import { SideMenu } from "./Header/SideMenu";

type HeaderProps = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export function Header({ search, setSearch }: HeaderProps) {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

            <Logo />

            <div className="bg-white py-3 px-4 flex items-center gap-2">
                <InputSearch
                    search={search}
                    setSearch={setSearch}
                    showDropdown={showDropdown}
                    setShowDropdown={setShowDropdown}
                    suggestions={suggestions}
                    onSubmit={handleSubmit}
                />

                <Admin />

                <MenuAction
                    setIsMenuOpen={setIsMenuOpen}
                />

                <SideMenu
                    isOpen={isMenuOpen}
                    onClose={() => setIsMenuOpen(false)}
                />

            </div>
        </header>
    );
}
