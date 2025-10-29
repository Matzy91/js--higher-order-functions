import { personArray, emojiArray } from "./data.js";

// här ska allt vara variabler vars värde är returnen från någon av de olika higher order functions
// med undantag för "getObjectFromArray" nederst som redan är en funktion

//personArray
export const namesOnly = personArray.map(p => p.name);
export const agesOnly = personArray.map(p => p.age);
export const withoutJim = personArray.filter(p => p.name !=="Jim");
export const combinedAge = personArray.reduce((sum, p) => sum + p.age, 0);
export const findJane = personArray.find(p => p.name === "Jane");

export const sortedByAgeFromYoungestToOldest = [...personArray].sort((a, b) => a.age - b.age);
export const namesByAgeFromOldestToYoungest = [...personArray]
  .sort((a, b) => b.age - a.age)
  .map(p => p.name);

export const everyoneOver12 = personArray.every(p => p.age > 12);
export const isAnyoneOver13 = personArray.some(p => p.age > 13);

export const indexOfMaybe = personArray.findIndex(p => p.city === "Maybe");
export const namesByLastLetter = personArray.map(p => p.name.slice(-1));

// /* ---------------------------------- */

// // emojiArray
export const arrayIncludesSquirel = emojiArray.includes("🐿️");
export const indexOfRocket = emojiArray.indexOf("🚀");

/* ---------------------------------- */

// ska skapa ett objekt innehållande objekten i personArray
const getObjectFromArray = () => {
  return personArray.reduce((acc, person) => {
    const key = person.name.toLowerCase();
    acc[key] = person;
    return acc;
  }, {});
};

// lämnas orörda. dessa två testar funktionaliteten
export const objectFromArray = getObjectFromArray();
export const janeFromPersonObject = objectFromArray.jane;
