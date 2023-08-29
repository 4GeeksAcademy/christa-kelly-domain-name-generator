const domainNames = [];

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const TLD = [".com", ".org"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let m = 0; m < TLD.length; m++) {
        domainNames.push(`${pronoun[i]}${adj[j]}${noun[k]}${TLD[m]}`);
      }
    }
  }
}

console.log(domainNames);