const sequences = [
	"1", "1",
	"0", "0",
	"1", "1",
	"0", "0", "0", "0", "0", "0", "0", "0",
	"1", "1", "1", "1",
	"0", "0",
	"1",
	"0",
	"1",
	"0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
	"1", "1",
	"0", "0", "0", "0", "0", "0", "0", "0",
	"1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
	"0", "0", "0", "0", "0", "0",
	"1", "1", "1", "1", "1", "1"
];


const simpleSolution = (sequences) => {
	let res = sequences.join('').split('1').sort();
	return res[res.length - 1];
}

//console.log(simpleSolution(sequences));

const perfSolution = (sequences) => {

	let count = [];
	let pivot = [];
	let maxSize = 0;
	let maxZeroArray = [];

	for (const number of sequences) {
		if (number === '0') {
			pivot.push(number);
		} else {
			if (pivot.length > maxSize) {
				maxSize = pivot.length;
				maxZeroArray = pivot;
			}
			count.push(pivot);
			pivot = [];
		}
	}

	return maxZeroArray;
}

const perfSolution2 = (sequences) => {
/*  
error bcz all zeros sequesces need one more 1
*/

	let count = [];
	let pivot = [];
	let maxSize = 0;
	let maxZeroArray = [];

	let newArray = sequences.reduce((prev, curr) => {
		if (prev == '0' && curr != '1') {
			pivot.push(curr);
		} else {
			count.push(pivot);
			pivot = [];
		}
		return curr;
	});


	return count;
}
console.log(perfSolution2(sequences));