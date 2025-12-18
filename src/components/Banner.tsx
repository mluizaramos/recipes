import bannerImg from "../assets/banner.png";

export function Banner() {
    return (
        <section className="relative">
            <div className="banner">
                <div>
                    <img src={bannerImg} alt="Banner" />
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
                md:w-[70%]
                text-center
                "
                >
                    <p className="text-sm italic text-zinc-600">
                        “Cada receita conta uma história.”
                    </p>
                </div>
            </div>
        </section>
    );
}
