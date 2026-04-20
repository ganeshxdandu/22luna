import { useState } from "react";
import { SPACE } from "../utils/utils";

const {
    ARCH_ONE,
    ARCH_TWO,
    SPACE_ONE,
    SPACE_TWO,
    SPACE_THREE,
    SPACE_FOUR,
    NOISE,
} = SPACE;

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

    const getCardClass = (i, layout = "") => {
        const isActive = active === i;
        const isDimmed = active !== null && active !== i;

        return `
      relative overflow-hidden rounded-[16px]
      bg-[#262626]
      transition-all duration-[900ms] ease-[cubic-bezier(.22,.61,.36,1)]
      
      ${isDimmed ? "opacity-60" : "opacity-100"}
      ${layout}
    `;
    };

    return (
        <section className="relative w-full bg-[#1C1C1C] px-5 md:px-10 lg:px-[84px] py-24">
            <div className="container max-w-[1440px] mx-auto relative z-10">
                {/* subtle grain */}
                <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
                    <img
                        src={NOISE}
                        className="w-full h-full object-cover"
                        alt=""
                    />
                </div>

                {/* soft ambient glow */}
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#CFAE7B]/5 blur-[140px] pointer-events-none" />

                {/* HEADER */}
                <div className="text-center mb-16 md:mb-20 relative z-10">
                    <h2
                        className="text-[32px] sm:text-[38px] md:text-[44px]
          font-medium tracking-[-0.015em] text-[#EDE3D5]"
                        style={{ fontFamily: "Cormorant Garamond" }}
                    >
                        The Space We’ve Designed
                    </h2>

                    <p className="text-[14px] md:text-[15px] mt-3 text-[#BFB6AA] tracking-[0.01em]">
                        Quiet. Intentional. Considered.
                    </p>
                </div>

                {/* GRID */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-[200px] md:auto-rows-[240px] lg:auto-rows-[280px]">
                    {images.map((img, i) => {
                        const layoutMap = [
                            "lg:col-[1] lg:row-[1/3]",
                            "lg:col-[2/4] lg:row-[1]",
                            "lg:col-[2] lg:row-[2]",
                            "lg:col-[3] lg:row-[2/4]",
                            "lg:col-[1] lg:row-[3]",
                            "lg:col-[2] lg:row-[3]",
                        ];

                        return (
                            <div
                                key={i}
                                onMouseEnter={() => setActive(i)}
                                onMouseLeave={() => setActive(null)}
                                className={getCardClass(i, layoutMap[i])}
                            >
                                {/* image */}
                                <img
                                    src={img}
                                    alt=""
                                    className="
                  w-full h-full object-cover
                  transition duration-[1200ms] ease-[cubic-bezier(.22,.61,.36,1)]
                  scale-[1.02]
                "
                                />

                                {/* soft shadow gradient (depth) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-80" />

                                {/* luxury light sweep */}
                                <div
                                    className="absolute inset-0 opacity-0 transition duration-[1200ms]"
                                    style={{
                                        background:
                                            "linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
                                        transform:
                                            active === i
                                                ? "translateX(0%)"
                                                : "translateX(-120%)",
                                        opacity: active === i ? 1 : 0,
                                    }}
                                />

                                {/* dim layer */}
                                <div
                                    className="absolute inset-0 transition duration-700"
                                    style={{
                                        background:
                                            active !== null && active !== i
                                                ? "rgba(0,0,0,0.35)"
                                                : "rgba(0,0,0,0)",
                                    }}
                                />

                                {/* subtle inner border (luxury detail) */}
                                <div className="absolute inset-0 border border-white/5 rounded-[16px]" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
