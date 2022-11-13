/**
 * array method practice with function
 */

const card = [
  {
    id: 1,
    name: "Wordpress",
    img: "/imgs/_wordpress.png",
    isDesign: true,
  },
  {
    id: 2,
    name: "Adobe XD",
    img: "/imgs/adobe-xd.png",
    isDesign: true,
  },
  {
    id: 3,
    name: "Archicad",
    img: "/imgs/archicad.png",
    isDesign: false,
    Design: "architectural",
  },
  {
    id: 4,
    name: "blender",
    img: "/imgs/blender.png",
    isDesign: true,
  },
  {
    id: 5,
    name: "Css",
    img: "/imgs/css.png",
    isDesign: true,
    Design: "code",
  },

  {
    id: 6,
    name: "Enscape",
    img: "/imgs/enscape.png",
    Design: "architectural",
    isDesign: false,
  },

  {
    id: 7,
    name: "Html",
    img: "/imgs/html.png",
    isDesign: false,
    isTechnical: "20",
    Design: "code",
  },
  {
    id: 8,
    name: "Adobe illustrator",
    img: "/imgs/illustrator.png",
    isDesign: true,
  },
  {
    id: 9,
    name: "Javascript",
    img: "/imgs/javascript.png",
    isDesign: false,
    Design: "code",
  },
  {
    id: 10,
    name: "Adobe Photo shop",
    img: "/imgs/photoshop.png",
    isDesign: true,
  },
  {
    id: 11,
    name: "Revit Architecture",
    img: "/imgs/revit.png",
    isDesign: false,
    Design: "architectural",
  },
  {
    id: 12,
    name: "BIM Solibri",
    img: "/imgs/solibri.png",
    isDesign: false,
    Design: "architectural",
  },
  {
    id: 13,
    name: "Twinmotion",
    img: "/imgs/twinmotion.png",
    isDesign: false,
    Design: "architectural",
  },
  {
    id: 14,
    name: "Visual studio code",
    img: "/imgs/vscode.png",
    isDesign: false,
    Design: "code",
  },
  {
    id: 15,
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
  { name: "Kingsley", score: 70, position: "6th" },
  { name: "Jack", score: 80, position: "2th" },
  { name: "Joe", score: 63, position: "5th" },
  { name: "Beth", score: 75, position: "8th" },
  { name: "Kareem", score: 59, position: "1th" },
  { name: "Sarah", score: 93, position: "2th" },
];

students.forEach((element, index) => {
  reduce_1.innerHTML += ` <div class="cards">
                      <div class="box">
                        <p>${element.name}</p>
                        <p>${element.score}</p>
                        <p>${element.position}</p>
                      </div>
                    </div>`;
});

ctaReduce.addEventListener("click", (e) => {
  const value = students.reduce((acc, { name, score, position }) => {
    if (name) {
      acc[name.toLowerCase()] = position;
    }
    return acc;
  }, {});
  console.log(value);
});
