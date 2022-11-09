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
    score: 2,
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
