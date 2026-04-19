import { useState, useEffect, useRef } from "react";
import "remixicon/fonts/remixicon.css";
import { CONCERNS } from "../utils/utils";

const { ACNE, DARK_CIRCLES, AGING, UNEVEN, HAIR_FALL } = CONCERNS;

export function ConcernSelector() {
    const [selected, setSelected] = useState(0);
    const intervalRef = useRef(null);

    const concerns = [
        {
            title: "Acne & Breakouts",
            desc: "Persistent acne, inflammation, and post-acne marks affecting skin clarity.",
            image: ACNE,
            heading: "Clear Acne Treatment",
            sub: "Calm inflammation and restore clarity.",
            badges: [
                { icon: "ri-sparkling-line", label: "Improves Acne" },
                { icon: "ri-drop-line", label: "Reduces Marks" },
                { icon: "ri-shield-check-line", label: "Prevents Breakouts" },
            ],
        },
        {
            title: "Dark Circles",
            desc: "Under-eye pigmentation and dullness creating a tired appearance.",
            image: DARK_CIRCLES,
            heading: "Under-Eye Brightening",
            sub: "Restore a fresh and well-rested look.",
            badges: [
                { icon: "ri-eye-line", label: "Improves Pigmentation" },
                { icon: "ri-drop-line", label: "Hydrates Skin" },
                { icon: "ri-sun-line", label: "Brightens Under-eye" },
            ],
        },
        {
            title: "Signs of Aging",
            desc: "Fine lines, wrinkles, and reduced skin elasticity.",
            image: AGING,
            heading: "Anti-Aging Care",
            sub: "Restore firmness and smoothness.",
            badges: [
                { icon: "ri-time-line", label: "Reduces Wrinkles" },
                { icon: "ri-heart-pulse-line", label: "Boosts Collagen" },
                { icon: "ri-refresh-line", label: "Improves Elasticity" },
            ],
        },
        {
            title: "Uneven Skin Tone",
            desc: "Dark spots, patches, and discoloration affecting overall complexion.",
            image: UNEVEN,
            heading: "Even Skin Tone",
            sub: "Brighten and balance your complexion.",
            badges: [
                { icon: "ri-sun-line", label: "Reduces Spots" },
                { icon: "ri-contrast-2-line", label: "Improves Tone" },
                { icon: "ri-sparkling-line", label: "Adds Glow" },
            ],
        },
        {
            title: "Hair Fall & Thinning",
            desc: "Excessive hair loss and reduced hair density.",
            image: HAIR_FALL,
            heading: "Hair Strength & Growth",
            sub: "Reduce hair fall and restore density.",
            badges: [
                { icon: "ri-scissors-line", label: "Controls Hair Fall" },
                { icon: "ri-refresh-line", label: "Boosts Growth" },
                { icon: "ri-bar-chart-line", label: "Improves Thickness" },
            ],
        },
    ];

    const length = concerns.length;

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSelected((prev) => (prev + 1 >= length ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(intervalRef.current);
    }, [length]);

    const handleClick = (i) => {
        setSelected(i);
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setSelected((prev) => (prev + 1 >= length ? 0 : prev + 1));
        }, 5000);
    };

    const current = concerns[selected];

    return (
        <section className="w-full bg-[#EDE3D5] px-5 md:px-10 lg:px-[84px] py-20 md:py-24">
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* LEFT IMAGE */}
                <div className="w-full lg:w-[55%]">
                    <div className="sticky top-24">
                        <div className="relative aspect-square rounded-[28px] overflow-hidden group">
                            <img
                                key={current.image}
                                src={current.image}
                                className="w-full h-full object-cover transition duration-[1200ms] group-hover:scale-[1.05]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <h3
                                    className="text-[32px] font-semibold"
                                    style={{ fontFamily: "Cormorant Garamond" }}
                                >
                                    {current.heading}
                                </h3>

                                <p className="text-sm mt-2 mb-4 text-white/80">
                                    {current.sub}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {current.badges.map((b, i) => (
                                        <span
                                            key={i}
                                            className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-full bg-white/10 border border-white/20 backdrop-blur"
                                        >
                                            <i className={b.icon} />
                                            {b.label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-8 max-w-[520px]">
                    <div>
                        <h2
                            className="text-[34px] font-bold"
                            style={{
                                fontFamily: "Cormorant Garamond",
                                color: "#4B341B",
                            }}
                        >
                            What Would You Like To Improve?
                        </h2>

                        <p className="text-sm mt-2 text-[#6F655D]">
                            Select your concern. We’ll take care of the rest.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {concerns.map((c, i) => (
                            <button
                                key={i}
                                onClick={() => handleClick(i)}
                                className="relative px-5 py-4 rounded-[14px] text-left overflow-hidden transition"
                                style={{
                                    background:
                                        selected === i
                                            ? "#E8D5C0"
                                            : "transparent",
                                    border: "1px solid rgba(201,169,110,0.25)",
                                }}
                            >
                                {/* INDICATOR */}
                                <div className="absolute right-2 top-2 bottom-2 w-[3px] rounded-full bg-[#D6C2A8]/40 overflow-hidden">
                                    {selected === i && (
                                        <div className="w-full h-full bg-[#4B341B] animate-fillBar" />
                                    )}
                                </div>

                                <div className="pr-4">
                                    <p
                                        className="text-[18px] font-semibold"
                                        style={{
                                            fontFamily: "Cormorant Garamond",
                                            color: "#4B341B",
                                        }}
                                    >
                                        {c.title}
                                    </p>

                                    <p className="text-[13px] text-[#8B6F5C] mt-1">
                                        {c.desc}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>

                    <button
                        className="inline-flex items-center w-max gap-2 pl-5 pr-2 py-2 rounded-full 
                   text-white text-sm bg-gradient-to-r from-[#2C2118] to-[#533E2D] 
                   group transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                    >
                        <span className="whitespace-nowrap">
                            Book Consultation
                        </span>

                        {/* ARROW */}
                        <span className="w-7 h-7 rounded-full flex items-center justify-center bg-white/10 relative overflow-hidden">
                            {/* default (diagonal) */}
                            <i
                                className="ri-arrow-right-up-line absolute transition-all duration-300 
                  group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0"
                            />

                            {/* hover (horizontal) */}
                            <i
                                className="ri-arrow-right-line absolute opacity-0 -translate-x-4 
                  transition-all duration-300 
                  group-hover:translate-x-0 group-hover:opacity-100"
                            />
                        </span>
                    </button>
                </div>
            </div>

            <style>{`
        @keyframes fillBar {
          from { transform: scaleY(0); transform-origin: top; }
          to { transform: scaleY(1); transform-origin: top; }
        }
        .animate-fillBar {
          animation: fillBar 5s linear forwards;
        }
      `}</style>
        </section>
    );
}
