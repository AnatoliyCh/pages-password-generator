const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = [...Array(10).keys()];
const specialSymbols = ["%", "*", "(", ")", "?", "@", "#", "$", "~"];

let isLowerCase = false;
let isUpperCase = false;
let isNumbers = false;
let isSpecialSymbols = false;

function change(name, event) {
  switch (name) {
    case "lowerCase":
      isLowerCase = !isLowerCase;
      break;
    case "upperCase":
      isUpperCase = !isUpperCase;
      break;
    case "numbers":
      isNumbers = !isNumbers;
      break;
    case "specialSymbols":
      isSpecialSymbols = !isSpecialSymbols;
      break;
    case "amount":
      changeAmount(event?.target ?? null);
      break;
  }
}

function changeAmount(input) {
  const defaultValue = 16;
  const regex = new RegExp(/^\d+$/);
  if (input.value !== undefined && !regex.test(input.value)) input.value = defaultValue;
}
