import { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import LOGO from "../assets/logo.svg";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
            style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                background: isScrolled
                    ? "rgba(245, 239, 230, 0.75)"
                    : "rgba(245, 239, 230, 0.45)",
                borderBottom: "0.5px solid rgba(0,0,0,0.06)",
            }}
        >
            {/* CONTAINER */}
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[84px] py-3 flex items-center justify-between">
                {/* LOGO */}
                <img
                    src={LOGO}
                    alt="logo"
                    className="h-8 md:h-9 w-auto max-w-[140px] shrink-0"
                />

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-7">
                    {["Home", "Programs", "Treatments", "About"].map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-[#6B6259] text-[15px] tracking-[0.02em] hover:text-[#3E2F21] transition"
                            style={{ fontFamily: "DM Sans" }}
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <button
                    className="hidden md:flex items-center px-4 py-[6px] rounded-full text-[13px] tracking-[0.03em]"
                    style={{
                        border: "1px solid rgba(0,0,0,0.1)",
                        background: "rgba(255,255,255,0.4)",
                        color: "#3E2F21",
                    }}
                >
                    Book Consultation
                </button>

                {/* MOBILE MENU ICON */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-[22px] text-[#3E2F21] shrink-0"
                >
                    <i className={isOpen ? "ri-close-line" : "ri-menu-line"} />
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[360px] py-6" : "max-h-0"
                }`}
                style={{
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    background: "rgba(245, 239, 230, 0.9)",
                    borderBottom: "0.5px solid rgba(0,0,0,0.06)",
                }}
            >
                <div className="flex flex-col items-center gap-5">
                    {["Home", "Programs", "Treatments", "About"].map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-[#6B6259] text-[16px] tracking-[0.02em] hover:text-[#3E2F21]"
                        >
                            {link}
                        </a>
                    ))}

                    <button
                        className="mt-2 px-5 py-2 rounded-full text-[13px]"
                        style={{
                            border: "1px solid rgba(0,0,0,0.1)",
                            background: "rgba(255,255,255,0.5)",
                            color: "#3E2F21",
                        }}
                    >
                        Book Consultation
                    </button>
                </div>
            </div>
        </nav>
    );
}
