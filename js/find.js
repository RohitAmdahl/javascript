const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const student = values.find((element, index) => {
  if (element === 5) {
    return true;
  }
});
console.log(student);

const temperatures = [109.2, 115.2, 119.9, 120.8, 150.0, 175, 182];

const valueFound = temperatures.find((currentTemperature) => {
  if (currentTemperature >= 100) {
    return true;
  }
});

console.log(valueFound);

const users = [
  { name: "Kari", id: 19313 },
  { name: "Hans", id: 40202 },
  { name: "Joakim", id: 59230 },
  { name: "Inger", id: 14023 },
  { name: "Ellen", id: 76339 },
];

const people = users.find((element, { name }) => {
  if (element.name[0].toLowerCase() === "e") {
    return true;
  }
});
console.log(people);

// const modules = [
//   { name: "Introduction to Programming", isComplete: true },
//   { name: "HTML", isComplete: true },
//   { name: "CSS", isComplete: false },
//   { name: "JavaScript", isComplete: true },
// ];
const modules = [
  { name: "h", isComplete: true },
  { name: "2", isComplete: true },
  { name: "5", isComplete: false, type: "String " },
  { name: "2", isComplete: true },
];
modules.push({
  name: 5,
});
const course = modules.find((element, index) => {
  // console.log(element, index);
  if (element.name[0] === "5") {
    return true;
  }
});
console.log(course);