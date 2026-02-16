import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (roughly viewport height)
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);

      // Determine active section based on scroll position
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll(); // Call once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
      style={{
        backgroundColor: isScrolled
          ? "rgba(90, 74, 58, 0.95)"
          : "rgba(245, 243, 239, 0.95)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl transition-colors"
          style={{ color: isScrolled ? "#f5f3ef" : "#5a4a3a" }}
        >
          Portfolio
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="transition-all hover:scale-110 relative"
              style={{
                color:
                  activeSection === item.id
                    ? "#8ba888"
                    : isScrolled
                      ? "#e8e5df"
                      : "#6a5a4a",
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.color = "#8ba888";
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.color = isScrolled
                    ? "#e8e5df"
                    : "#6a5a4a";
                }
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X
              size={24}
              style={{ color: isScrolled ? "#f5f3ef" : "#5a4a3a" }}
            />
          ) : (
            <Menu
              size={24}
              style={{ color: isScrolled ? "#f5f3ef" : "#5a4a3a" }}
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 py-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-4 py-2 rounded-lg transition-all"
              style={{
                color:
                  activeSection === item.id
                    ? "#8ba888"
                    : isScrolled
                      ? "#e8e5df"
                      : "#6a5a4a",
                backgroundColor:
                  activeSection === item.id
                    ? "rgba(139, 168, 136, 0.1)"
                    : "transparent",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
