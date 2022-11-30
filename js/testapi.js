const card = document.querySelector(".row"); // card

const image = document.createElement("img"); // image
image.classList.add("d-flex", "img-thumbnail", "p-2", "mb-2", "mx-auto");

const newCard = document.createElement("div"); // card-body
newCard.className = "card-body";

const NameOfTittle = document.createElement("h5");
NameOfTittle.className = "card-title";
NameOfTittle.innerText = "hello word";
const subtitle = document.createElement("h6");
subtitle.innerText = "name of man";
subtitle.classList.add("card-subtitle", "mb-2", "text-muted");
const paraGraph_text = document.createElement("p");
paraGraph_text.className = "card-text";

paraGraph_text.innerText = "hello this is my text ";

const img = document.createElement("img");
// img.setAttribute("src");
img.classList.add("d-flex", "img-thumbnail", "p-2", "mb-2 ");
const span = document.createElement("span");
span.className = "numbers";
const button = document.createElement("button");
button.className = "cta_btn";
button.innerText = "comment";
console.log(button);

card.appendChild(image);
image.appendChild(newCard);
newCard.appendChild(NameOfTittle);
newCard.appendChild(subtitle);
newCard.appendChild(paraGraph_text);
newCard.appendChild(img);
newCard.appendChild(span);
newCard.appendChild(button);

// const row = document.querySelector("div.row");
// console.log(row);

// const mainDiv = document.createElement("div");
// console.log(mainDiv);
// const img = document.createElement("img");
// console.log(img);
// const div = document.createElement("div");
// console.log(div);
// div.className = "card-body";

// const title = document.createElement("h5");
// console.log(title);

// title.innerText = "hello";

// const title_text = document.createElement("h6");
// console.log(title_text);

// const pText = document.createElement("p");

// console.log(pText);

// const img_1 = document.createElement("img");
// console.log(img_1);

// mainDiv.classList.add("col-12", "col-lg-5", "col-md-12", "col-sm-12");
// div.className = "card";
// img.setAttribute("src", "postImg");

// title.className = "card-title";
// title_text.classList.add("card-subtitle", "mb-2", "text-muted");
// pText.className = "card-text";
// img_1.setAttribute("src", "post_img_img");
