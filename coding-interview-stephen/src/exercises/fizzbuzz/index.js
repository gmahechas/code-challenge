// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
	for (let index = 1; index <= n; index++) {

		let message = '';

		let mod3 = index % 3;
		let mod5 = index % 5;
		let mod15 = index % 15;

		if(mod15 == 0) {
			message += 'fizzbuzz';
		} else if(mod3 == 0) {
			message += 'fizz';
		} else if(mod5 == 0) {
			message += 'buzz'
		} else {
			message = index
		}
		console.log(message)
	}
}

console.log(fizzBuzz(5))
module.exports = fizzBuzz;
