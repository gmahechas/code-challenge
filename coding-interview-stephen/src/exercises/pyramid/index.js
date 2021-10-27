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
	const midPoint = Math.floor((2 * n - 1) / 2);
	for (let i = 0; i < n; i++) {
		let str = '';
		for (let j = 0; j < (2 * n - 1); j++) {
			if(midPoint - i <= j && midPoint + i >= j) {
				str += '#';
			} else{
				str += ' ';
			}
		}
		console.log(str);
	}
}
pyramid(2);

module.exports = pyramid;
