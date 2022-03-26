let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.innerText += countStr;
  console.log(count);
}

// let username = "per";
// let message = "You have three new notifications";
// let messageToUser = message + ", " + username + "!";

// console.log(messageToUser);

// let name = "Essilfie";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name;

// console.log(myGreeting);
