// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) { // BigO: O(1)
 	return str.split('').reverse().join('');
}

/* function reverse(str) {
	let result = '';
	for (let letter of str) {
		result = letter + result;
		debugger;
	}
	return result;
} */

/* function reverse(str) {
	const result = str.split('').reduce((previous, current) => current + previous, '');
	return result;
} */

reverse('apple')
module.exports = reverse;
