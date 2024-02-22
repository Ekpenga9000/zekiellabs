import { ReactElement, FC } from "react";

const Nav = () => {
  return (
    <header className="flex justify-center">
      <nav className="container flex justify-between items-center test-border">
        <a href="/" className="font-semibold">
          Zekiel Labs
        </a>
        <ul className="flex xl:gap-4">
          <li>
            <a href="#services" className="text-sm">Services</a>
          </li>
          <li>
            <a href="#pricing" className="text-sm">Pricing</a>
          </li>
          <li>
            <a href="#portfolio" className="text-sm">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="text-sm">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
