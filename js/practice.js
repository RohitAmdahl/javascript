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
  if (score >= 8) {
    console.log(score);
    return true;
  }

  function createHtml() {
    const listOfScore = document.querySelector(".list");
    listOfScore.innerHTML += `<ul>
                            <li>${score}</li>
                             </ul>`;
  }
  createHtml();
});

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
  constructor(fruit1, fruit2) {
    this.fruit1 = fruit1;
    this.fruit2 = fruit2;
  }
  eatIng() {
    console.log(`i m eating ${this.fruit1} and ${this.fruit2}`);
  }
}

const newUser = new items("namgo", "pineapples");

newUser.eatIng();
//---------------------------practical 2--
