import CloseIcon from "@mui/icons-material/Close";
import React, { useContext, useState } from "react";
import { userContext } from "../../Context/userContext";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const { isDesktop } = useContext(userContext);
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);

  if (isDesktop) {
    return (
      <>
        <div class=" w-screen flex justify-end pe-10 sticky top-0 h-0 z-9 uppercase font-mono">
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
  } else {
    return (
      <div class=" w-screen sticky h-0 z-10 top-0 ">
        <div
          className={`${isNavbarOpened && "h-screen"}`}
          onClick={() => setIsNavbarOpened(!isNavbarOpened)}
        >
          <div
            class={`flex flex-col text-md text-white shadow-lg ${
              isNavbarOpened && " bg-slate-700/70 "
            } ease-in-out transition-all duration-500`}
          >
            <div class="p-7 text-md flex justify-end backdrop-blur-md">
              <MenuIcon onClick={() => setIsNavbarOpened(!isNavbarOpened)} />
            </div>
            <div
              className={`${
                isNavbarOpened ? "pt-[0px]" : "mt-[-600px]"
              } backdrop-blur-md flex flex-col w-full uppercase font-mono shadow-lg ease-in-out transition-all duration-500 `}
            >
              <a href="#home" class="p-7">
                Home
              </a>
              <a href="#about" class="p-7">
                About
              </a>
              <a href="#portfolio" class="p-7">
                Portfolio
              </a>
              <a href="#design" class="p-7">
                Design
              </a>
              <a href="#contact" class="p-7">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;
