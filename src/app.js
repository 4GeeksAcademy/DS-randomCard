/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function createCard() {
  const rankList = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const suits = ["spades", "hearts", "diamonds", "clubs"];

  const getRandomInt = array => {
    return Math.floor(Math.random() * array.length);
  };

  let card = document.querySelector(".card");
  let rank = document.querySelector(".rank");

  card.classList.add(suits[getRandomInt(suits)]);
  rank.innerHTML = rankList[getRandomInt(rankList)];
};
