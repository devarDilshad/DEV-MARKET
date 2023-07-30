import { navLinks } from "../constants";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  const [toggle, setToggle] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const goTop = () => {
    window.scrollTo({
      top: (0, 0)
    });
  };

  return (
    <nav
      className={`flex flex-row justify-between items-center py-[1.8rem] px-[1.25rem] md:px-[6.9rem] w-full h-auto max-w-[130rem] top-0 right-0 left-0 z-10 ${
        sticky ? "fixed bg-[#0f051d] shadow-2xl shadow-slate-900" : "absolute"
      }`}
    >
      {/* Mobile Menu Overlay */}
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } h-full w-full fixed z-10 top-0 left-0 bg-gray-900 overflow-x-hidden pt-20 justify-center`}
      >
        <i
          className="fa-solid fa-xmark text-red absolute top-5 right-9 text-4xl text-red-500"
          onClick={() => setToggle((prev) => !prev)}
        ></i>
        <ul className="list-none flex flex-col justify-start items-center space-y-3">
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <a
                href={navLink.link}
                onClick={() => setToggle((prev) => !prev)}
                className="font-medium text-primary text-[1rem] cursor-pointer no-underline"
              >
                {navLink.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Logo */}
      <Link to="/">
        <p
          onClick={goTop}
          className="font-bold text-primary text-[1.5rem] w-[10rem] xs:w-full md:text-[2rem]"
        >
          DEV MARKET
        </p>
      </Link>
      {/* Nav Links */}
      <ul className="hidden sm:flex">
        {navLinks.map((navLink, index) => (
          <li
            key={navLink.id}
            className={`text-primary ${
              index === navLinks.length - 1 ? "mr-[3.5rem]" : "mr-[2.5rem]"
            }`}
          >
            {location.pathname === "/" ? (
              <a
                href={navLink.link}
                className=" font-bold text-secondary text-[1.25rem] hover:text-gradient cursor-pointer no-underline"
              >
                {navLink.name}
              </a>
            ) : (
              <Link
                to={navLink.alternate}
                className=" font-bold text-secondary text-[1.25rem] hover:text-gradient cursor-pointer no-underline"
              >
                {navLink.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
      {/* icons */}
      <div className="hidden sm:flex flex-row justify-center items-center mr-3 space-x-3">
        <i className="fa-brands fa-twitter cursor-pointer mr-3 text-primary font-bold text-xl hover:text-gradient"></i>
        <i className="fa-brands fa-discord cursor-pointer text-primary font-bold text-xl hover:text-gradient"></i>
      </div>
      {/* Mobile Menu Container */}
      <div className="w-[14rem] flex justify-end items-center sm:hidden mr-3">
        <i
          onClick={() => setToggle((prev) => !prev)}
          className="fa-solid fa-bars-staggered hamburger-menu fa-lg text-primary"
        ></i>
      </div>
    </nav>
  );
};
export default Navbar;
