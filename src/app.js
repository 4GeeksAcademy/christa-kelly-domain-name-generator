/*window.onload = function() {
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  const TLD = [".com", ".org"];

  const domainNames = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let m = 0; m < TLD.length; m++) {
          domainNames.push(`${pronoun[i]}${adj[j]}${noun[k]}${TLD[m]}`);
        }
      }
    }
  }
  document.getElementById("Names").innerHTML = domainNames;
};*/
import "./index.html";

let btn = document.getElementById("btn");
btn.onclick = function() {
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  const TLD = [".com", ".org"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let m = 0; m < TLD.length; m++) {
          const newDomains = document.createElement("p");
          newDomains.innerText = `${pronoun[i]}${adj[j]}${noun[k]}${TLD[m]}`;
          document.body.appendChild(newDomains);
        }
      }
    }
  }
};
