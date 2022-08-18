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
	let retArr = [];

	/* 	for (let i = 0; i < array.length; i += size) {
			retArr.push(array.slice(i, size+i))
		} */

/* 	let index = 0;
	while (index < array.length) {
		retArr.push(array.slice(index, size + index));
		index += size;
	} */

/* 	while(array.length) {
		retArr.push(array.splice(0, size));
	} */

	return retArr;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))

module.exports = chunk;
