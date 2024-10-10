import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { logo, arrow, ellipse } from "../../assets/png/images-icon";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavbar = (): void => {
    setIsOpen((prev) => !prev);
  };

  const navItems = [
    { label: "Home", href: "#home", icon: ellipse },
    { label: "Products", href: "#Products", icon: arrow },
    { label: "Investment Club", href: "#skills" },
    { label: "Blog", href: "#Blog" },
    { label: "About Us", href: "#About Us" },
    { label: "FAQs", href: "#FAQs" },
  ];

  return (
    <nav className="fixed w-full h-[60px] flex justify-between items-center bg-primaryWhite text-primaryTeal px-4">
      {/* Mobile Toggle Button */}
      <button onClick={toggleNavbar} className="md:hidden z-10">
        {isOpen ? (
          <FaTimes className="cursor-pointer transition-transform ease-in-out duration-1000 transform hover:scale-110" />
        ) : (
          <FaBars className="cursor-pointer transition-transform hover:scale-110 ease-in-out duration-1000 transform" />
        )}
      </button>

      {/* Logo */}
      <div>
        <img
          className="w-[70px] lg:ml-[70px] xl:ml-[90px]"
          src={logo}
          alt="Company Logo"
        />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden flex-row space-x-6 mr-[120px] md:flex Tomato Grotesk">
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.href} className={item.label === "Home" ? "font-bold" : ""}
            >{item.label}
            {item.label === "Products" && (
                <img src={item.icon} alt="arrow" className="inline-block ml-1 w-4 h-4 animate-moveUpDown"/>
            )}
            {item.label === "Home" && (
                <img src={item.icon} alt="ellipse" className="ml-5"/>
            )}
            
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navbar View */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-0 left-0 md:hidden flex flex-col justify-center items-center w-3/4 h-screen bg-gray-900`}
      >
        {navItems.map((item) => (
          <li key={item.label} className="py-6 text-[25px]">
            <a onClick={toggleNavbar} href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
