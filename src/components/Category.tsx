import { Cake, Pizza, CupSoda } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    label: "Doces",
    icon: Cake,
  },
  {
    label: "Salgados",
    icon: Pizza,
  },
  {
    label: "Bebidas",
    icon: CupSoda,
  },
];

export function Category() {
  const navigate = useNavigate();

  function goToCategory(category: string) {
    navigate(`/recipes?category=${encodeURIComponent(category)}`);
  }

  return (
    <section className="px-6 py-4">
      <div className="p-4">
        <p className="text-mainOrange text-center text-base font-medium">
          Categorias das Receitas
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {categories.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => goToCategory(label)}
            className="
              flex flex-col items-center
              p-4 bg-white rounded-md
              shadow-sm border-2 border-zinc-50
              transition-all duration-200
              hover:shadow-md hover:-translate-y-1
              active:scale-95
            "
          >
            <div className="bg-mainPink p-4 rounded-full">
              <Icon size={24} className="text-mainOrange" />
            </div>

            <p className="text-sm mt-2 font-medium text-zinc-700">
              {label}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
