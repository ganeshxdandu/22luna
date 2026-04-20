import "remixicon/fonts/remixicon.css";
import { SIGNATURE_PROGRAMS } from "../utils/utils";

const {BRIDAL, HYDRA_FACIAL, ACNE_RESET, HAIR_REVIVAL} = SIGNATURE_PROGRAMS;

export function SignaturePrograms() {
    const programs = [
        {
            title: "Hydra Facial",
            subtitle: "Lift. Refine. Rejuvenate.",
            image: HYDRA_FACIAL,
        },
        {
            title: "Acne Reset",
            subtitle: "Clear. Control. Maintain.",
            image: ACNE_RESET,
        },
        {
            title: "Hair Revival",
            subtitle: "Strengthen. Restore. Regrow.",
            image: HAIR_REVIVAL,
        },
    ];

    return (
        <section className="w-full bg-[#F5EFE6] px-5 md:px-10 lg:px-[84px] py-20 md:py-24 max-w-[1440px] mx-auto">
            {/* HEADER */}
            <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-14 md:mb-16">
                <h2
                    className="text-[32px] sm:text-[44px] md:text-[48px] lg:text-[48px]
                     font-bold leading-[1.02] tracking-[-0.035em]"
                    style={{
                        fontFamily: "Cormorant Garamond",
                        color: "#634A36",
                    }}
                >
                    Signature Programs
                </h2>

                <p
                    className="text-sm sm:text-sm md:text-[17px] leading-[1.6] max-w-[520px]"
                    style={{
                        fontFamily: "DM Sans",
                        color: "#8B6F5C",
                    }}
                >
                    Carefully designed treatments tailored to your skin, hair
                    and lifestyle.
                </p>
            </div>

            <div className="flex flex-col gap-6 md:gap-8">
                {/* HERO CARD */}
                <div className="relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden group">
                    <div className="h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px]">
                        <img
                            src={BRIDAL}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-5 md:bottom-8 left-5 md:left-8 right-5 md:right-8">
                        <h3
                            className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px]
                         font-semibold leading-[1.03] tracking-[-0.03em] mb-2 text-[#F5EFE6]"
                            style={{ fontFamily: "Cormorant Garamond" }}
                        >
                            Bridal Glow Countdown
                        </h3>

                        <p
                            className="text-sm sm:text-base md:text-lg leading-[1.5] mb-4 md:mb-6 text-[#EADFD3]"
                            style={{ fontFamily: "DM Sans" }}
                        >
                            Hydrate. Smooth. Restore.
                        </p>

                        {/* CTA */}
                        <button className="flex items-center gap-2 pl-4 pr-2 py-2 rounded-full text-sm text-white bg-gradient-to-r from-[#2C2118] to-[#533E2D] group">
                            <span>Know More</span>

                            <span className="w-7 h-7 rounded-full flex items-center justify-center bg-white/10 relative overflow-hidden">
                                <i className="ri-arrow-right-up-line absolute transition-all duration-300 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0" />
                                <i className="ri-arrow-right-line absolute transition-all duration-300 opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100" />
                            </span>
                        </button>
                    </div>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {programs.map((p) => (
                        <div
                            key={p.title}
                            className="rounded-[22px] md:rounded-[26px] overflow-hidden group backdrop-blur-sm"
                            style={{
                                background: "rgba(255,255,255,0.1)",
                                border: "0.5px solid rgba(255,255,255,0.4)",
                            }}
                        >
                            {/* IMAGE — TRUE 1:1 */}
                            <div className="aspect-square w-full overflow-hidden">
                                <img
                                    src={p.image}
                                    alt=""
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="flex items-center justify-between px-4 md:px-5 pt-5 pb-5">
                                <div>
                                    <p
                                        className="font-semibold text-[18px] sm:text-[20px] md:text-[22px]
                               leading-[1.15] tracking-[-0.02em] mb-1"
                                        style={{
                                            fontFamily: "Cormorant Garamond",
                                            color: "#4B341B",
                                        }}
                                    >
                                        {p.title}
                                    </p>

                                    <p
                                        className="text-sm md:text-[15px] leading-[1.5]"
                                        style={{
                                            fontFamily: "DM Sans",
                                            color: "#8B6F5C",
                                        }}
                                    >
                                        {p.subtitle}
                                    </p>
                                </div>

                                {/* ARROW */}
                                <div className="w-10 h-10 md:w-[48px] md:h-[48px] rounded-full flex items-center justify-center bg-[#B08D6A] relative overflow-hidden transition-transform duration-300 group-hover:scale-110">
                                    <i className="ri-arrow-right-up-line text-white absolute transition-all duration-300 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0" />

                                    <i className="ri-arrow-right-line text-white absolute transition-all duration-300 opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
