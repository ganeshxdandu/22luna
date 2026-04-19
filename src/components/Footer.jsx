import "remixicon/fonts/remixicon.css";

export function Footer() {
  return (
    <footer className="w-full bg-[#1A110B] text-[#8B6F5C]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[84px] py-16">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-14">

          {/* ===================== */}
          {/* BRAND (spans 2 rows) */}
          {/* ===================== */}
          <div className="lg:row-span-2 flex flex-col justify-between">

            <div>
              <h3
                className="text-[28px] tracking-[0.2em] mb-4"
                style={{ fontFamily: "Cormorant Garamond", color: "#EDE3D5" }}
              >
                LUNA
              </h3>

              <p className="text-sm leading-[1.7] max-w-[280px]">
                Skin, hair & dental care designed around you — guided by a decade
                of expertise and a genuine love for what we do.
              </p>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-3 mt-6">
              {["instagram", "facebook", "whatsapp", "youtube"].map((icon) => (
                <div
                  key={icon}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
                >
                  <i className={`ri-${icon}-line`} />
                </div>
              ))}
            </div>

          </div>

          {/* ===================== */}
          {/* ROW 1 */}
          {/* ===================== */}

          {/* TREATMENTS */}
          <div className="lg:col-start-2 lg:row-start-1">
            <h4 className="footer-heading">Treatments</h4>
            <ul className="footer-links">
              {[
                "Skin Care",
                "Hair Care",
                "Dental Care",
                "Men’s Treatments",
                "Laser Services",
                "Injectables",
              ].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div className="lg:col-start-3 lg:row-start-1">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              {[
                "About Dr. Niharika",
                "Our Programs",
                "Before & After",
                "Patient Stories",
                "Blog",
                "Careers",
              ].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* LOCATION */}
          <div className="lg:col-start-4 lg:row-start-1">
            <h4 className="footer-heading mb-4">Location</h4>

            <div className="rounded-[16px] overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9562469569173!2d77.6041185!3d12.9746503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae172a127754b9%3A0xfb75683bb0e65b33!2s22%20Luna%20Clinic!5e0!3m2!1sen!2sin!4v1776600153449!5m2!1sen!2sin"
                width="100%"
                height="200"
                loading="lazy"
                className="border-0"
              />
            </div>
          </div>

          {/* ===================== */}
          {/* ROW 2 */}
          {/* ===================== */}

          {/* CLINIC HOURS */}
          <div className="lg:col-start-2 lg:row-start-2 min-h-[180px]">
            <h4 className="footer-heading">Clinic Hours</h4>

            <div className="text-sm space-y-3 mt-3">
              <div className="flex justify-between">
                <span>Mon – Fri</span>
                <span className="text-[#EDE3D5]">10:00 AM – 7:00 PM</span>
              </div>

              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-[#EDE3D5]">10:00 AM – 5:00 PM</span>
              </div>

              <div className="flex justify-between opacity-50">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div className="lg:col-start-3 lg:row-start-2 min-h-[180px]">
            <h4 className="footer-heading">Contact</h4>

            <div className="text-sm space-y-3 mt-3">
              <div className="flex items-start gap-3">
                <i className="ri-phone-line text-[#B08D6A] w-[18px] mt-[2px]" />
                <span>+91 89717 25522</span>
              </div>

              <div className="flex items-start gap-3">
                <i className="ri-mail-line text-[#B08D6A] w-[18px] mt-[2px]" />
                <span>hello@lunaclinic.in</span>
              </div>

              <div className="flex items-start gap-3">
                <i className="ri-map-pin-line text-[#B08D6A] w-[18px] mt-[2px]" />
                <span className="leading-[1.6]">
                  Indiranagar, Bangalore — 560 038
                </span>
              </div>
            </div>
          </div>

          {/* CERTIFICATIONS (LOCKED UNDER LOCATION) */}
          <div className="lg:col-start-4 lg:row-start-2 min-h-[180px]">
            <h4 className="footer-heading">Certifications</h4>

            <ul className="footer-links mt-3 space-y-3">
              {[
                "American Academy of Aesthetic Medicine",
                "Canadian Board of Aesthetic Medicine",
                "Indian Prosthodontic Society",
              ].map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <i className="ri-shield-check-line text-[#B08D6A] mt-[2px]" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ===================== */}
        {/* BOTTOM BAR */}
        {/* ===================== */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">

          <p>© 2026 Luna Clinic, Bangalore. All rights reserved.</p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Policy", "Sitemap"].map((l) => (
              <a key={l} href="#" className="hover:text-[#B08D6A] transition">
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[#B08D6A]">
            <i className="ri-user-line" />
            <span>Doctor-led. Always.</span>
          </div>

        </div>

      </div>

      {/* STYLES */}
      <style>{`
        .footer-heading {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #EDE3D5;
          margin-bottom: 12px;
          font-family: "DM Sans";
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 14px;
        }

        .footer-links a {
          color: #8B6F5C;
          transition: 0.2s;
        }

        .footer-links a:hover {
          color: #B08D6A;
        }
      `}</style>

    </footer>
  );
}