/**
 * array method practice with function
 */

const card = [
  {
    name: "Wordpress",
    img: "/imgs/_wordpress.png",
    isDesign: true,
  },
  {
    name: "Adobe XD",
    img: "/imgs/adobe-xd.png",
    isDesign: true,
  },
  {
    name: "Archicad",
    img: "/imgs/archicad.png",
    isDesign: false,
    Design: "architectural",
  },
  {
    name: "blender",
    img: "/imgs/blender.png",
    isDesign: true,
  },
  {
    name: "Css",
    img: "/imgs/css.png",
    isDesign: true,
    Design: "code",
  },

  {
    name: "Enscape",
    img: "/imgs/enscape.png",
    Design: "architectural",
    isDesign: false,
  },

  {
    name: "Html",
    img: "/imgs/html.png",
    isDesign: false,
    isTechnical: "20",
    Design: "code",
  },
  {
    name: "Adobe illustrator",
    img: "/imgs/illustrator.png",
    isDesign: true,
  },
  {
    name: "Javascript",
    img: "/imgs/javascript.png",
    isDesign: false,
    Design: "code",
  },
  {
    name: "Adobe Photo shop",
    img: "/imgs/photoshop.png",
    isDesign: true,
  },
  {
    name: "Revit Architecture",
    img: "/imgs/revit.png",
    isDesign: false,
    Design: "architectural",
  },
  {
    name: "BIM Solibri",
    img: "/imgs/solibri.png",
    isDesign: false,
    Design: "architectural",
  },
  {
    name: "Twinmotion",
    img: "/imgs/twinmotion.png",
    isDesign: false,
    Design: "architectural",
  },
  {
    name: "Visual studio code",
    img: "/imgs/vscode.png",
    isDesign: false,
    Design: "code",
  },
  {
    name: "Autocad",
    img: "/imgs/autocad.png",
    isDesign: false,
    Design: "architectural",
  },
];

const box = document.querySelector(".box");
const reduce_1 = document.querySelector(".reduce_1");
const map_1 = document.querySelector(".map_1");

//--buttons selection
const buttonAll = document.querySelector(".all");
const ctaArchitecture = document.querySelector(".archi");
const ctaDesignIng = document.querySelector(".design");
const ctaCoding = document.querySelector(".coding");
const ctaReduce = document.querySelector(".reduce");
const ctaMap = document.querySelector(".map");
//--buttons selection

function showResult() {}
showResult();
buttonAll.addEventListener("click", () => {
  box.innerHTML = "";
  card.forEach((cardsItems) => {
    box.innerHTML += ` <div class="cards">
                      <div class="box">
                        <img src="${cardsItems.img}" alt="" />
                        <p>${cardsItems.name}</p>
                      </div>
                    </div>`;
  });
});

ctaArchitecture.addEventListener("click", (e) => {
  box.innerHTML = "";
  e.preventDefault();
  card.filter((element) => {
    if (element.Design === "architectural") {
      box.innerHTML += ` <div class="cards">
                      <div class="box">
                        <img src="${element.img}" alt="" />
                        <p>${element.name}</p>
                      </div>
                    </div>`;
    }
  });
});

ctaDesignIng.addEventListener("click", (e) => {
  box.innerHTML = "";
  e.preventDefault();
  card.filter((element) => {
    if (element.isDesign === true) {
      box.innerHTML += ` <div class="cards">
                      <div class="box">
                        <img src="${element.img}" alt="" />
                        <p>${element.name}</p>
                      </div>
                    </div>`;
    }
  });
});

ctaCoding.addEventListener("click", (e) => {
  box.innerHTML = "";
  e.preventDefault();
  card.filter((element) => {
    if (element.Design === "code") {
      box.innerHTML += ` <div class="cards">
                      <div class="box">
                        <img src="${element.img}" alt="" />
                        <p>${element.name}</p>
                      </div>
                    </div>`;
    }
  });
});

const students = [
  { name: "Kingsley", score: 70, position: true },
  { name: "Jack", score: 80, position: false },
  { name: "Joe", score: 63, position: true },
  { name: "Beth", score: 75, position: false },
  { name: "Kareem", score: 59, position: true },
  { name: "Sarah", score: 93, position: true },
];
ctaReduce.addEventListener("click", (e) => {
  const value = students.reduce((candidate, { name, score, position }) => {
    if (position) {
      candidate[name.toLowerCase()] = score;
    }
    return candidate;
  }, {});
  students.forEach((candidate) => {
    reduce_1.innerHTML += `
                    <div class="wrapper">
                      <div class="cards">
                       <div class="box">
                        <p>${candidate.name}</p>
                        <p>${candidate.score}</p>
                       </div>
                      </div>
                    </div>`;
  });
  console.log(value);
});

// const team = students.reduce((currentValue, isWinner) => {
//   if (currentValue.position) {
//     currentValue[isWinner.name.toLowerCase()] = isWinner.score;
//   }
//   return currentValue;
// }, {});

// console.log(team);
/*
Exercise 3: Turn an array of values into a set of object keys

Store a team's score in an object, using the team's name as the key. Only
store the score if they were a winner ('isWinner').

An array of teams ('teams') has been provided for it. Each item is an object
with the the team's name ('name'), the team's score ('score') and if they
were a winner ('isWinner')

Tip: Set the initial value as an empty object {}

Tip: Use square brackets to set the teams name

Tip: Use 'toLowerCase()' when setting the team's key

*/
