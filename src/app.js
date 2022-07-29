/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  domainName();
};
let pronoun = ["the", "our"];
let adj = ["excellent", "good", "bad", "big"];
let noun = ["jogger", "racoon", "fox", "bear", "elk", "buddy"];
let ext = [".com", ".net", ".us", ".io", ".ru", ".it"];

function domainName() {
  let names = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let d = 0; d < noun.length; d++) {
        for (let b = 0; b < ext.length; b++) {
          names.push(pronoun[i] + adj[j] + noun[d] + ext[b]);
        }
      }
    }
  }
  document.querySelector("#domain").innerHTML = names;
}
console.log("");
