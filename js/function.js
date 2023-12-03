// export const add = function () {};

// export default function add() {}

// const add = () => {};

function add(arg, b, c = 0) {
  const a = arg * b - c;

  return console.log(a);
}

console.log(add(2, 7));

//Стек викликів

function FnA() {
  console.log("Виконується функція FnA");
}

function FnB() {
  console.log("Виконується функція FnB");
}

function FnC() {
  console.log("Виконується функція FnC");
}
console.log("Лог перед А");
FnA();

console.log("Лог після А");
console.log("Лог перед В");
FnB();

console.log("Лог після В");
console.log("Лог перед С");
FnC();

console.log("Лог після С");

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

function calculateTotalPrice(arr) {
  let result = 0;
  for (const num of arr) {
    result += num;
  }
  return result;
}

console.log(`Загальна сума = ${calculateTotalPrice(cart)}`);

function changeCase(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      res += str[i].toLowerCase();
    } else {
      res += str[i].toUpperCase();
    }
  }

  return res;
}
console.log(changeCase("JavaScript"));

function changeCase2(str) {
  const letters = str.split("");
  let res = "";
  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();
    res += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
  }
  return res;
}

console.log(changeCase2("JavaScript"));

function slugify(str) {
  return str.toLowerCase().split(" ").join("-");
}

console.log(slugify("Top 10 benefits of React framework"));

function fnA() {
  console.log(arguments);
  const args = Array.from(arguments);
  console.log(args);
}
fnA(1, 2, 3);

// const fnB = () => {
//   console.log(arguments);
// };

// fnB(1, 2, 3);

let clients = ["сергій", "олег", "віталій", "анатолій"];

function greet(name) {
  if (clients.includes(name)) {
    alert(`${name}, ми раді, що ви повернулись!`);
  } else {
    const ans = confirm("Вітаємо, бажаєте стати нашим клієнтом?");
    if (ans) {
      clients.push(name);
      alert(`${name}, ми раді що ви з нами!`);
    } else {
      alert("Шкода, ми всеодно будемо на вас чекати");
    }
  }
}

const user = prompt("Введіть ваше ім'я").toLowerCase();

greet(user);
