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

^ [\w] + $


      Div_container.appendChild(background);
      background.appendChild(item_center);
      item_center.appendChild(profile_img);
      item_center.appendChild(profile_name);
      item_center.appendChild(email);
      item_center.appendChild(background_light);
      background_light.appendChild(ul);
      ul.appendChild(list);
      ul.appendChild(number);
      ul.appendChild(posts);
      ul.appendChild(list_sec);
      ul.appendChild(number_sec);
      ul.appendChild(followers);
      ul.appendChild(list_three);
      ul.appendChild(number_three);
      ul.appendChild(following);
ul.appendChild(follow);

      background.classlist.add(
        "bg-white",
        "shadow",
        "rounded",
        "overflow-hidden"
      );
      cover.classlist.add("px-4", "pt-0", "pb-4", "cover");
      item_center.classlist.add("align-items-center");
      profile_img.classlist.add("rounded", "mb-2", "img-thumbnail");
      profile_name.classlist.add("h4");
      email.classlist.add("p");
      background_light.classlist.add(
        "bg-light",
        "p-4",
        "d-flex",
        "justify-content-end",
        "text-center"
      );
      ul.classlist.add("list-inline", "mb-0");
      list.classlist.add("list-inline-item");
      number.classlist.add("font-weight-bold", "mb-0", "d-block");
      posts.classlist.add("text-muted");
      list_sec.classlist.add("list-inline-item");
      number_sec.classlist.add("font-weight-bold", "mb-0", "d-block");
      followers.classlist.add("text-muted");
      list_three.classlist.add("list-inline-item");
      number_three.classlist.add("font-weight-bold", "mb-0", "d-block");
      following.classlist.add("text-muted");
follow.classlist.add("button");



      // Div_container.appendChild(background);
      // background.appendChild(item_center);
      // item_center.appendChild(profile_img);
      // item_center.appendChild(profile_name);
      // item_center.appendChild(email);
      // item_center.appendChild(background_light);