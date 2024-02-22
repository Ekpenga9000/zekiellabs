"use client";

import { useState } from "react";

const Nav = () => {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);

  const handleDropdown = () => {
    setIsDropdown((prev) => !prev);
  };

  return (
    <header className="flex justify-center relative bg-white">
      <nav className="container flex justify-between items-center py-4 px-2 xl:px-0">
        <a href="/" className="font-semibold">
          Zekiel <span className="color-primary">Labs</span>
        </a>
        <ul className="hidden md:flex md:gap-4">
          <li>
            <a href="#services" className="text-sm">
              Services
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-sm">
              Pricing
            </a>
          </li>
          <li>
            <a href="#portfolio" className="text-sm">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="text-sm">
              Contact
            </a>
          </li>
        </ul>

        {/* This is the mobile navigation */}
        <div className="cursor-pointer md:hidden" onClick={handleDropdown}>
          <i className="bx bx-menu-alt-right text-lg"></i>
        </div>

        {isDropdown && (
          <div className="absolute md:hidden test-border bg-white start-0 end-0 top-0 pt-5 h-screen">
            <div
              className="cursor-pointer absolute top-5 right-5"
              onClick={handleDropdown}
            >
              <i className="bx bx-x text-lg"></i>
            </div>
            <ul className="flex flex-col divide-y items-center justify-start py-14 gap-11 h-full">
              <li onClick={handleDropdown}>
                <a href="#services" className="text-md">
                  Services
                </a>
              </li>
              <li onClick={handleDropdown}>
                <a href="#pricing" className="text-md">
                  Pricing
                </a>
              </li>
              <li onClick={handleDropdown}>
                <a href="#portfolio" className="text-md">
                  Portfolio
                </a>
              </li>
              <li onClick={handleDropdown}>
                <a href="#contact" className="text-md">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
