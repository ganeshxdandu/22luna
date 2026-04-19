import { useState } from "react";
import { SPACE } from "../utils/utils";

const { ARCH_ONE, ARCH_TWO, SPACE_ONE, SPACE_TWO, SPACE_THREE, SPACE_FOUR, NOISE } = SPACE;

export function SpaceSection() {
    const [active, setActive] = useState(null);

    const images = [
        ARCH_ONE,
        SPACE_ONE,
        SPACE_TWO,
        ARCH_TWO,
        SPACE_THREE, 
        SPACE_FOUR,
    ];

    
    const getCardClass = (i, extra = "") => {
        const isActive = active === i;
        const isDimmed = active !== null && active !== i;

        return `
      relative overflow-hidden bg-[#2A2A2A] transition-all duration-[900ms] ease-[cubic-bezier(.22,.61,.36,1)]
      ${isActive ? "z-10 -translate-y-1 scale-[1.015]" : ""}
      ${isDimmed ? "opacity-70" : "opacity-100"}
      ${extra}
    `;
    };

    return (
        <section className="w-full bg-[#1F1F1F] px-5 md:px-10 lg:px-[84px] py-20 md:py-24 relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.01]">
                <img
                    className="w-full h-full object-cover"
                    src={NOISE}
                    alt=""
                />
            </div>
            {/* HEADER (consistent with your system) */}
            <div className="text-center mb-12 md:mb-16">
                <h2
                    className="text-[30px] sm:text-[36px] md:text-[42px]
                     font-semibold leading-[1.05] tracking-[-0.02em] text-[#EDE3D5]"
                    style={{ fontFamily: "Cormorant Garamond" }}
                >
                    The Space We’ve Designed
                </h2>

                <p className="text-sm sm:text-base mt-2 text-[#CFC6BB]">
                    A quiet, considered space for your care.
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[260px]">
                {/* c1 */}
                <div
                    onMouseEnter={() => setActive(0)}
                    onMouseLeave={() => setActive(null)}
                    className={getCardClass(
                        0,
                        "lg:col-[1] lg:row-[1/3] rounded-t-full",
                    )}
                >
                    <img
                        src={images[0]}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out
                       group-hover:scale-110"
                    />

                    {/* subtle vignette when dimmed */}
                    <div
                        className="pointer-events-none absolute inset-0 bg-black/0 transition duration-700"
                        style={{
                            background:
                                active !== null && active !== 0
                                    ? "rgba(0,0,0,0.25)"
                                    : "rgba(0,0,0,0)",
                        }}
                    />
                </div>

                {/* c2 */}
                <div
                    onMouseEnter={() => setActive(1)}
                    onMouseLeave={() => setActive(null)}
                    className={getCardClass(
                        1,
                        "lg:col-[2/4] lg:row-[1] rounded-[20px]",
                    )}
                >
                    <img
                        src={images[1]}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div
                        className="absolute inset-0 transition duration-700"
                        style={{
                            background:
                                active !== null && active !== 1
                                    ? "rgba(0,0,0,0.25)"
                                    : "rgba(0,0,0,0)",
                        }}
                    />
                </div>

                {/* c3 */}
                <div
                    onMouseEnter={() => setActive(2)}
                    onMouseLeave={() => setActive(null)}
                    className={getCardClass(
                        2,
                        "lg:col-[2] lg:row-[2] rounded-[20px]",
                    )}
                >
                    <img
                        src={images[2]}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div
                        className="absolute inset-0 transition duration-700"
                        style={{
                            background:
                                active !== null && active !== 2
                                    ? "rgba(0,0,0,0.25)"
                                    : "rgba(0,0,0,0)",
                        }}
                    />
                </div>

                {/* c4 */}
                <div
                    onMouseEnter={() => setActive(3)}
                    onMouseLeave={() => setActive(null)}
                    className={getCardClass(
                        3,
                        "lg:col-[3] lg:row-[2/4] rounded-b-full",
                    )}
                >
                    <img
                        src={images[3]}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    />
                    <div
                        className="absolute inset-0 transition duration-700"
                        style={{
                            background:
                                active !== null && active !== 3
                                    ? "rgba(0,0,0,0.25)"
                                    : "rgba(0,0,0,0)",
                        }}
                    />
                </div>

                {/* c5 */}
                <div
                    onMouseEnter={() => setActive(4)}
                    onMouseLeave={() => setActive(null)}
                    className={getCardClass(
                        4,
                        "lg:col-[1] lg:row-[3] rounded-[20px]",
                    )}
                >
                    <img
                        src={images[4]}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div
                        className="absolute inset-0 transition duration-700"
                        style={{
                            background:
                                active !== null && active !== 4
                                    ? "rgba(0,0,0,0.25)"
                                    : "rgba(0,0,0,0)",
                        }}
                    />
                </div>

                {/* c6 */}
                <div
                    onMouseEnter={() => setActive(5)}
                    onMouseLeave={() => setActive(null)}
                    className={getCardClass(
                        5,
                        "lg:col-[2] lg:row-[3] rounded-[20px]",
                    )}
                >
                    <img
                        src={images[5]}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div
                        className="absolute inset-0 transition duration-700"
                        style={{
                            background:
                                active !== null && active !== 5
                                    ? "rgba(0,0,0,0.25)"
                                    : "rgba(0,0,0,0)",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
