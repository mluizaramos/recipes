import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  suggestions: { id: number; title: string }[];
  onSubmit: (e: React.FormEvent) => void;
};

export function InputSearch({
  search,
  setSearch,
  showDropdown,
  setShowDropdown,
  suggestions,
  onSubmit,
}: Props) {
  const navigate = useNavigate();

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-2 w-full">
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
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
          className="bg-mainGray rounded-full px-4 py-2 w-full pl-10 shadow-sm outline-none text-zinc-500 text-sm"
          placeholder="Pesquise..."
        />

        {showDropdown && search && suggestions.length > 0 && (
          <ul className="absolute top-full mt-2 w-full bg-white bg-opacity-90 rounded-md shadow-lg z-50 text-start">
            {suggestions.map((recipe) => (
              <li
                key={recipe.id}
                onMouseDown={() => {
                  navigate(`/recipes/${recipe.id}`);
                  setShowDropdown(false);
                }}
                className="px-4 py-2 cursor-pointer text-sm text-zinc-500 hover:bg-mainGray hover:text-mainOrange"
              >
                {recipe.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
}
