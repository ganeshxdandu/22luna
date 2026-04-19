export function Hero() {
    const badges = [
        {
            icon: "https://cdn.codia.ai/figma/dcGShZn6xqh4jywqqIP3I4/img-60a6c7935ef47662.svg",
            label: "10+ Years Experience",
        },
        {
            icon: "https://cdn.codia.ai/figma/dcGShZn6xqh4jywqqIP3I4/img-d8132695886c9871.svg",
            label: "Personalized Care",
        },
        {
            icon: "https://cdn.codia.ai/figma/dcGShZn6xqh4jywqqIP3I4/img-7219cd2592b57e50.svg",
            label: "Advanced Treatments",
        },
    ];

    return (
        <section
            className="w-full px-5 md:px-10 lg:px-[84px] pt-[120px] md:pt-[160px] lg:pt-[150px] pb-16 md:pb-20 flex flex-col gap-8 max-w-[1440px] mx-auto"
            style={{ background: "#F5EFE6" }}
        >
            {/* Headline */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10">
                <h1
                    className="text-[36px] sm:text-[44px] md:text-[56px] lg:text-[58px] font-bold leading-[1] tracking-[-0.04em] max-w-full lg:max-w-[500px]"
                    style={{
                        fontFamily: "Cormorant Garamond",
                        background:
                            "linear-gradient(90deg, #2C2118 0%, #533E2D 63%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "transparent",
                    }}
                >
                    You Don't Have To Figure It Out Alone.
                </h1>

                <p
                    className="text-sm sm:text-base leading-[1.5] tracking-[-0.02em] max-w-full lg:max-w-[273px]"
                    style={{ fontFamily: "DM Sans", color: "#8B6F5C" }}
                >
                    Personalized care designed around your skin, hair and smile
                    — guided by experience and tailored to your needs.
                </p>
            </div>

            {/* Image */}
            <div className="relative w-full rounded-2xl md:rounded-[32px] overflow-hidden h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px]">
                <img
                    src="https://res.cloudinary.com/doycsx0hd/image/upload/q_auto/f_auto/v1776610067/hero_zwnlzl.png"
                    alt="Clinic interior"
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Bottom Content */}
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        {badges.map((b) => (
                            <span
                                key={b.label}
                                className="flex items-center gap-2 px-3 py-1.5 md:py-2 rounded-full text-white text-xs sm:text-sm backdrop-blur-md"
                                style={{
                                    background: "rgba(255,255,255,0.1)",
                                    border: "0.5px solid rgba(255,255,255,0.25)",
                                    fontFamily: "DM Sans",
                                }}
                            >
                                <img
                                    src={b.icon}
                                    alt=""
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                />
                                {b.label}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <button
                        className="self-start sm:self-auto flex items-center gap-2 pl-4 pr-2 py-2 rounded-full text-white text-sm"
                        style={{
                            background:
                                "linear-gradient(90deg, #2C2118 0%, #533E2D 100%)",
                        }}
                    >
                        <span>Book Consultation</span>
                        <span className="w-7 h-7 rounded-full flex items-center justify-center bg-white/10">
                            <img
                                src="https://cdn.codia.ai/figma/dcGShZn6xqh4jywqqIP3I4/img-8307d901c520a868.svg"
                                alt=""
                                className="w-[10px] h-[10px]"
                            />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
