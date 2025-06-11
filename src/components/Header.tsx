import React from "react";

const Header = () => (
  <header className="relative flex flex-col items-center pt-8 pb-4 z-20">
    <div className="flex flex-col items-center">
      <img src="/assets/logo.svg" alt="GutVeda Logo" className="w-12 mb-2" />
      <span className="font-playfair text-3xl md:text-4xl font-bold text-forest-green tracking-wide">GutVeda</span>
    </div>
    <nav className="absolute right-8 top-8">
      <ul className="flex gap-8 text-forest-green font-lato font-bold text-base uppercase">
        {/* <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Shop</a></li> */}
      </ul>
    </nav>
  </header>
);

export default Header;
