import { motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";
import { DOCTOR } from "../utils/utils";

const { DOCTOR_IMG, PATTERN } = DOCTOR;

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "3K+", label: "Patients Treated" },
  { value: "2x", label: "International Certifications" },
];

export function DoctorSection() {
  return (
    <section
      className="w-full px-5 md:px-10 py-24 md:py-32"
      style={{
        background: `url(${PATTERN}), #EDE3D5`,
        backgroundSize: "cover",
      }}
    >
      {/* 
        GRID CONTAINER: 
        Default alignment is 'stretch', meaning the Left and Right columns 
        will always have the exact same height.
      */}
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-[420px_1fr] gap-16">
        
        {/* LEFT COLUMN: THE STICKY TRACK */}
        <div className="relative">
          {/* 
            The 'sticky' element. 
            'top-[120px]' keeps it from hitting the very top of the browser.
            It will stay here until the user reaches the bottom of the right-side content.
          */}
          <div className="lg:sticky lg:top-[120px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >
              <img
                src={DOCTOR_IMG}
                alt="Dr. Niharika Mandhyan"
                className="w-full h-[420px] md:h-[550px] object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN: THE CONTENT WRAPPER */}
        <div className="flex flex-col gap-10 max-w-[540px]">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] tracking-[0.18em] uppercase mb-3 text-[#B08D6A]">
              Meet the Founder
            </p>
            <h2
              className="text-[32px] md:text-[44px] font-semibold leading-[1.05] tracking-[-0.03em]"
              style={{ fontFamily: "Cormorant Garamond", color: "#2C2118" }}
            >
              Dr. Niharika <span className="text-[#B08D6A]">Mandhyan</span>
            </h2>
            <p className="text-sm mt-2 text-[#8B6F5C]">
              BDS · MDS Prosthodontics · Masters in Aesthetic Medicine
            </p>
          </motion.div>

          {/* QUOTE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="pl-5 border-l border-[#D8C9B6]"
          >
            <p className="text-[18px] italic leading-[1.6] text-[#4B341B]">
              "Your skin, your smile — treated by someone who has spent a decade perfecting both."
            </p>
          </motion.div>

          {/* BODY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col gap-6 text-[15px] leading-[1.75] text-[#6F655D] md:text-justify"
          >
            <p>
              Dr. Niharika Mandhyan didn’t set out to build just another clinic.
              She set out to change what aesthetic care looks like in India —
              starting with the belief that every patient deserves treatments
              designed around their unique skin, their real concerns, and their life.
            </p>

            <p>
              Armed with an MDS in Prosthodontics from V.S. Dental College,
              Bangalore, and a Masters in Aesthetic Medicine, she has spent over
              a decade crossing continents — training under world-renowned specialists.
            </p>

            <p>
              She has partnered with global leaders like Lumenis and Inmode,
              pioneered treatments for skin of color, and holds advanced certifications
              in thread lifting, Botox and dermal fillers. But what patients remember
              most isn’t the technology. It’s how she listens.
            </p>

            {/* Added more content to demonstrate scrolling while image stays sticky */}
            <p>
              Beyond clinical practice, she is a sought-after speaker at national
              conferences, sharing her insights on the integration of dental
              aesthetics and facial rejuvenation. Her philosophy is simple: 
              true beauty is a harmony between health and art.
            </p>

            <ul className="list-disc pl-5 mt-2 space-y-1 text-[14px]">
              <li>American Academy of Aesthetic Medicine</li>
              <li>Canadian Board of Aesthetic Medicine</li>
              <li>Indian Prosthodontic Society</li>
            </ul>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="border-t border-[#E3D7C8] pt-6 grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  className="text-[32px] md:text-[36px] font-normal leading-none tracking-[-0.03em]"
                  style={{ fontFamily: "DM Serif Display", color: "#2C2118" }}
                >
                  {s.value}
                </p>
                <p className="text-xs mt-1 text-[#8B6F5C]">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA - The bottom boundary */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            className="mt-4 self-start flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm text-white bg-gradient-to-r from-[#2C2118] to-[#533E2D]"
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