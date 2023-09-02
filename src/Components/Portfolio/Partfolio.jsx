import React from "react";
import { RevealTitle } from "../utils/RevealPort";
import pathetica from "../../media/pathetica.png";
import quizlet from "../../media/quizlet.jpeg";

import mongodb from "../../media/mongodb.png";

import react from "../../media/react.png";
import node from "../../media/node.png";
import mui from "../../media/mui.png";
import express from "../../media/express.png";
import redux from "../../media/redux.png";
import bootstrap from "../../media/bootstrap.png";
import firebase from "../../media/firebase.png";
import mysql from "../../media/mysql.png";
import youFree from "../../media/youFree.png";
import expenseproject from "../../media/expenseProject.png";

import "./style.css";
import Project from "./Project";

const data = [
  {
    name: "Pathetica: A social app",
    image: pathetica,
    desc: "A place where the quiet ones congregate and find each other! It's a MERN stack with login authentication, HTTP, responsive design, image uploading. Add, comment, & like posts.",
    skills: [mongodb, react, mui, express, node, redux],
    url: "https://youtu.be/XTOplixRqmE",
    github: "https://github.com/hansonliao98/pathetica",
    private: false,
  },
  {
    name: "SightExpend",
    image: expenseproject,
    desc: "An expense tracker for visual thinkers. Utilizes firebase for backend data collection. Incorperates an interactive total expense chart to visualize total costs between months.",
    skills: [firebase, react, redux],
    url: "https://youtu.be/oc3GII3caY4",
    github: "https://github.com/hansonliao98/SightExpense",
    private: false,
  },
  {
    name: "YouFree: Youtube without the Ads",
    image: youFree,
    desc: "Who's trying to wait for ads to finish these days? Includes a restAPI, search function, customized topics, & a channel detail page. ",
    skills: [react, mui],
    url: "https://youtu.be/JAfy0gAE0yU",
    github: "https://github.com/hansonliao98/youfree",
    private: false,
  },
  {
    name: "Quizlow: Too Broke To Quiz",
    image: quizlet,
    desc: "My friend was too poor to buy Quizlet, so I made him one better. Emphasis on user experience. Designed on Figma with user journeys.",
    skills: [mysql, react, bootstrap, node, redux],
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
      <div className="grid md:grid-cols-2 mx-3 md:mx-20 pb-20 gap-6">
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
