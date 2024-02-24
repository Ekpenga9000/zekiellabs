import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white flex justify-center px-4">
      <div className="container-custom py-10 md:flex items-center md:justify-between">
      <p>© 2024 Zekiel <span className="color-primary">Labs</span>. All rights reserved.</p>
      <ul className="hidden md:flex items-center gap-5">
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="bg-primary p-2 rounded-md shadow-sm">
          <a href="#hero"><i className='bx bx-up-arrow-alt text-white'></i></a>
        </li>
      </ul>
      </div>
    </footer>
  );
};

export default Footer;
