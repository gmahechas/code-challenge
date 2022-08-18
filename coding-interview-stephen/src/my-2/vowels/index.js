// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	const vowelsStr = 'aeiou';

	let count = 0;
	for (const letter of str) {
		if (vowelsStr.includes(letter)) {
			count++;
		}
	}
	console.log(count);
}

vowels('Why do you ask?')

module.exports = vowels;
