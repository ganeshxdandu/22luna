import { useRef } from "react";
import "remixicon/fonts/remixicon.css";

const reviews = [
  {
    name: "Priya S.",
    rating: 5,
    text: "The under-eye treatment completely transformed my look. I feel refreshed and confident every morning. Dr. Niharika is incredibly skilled and attentive.",
    tag: "Under-Eye Treatment",
  },
  {
    name: "Ananya M.",
    rating: 5,
    text: "I struggled with acne for years and nothing worked. After just three sessions here, my skin is clearer than it has ever been. Truly life-changing.",
    tag: "Acne Reset Program",
  },
  {
    name: "Kavya R.",
    rating: 5,
    text: "The bridal package was everything I hoped for. My skin glowed on my wedding day and the whole team was so warm and professional.",
    tag: "Bridal Glow Countdown",
  },
  {
    name: "Riya T.",
    rating: 5,
    text: "Hair Revival program gave me back the density I thought I had lost forever. Highly recommend for anyone dealing with thinning hair.",
    tag: "Hair Revival",
  },
  {
    name: "Shreya D.",
    rating: 5,
    text: "Exceptional experience from start to finish. The consultation was thorough and the treatment plan was tailored just for me.",
    tag: "Personalized Care",
  },

  // NEW ONES ↓↓↓

  {
    name: "Megha K.",
    rating: 5,
    text: "I came in for pigmentation concerns and the results have been incredible. My skin tone is so much more even now and I finally feel comfortable without makeup.",
    tag: "Pigmentation Treatment",
  },
  {
    name: "Ishita V.",
    rating: 5,
    text: "What stood out to me was how detailed the consultation was. Nothing felt rushed and every step of the treatment was explained clearly.",
    tag: "Skin Consultation",
  },
  {
    name: "Sneha P.",
    rating: 5,
    text: "I was nervous before my first procedure, but the team made me feel completely at ease. The results look natural and exactly how I wanted.",
    tag: "Dermal Fillers",
  },
  {
    name: "Neha L.",
    rating: 5,
    text: "My hair fall reduced drastically within a few weeks. The combination of treatments and guidance really made a difference.",
    tag: "Hair Fall Control",
  },
  {
    name: "Pooja N.",
    rating: 5,
    text: "The clinic environment itself feels calm and premium. You instantly feel like you're in safe and experienced hands.",
    tag: "Clinic Experience",
  },
  {
    name: "Aarti J.",
    rating: 5,
    text: "I’ve tried multiple clinics before, but this is the first place where I saw consistent results and a long-term plan.",
    tag: "Skin Rejuvenation",
  },
];

const statsRow = [
    { value: "9K+", label: "Reviews" },
    { value: "3,000+", label: "Happy Patients" },
    { value: "98%", label: "Satisfaction" },
    { value: "300+", label: "Treatments" },
];

function StarRating({ count }) {
    return (
        <div className="flex gap-[3px]">
            {Array.from({ length: count }).map((_, i) => (
                <i key={i} className="ri-star-fill text-[#B08D6A] text-sm" />
            ))}
        </div>
    );
}

export function Testimonials() {
    const sliderRef = useRef(null);

    const scroll = (dir) => {
        const el = sliderRef.current;
        const amount = el.offsetWidth * 0.8;
        el.scrollBy({
            left: dir === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    return (
        <section className="w-full bg-[#F5EFE6] px-5 md:px-10 lg:px-[84px] py-20 md:py-24 max-w-[1440px] mx-auto">
            {/* HEADER */}
            <div className="flex items-end justify-between mb-8 md:mb-10">
                <div>
                    <h2
                        className="text-[30px] sm:text-[36px] md:text-[42px]
                       font-semibold leading-[1.05] tracking-[-0.03em]"
                        style={{
                            fontFamily: "Cormorant Garamond",
                            color: "#634A36",
                        }}
                    >
                        Client Experiences
                    </h2>

                    <p
                        className="text-sm mt-2 max-w-[420px]"
                        style={{ fontFamily: "DM Sans", color: "#8B6F5C" }}
                    >
                        Real stories from patients who trusted us with their
                        skin, hair, and confidence.
                    </p>
                </div>

                {/* ARROWS */}
                <div className="flex gap-3">
                    <button
                        onClick={() => scroll("left")}
                        className="w-10 h-10 rounded-full border border-[#D8C9B6] flex items-center justify-center hover:bg-[#EDE3D5] transition"
                    >
                        <i className="ri-arrow-left-line" />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="w-10 h-10 rounded-full border border-[#D8C9B6] flex items-center justify-center hover:bg-[#EDE3D5] transition"
                    >
                        <i className="ri-arrow-right-line" />
                    </button>
                </div>
            </div>

            {/* SLIDER */}
            <div
                ref={sliderRef}
                className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide"
            >
                {reviews.map((r) => (
                    <div
                        key={r.name}
                        className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px]
                       snap-start rounded-[20px] p-6 flex flex-col gap-4
                       transition-all duration-500 hover:-translate-y-1"
                        style={{
                            background: "#EDE3D5",
                            border: "1px solid rgba(201,169,110,0.2)",
                        }}
                    >
                        <StarRating count={r.rating} />

                        <p
                            className="text-[15px] leading-[1.7]"
                            style={{ fontFamily: "DM Sans", color: "#4B341B" }}
                        >
                            {r.text}
                        </p>

                        <div className="mt-auto">
                            <p className="text-sm font-medium text-[#2C2118]">
                                {r.name}
                            </p>
                            <p className="text-xs mt-1 text-[#8B6F5C]">
                                {r.tag}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* STATS (TIGHTER + DIVIDERS) */}
            <div
                className="mt-12 md:mt-14 rounded-[24px] px-6 md:px-10 py-8 md:py-10 grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 text-center"
                style={{ background: "#EDE3D5" }}
            >
                {statsRow.map((s) => (
                    <div
                        key={s.label}
                        className="flex flex-col items-center gap-2"
                    >
                        {/* NUMBER */}
                        <p
                            className="text-[34px] md:text-[42px] leading-none tracking-[-0.02em]"
                            style={{
                                fontFamily: "DM Serif Display",
                                color: "#2C2118",
                            }}
                        >
                            {s.value}
                        </p>

                        {/* LABEL */}
                        <p
                            className="text-[12px] uppercase tracking-[0.12em]"
                            style={{
                                fontFamily: "DM Sans",
                                color: "#8B6F5C",
                            }}
                        >
                            {s.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
