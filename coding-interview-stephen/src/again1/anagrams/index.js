// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function countLetters(str) {
	let charMap = {};
	for (const letter of str.replace(/[^\w]/g, '').toLowerCase()) {
		if (charMap[letter]) {
			charMap[letter]++;
		} else {
			charMap[letter] = 1;
		}
	}
	return charMap;
}

function anagrams(stringA, stringB) {
	let first = countLetters(stringA);
	let second = countLetters(stringB);

	if(Object.keys(first).length !== Object.keys(second).length) {
		return false;
	}

	for (const char in first) {
		if(first[char] !== second[char]) {
			return false;
		}
	}

	return true;
}

console.log(anagrams('Hi there', 'Hi there'))
module.exports = anagrams;
