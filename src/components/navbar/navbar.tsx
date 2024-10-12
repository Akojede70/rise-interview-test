import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5"
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
    <nav className="fixed w-full z-30 h-[60px] flex justify-between items-center bg-primaryWhite text-primaryTeal px-4">
      {/* Mobile Toggle Button */}

      <div className="w-full flex flex-col items-center space-y-4 mt-2">
        <div className= " w-full relative">
    <input
      type="text"
      defaultValue="web.rise.capital"
      className="bg-primaryLightGray md:hidden text-center rounded-[10px] text-primaryBlack font-bold h-[47px] w-full px-[2%] py-[2%] mt-[20%] focus:outline-none focus:ring-2 focus:ring-black"
    />
     <IoLockClosed className="absolute left-[30%] top-[82%] transform -translate-y-1/2 text-primaryBlack md:hidden" />
    </div>
  

      

      {/* Logo */}
      <div className="flex w-full justify-between items-center mt-2">
      <img
        className="w-[70px] lg:ml-[70px] xl:ml-[90px]"
        src={logo}
        alt="Company Logo"
      />
    

      <button onClick={toggleNavbar} className="md:hidden z-10 ">
        {isOpen ? (
          <FaTimes size={27} className="cursor-pointer transition-transform ease-in-out duration-1000 transform hover:scale-110" />
        ) : (
          <FaBars size={27} className="cursor-pointer transition-transform hover:scale-110 ease-in-out duration-1000 transform" />
        )}
      </button>
      </div>
      </div>
      {/* Desktop Navigation */}
      <ul className="hidden w-[70%] flex-row space-x-6 mr-[120px] md:flex mt-4 Tomato Grotesk">
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.href} className={item.label === "Home" ? "font-bold" : ""}
            >{item.label}
            {item.label === "Products" && (
                <img src={item.icon} alt="arrow" className="inline-block ml-1 w-4 h-4 animate-moveUpDown"/>
            )}
            {item.label === "Home" && (
                <img src={item.icon} alt="ellipse" className="ml-5 animate-moveLeftRightSlow"/>
            )}
            
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navbar View */}
      <aside>
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
      </aside>
    </nav>
  );
};

export default Navbar;
