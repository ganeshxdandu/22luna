import { motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";

export function Hero() {
    const badges = [
        {
            icon: "ri-award-line",
            label: "10+ Years Experience",
        },
        {
            icon: "ri-user-heart-line",
            label: "Personalized Care",
        },
        {
            icon: "ri-stethoscope-line",
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
                    className="text-[36px] sm:text-[44px] text-[#2C2118] md:text-[56px] lg:text-[58px] font-bold leading-[1] tracking-[-0.04em] max-w-full lg:max-w-[500px]"
                    style={{ fontFamily: "Cormorant Garamond" }}
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
                                <i className={`${b.icon} w-4 h-4 sm:w-5 sm:h-5`} />
                                {b.label}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        className="mt-4 self-start sm:self-auto flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm text-white bg-gradient-to-r from-[#2C2118] to-[#533E2D]"
                    >
                        <span>Book Consultation</span>
                        <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10">
                            <i className="ri-arrow-right-up-line" />
                        </span>
                    </motion.button>

                </div>
            </div>
        </section>
    );
}