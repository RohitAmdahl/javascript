const students = [
  { name: "Kingsley", score: 70, position: true },
  { name: "Jack", score: 80, position: false },
  { name: "Joe", score: 63, position: false },
  { name: "Beth", score: 75, position: false },
  { name: "Kareem", score: 59, position: true },
  { name: "Sarah", score: 93, position: true },
];
// ctaReduce.addEventListener("click", (e) => {
//   const value = students.reduce((candidate, { name, score, position }) => {
//     if (position) {
//       candidate[name.toLowerCase()] = score;
//     }
//     return candidate;
//   }, {});
//   console.log(value);
// });

const team = students.reduce((current, isWinner) => {
  if (current.position) {
    isWinner[current.name.toLowerCase()] = isWinner.score;
  }
  return current;
});

console.log(team);
