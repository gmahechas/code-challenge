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
	let result = [0, 1];
	for (let index = 2; index <= n; index++) {
		const a = result[index-2];
		const b = result[index-1];
		result.push(a+b);
	}
	return result[n];
} */

function fib(n) {
	if (n < 2) {
		return n;
	}

	return fib(n - 1) + fib(n - 2);
}

console.log(fib(4))
module.exports = fib;
