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
  return result;
}

export function nameEmojiPairsNestedLoop() {
  const result = [];
  return result;
}

export function sumOfAgesForLoop() {
  let total = 0;
  return total;
}

export function productUntilFiveWithBreak() {
  let product = 1;
  return product;
}

export function agesExceptThirteenWithContinue() {
  const result = [];
  return result;
}

export function namesReversedOrderWithFor() {
  const result = [];
  return result;
}

export function indexOfMaybeCityManualLoop() {
  let index = -1;
  return index;
}

export function firstPersonOver12ManualFind() {
  let found = null;
  return found;
}

export function emojiStringUsingForOf() {
  let text = "";
  return text;
}

export function multiplicationTableThreeByThree() {
  const table = [];
  return table;
}
