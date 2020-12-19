function binaryGap(number, binArr = []) {
  const mod = number % 2;
  const quotient = Math.floor(number/2);
  binArr.push(mod);
  if(quotient === 0) {
    return binArr.reverse();
  } else {
    return binaryGap(quotient, binArr);
  }
}

const result = binaryGap(9); // [1, 0, 0, 0, 0, 1, 0, 0, 0, 1]


function getGaps(binaryArray, gaps = []) {
  const firstZero = binaryArray.indexOf(0);
  if(firstZero === -1) {
    return gaps;
  }

  let newBinaryArray = binaryArray.slice(firstZero)

  const firstOne = newBinaryArray.indexOf(1);
  
  if (firstOne === -1) {
    // gaps.push(newBinaryArray.length) // if you want the last zero gap without 1 at the end
    return gaps;
  }
  gaps.push(firstOne);
  newBinaryArray = newBinaryArray.slice(firstOne);
  return getGaps(newBinaryArray, gaps)
}

const gaps = getGaps(result);

if(gaps.length > 0) {
  console.log(Math.max(...gaps));
} else {
  console.log(0);
}



/*
const gaps = [];
const myArr = [1,0,1,0,0];

const firstZero = myArr.indexOf(0); // 1
let newBinaryArray = myArr.slice(firstZero) //[0,1,0,0]
const firstOne = newBinaryArray.indexOf(1); // 1
gaps.push(firstOne) // [1]
newBinaryArray = newBinaryArray.slice(firstOne); // [1,0,0]



const firstZeroTwo = newBinaryArray.indexOf(0); // 1
console.log(firstZeroTwo);
newBinaryArray = newBinaryArray.slice(firstZeroTwo) // [0,0]
const firstOneTwo = newBinaryArray.indexOf(1); // 4
gaps.push(firstOneTwo)
newBinaryArray = newBinaryArray.slice(firstOneTwo);


const firstZeroThree = newBinaryArray.indexOf(0); // 1
newBinaryArray = newBinaryArray.slice(firstZeroThree); // [0,1]
const firstOneThree = newBinaryArray.indexOf(1); // -1
gaps.push(firstOneThree)
newBinaryArray = newBinaryArray.slice(firstOneThree);


const firstZeroFour = newBinaryArray.indexOf(0); // -1 */

/* if (firstZeroFour) {
  return array
} */

/* if (firstOneThree === -1) {
  console.log('Terminado');
  // return return array // or if you watn the last zero gap : gaps.push(newBinaryArray.length)
} */








