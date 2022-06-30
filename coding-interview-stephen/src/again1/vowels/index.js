// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	let vowels = 'aeiou';
	let count = 0;

	for (const letter of str.toLowerCase()) {
		if (vowels.includes(letter)) {
			count++
		}
	}
	return count;
}

function vowels2(str) {
	let matches = str.match(/[aeiou]/gi)
	return matches ? matches.length : 0;
}

console.log(vowels2('Why do you ask?'))
module.exports = vowels;
