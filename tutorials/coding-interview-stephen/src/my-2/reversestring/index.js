// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	/* return str.split('').reverse().join(''); */
	/* return str.split('').reduce((prev, curr) => curr+prev); */

	let newStr = '';
/* 	for (let i = str.length - 1; i >= 0; i--) { // O(n)
		newStr += str[i];
	} */

	for (const letter of str) {
		newStr = letter + newStr;
	}
	return newStr;
}

const reult = reverse("hello")
console.log(reult)

module.exports = reverse;
