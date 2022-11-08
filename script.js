const heading = document.querySelector("h1");
heading.style.color = " rgb(4, 116, 98)";
heading.style.textAlign = "center";
heading.style.fontSize = "5em";
heading.style.fontWeight = "bold";
heading.className = "javascript";
console.log(heading);

/**
 *
 * this function will add two numbers
 * this will add for example 2 + 2 = 4
 * addNumber a and b
 * @param {number} a this is 5 number
 * @param {number} b this is a number 8 from the variable
 * @return {number}  calculating the both numbers
 * @example
 * ```js
 * // use this function for adding 2 numbers
 *const value = addNumbers(5,8);
 * // returning sum of the number
 * // 13
 * ```
 *
 */

function addNumbers(a, b) {
  const result = a + b;
  return result;
}

const value = addNumbers(5, 8);
console.log(value);

/**
 * this function is  calculate commission of percentage
 * @param {number} percentageAmount * (15 / 100);
 * @returns {number} the number of percentage out of 100
 * @example
 * ```js
 * // use this function for the percentage of the amount
 * // for example salary or percentage of the price
 * // returns a amount of percentage
 * percentageAmount * (15 / 100);
 * ```
 */

function calculateCommission(percentageAmount) {
  const commission = percentageAmount * (15 / 100);
  return commission;
}

const commission = calculateCommission(100);
console.log(commission);
calculateCommission();

//.. object to json .stringify and then parse

const colorOFcars = {
  Toyota: "red ",
  Ford: "green",
  Audi: "black",
  mercedesBenz: "yellow",
  CostOver: 2500000,
};

console.log(colorOFcars);
const cars = JSON.stringify(colorOFcars); //.. json stringify
console.log(cars);

const carsWithParse = JSON.parse(cars); // parse the stringify object into parse like u see in the example
console.log(carsWithParse);

//---

// const data = localStorage.setItem("name", "rohit");
// console.log(data);
// const get = localStorage.getItem("name");
// console.log(get);

//--

const inPKey = document.getElementById("inputkey");
const outKey = document.getElementById("inputvalue");
const ctalocaLstorage = document.getElementById("cta-localstorage");
const Isoutput = document.querySelector(".displayValue");
// const getOuput = document.querySelector(".getValue");
const clearBtn = document.getElementById("cta-localstorage_2");
const getBtn = document.getElementById("cta-localstorage_3");

ctalocaLstorage.onclick = function () {
  const key = inPKey.value;
  const value = outKey.value;
  if (key && value) {
    localStorage.setItem(key, value);
    location.reload(true);
  }
};

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  Isoutput.innerHTML += `${key}: ${value} <br/>`;
}

clearBtn.onclick = function () {
  localStorage.clear();
  Isoutput.innerHTML = " ";
};

//.. storing an object
const pet = {
  type: "dog",
  name: "brono",
  age: 2,
  breed: "chivava",
};

const dog = JSON.stringify(pet); //... first json stringify
//localStorage.setItem("dog", dog); //.. set item from
const petRetrived = localStorage.getItem("petRetrived");
console.log(petRetrived);

const newDog = JSON.parse(petRetrived);
