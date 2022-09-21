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
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
	let cN = (n * 2) -1;
	let midPoint = Math.floor(cN/2);

	for (let row = 0; row < n; row++) {
		let stair = '';
		for (let column = 0; column < cN; column++) {
			if (midPoint - row <= column && midPoint + row >= column) {
				stair += '#';
			} else {
				stair += ' ';
			}
		}
		console.log(stair);
	}
}

pyramid(3)

module.exports = pyramid;
