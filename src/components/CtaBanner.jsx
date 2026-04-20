import { useState } from "react";
import "remixicon/fonts/remixicon.css";

export function CtaBanner() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    concern: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.fname.trim() || !form.phone.trim()) {
      setError(true);
      return;
    }
    setError(false);
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#FAF6F1] px-5 md:px-10 py-16 md:py-20">

      <div className="max-w-[1440px] mx-auto bg-[#2A2118] rounded-[28px] px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 relative overflow-hidden">

        {/* LEFT */}
        <div className="relative z-10">

          <p className="text-[11px] tracking-[0.18em] uppercase text-[#B8916A] mb-4">
            Ready when you are
          </p>

          <h2
            className="text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.03em]"
            style={{ fontFamily: "Cormorant Garamond", color: "#FAF6F1" }}
          >
            Your skin deserves a plan.
            <br />
            Not just <span className="text-[#C9A882] italic">a product.</span>
          </h2>

          <p className="text-sm text-[#8A7A6A] mt-4 max-w-[420px] leading-[1.7]">
            Reach out your way — book a consultation, call the clinic, or drop us a WhatsApp.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col gap-3 mt-6 max-w-[320px]">

            <button
              onClick={() => window.open("tel:+918971725522")}
              className="flex items-center gap-4 px-5 py-3 rounded-[14px] border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <i className="ri-phone-line text-[#C9A882]" />
              <div className="text-left">
                <p className="text-sm text-white">Call the Clinic</p>
                <p className="text-xs text-white/40">Mon – Sat, 10 AM – 7 PM</p>
              </div>
              <i className="ri-arrow-right-up-line ml-auto opacity-40" />
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/918971725522?text=Hi, I'd like to book a consultation"
                )
              }
              className="flex items-center gap-4 px-5 py-3 rounded-[14px] border border-green-500/20 bg-green-500/10 hover:bg-green-500/20 transition"
            >
              <i className="ri-whatsapp-line text-green-400" />
              <div className="text-left">
                <p className="text-sm text-white">Message on WhatsApp</p>
                <p className="text-xs text-white/40">Quick replies</p>
              </div>
              <i className="ri-arrow-right-up-line ml-auto opacity-40" />
            </button>
          </div>

          {/* TRUST */}
          <div className="flex flex-wrap gap-2 mt-6">
            {["Free consultation", "Same-day response", "Doctor-led"].map(
              (t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-[20px] p-6 md:p-8">

            {!submitted ? (
              <>
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: "Cormorant Garamond", color: "#FAF6F1" }}
                >
                  Book a Consultation
                </h3>

                <p className="text-xs text-white/40 mb-6">
                  Share a few details and we'll reach out.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="fname"
                    placeholder="First name"
                    onChange={handleChange}
                    className={`input ${error && !form.fname ? "border-[#B8916A]" : ""}`}
                  />
                  <input
                    name="lname"
                    placeholder="Last name"
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                <input
                  name="phone"
                  placeholder="Phone number"
                  onChange={handleChange}
                  className={`input mt-3 ${error && !form.phone ? "border-[#B8916A]" : ""}`}
                />

                <input
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className="input mt-3"
                />

                <select
                  name="concern"
                  onChange={handleChange}
                  className="input mt-3"
                >
                  <option value="">Select concern</option>
                  <option>Acne</option>
                  <option>Hair Fall</option>
                  <option>Anti-aging</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Message"
                  onChange={handleChange}
                  className="input mt-3"
                />

                <button
                  onClick={handleSubmit}
                  className="mt-5 w-full py-3 rounded-full bg-[#B8916A] hover:bg-[#C9A882] transition text-white text-sm flex items-center justify-center gap-2"
                >
                  Request Consultation
                  <i className="ri-arrow-right-line" />
                </button>

                <p className="text-[11px] text-white/30 text-center mt-3">
                  Your details are safe. No spam.
                </p>
              </>
            ) : (
              <div className="text-center py-10">
                <div className="mb-4 text-[#B8916A] text-3xl">
                  <i className="ri-check-line" />
                </div>
                <h3
                  className="text-xl"
                  style={{ fontFamily: "Cormorant Garamond", color: "#FAF6F1" }}
                >
                  Request received
                </h3>
                <p className="text-sm text-white/40 mt-2">
                  We’ll contact you within a few hours.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* INPUT STYLES */}
      <style jsx>{`
        .input {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 10px 12px;
          color: white;
          font-size: 13px;
          outline: none;
        }
        .input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
}