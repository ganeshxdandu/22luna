import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ConcernSelector } from "./components/ConcernSelector";
import { SignaturePrograms } from "./components/SignaturePrograms";
import { Treatments } from "./components/Treatments";
import { SpaceSection } from "./components/SpaceSection";
import { DoctorSection } from "./components/DoctorSection";
import { Testimonials } from "./components/Testimonials";
import { CtaBanner } from "./components/CtaBanner";
import { Footer } from "./components/Footer";

export default function App() {
    return (
        <div
            style={{ background: "#F5EFE6", fontFamily: "DM Sans, sans-serif" }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Display:ital@0;1&display=swap');
        * { box-sizing: border-box; }
      `}</style>
            <Navbar />
            <Hero />
            <ConcernSelector />
            <SignaturePrograms />
            <Treatments />
            <SpaceSection />
            <DoctorSection />
            <Testimonials />
            <CtaBanner />
            <Footer />
        </div>
    );
}
