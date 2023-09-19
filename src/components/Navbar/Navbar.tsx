// Navbar.tsx

import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

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

  return (
    <>
      <nav className={"navbar"}>
        <div className="logo">MK</div>
        {isMobile ? (
          <>
            {!showMenu && (
              <button className="navbar-btn" onClick={() => setShowMenu(true)}>
                <IconContext.Provider value={{ color: "black", size: "22px" }}>
                  <div>
                    <HiOutlineMenuAlt3 />
                  </div>
                </IconContext.Provider>
              </button>
            )}
            {showMenu && (
              <button className="navbar-btn" onClick={() => setShowMenu(false)}>
                <IconContext.Provider value={{ color: "black", size: "22px" }}>
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
              <li>Experience</li>
              <li>Education</li>
              <li>Skills</li>
              <li>Projects</li>
            </ul>
          </>
        )}
      </nav>
      {showMenu && (
        <>
          <ul className="mobile-menu">
            <li>Experience</li>
            <li>Education</li>
            <li>Skills</li>
            <li>Projects</li>
          </ul>
        </>
      )}
    </>
  );
};

export default Navbar;
