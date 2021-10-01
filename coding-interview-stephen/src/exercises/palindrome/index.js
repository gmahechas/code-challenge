// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* function palindrome(str) { // also we can use reversestring exercise
	const reverseStr = str.split('').reverse().join('');
	return reverseStr == str
} */

function palindrome(str) {
	return str.split('').every((element, index, array) => {
		let newIndex = str.length - index - 1;
		return element === array[newIndex];
	})
}

console.log(palindrome('aba'))
module.exports = palindrome;
