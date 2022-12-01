// row_1.classList.add("card", "m-5", "p-5");

// singlePost.classList.add("card", "m-5", "p-5");

// PosTImg.classList.add("d-flex", "img-thumbnail", "p-2", "mb-2", "mx-auto");

// cardBody.className = "card-body";

// title.classList.add("mb-2", "p-5", "m-5", "card-title");

// date.classList.add("card-subtitle", "mb-2", "p-2", "text-muted");

// headline.classList.add("card-subtitle", "mb-2", "p-2", "text-muted");

// formDiv.classList.add("form-control");

// input.classList.add("form-control");

// buttonComment.classList.add("cta_btn");

//
const row_1 = document.querySelector(".row_1");
console.log(row_1);

const singlePost = document.createElement("div");
const PosTImg = document.createElement("img"); // default img
const cardBody = document.createElement("div");
const date = document.createElement("h5"); //title
const headline = document.createElement("h6"); // body
const Div = document.createElement("div");
const formDiv = document.createElement("form");
const input = document.createElement("textarea");
const buttonComment = document.createElement("button");
buttonComment.setAttribute("id", "commentTo_post");
const Comment_one = document.createElement("span");
//
row_1.appendChild(singlePost);
singlePost.appendChild(PosTImg); //div

PosTImg.appendChild(cardBody);
cardBody.appendChild(date);
cardBody.appendChild(headline);
headline.appendChild(Div);

Div.appendChild(formDiv);
formDiv.appendChild(input);
formDiv.appendChild(buttonComment);
buttonComment.appendChild(Comment_one);

cardModel.appendChild(cardWrapper);
cardWrapper.appendChild(cardItem);
cardItem.appendChild(NameOfTittle);
cardItem.appendChild(subtitle);
cardItem.appendChild(paraGraph_text);
cardItem.appendChild(img);
cardItem.appendChild(span);

^[\w]+$
