/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let most = 0;

  for (const sentence of sentences) {
    const words = sentence.split(" ");

    if (words.length > most) most = words.length
  }

  return most;
};

const sentences = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];

const res = mostWordsFound(sentences);
console.log(res);
