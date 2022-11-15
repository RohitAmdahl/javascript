const students = [
  { name: "Kingsley", score: 70, position: true },
  { name: "Jack", score: 80, position: false },
  { name: "Joe", score: 63, position: false },
  { name: "Beth", score: 75, position: false },
  { name: "Kareem", score: 59, position: true },
  { name: "Sarah", score: 93, position: true },
];

const team = students.reduce((acc, isWinner) => {
  if (acc.position) {
    isWinner[acc.name.toLowerCase()] = isWinner.score;
  }
  return acc;
});

console.log(team);
