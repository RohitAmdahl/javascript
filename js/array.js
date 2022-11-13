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
    name: "AUtocad",
    img: "/imgs/autocad.png",
    isDesign: false,
    Design: "architectural",
  },
];

const box = document.querySelector(".box");

//--buttons selection
const buttonAll = document.querySelector(".all");
const ctaArchitecture = document.querySelector(".archi");
const ctaDesignIng = document.querySelector(".design");
const ctaCoding = document.querySelector(".coding");
//--buttons selection

function showResult() {}
showResult();
buttonAll.addEventListener("click", () => {
  card.forEach((cardsItems) => {
    box.innerHTML += ` <div class="cards">
                      <div class="box">
                        <img src="${cardsItems.img}" alt="" />
                        <p>${cardsItems.name}</p>
                        <p> ${cardsItems.id}</p>
                      </div>
                    </div>`;
  });
});

ctaArchitecture.addEventListener("click", (e) => {
  card.filter((element) => {
    if (element.Design === "architectural") {
      box.innerHTML += ` <div class="cards">
                      <div class="box">
                        <img src="${element.img}" alt="" />
                        <p>${element.name}</p>
                        <p> ${element.id}</p>
                      </div>
                    </div>`;
    }
    return true;
  });
});
