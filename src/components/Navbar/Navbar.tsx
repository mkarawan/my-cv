// Navbar.tsx

import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const [, setMenuIconColor] = useState("white");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
    console.log(showMenu);
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", checkScreenWidth);
    checkScreenWidth();
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    const scrollPosition = window.scrollY;

    if (window.innerWidth <= 1024 && scrollPosition >= 760) {
      navbar?.removeAttribute("style");
      navbar?.classList.add("scrolled");
      setMenuIconColor("black");
    } else if (window.innerWidth > 1024 && scrollPosition >= 620) {
      navbar?.removeAttribute("style");
      navbar?.classList.add("scrolled");
      setMenuIconColor("black");
    } else {
      navbar?.classList.remove("scrolled");
      setMenuIconColor("white");
    }
  });
  const hideMenu = () => {
    setShowMenu(false);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={"navbar"}
        style={
          showMenu
            ? { backgroundColor: "white" }
            : { backgroundColor: "transparent" }
        }
      >
        <div className="logo" style={showMenu ? { color: "black" } : {}}>
          MK
        </div>

        {isMobile ? (
          <>
            <div
              id="nav-icon2"
              className={`menu-button ${isOpen && showMenu ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </>
        ) : (
          <>
            <ul className="nav-links">
              <li onClick={hideMenu}>
                <a href="#experience">Experience</a>
              </li>
              <li onClick={hideMenu}>
                <a href="#education">Education</a>
              </li>
              <li onClick={hideMenu}>
                <a href="#skills">Skills</a>
              </li>
              <li onClick={hideMenu}>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </>
        )}
      </nav>
      {showMenu && (
        <>
          <ul className="mobile-menu">
            <li onClick={hideMenu} data-aos="fade-left"data-aos-druation="700">
              <a href="#experience">Experience</a>
            </li>
            <li onClick={hideMenu} data-aos="fade-left" data-aos-delay="100" data-aos-druation="700">
              <a href="#education">Education</a>
            </li>
            <li onClick={hideMenu} data-aos="fade-left" data-aos-delay="200"data-aos-druation="700">
              <a href="#skills">Skills</a>
            </li>
            <li onClick={hideMenu} data-aos="fade-left" data-aos-delay="300"data-aos-druation="700">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default Navbar;
