// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

	let iterator = (array.length / size);
	let mod = iterator % 1 != 0;
	let newsize = mod ? parseInt(iterator) + 1 : iterator;

	debugger;
	let newArray = [];

	for (let i = 1; i <= newsize; i++) {
		newArray.push(array.splice(0, size))
	}
	return newArray;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 1))
module.exports = chunk;
