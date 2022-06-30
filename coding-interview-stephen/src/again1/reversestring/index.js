// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	return str.split('').reverse().join('')
}

function reverse2(str) {
	let newStr = '';
	for (const letter of str) {
		newStr = letter + newStr;
	}
	return newStr;
}

function reverse3(str) {
	return str.split('').reduce((pre, current) => current + pre, '');
}

console.log(reverse3('hello'));
module.exports = reverse;
