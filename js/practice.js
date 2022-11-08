const person = {
  firstName: "Ola",
  lastName: "Nordmann",
  country: "Norway",
};

const { firstName: other, lastName, country } = person;
console.log(other, lastName, country);

const Land = {
  fornavn: "India",
  religion: "Hindu",
  clothes: "Indian",
  address: {
    Salwar: "salvar",
    Dhoti: "Kurta",
    nameOfthePerson: "Ram ka nam",
    from: "Banaras",
    street: "25 jack on the hill",
  },
};

function landObjects({
  fornavn,
  religion,
  clothes,
  address: { Salwar, Dhoti, nameOfthePerson, street },
}) {
  console.log(Salwar, Dhoti, nameOfthePerson, street);
  console.log(fornavn, religion, clothes);
}
landObjects(Land);
