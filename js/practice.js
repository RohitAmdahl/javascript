//-----------------------------------------------------
const person = {
  firstName: "Ola",
  lastName: "Nordmann",
  country: "Norway",
};

const { firstName: other, lastName, country } = person;
console.log(other, lastName, country);

const Land = {
  fornavn: "India",
  religion: "Hindu",
  clothes: "Indian",
  address: {
    Salwar: "salvar",
    Dhoti: "Kurta",
    nameOfthePerson: "Ram ka nam",
    from: "Banaras",
    street: "25 jack on the hill",
  },
};

function landObjects({
  fornavn,
  religion,
  clothes,
  address: { Salwar, Dhoti, nameOfthePerson, street },
}) {
  console.log(Salwar, Dhoti, nameOfthePerson, street);
  console.log(fornavn, religion, clothes);
}
landObjects(Land);

//-----------------------------------------------------
const teams = [
  {
    teamsFootball: "bils",
    score: 5,
  },
  {
    teamsFootball: "bengals",
    score: 10,
  },
  {
    teamsFootball: "alenta",
    score: 8,
  },
  {
    teamsFootball: "arizona",
    score: 12,
  },
  {
    teamsFootball: "viking",
    score: 6,
  },
  {
    teamsFootball: "falcons",
    score: 4,
  },
];
console.log(teams);

const winner = teams.filter(({ score }) => {
  if (score >= 6) {
    console.log(score);
    return true;
  }
});

function createHtml() {
  const listOfScore = document.querySelector(".list");
  for (let i = 0; i < winner.length; i++) {
    const element = winner[i];
    listOfScore.innerHTML += `<ul>
                            <li>${element.score}</li>
                             </ul>`;
  }
}
createHtml();

//-----------------------------------------------------
const names = ["rohit", "chinu", "raja", "pizza"];

const [name0, name1, ...rest] = names;
console.log(name0, name1);
console.log(rest);
//-----------------------------------------------------
const user = new Map();
user.set("12", { firstName: "Ola", lastName: "Nordmann" });
// user.delete("12");//--deleting the whole map

user.set("50", { firstName: "Kari", lastName: "Nordmann" });
console.log(user.size);
console.log(user.get("12"));
console.log(user.get("50"));
const mySet = new Set();

console.log("from here is set ");

mySet.add(25);
mySet.add(5);
mySet.add(2);
mySet.add(15);

console.log(mySet.size); //-- 4
console.log(mySet.has("a"));
for (const item of mySet) {
  console.log(item);
  //---25,5,2,15
}

//..-------------------------practical 1 ---
class items {
  constructor(fruit1, fruit2) {}
  eatIng() {
    console.log(`i m eating ${this.fruit1} and ${this.fruit2}`);
  }
}

const newUser = new items("namgo", "pineapples");

newUser.eatIng();
//---------------------------practical 2--

// const value = [2, 5, 4, 10, 50, 100, 58, 65, 78, 84, 95, 63, 20, 15, 14, 54, 3];
const products = [
  {
    name: "Apple",
    itemsInStock: 10,
    price: 5.99,
  },
  {
    name: "Banana",
    itemsInStock: 5,
    price: 3.99,
  },
  {
    name: "Orange",
    itemsInStock: 2,
    price: 3.99,
  },
];
const addIng = products.reduce((totalNumber, cost) => {
  totalNumber += cost.price;
  return totalNumber;
}, 0);

console.log(addIng);

/*
Exercise 3: Turn an array of values into a set of object keys

Store a team's score in an object, using the team's name as the key. Only
store the score if they were a winner ('isWinner').

An array of teams ('teams') has been provided for it. Each item is an object
with the the teams's name ('name'), the team's score ('score') and if they
were a winner ('isWinner')

Tip: Set the initial value as an empty object {}

Tip: Use square brackets to set the teams name

Tip: Use 'toLowerCase()' when setting the team's key

*/
const players = [
  {
    name: "Hawks",
    score: 60,
    isWinner: true,
  },
  {
    name: "Dolphins",
    score: 50,
    isWinner: true,
  },
  {
    name: "Falcons",
    score: 90,
    isWinner: false,
  },
  {
    name: "Bears",
    score: 90,
    isWinner: false,
  },
];

const teamWinner = players.reduce((teams, { name, score, isWinner }) => {
  if (isWinner) {
    teams[name.toLowerCase()] = score;
  }
  return teams;
}, {});
console.log(teamWinner);

const card = [
  {
    id: 01,
    work: "cleaner",
    name: "john",
  },
  {
    id: 02,
    work: "designer",
    name: "olav",
  },
  {
    id: 03,
    work: "guard",
    name: "rita",
  },
];

const cardArray = card.map((value) => `I am ${value.name}`);
console.log(cardArray);

const newArray = cardArray.filter((person) => {
  if (person.work === "designer") {
    return true;
  }
});

console.log(newArray);

const people = [
  {
    firstName: "Ola",
    lastName: "Nordmann",
    score: 8,
    value: true,
  },
  {
    firstName: "Kari",
    lastName: "Nordmann",
    score: 9,
    value: true,
  },
  {
    firstName: "Joakim",
    lastName: "Nordmann",
    score: 4,
    value: false,
  },
];
console.log("object");

//
console.log("object");
const newPeople = people.reduce(
  (acc, { firstName, lastName, score, value }) => {
    console.log(acc, { firstName });
    if (value === true) {
      acc[firstName.toLowerCase()] = score;
    }
    return acc;
  },
  {}
);
console.log(newPeople);

//....

const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);
console.log(searchParameters);
