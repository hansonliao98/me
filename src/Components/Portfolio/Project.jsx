import React, { useContext, useEffect, useState } from "react";
import { RevealBox } from "../utils/RevealPort";
// import githubBig from "../../images/githubBig.svg";
import githubBig2 from "../../images/githubBig2.png";
import laptop2 from "../../images/laptop2.png";
import Popup from "./Popup";
import { userContext } from "../../Context/userContext";

const Project = ({ post }) => {
  const { setIsVideo, loadVideoHandler } = useContext(userContext);

  const [hover, setHover] = useState(false);
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 544) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 544) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  console.log(post.private);
  if (post.private === true) {
    return (
      <div className="bg-slate rounded-lg">
        {" "}
        <RevealBox>
          <div className=" backdrop-blur-lg flex flex-col border rounded-lg border-slate-400">
            <img
              src={post.image}
              alt=""
              style={{
                width: "auto",
                height: "15rem",
                objectFit: "cover",
              }}
              className="rounded-t-lg"
            />
            <div
              className="p-4  bg-slate-700 rounded-b-lg -z-1"
              style={{ minHeight: "6rem" }}
            >
              <h3 className="text-xl mb-2"> {post.name} </h3>
              <p
                className={`text-sm transition-all ease-in duration-150 mb-2
          
          `}
              >
                {post.desc}
              </p>
              <div className="flex flex-row transition-all duration-150 w-fit overflow-hidden">
                {post.skills.map((skill) => (
                  <img src={skill} alt="" className="w-fit h-6" />
                ))}
              </div>
            </div>
          </div>
        </RevealBox>
      </div>
    );
  }

  return (
    <div
      href="##"
      className=" ease-in duration-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <RevealBox>
        <div className="backdrop-blur-lg flex flex-col border rounded-lg border-slate-400">
          {hover && isDesktop && (
            <div className=" absolute flex w-full h-full justify-center items-center transition ease-in duration-75 hover:bg-slate-700/80 rounded-lg">
              <a href={post.github} rel="noreferrer" target="_blank">
                <img
                  src={githubBig2}
                  alt=""
                  className="transition ease-in duration-75 m-3 h-28 hover:scale-105 "
                />
              </a>
              <button onClick={() => loadVideoHandler(post.url)}>
                <img
                  src={laptop2}
                  alt=""
                  width="auto"
                  height="200rem"
                  className=" transition ease-in duration-75 m-3 h-28 hover:scale-105 "
                />
              </button>
            </div>
          )}

          <img
            src={post.image}
            alt=""
            style={{
              width: "auto",
              height: "15rem",
              objectFit: "cover",
            }}
            className="rounded-t-lg"
          />
          {/* ADD HOVER ELEMENT HERE */}

          <div
            className="p-4  bg-slate-700 rounded-b-lg -z-1 "
            style={{ minHeight: "6rem" }}
          >
            <h3 className="text-xl mb-2 "> {post.name} </h3>
            <p
              className={`text-sm transition-all ease-in duration-150 mb-2
              
              `}
            >
              {post.desc}
            </p>
            <div className="flex flex-row transition-all duration-150 w-fit overflow-hidden ">
              {post.skills.map((skill) => (
                <img src={skill} alt="" className="w-fit h-6" />
              ))}
            </div>
          </div>
        </div>
      </RevealBox>
    </div>
  );
};

export default Project;
