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
  { name: "Kingsley", score: 70, position: "6th" },
  { name: "Jack", score: 80, position: "2th" },
  { name: "Joe", score: 63, position: "5th" },
  { name: "Beth", score: 75, position: "8th" },
  { name: "Kareem", score: 59, position: "1th" },
  { name: "Sarah", score: 93, position: "2th" },
];

ctaReduce.addEventListener("click", (e) => {
  const value = students.reduce((candidate, { score, name, position }) => {
    if (position) {
    }
    candidate[candidate.name] = score;
    return candidate;
  }, {});

  console.log(value);
});
