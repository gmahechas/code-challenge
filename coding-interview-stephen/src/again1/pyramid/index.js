// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

	let columns = 2 * n - 1;
	let midPoint = Math.floor(columns / 2);

	for (let i = 0; i < n; i++) {
		let str = '';
		for (let j = 0; j < columns; j++) {
			debugger
			if(midPoint-i <= j && midPoint+i >= j) {
				str += '#';
			} else {
				str += ' ';
			}
		}
		console.log(str)
	}
}

pyramid(3)
module.exports = pyramid;
