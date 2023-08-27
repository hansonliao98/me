import React from "react";
import selfie from "../../images/selfie.png";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import email from "../../images/email.png";
import {
  Reveal,
  Reveal2,
  Reveal3,
  Reveal4,
  Reveal5,
  RevealPic,
} from "../utils/Reveal";

const About = () => {
  return (
    <div className=" grid md:grid-cols-2 mx-10 md:mx-20 pt-20" id="about">
      <div className="flex self-center md:p-10">
        <RevealPic>
          <img
            src={selfie}
            alt=""
            className=" h-4/6 max-h-80 md:max-h-full border rounded-2xl max-w-full bg-blue-200/30 backdrop-blur-lg"
          />
        </RevealPic>
      </div>
      <div className="md:m-auto mt-10 flex flex-col self-center ">
        <Reveal>
          <h1 className="text-3xl pb-5">ABOUT ME</h1>
        </Reveal>
        <Reveal2>
          <h1 className="text-sm grid grid-rows-2 ">
            <span className="">
              How ya doin? I'm Hanson, a front end developer with an eye for
              eloquent design. That's because each need the other to complete a
              perfect system.
            </span>
            <span>
              I'm a problem solver. I have a passion for building functional yet
              easy to use solutions for common problems. In my downtime you'll
              find me extreme couponing, playing piano, or feeling strongly
              about a TV show.
            </span>
          </h1>
        </Reveal2>
        <div className="flex pt-7 gap-2 ">
          <a
            href="https://www.linkedin.com/in/hanson-liao-2031/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Reveal3>
              <img
                src={linkedin}
                alt=""
                className="absolute w-10 linear  hover:animate-ping"
              />
              <img src={linkedin} alt="" className="w-10 " />
            </Reveal3>
          </a>
          <a
            href="https://github.com/hansonliao98"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Reveal4>
              <img
                src={github}
                alt=""
                className="absolute w-10 linear  hover:animate-ping"
              />
              <img src={github} alt="" className="w-10 " />
            </Reveal4>
          </a>
          <a
            href="mailto: hansonliao982@gmail.com?subject = Feedback&body = Message"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Reveal5>
              <img
                src={email}
                alt=""
                className="absolute w-10 linear  hover:animate-ping"
              />
              <img src={email} alt="" className="w-10 " />
            </Reveal5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
