import { personArray, emojiArray } from "./data.js";

export function forLoopCountToFive() {
  const result = [];

  for (let i = 1; i <=5; i++){
    result.push(i);
  }
  return result;
}

export function whileEvenNumbersUpToTen() {
  // arrayen ska bara innehålla jämna tal
  const result = [];
  let evenCandidate = 0;

  while ( evenCandidate <= 10){
    if(evenCandidate % 2 === 0){
      result.push(evenCandidate)
    }
    evenCandidate++;
    }
  return result;
}

export function doWhileAtLeastOnce() {
  const result = [];
  let doIdx = 0;

  do{
    result.push(doIdx)
    doIdx++;
  }
  while (doIdx === 0 )
  return result;
}

export function getNamesFromPersonArrayUsingForOf() {
  const result = [];
  for (const names of personArray){
    result.push(names.name);
  }
  return result;
}

//for in... ger tillbaka keys
// en aray har inte keys, men index
//for of... ger tillbaka värden

export function getFirstPersonKeysUsingForIn() {
  const result = [];
  const personKey = personArray[1];

  for (const key in personKey){
    result.push(key)
  }
  return result;
}

export function nameEmojiPairsNestedLoop() {
  const result = [];

  for (let i = 0; i < personArray.length; i++ ){
      const personName = personArray[i].name;
    
      for(let j = 0; j < emojiArray.length; j++){
        const emj = emojiArray[j];
        result.push(`${personName}-${emj}`);
      }
    }
  return result;
}

export function sumOfAgesForLoop() {
  let total = 0;
    for (let i = 0; i < personArray.length; i++){
      total = total + personArray[i].age;
    }
  return total;
}

export function productUntilFiveWithBreak() {
  let product = 1;
  for (let i = 1; i <= 5; i++) {
    product *= i;

    if (product > 120){
      break;
    }
  }
  return product;
}

export function agesExceptThirteenWithContinue() {
  const result = [];
  for (let i = 0; i < personArray.length; i++) {
    if (personArray[i].age === 13) continue;
    result.push(personArray[i].age);
  }
  return result;
}

export function namesReversedOrderWithFor() {
  const result = [];
  for (let i = personArray.length - 1; i >= 0; i--) {
    result.push(personArray[i].name);
  }
  return result;
}

export function indexOfMaybeCityManualLoop() {
  let index = -1;
  for (let i = 0; i < personArray.length; i++) {
    if (personArray[i].city === "Maybe") {
      index = i;
      break;
    }
  }
  return index;
}

export function firstPersonOver12ManualFind() {
  let found = null;
  for (let i = 0; i < personArray.length; i++) {
    if (personArray[i].age > 12) {
      found = personArray[i];
      break;
    }
  }
  return found;
}


export function emojiStringUsingForOf() {
  let text = "";
  for (const emoji of emojiArray) {
    text += emoji;
  }
  return text;
}


export function multiplicationTableThreeByThree() {
  const table = [];
  for (let i = 1; i <= 3; i++) {
    const row = [];
    for (let j = 1; j <= 3; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
}

