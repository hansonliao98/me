import React from "react";
import { useState } from "react";
import moon from "../../images/moon.png";
import {
  RevealButton1,
  RevealButton10,
  RevealButton2,
  RevealButton3,
  RevealButton4,
  RevealButton5,
  RevealButton6,
  RevealButton7,
  RevealButton8,
  RevealButton9,
} from "../utils/RevealSkills";

const Skills = () => {
  const [moon, setMoon] = useState({ left: 10, top: 2 });

  const moonHandler = (event) => {
    let newMoon = { ...moon };
    // const beep = moon.left + 1
    // console.log(beep);
    newMoon.left = moon.left + 1;
    newMoon.top = moon.top + 1;
    console.log(newMoon);
    setMoon(newMoon);
    console.log(moon);
  };

  return (
    <div className="grid md:grid-cols-[1fr_2fr] px-10 md:px-20 mt-20 mb-40 md:my-40 ">
      <div className="flex justify-center pb-20 md:pb-3 ">
        <div
          className={`absolute w-40 h-40 bg-moonlight rounded-full -ml-20 -mt-10`}
        />
        <div className=" w-40 h-40 bg-white rounded-full" />
      </div>
      <div className="">
        <div className="">
          <h2 className="text-2xl ml-40 w-100 text-right border-b border-white leading-4 mb-10 h-2">
            <span className="bg-moonlight md:bg-darkblue pl-4">SKLLS</span>
          </h2>
        </div>
        <div className="flex gap-3 flex-wrap justify-end z-10">
          <RevealButton1>
            <button
              onClick={moonHandler}
              className="rounded-full bg-orange-500 py-1.5 px-5 outline outline-1 hover:bg-orange-400 ease-in duration-100"
            >
              Bootstrap
            </button>
          </RevealButton1>
          <RevealButton2>
            <button
              onClick={moonHandler}
              className="rounded-full bg-orange-500 py-1.5 px-5 outline outline-1 hover:bg-orange-400 ease-in duration-100"
            >
              CSS Tailwind
            </button>
          </RevealButton2>
          <RevealButton3>
            <button
              onClick={moonHandler}
              className="rounded-full bg-orange-500 py-1.5 px-5 outline outline-1 hover:bg-orange-400 ease-in duration-100"
            >
              React
            </button>
          </RevealButton3>
          <RevealButton4>
            <button
              onClick={moonHandler}
              className="rounded-full bg-orange-500 py-1.5 px-5 outline outline-1 hover:bg-orange-400 ease-in duration-100"
            >
              HTML
            </button>
          </RevealButton4>
          <RevealButton5>
            <button
              onClick={moonHandler}
              className="rounded-full bg-orange-500 py-1.5 px-5 outline outline-1 hover:bg-orange-400 ease-in duration-100"
            >
              Material UI
            </button>
          </RevealButton5>
          <RevealButton6>
            <button
              onClick={moonHandler}
              className="rounded-full bg-orange-500 py-1.5 px-5 outline outline-1 hover:bg-orange-400 ease-in duration-100"
            >
              Node.js
            </button>
          </RevealButton6>
          <RevealButton7>
            <button
              onClick={moonHandler}
              className="rounded-full bg-orange-500 py-1.5 px-5 outline outline-1 hover:bg-orange-400 ease-in duration-100"
            >
              Next.js
            </button>
          </RevealButton7>
          <RevealButton8>
            <button
              onClick={moonHandler}
              className="rounded-full bg-orange-500 py-1.5 px-5 outline outline-1 hover:bg-orange-400 ease-in duration-100"
            >
              React
            </button>
          </RevealButton8>
          <RevealButton9>
            <button
              onClick={moonHandler}
              className="rounded-full bg-orange-500 py-1.5 px-5 outline outline-1 hover:bg-orange-400 ease-in duration-100"
            >
              HTML
            </button>
          </RevealButton9>
          <RevealButton10>
            <button
              onClick={moonHandler}
              className="rounded-full bg-orange-500 py-1.5 px-5 outline outline-1 hover:bg-orange-400 ease-in duration-100"
            >
              Node.js
            </button>
          </RevealButton10>
        </div>
      </div>
    </div>
  );
};

export default Skills;
