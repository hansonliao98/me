import React from "react";
import { Reveal, Reveal2 } from "../utils/Reveal";
import { RevealBox, RevealTitle } from "../utils/RevealPort";
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
import redux from "../../media/redux.png";
import firebase from "../../media/firebase.png";
import youFree from "../../media/youFree.png";
import expenseproject from "../../media/expenseProject.png";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";
import Project from "./Project";

const data = [
  {
    name: "Pathetica: A social media app for losers!",
    image: pathetica,
    desc: "A place for pathetic lowlifes to congregate and sob. This Project was challenged me to keep lots of functional components interconnected. Here, application organization was key",
    skills: [mongodb, react, mui, express, node, redux],
    url: "https://youtu.be/XTOplixRqmE",
    github: "https://github.com/hansonliao98/pathetica",
    private: false,
  },
  {
    name: "SightExpend",
    image: expenseproject,
    desc: "An expense tracker for visual thinkers. I utilized firebase to quickly fetch user inputs and edits, while incorperating a interactive monthly total expense chart to visualize total costs",
    skills: [firebase, react, redux],
    url: "https://youtu.be/oc3GII3caY4",
    github: "https://github.com/hansonliao98/SightExpense",
    private: false,
  },
  {
    name: "YouFree: Youtube, without the Ads",
    image: youFree,
    desc: "Cause who's trying to wait for ads to finish these days?",
    skills: [react, mui],
    url: "https://youtu.be/JAfy0gAE0yU",
    github: "https://github.com/hansonliao98/youfree",
    private: false,
  },
  {
    name: "Quizlow: Too Broke To Quiz",
    image: quizlet,
    desc: "My friend was too poor to buy Quizlet. I made him one better",
    skills: [mongodb, react, mui, express, node, redux],
    url: "",
    github: "",
    private: true,
  },
];

const Partfolio = ({ loadVideoHandler }) => {
  return (
    <div id="portfolio">
      <RevealTitle>
        <h2 className="mx-10 md:mx-20 text-2xl mr-80 w-2/6 text-left border-b border-white leading-4 mb-10 h-2">
          <span className="bg-moonlight pr-4">WORK</span>
        </h2>
      </RevealTitle>
      <div className="grid md:grid-cols-2 mx-5 md:mx-20 pb-20 gap-6">
        {data.map((post, key) => (
          <Project
            key={key}
            post={post}
            loadVideoHandler={loadVideoHandler}
            className=""
          />
        ))}
      </div>
    </div>
  );
};

export default Partfolio;
