import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import HeroBackground from "@/app/assets/home.jpg";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(245, 243, 239, 0.85), rgba(245, 243, 239, 0.85)), url(${HeroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl mb-6" style={{ color: "#5a4a3a" }}>
          Hi, I'm <span style={{ color: "#8ba888" }}>Stephanie Chung</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8" style={{ color: "#7a6a5a" }}>
          Computer Science Student | Designer | Researcher
        </p>
        <p
          className="text-lg max-w-2xl mx-auto mb-12"
          style={{ color: "#6a5a4a" }}
        >
          Welcome to my digital space where I showcase my journey through code,
          creativity, and continuous learning.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 rounded-full transition-all hover:scale-105"
            style={{ backgroundColor: "#8ba888", color: "#ffffff" }}
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 rounded-full transition-all hover:scale-105"
            style={{ backgroundColor: "#b89f8f", color: "#ffffff" }}
          >
            Get in Touch
          </button>
        </div>
      </motion.div>
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} style={{ color: "#8ba888" }} />
      </button>
    </section>
  );
}
