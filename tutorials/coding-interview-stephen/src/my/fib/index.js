// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/* function fib(n) {
	const result = []; // [0,1]
	for (let i = 0; i < n; i++) {
		if(result.length == 0 || result.length == 1) {
			result.push(i);
		} else {
			result.push(result[i - 1] + result[i - 2]);
		}
	}
	console.log(result);
} */

/* function fib(n, result = [0, 1]) {

	if (result.length == n) {
		return result;
	}

	debugger;
	result.push(result[result.length - 1] + result[result.length - 2]);
	return fib(n, result);
} */


function memoize(fn) {

	const cache = {};
	debugger;
	return function (...args) {
		debugger;
		if (cache[args]) {
			return cache[args];
		}

		const result = fn.apply(this, args);
		cache[args] = result;
		return result;
	}

}

function slowFib(n) {
	
	if(n<2) {
		return n;
	}
	
	return fib(n-1) + fib(n-2);
	
}

const fib = memoize(slowFib);

console.log(fib(4));

module.exports = fib;
