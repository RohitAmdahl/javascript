/**
 * array method practice with function
 */

const cards = [
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

//--buttons selection
const ctaReduce = document.querySelector(".reduce");
//--buttons selection

const students = [
  { name: "Kingsley", score: 70, position: true },
  { name: "Jack", score: 80, position: false },
  { name: "Joe", score: 63, position: false },
  { name: "Beth", score: 75, position: false },
  { name: "Kareem", score: 59, position: true },
  { name: "Sarah", score: 93, position: true },
];

ctaReduce.addEventListener("click", (e) => {
  const team = students
    .filter((student) => {
      if (student.position === true) {
      }
      return student.position;
    })

    .forEach((student) => {
      const reduce_1 = document.querySelector(".box");
      reduce_1.innerHTML += `<div class="cards">
                  <div class="box">
                    <p>${student.name}</p>
                    <p>${student.position}</p>
                  </div>
                </div>`;
    });
});

const buttons = document.querySelectorAll("#buttonContainer button");
//---------------------
buttons.forEach((button) => {
  button.addEventListener("click", filterCards);
});
//.......................

//--------------------------
function filterCards(event) {
  const { category } = event.target.dataset;

  const filteredCards = cards.filter((card) => {
    if (category === "all") {
      return true;
    }

    if (category === "design") {
      return card.isDesign;
    }
    console.log(card);

    return card.Design === category;
  });
  displayCards(filteredCards);
  console.log(filteredCards);
}

//.-----------------------------------

function displayCards(cards) {
  const box = document.querySelector(".box");

  box.innerHTML = "";

  cards.forEach((card) => {
    box.innerHTML += `<div class="cards">
                      <div class="box">
                        <img src="${card.img}" alt="" />
                        <p>${card.name}</p>
                      </div>
                    </div>`;
  });
}

displayCards(cards);
