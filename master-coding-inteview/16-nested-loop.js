
const boxes = [1, 2, 3, 4, 5];

function logPairs(array) {
	for (const pivot of array) {
		for (const number of array) {
			console.log(`${pivot}${number}`)
		}
	}
}

logPairs(boxes);

// O(n * n) Quadratic time
// O(n^2)