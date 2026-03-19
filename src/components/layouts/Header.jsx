import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="py-2 lg:py-4 fixed w-screen md:w-full z-10 shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="/">
          <h2 className="font-inter font-medium text-4xl px-2">RIEME</h2>
        </a>

        {/* Desktop menu */}
        <ul className="hidden sm:flex items-center gap-x-7">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="font-inter text-sm hover:text-orange-500 duration-300 uppercase"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-2xl px-2"
        >
          {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* For mobile */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-y-4 py-4 bg-white border-t">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-inter text-sm hover:text-orange-500 duration-300 uppercase"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;