import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const navItems = [
  { label: "Eğitim", section: "educate" },
  { label: "Deneyim", section: "work" },
  { label: "Projeler", section: "project" },
  { label: "Diller", section: "language" },
  { label: "Hobiler", section: "hobbies" },
];

function Navigation({ onScroll }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  const handleScroll = (section) => {
    onScroll(section);
    setActiveSection(section); 
    setIsMenuOpen(false); 
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-primary text-secondary z-50 shadow-md">
      <div className="flex sm:hidden justify-end gap-5 p-3 cursor-pointer">
        {navItems.map(({ label, section }) => (
          <div
            key={section}
            onClick={() => handleScroll(section)}
            className={`p-5 cursor-pointer ${activeSection === section ? "text-pink-400" : "hover:text-pink-400"}`}
          >
            {label}
          </div>
        ))}
      </div>

      <div className="hidden sm:flex justify-end items-center p-3">
        <GiHamburgerMenu size={24} onClick={toggleMenu} className="cursor-pointer" />
        <span className="ml-2">Menü</span>
      </div>

      {isMenuOpen && (
        <div className="absolute mt-2 shadow-lg rounded-lg z-20 w-full sm:flex sm:flex-col bg-primary text-white">
          {navItems.map(({ label, section }) => (
            <div
              key={section}
              onClick={() => handleScroll(section)}
              className={`block p-4 cursor-pointer ${activeSection === section ? "text-pink-400" : "hover:bg-gray-200 hover:text-pink-400"}`}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navigation;
