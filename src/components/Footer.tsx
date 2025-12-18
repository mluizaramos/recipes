export function Footer() {
    return (
        <footer className="bg-white mt-10 shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
            <div
                className="
          max-w-6xl
          mx-auto
          px-6
          py-6
          flex
          flex-col
          text-center
        "
            >
                <p className="text-mainOrange font-semibold text-lg">
                    Receitas da Rita
                </p>

                <p className="text-black/50 text-sm">
                    Cozinhar é transformar carinho em comida.
                </p>

                <div className="h-px bg-mainOrange/30 my-2 mt-6" />

                <p className="text-black/50 text-xs mt-4">
                    © {new Date().getFullYear()} Receitas da Rita. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
