import React from "react";

const Navbar = () => {
  return (
    <>
      <div class=" hidden w-screen md:flex justify-end pe-10 sticky top-0 h-0 z-9">
        <a href="#home" class="p-5 text-md text-white">
          Home
        </a>
        <a href="#about" class="p-5 text-md text-white">
          About
        </a>
        <a href="#portfolio" class="p-5 text-md text-white">
          Portfolio
        </a>
        <a href="#design" class="p-5 text-md text-white">
          Design
        </a>
        <a href="#contact" class="p-5 text-md text-white">
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;
