import React from "react";
import { RevealTitle } from "../utils/RevealPort";
import Project from "./Project";
import pathetica from "../../media/pathetica.png";
import quizlet from "../../media/quizlet.jpeg";
import javascript from "../../media/javascript.png";
import mongodb from "../../media/mongodb.png";
import html from "../../media/html.png";
import css from "../../media/css.png";
import react from "../../media/react.png";
import node from "../../media/node.png";
import mui from "../../media/mui.png";
import express from "../../media/express.png";
import greeneastern from "../../images/greeneastern.png";
import microgreens from "../../images/microgreens.png";
import redux from "../../media/redux.png";
import firebase from "../../media/firebase.png";
import shopify from "../../media/shopify.png";
import figma from "../../media/figma.png";
import youFree from "../../media/youFree.png";
import expenseproject from "../../media/expenseProject.png";

const Design = () => {
  const data = [
    {
      name: "Green Eastern Beauty",
      image: greeneastern,
      desc: "UX designer, marketing Strategist. Authentic, Timeless, and True skincare. ",
      skills: [figma, shopify, mui, express, node],
      url: "https://greeneastern.us/",
    },
    {
      name: "Woodstock Microgreens",
      image: microgreens,
      desc: "UX Designer, Web Development. Locally grown organic microgreens.",
      skills: [figma, shopify, html, css],
      url: "https://woodstockmicrogreens.com/",
    },
  ];

  return (
    <div id="design">
      <div>
        <RevealTitle>
          <h2 className="mx-10 md:mx-20 text-2xl mr-80 w-2/6 text-left border-b border-white leading-4 mb-10 h-2">
            <span className="bg-night pr-4">DESIGN</span>
          </h2>
        </RevealTitle>
        <div className="grid md:grid-cols-2 mx-5 md:mx-20 pb-20 gap-6">
          {data.map((post, key) => (
            <Project key={key} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
