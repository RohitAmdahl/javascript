const heading = document.querySelector("h1");
heading.style.color = " rgb(4, 116, 98)";
heading.style.textAlign = "center";
heading.style.fontSize = "5em";
heading.style.fontWeight = "bold";
heading.className = "javascript";
console.log(heading);

/**
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

/**
 * this is variables that i have made with queryselector and getelementbyID
 * those variable belongs to localstorage functions
 */
const inPKey = document.getElementById("inputkey");
const outKey = document.getElementById("inputvalue");
const ctalocaLstorage = document.getElementById("cta-localstorage");
const Isoutput = document.querySelector(".displayValue");
const clearBtn = document.getElementById("cta-localstorage_2");
const getBtn = document.getElementById("cta-localstorage_3");

/**
 * button onclick function
 * function onclick use this code for localstorage to get render in browser
 * function get the prints the value as you save it to localstorage
 * here i have use localstorage setItem("key", value)
 */
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
  Isoutput.innerHTML += `${key} : ${value} <br/>`;
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
localStorage.setItem("animal", dog); //.. set item from

const petRetrieved = localStorage.getItem("animal");
console.log(petRetrieved);

const newDog = JSON.parse(petRetrieved); // json.parse
console.log(newDog);
console.log(newDog.name);
console.log(newDog.type);
console.log(newDog.age);
console.log(newDog.breed);

const names = [
  { firstName: "Ola", lastName: "Nordmann" },
  { firstName: "John", lastName: "Doe" },
  { firstName: "Mario", lastName: "Rossi" },
  { firstName: "Jan", lastName: "Jansen" },
];

// Returns:
// [ "Ola Nordmann", "John Doe", "Mario Rossi", "Jan Jansen" ]
const combinedNames = names.map((person, index) => {
  console.log(person, index);
  return ` hello you Boy ${person.firstName} ${person.lastName} are you good?`;
});
console.log(combinedNames);

const values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 50];
// const count = values.push("cows");
// console.log(count);
console.log(values);
const numberArray = values.reduce((total, currentNumber) => {
  console.log(total, currentNumber);
  total += currentNumber;
  return total;
}, 0);
console.log(numberArray);

const filterValue = values.filter((value) => {
  if (value <= 40) {
    return value;
  }
});
console.log(filterValue);
