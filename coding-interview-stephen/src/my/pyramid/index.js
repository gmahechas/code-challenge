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

/* function pyramid(n) {
	let columns = (n * 2) - 1;
	let midPoint = Math.floor(columns /2);

	for (let row = 0; row < n; row++) {
		let stair = '';
		for (let column = 0; column < columns; column++) {
			if (midPoint-row <= column && midPoint+row >= column) {
				stair += '#';
			} else {
				stair += ' ';
			}
		}
		console.log(stair);
	}
} */

function pyramid(n, row = 0, level = '') {
	if (row == n) {
		return;
	}
	let columns = (n * 2) - 1;

	if(level.length == columns) {
		console.log(level);
		return pyramid(n, row+1)
	}

	let midPoint = Math.floor(columns / 2);	
	let add = '';
	if( midPoint - row <= level.length && midPoint + row >= level.length) {
		add += '#';
	} else {
		add += ' ';
	}
	pyramid(n, row, level + add);
}

pyramid(4)

module.exports = pyramid;
