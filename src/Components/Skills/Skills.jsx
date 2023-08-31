import { MotionConfig } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import moonsmile from "../../media/moonsmile.png";
import arrow from "../../images/arrow.png";
import { motion, useAnimation, useInView } from "framer-motion";
import { style } from "@mui/system";
import Skill from "./Skill";

const skills = [
  "React",
  "Bootstrap",
  "HTML",
  "Tailwind",
  "Material UI",
  "Node.js",
  "Next.js",
  "Express",
  "JQuery",
  "Figma",
];

const Skills = () => {
  const [moon, setMoon] = useState({ right: 60, top: 10 });

  const moonHandler = (event) => {
    let newMoon = { ...moon };
    // const beep = moon.right + 1
    // console.log(beep);
    newMoon.right = moon.right + 15;
    newMoon.top = moon.top + 15;
    console.log(newMoon);
    setMoon(newMoon);
    console.log(moon.right);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="grid md:grid-cols-[1fr_2fr] px-10 md:px-20 mt-20 mb-40 md:my-40 ">
      <div className="flex justify-center pb-20 md:pb-3">
        <div
          className={`ease-in-out transition-all duration-300 absolute w-40 h-40 bg-moonlight rounded-full mt-[${moon.top}px] mr-[${moon.right}px]	overflow-hidden`}
        />
        <div className=" w-40 h-40 bg-white rounded-full">
          <img src={moonsmile} alt="" />
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-2xl ml-40 w-100 text-right border-b border-white leading-4 mb-10 h-2">
            <span className="bg-moonlight md:bg-darkblue pl-4">SKILLS</span>
          </h2>
        </div>
        <div className="flex gap-3 flex-wrap justify-end z-10" ref={ref}>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id}
              variants={{
                hidden: { opacity: 0, y: 0, x: -75 },
                visible: { opacity: 1, y: 0, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1, delay: i * 0.1 }}
            >
              <Skill skill={skill} moonHandler={moonHandler} />
            </motion.div>
          ))}
        </div>
        <div className="mr-10 flex justify-end items-end pt-2">
          <img src={arrow} alt="" width="30px" className="pb-1" />
          <p className="font-serif">see the moon</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
