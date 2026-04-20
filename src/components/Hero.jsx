import {
    motion,
    AnimatePresence,
    useMotionValue,
    useTransform,
    animate,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "remixicon/fonts/remixicon.css";
import { HERO_IMAGES as images } from "../utils/utils";

export function Hero() {
    const DURATION = 4200;

    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const progress = useMotionValue(0);
    const scaleY = useTransform(progress, [0, 1], [0, 1]);

    const controlsRef = useRef(null);

    const easeTime = (t) => {
        if (t < 0.12) return t * t * 2.5;
        if (t < 0.88) return t;
        const e = (t - 0.88) / 0.12;
        return 0.88 + (1 - Math.pow(1 - e, 2)) * 0.12;
    };

    useEffect(() => {
        if (isPaused) {
            controlsRef.current?.stop();
            return;
        }

        let switched = false;

        controlsRef.current = animate(progress, 1, {
            duration: DURATION / 1000,
            ease: easeTime,

            onUpdate: (latest) => {
                if (!switched && latest >= 0.96) {
                    switched = true;

                    controlsRef.current?.stop();
                    progress.set(0);

                    setIndex((prev) => (prev + 1) % images.length);
                }
            },
        });

        return () => controlsRef.current?.stop();
    }, [index, isPaused]);

    // 🔥 FIXED PILL ANIMATION (this is the key change)
    const pillVariants = {
        active: {
            height: 40,
            width: 6,
            transition: {
                height: {
                    duration: 0.45, // 🔥 reduced from 2 → synced with system
                    ease: [0.22, 1, 0.36, 1],
                },
            },
        },
        inactive: {
            height: 6,
            width: 6,
            transition: {
                height: {
                    duration: 1.5, // 🔥 slower than expand
                    ease: [0.25, 1, 0.5, 1],
                },
            },
        },
    };

    return (
        <section
            className="w-full px-5 md:px-10 lg:px-[84px] pt-[120px] md:pt-[160px] lg:pt-[150px] pb-16 md:pb-20 flex flex-col gap-8 max-w-[1440px] mx-auto"
            style={{ background: "#F5EFE6" }}
        >
            {/* TEXT */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10">
                <h1
                    className="text-[36px] sm:text-[44px] md:text-[56px] lg:text-[58px] font-bold leading-[1] tracking-[-0.04em] max-w-[500px] text-[#2C2118]"
                    style={{ fontFamily: "Cormorant Garamond" }}
                >
                    You Don't Have To Figure It Out Alone.
                </h1>

                <p
                    className="text-sm sm:text-base leading-[1.5] tracking-[-0.02em] max-w-[273px]"
                    style={{ fontFamily: "DM Sans", color: "#8B6F5C" }}
                >
                    Personalized care designed around your skin, hair and smile
                    — guided by experience and tailored to your needs.
                </p>
            </div>

            {/* IMAGE */}
            <div
                className="relative w-full rounded-2xl md:rounded-[32px] overflow-hidden h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px]"
                onMouseDown={() => setIsPaused(true)}
                onMouseUp={() => setIsPaused(false)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >
                {/* SLIDES */}
                <AnimatePresence mode="wait">
                    <motion.img
                        key={index}
                        src={images[index]}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.35, // 🔥 faster overall
                            ease: "easeOut",
                            delay: 0.05 // 🔥 smooth entry (no harsh start)
                        }}
                    />
                </AnimatePresence>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* PROGRESS */}
                <div className="absolute top-4 md:top-6 right-4 md:right-6 flex flex-col items-end gap-2">
                    {images.map((_, i) => (
                        <motion.div
                            key={i}
                            variants={pillVariants}
                            animate={i === index ? "active" : "inactive"}
                            className="relative overflow-hidden rounded-full bg-white/25"
                            style={{ originY: 0 }}
                        >
                            {i === index && (
                                <motion.div
                                    style={{
                                        scaleY,
                                        transformOrigin: "top",
                                        willChange: "transform",
                                    }}
                                    className="absolute inset-0 bg-white/60 rounded-full blur-[0.6px]"
                                />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 flex flex-col gap-3">
                    <div className="flex items-end justify-between gap-3">
                        <div className="flex flex-wrap gap-2 max-w-[65%]">
                            {[
                                {
                                    icon: "ri-award-line",
                                    label: "10+ Years Experience",
                                },
                                {
                                    icon: "ri-user-heart-line",
                                    label: "Personalized Care",
                                },
                            ].map((b) => (
                                <span
                                    key={b.label}
                                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-white text-[11px] sm:text-xs backdrop-blur-md whitespace-nowrap"
                                    style={{
                                        background: "rgba(255,255,255,0.1)",
                                        border: "0.5px solid rgba(255,255,255,0.25)",
                                        fontFamily: "DM Sans",
                                    }}
                                >
                                    <i className={`${b.icon} text-[13px]`} />
                                    {b.label}
                                </span>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            className="flex items-center gap-2 pl-4 pr-2 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-white bg-gradient-to-r from-[#2C2118] to-[#533E2D] shrink-0"
                        >
                            <span>Book Consultation</span>
                            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center bg-white/10">
                                <i className="ri-arrow-right-up-line text-[12px]" />
                            </span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
