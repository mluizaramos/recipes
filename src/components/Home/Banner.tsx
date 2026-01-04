import bannerImg from "../../assets/pexels-ozrenildo-1291712.jpg";

export function Banner() {
    return (
        <section className="relative w-full">
            {/* Imagem */}
            <div className="w-full h-[180px] md:h-[380px] lg:h-[450px]">
                <img
                    src={bannerImg}
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Container flutuante */}
            <div
                className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    -bottom-6
                    bg-white
                    px-6
                    py-4
                    rounded-xl
                    shadow-md
                    w-[90%]
                    md:w-[75%]
                    lg:w-[55%]
                    text-center
                "
            >
                <p className="text-sm italic text-zinc-600">
                    “Cada receita conta uma história.”
                </p>
            </div>

        </section>
    );
}
