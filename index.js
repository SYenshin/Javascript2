const name = prompt("What is ypur name?");
const age = prompt("How old are you?");
const language = prompt("Type your favourite language");
const email = prompt("Type your Email");
console.log(
  `My name is ${name}. I'm ${age} years old. My favorite language is ${language}.`,
);
const isAdult = Number(age);
console.log(isAdult >= 18);
const language2 = language.toLowerCase();
console.log(language2.toLowerCase());
console.log(language2 === "javascript");
console.log(email.includes("@"));
const at = email.indexOf("@");
console.log(at);
console.log(email.slice(0, at));
