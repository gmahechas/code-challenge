// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* function reverse(str) {
	return str.split('').reverse().join('');
} */

/* function reverse(str) {
	let newStr = '';
	for (const letter of str) {
		newStr = letter + newStr;
	}
	return newStr;
} */

function reverse(str) {
	return str.split('').reduce((acc, curr) => {
		return curr + acc
	}, '')
}

console.log(reverse('apple'))

module.exports = reverse;
