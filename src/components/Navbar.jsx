import { useState, useEffect } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full flex items-center justify-between px-5 md:px-10 lg:px-[84px] py-3 fixed top-0 left-0 z-50 transition-all duration-300 ${
                isScrolled ? "shadow-md" : ""
            }`}
            style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                background: isScrolled
                    ? "rgba(245, 239, 230, 0.7)"
                    : "rgba(245, 239, 230, 0.4)",
                borderBottom: "0.5px solid rgba(237, 227, 213, 0.5)",
            }}
        >
            {/* Logo */}
            <div className="flex items-center shrink-0">
                <img
                    src="https://cdn.codia.ai/figma/dcGShZn6xqh4jywqqIP3I4/img-b7f90490fbd1bf42.svg"
                    alt="logo"
                    className="h-8 md:h-10 w-auto"
                />
                <img
                    src="https://cdn.codia.ai/figma/dcGShZn6xqh4jywqqIP3I4/img-4c885c1174aef916.svg"
                    alt="logo"
                    className="h-8 md:h-10 w-auto"
                />
                <img
                    src="https://cdn.codia.ai/figma/dcGShZn6xqh4jywqqIP3I4/img-b0d8380e12fdf05f.svg"
                    alt="logo"
                    className="h-9 md:h-12 w-auto"
                />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-7">
                {["Home", "Programs", "Treatments", "About"].map((link) => (
                    <a
                        key={link}
                        href="#"
                        className="text-[#6F655D] text-sm lg:text-base hover:text-[#4B341B] transition-colors"
                        style={{ fontFamily: "DM Sans" }}
                    >
                        {link}
                    </a>
                ))}
            </div>

            {/* CTA */}
            <button
                className="hidden md:flex items-center gap-2 pl-3 pr-[6px] py-[6px] rounded-full text-white text-sm"
                style={{
                    background:
                        "linear-gradient(90deg, #2C2118 0%, #533E2D 100%)",
                }}
            >
                <span>Book Consultation</span>
                <span className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white/10">
                    <img
                        src="https://cdn.codia.ai/figma/dcGShZn6xqh4jywqqIP3I4/img-d67b904b3a608583.svg"
                        alt="arrow"
                        className="w-[10px] h-[10px]"
                    />
                </span>
            </button>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex flex-col gap-[5px]"
            >
                <span className="w-6 h-[2px] bg-[#4B341B]" />
                <span className="w-6 h-[2px] bg-[#4B341B]" />
                <span className="w-6 h-[2px] bg-[#4B341B]" />
            </button>

            {/* Mobile Menu */}
            <div
                className={`absolute top-full left-0 w-full transition-all duration-300 overflow-hidden md:hidden ${
                    isOpen ? "max-h-[400px] py-6" : "max-h-0"
                }`}
                style={{
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    background: "rgba(245, 239, 230, 0.85)",
                    borderBottom: "0.5px solid rgba(237, 227, 213, 0.5)",
                }}
            >
                <div className="flex flex-col items-center gap-6">
                    {["Home", "Programs", "Treatments", "About"].map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-[#6F655D] text-base hover:text-[#4B341B]"
                        >
                            {link}
                        </a>
                    ))}

                    <button
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm"
                        style={{
                            background:
                                "linear-gradient(90deg, #2C2118 0%, #533E2D 100%)",
                        }}
                    >
                        Book Consultation
                    </button>
                </div>
            </div>
        </nav>
    );
}
