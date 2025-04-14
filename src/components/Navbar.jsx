import { useState, useEffect } from "react";
import ContactUs from "../utils/Contactus";
import Wrapper from "../utils/Wrapper";

const Customlink = (props) => {
  return (
    <a
      href={props.href}
      className={`${props?.className} hover:text-primary duration-150`}
    >
      {props.children}
    </a>
  );
};

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close menu on resize to desktop
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper className="relative">
      <div className="flex py-6 lg:py-10 px-4 justify-between items-center">
        <h1 className="text-2xl lg:text-3xl font-bold text-primary">LOGO</h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-16 font-medium">
          <Customlink href="#" className="hover:text-primary">
            Home
          </Customlink>
          <Customlink href="#">About us</Customlink>
          <Customlink href="#">Services</Customlink>
          <Customlink href="#">Blog</Customlink>
          <ContactUs />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center space-y-1.5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
              isMenuOpen ? "transform rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
              isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 py-4">
          <div className="flex flex-col space-y-4 px-6">
            <Customlink href="#" className="hover:text-primary">
              Home
            </Customlink>
            <Customlink href="#">About us</Customlink>
            <Customlink href="#">Services</Customlink>
            <Customlink href="#">Blog</Customlink>
            <div className="pt-2">
              <ContactUs />
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Navbar;
