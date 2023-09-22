// Navbar.tsx

import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [menuIconColor, setMenuIconColor] = useState("white");


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
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
  
    const scrollPosition = window.scrollY;
  
    if (scrollPosition >= 760) {
      navbar?.removeAttribute('style')
      navbar?.classList.add('scrolled');
      setMenuIconColor("black");

    } else {
      navbar?.classList.remove('scrolled');
      setMenuIconColor("white");
    }
  });

  return (
    <>
    
      <nav className={"navbar"} style={showMenu ? {backgroundColor:"white"}: {backgroundColor:"transparent"}}>
    
          <div className="logo" style={showMenu ? { color: "black" } : {}}>
            MK
          </div>
       
        {isMobile ? (
          <>
            {!showMenu && (
              <button className="navbar-btn" onClick={() => setShowMenu(true)}>
                <IconContext.Provider value={{ color: menuIconColor, size: "24px" }}>
                  <div>
                    <HiOutlineMenuAlt3 />
                  </div>
                </IconContext.Provider>
              </button>
            )}
            {showMenu && (
              <button className="navbar-btn" onClick={() => setShowMenu(false)}>
                <IconContext.Provider value={{ color: "black", size: "24px" }}>
                  <div>
                    <HiXMark />
                  </div>
                </IconContext.Provider>
              </button>
            )}
          </>
        ) : (
          <>
            <ul className="nav-links">
              <li onClick={() => setShowMenu(false)}>
                <a href="#experience">Experience</a>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <a href="#education">Education</a>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <a href="#skills">Skills</a>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </>
        )}
      </nav>
      {showMenu && (
        <>
          <ul className="mobile-menu">
            <li onClick={() => setShowMenu(false)}>
              <a href="#experience">Experience</a>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <a href="#education">Education</a>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <a href="#skills">Skills</a>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default Navbar;
