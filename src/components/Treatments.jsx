import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { TREATMENTS, TREATMENTS_DATA } from "../utils/utils";

const { NOISE } = TREATMENTS;
const { Skin, Hair, Men, Dental } = TREATMENTS_DATA;

const data = {
    Skin,
    Hair,
    Men,
    Dental,
};

export function Treatments() {
    const [active, setActive] = useState("Skin");

    const tabs = ["Skin", "Hair", "Men", "Dental"];
    const treatments = data[active];

    return (
        <section className="w-full bg-[#F5EFE6] px-5 md:px-10 lg:px-[84px] py-20 md:py-24 max-w-[1440px] mx-auto">
            {/* HEADER */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
                <div>
                    <h2
                        className="text-[32px] sm:text-[42px] md:text-[56px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#634A36]"
                        style={{ fontFamily: "Cormorant Garamond" }}
                    >
                        Our Treatments
                    </h2>
                    <p className="text-sm sm:text-base mt-2 text-[#8B6F5C]">
                        Select your concern. We’ll take care of the rest.
                    </p>
                </div>

                {/* TABS */}
                <div className="flex gap-2 p-1 rounded-full bg-[#EFE7DD] border border-[#E3D7C8] w-max">
                    {tabs.map((t) => (
                        <button
                            key={t}
                            onClick={() => setActive(t)}
                            className={`px-5 py-2 rounded-full text-sm transition-all ${
                                active === t
                                    ? "bg-gradient-to-r from-[#2C2118] to-[#533E2D] text-white"
                                    : "text-[#8B6F5C]"
                            }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {treatments.map((t, i) => (
                    <div
                        key={t.label}
                        className={`relative rounded-[20px] overflow-hidden group ${
                            i === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                        }`}
                    >
                        {/* IMAGE */}
                        <div className="aspect-square sm:aspect-auto sm:h-[260px] md:h-[280px]">
                            <img
                                src={t.image}
                                alt=""
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        {/* PILLS */}
                        <div className="absolute bottom-3 left-3 flex items-center gap-2">
                            {/* TEXT PILL */}
                            <div className="px-3 py-1.5 rounded-full text-white text-xs sm:text-sm backdrop-blur-md border border-white/20 bg-white/10">
                                {t.label}
                            </div>

                            {/* ARROW PILL */}
                            <div className="w-8 h-8 rounded-full backdrop-blur-md border border-white/20 bg-white/10 flex items-center justify-center relative overflow-hidden">
                                <i className="ri-arrow-right-up-line text-white absolute transition-all duration-300 group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:opacity-0" />

                                <i className="ri-arrow-right-line text-white absolute opacity-0 -translate-x-3 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                            </div>
                        </div>
                    </div>
                ))}

                {/* EXPLORE CARD */}
                <div className="group relative flex justify-center items-center rounded-[20px] overflow-hidden cursor-pointer">
                    {/* GRADIENT BACKGROUND */}
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,#B08D6A_31%,#8F7356_91%)]" />

                    {/* NOISE LAYER */}
                    <div
                        className="absolute inset-0 opacity-[0.65] mix-blend-overlay pointer-events-none"
                        style={{
                            backgroundImage: `url(${NOISE})`,
                            backgroundSize: "cover",
                        }}
                    />

                    {/* CONTENT */}
                    <div className="relative z-10 flex items-center justify-center gap-2 px-6 py-5 text-white font-medium">
                        <span>Explore All Treatments</span>

                        <i className="ri-arrow-right-up-line transition-all duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </section>
    );
}
