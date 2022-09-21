// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	let vowelsNum = 0;
	for (const letter of str.toLowerCase()) {
		if (['a','e', 'i', 'o', 'u'].includes(letter)) {
			vowelsNum++;
		}
	}
	return vowelsNum;
}

module.exports = vowels;
