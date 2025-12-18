import { Cake, CupSoda, Pizza } from "lucide-react";

export function Category() {
    return (
        <section className="px-6 py-4">

            <div className="p-4">
                <p className="text-center font-medium text-base">Categorias das Receitas</p>
            </div>

            <div className="grid grid-cols-3 gap-3">

                <div className="flex flex-col items-center p-4 bg-white rounded-md shadow-sm">
                    <div className="bg-mainPink p-4 rounded-full">
                        <Cake size={24} className="text-mainOrange" />
                    </div>
                    <p className="text-sm mt-2 font-medium text-zinc-700">
                        Doces
                    </p>
                </div>

                <div className="flex flex-col items-center p-4 bg-white rounded-md shadow-sm">
                    <div className="bg-mainPink p-4 rounded-full">
                        <Pizza size={24} className="text-mainOrange" />
                    </div>
                    <p className="text-sm mt-2 font-medium text-zinc-700">
                        Salgados
                    </p>
                </div>

                <div className="flex flex-col items-center p-4 bg-white rounded-md shadow-sm">
                    <div className="bg-mainPink p-4 rounded-full">
                        <CupSoda size={24} className="text-mainOrange" />
                    </div>
                    <p className="text-sm mt-2 font-medium text-zinc-700">
                        Bebidas
                    </p>
                </div>

            </div>
        </section>
    )
}