import React from "react";
import { RevealTitle } from "../utils/RevealPort";
import Project from "./Project";
import html from "../../media/html.png";
import css from "../../media/css.png";
import node from "../../media/node.png";
import mui from "../../media/mui.png";
import express from "../../media/express.png";
import greeneastern from "../../images/greeneastern.png";
import microgreens from "../../images/microgreens.png";
import shopify from "../../media/shopify.png";
import figma from "../../media/figma.png";
import vanillajs from "../../media/vanillajs.png";

const Design = () => {
  const data = [
    {
      name: "Green Eastern Beauty",
      image: greeneastern,
      desc: "Authentic, Timeless, and True asian skincare. UX designer, marketing strategist, and content creator in advertising.",
      skills: [vanillajs, figma, shopify, html, css],
      url: "https://greeneastern.us/",
    },
    {
      name: "Woodstock Microgreens",
      image: microgreens,
      desc: "Freelance project for WS Microgreens; Locally grown organic microgreens. Was the team's UX Designer & Web Developer. ",
      skills: [vanillajs, figma, shopify, html, css],
      url: "https://woodstockmicrogreens.com/",
    },
  ];

  return (
    <div id="design">
      <div>
        <RevealTitle>
          <h2 className="mx-10 md:mx-20 text-2xl mr-80 w-2/6 text-left border-b border-white leading-4 mb-10 h-2">
            <span className="bg-night md:bg-moonlight pr-4">DESIGN</span>
          </h2>
        </RevealTitle>
        <div className="grid md:grid-cols-2 mx-3 md:mx-20 pb-20 gap-6">
          {data.map((post, key) => (
            <Project key={key} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
